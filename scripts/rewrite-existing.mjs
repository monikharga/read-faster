import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const POSTS_DIR = join(process.cwd(), 'src', 'content', 'news');
const AI_API_KEY = process.env.AI_API_KEY || '';
const AI_MODEL = process.env.AI_MODEL || 'gemini-2.0-flash';
const DELAY_MS = 5000;

if (!AI_API_KEY) {
  console.error('AI_API_KEY not set. Add it as a GitHub secret or env var.');
  process.exit(1);
}

function cleanText(html) {
  return (html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function toParagraphs(text) {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const groups = [];
  for (let i = 0; i < sentences.length; i += 3) groups.push(sentences.slice(i, i + 3).join(' '));
  return groups.join('\n\n');
}

function field(body, key) {
  const m = body.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!m) return undefined;
  const v = m[1].trim();
  try {
    return JSON.parse(v);
  } catch {
    return v;
  }
}

async function rewriteWithAI(title, summary, attempt = 1) {
  const prompt = [
    'Rewrite the tech news article below as an ORIGINAL short article for "Read Faster", a website that publishes concise daily tech summaries.',
    'Write it entirely in your own words. Do NOT copy or paraphrase any sentence verbatim from the source.',
    'Keep it factual, concrete and topic-focused so it can rank in Google for the topic.',
    'Return ONLY valid JSON with exactly these keys:',
    '- "title": a NEW search-friendly headline, max 10 words, DIFFERENT from the original title',
    '- "description": a click-worthy meta description, max 20 words',
    '- "summary": the full article as 150-200 words of continuous prose, no line breaks',
    '- "tags": an array of 2-3 short lowercase keywords like ["ai","apple"]',
    '',
    `Original title: ${title}`,
    'Original article:',
    summary,
  ].join('\n');

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${AI_MODEL}:generateContent?key=${AI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.8, maxOutputTokens: 900 },
      }),
    }
  );

  if (res.status === 429 || res.status === 500 || res.status === 503) {
    if (attempt < 5) {
      const wait = 10000 * attempt;
      console.log(`Rate limited (${res.status}), retrying in ${wait / 1000}s...`);
      await new Promise((r) => setTimeout(r, wait));
      return rewriteWithAI(title, summary, attempt + 1);
    }
  }

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`AI API ${res.status}: ${errText.slice(0, 200)}`);
  }
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  const cleaned = text.replace(/```json|```/g, '').trim();
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('AI returned no JSON');
  const parsed = JSON.parse(cleaned.slice(start, end + 1));
  if (!parsed.title || !parsed.description || !parsed.summary) throw new Error('AI JSON missing fields');
  return parsed;
}

async function main() {
  const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith('.md'));
  console.log(`Rewriting ${files.length} article(s)...`);

  let ok = 0;
  let failed = 0;
  for (const file of files) {
    const path = join(POSTS_DIR, file);
    const raw = await readFile(path, 'utf8');
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!fmMatch) continue;
    const fm = fmMatch[1];
    if (/^tags:/m.test(fm)) {
      console.log(`SKIP ${file}: already rewritten`);
      continue;
    }
    const title = field(fm, 'title') || '';
    const summary = cleanText(field(fm, 'summary')) || '';
    const pubDate = field(fm, 'pubDate');
    const source = field(fm, 'source');
    const sourceName = field(fm, 'sourceName');

    try {
      const rewritten = await rewriteWithAI(title, summary || title);
      const tags = Array.isArray(rewritten.tags) ? rewritten.tags.slice(0, 3) : [];
      const frontmatter = [
        '---',
        `title: ${JSON.stringify(rewritten.title)}`,
        `description: ${JSON.stringify(truncate(rewritten.description, 25))}`,
        pubDate ? `pubDate: ${JSON.stringify(pubDate)}` : null,
        source ? `source: ${JSON.stringify(source)}` : null,
        sourceName ? `sourceName: ${JSON.stringify(sourceName)}` : null,
        ...(tags.length ? ['tags:', ...tags.map((t) => `  - ${JSON.stringify(t)}`)] : []),
        `summary: ${JSON.stringify(rewritten.summary)}`,
        '---',
        '',
        toParagraphs(rewritten.summary),
        '',
      ]
        .filter((line) => line !== null)
        .join('\n');

      await writeFile(path, frontmatter, 'utf8');
      ok++;
      console.log(`OK   ${file} -> ${rewritten.title}`);
    } catch (err) {
      failed++;
      console.log(`FAIL ${file}: ${err.message}`);
    }

    await new Promise((r) => setTimeout(r, DELAY_MS));
  }

  console.log(`Done. Rewritten ${ok}, failed ${failed}.`);
  process.exit(failed > 0 ? 1 : 0);
}

function truncate(text, maxWords) {
  const words = String(text).split(' ').filter(Boolean);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '…';
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});