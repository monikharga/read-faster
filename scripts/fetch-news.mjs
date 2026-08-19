import { readdir, readFile, writeFile, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import Parser from 'rss-parser';
import { decode } from 'html-entities';
import { parse } from 'node-html-parser';

const POSTS_DIR = join(process.cwd(), 'src', 'content', 'news');
const MAX_WORDS = 300;
const ARTICLES_PER_RUN = 10;
const MAX_TOTAL_POSTS = 300;

const AI_API_KEY = process.env.AI_API_KEY || '';
const AI_MODEL = process.env.AI_MODEL || 'gemini-3.6-flash';
const AI_ENABLED = Boolean(AI_API_KEY);

const SOURCES = [
  { name: 'TechCrunch', url: 'https://techcrunch.com/category/artificial-intelligence/feed/' },
  { name: 'The Verge', url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml' },
  { name: 'VentureBeat', url: 'https://venturebeat.com/category/ai/feed/' },
  { name: 'MIT Tech Review', url: 'https://www.technologyreview.com/feed/' },
  { name: 'Ars Technica', url: 'https://arstechnica.com/information-technology/feed/' },
  { name: 'BBC Technology', url: 'http://feeds.bbci.co.uk/news/technology/rss.xml' },
  { name: 'ZDNet', url: 'https://www.zdnet.com/rss.xml' },
  { name: 'The Hacker News', url: 'https://feeds.feedburner.com/TheHackersNews' },
  { name: 'How-To Geek', url: 'https://www.howtogeek.com/rss/' },
  { name: 'Phys.org', url: 'https://phys.org/rss-feed/' },
];

const TOPIC_KEYWORDS = [
  'ai', 'artificial intelligence', 'openai', 'chatgpt', 'gemini', 'claude', 'llm', 'machine learning',
  'model', 'google', 'microsoft', 'apple', 'meta', 'amazon', 'open source', 'open-source', 'software',
  'app', 'chip', 'nvidia', 'processor', 'tech', 'startup', 'funding', 'robot', 'crypto', 'bitcoin',
  'security', 'hack', 'hacker', 'malware', 'ransomware', 'vulnerability', 'cyber', 'privacy',
  'data', 'cloud', 'developer', 'computer', 'internet', 'phone', 'android', 'iphone',
  'science', 'research', 'space', 'explained', 'what is', 'why', 'how to', 'gadget', 'smartphone',
];

const JUNK_PATTERNS = [
  /\bdeal\b/i, /\bwin\b/i, /\bgiveaway\b/i, /\bsweepstakes\b/i, /\blast chance\b/i,
  /\bcoupon\b/i, /\b(sale|discount|promo)\b/i, /\bprime day\b/i, /\bbest buy\b/i,
  /\bguessing game\b/i, /\bcontest\b/i, /\bquiz\b/i, /\bfirst month\b/i,
  /\bfree (trial|gift|book|plan)\b/i, /\bhow to try it\b/i, /\bhere's how\b/i,
  /^the download: /i,
];

const PER_SOURCE_CAP = 4;
const MIN_SUMMARY_WORDS = 40;
const SUMMARY_TARGET_WORDS = 180;

const STOP_WORDS = new Set(
  ("a,an,and,are,as,at,be,been,but,by,can,could,did,do,does,for,from,had,has,have,he,her,his,how,i,if,in,into,is,it,its,may,me,more,most,my,no,not,of,on,one,or,our,out,over,said,she,should,so,some,such,than,that,the,their,them,then,there,these,they,this,those,through,to,under,up,us,was,we,were,what,when,where,which,while,who,why,will,with,would,you,your").split(',')
);

const parser = new Parser({
  timeout: 30000,
  headers: { 'User-Agent': 'DailyByteNewsBot/1.0 (+https://github.com/)' },
});

function cleanText(html) {
  return decode(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isOnTopic(title) {
  const t = title.toLowerCase();
  return TOPIC_KEYWORDS.some((k) => t.includes(k));
}

function truncateWords(text, maxWords) {
  const words = text.split(' ').filter(Boolean);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '…';
}

function splitSentences(text) {
  return text
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 30);
}

function summarizeBody(body, targetWords = SUMMARY_TARGET_WORDS) {
  const sentences = splitSentences(body);
  if (sentences.length <= 2) return truncateWords(body, targetWords);

  const freq = new Map();
  for (const s of sentences) {
    for (const w of s.toLowerCase().match(/[a-z0-9']+/g) || []) {
      if (w.length < 3 || STOP_WORDS.has(w)) continue;
      freq.set(w, (freq.get(w) || 0) + 1);
    }
  }

  const scored = sentences.map((s, idx) => {
    const words = s.toLowerCase().match(/[a-z0-9']+/g) || [];
    let score = 0;
    for (const w of words) {
      if (w.length < 3 || STOP_WORDS.has(w)) continue;
      score += freq.get(w) || 0;
    }
    return { idx, s, score: score / Math.sqrt(words.length) };
  });
  scored.sort((a, b) => b.score - a.score);

  const keep = new Set(scored.slice(0, Math.max(3, Math.ceil(sentences.length * 0.3))).map((x) => x.idx));
  const ordered = sentences.filter((_, i) => keep.has(i));

  const out = [];
  let words = 0;
  for (const s of ordered) {
    const n = s.split(' ').length;
    if (words + n > targetWords && out.length > 0) break;
    out.push(s);
    words += n;
  }
  return out.join(' ');
}

function toParagraphs(text) {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const groups = [];
  for (let i = 0; i < sentences.length; i += 3) groups.push(sentences.slice(i, i + 3).join(' '));
  return groups.join('\n\n');
}

function slugify(title) {
  const slug = title
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80);
  return slug || 'article';
}

function parseDate(item) {
  const d = item.isoDate || item.pubDate;
  if (d) {
    const parsed = new Date(d);
    if (!isNaN(parsed.getTime())) return parsed;
  }
  return new Date();
}

function excerptOf(item) {
  const raw = cleanText(item.contentSnippet || item.content || item.summary || '');
  if (raw.length > 40) return raw;
  return cleanText(item.title || '');
}

const BROWSER_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36';

const BOILERPLATE = [
  /^🚨 flash sale/i,
  /^follow zdnet:/i,
  /^follow techcrunch:/i,
  /^this is today's edition of the download/i,
  /^sign up for/i,
  /^subscribe to/i,
  /^get \$?\d+ off/i,
  /^save \$?\d+/i,
  /^register now/i,
  /^receive a/i,
  /^subscribe now/i,
];

function extractBodyHtml(htmlText) {
  const root = parse(htmlText);
  const parts = [];
  let count = 0;
  for (const p of root.querySelectorAll('p')) {
    const text = cleanText(p.text);
    if (text.length < 40) continue;
    if (BOILERPLATE.some((re) => re.test(text))) continue;
    parts.push(text);
    count += text.split(' ').length;
    if (count >= MAX_WORDS + 60) break;
  }
  return parts.join(' ');
}

async function fetchArticleText(url, attempt = 1) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': BROWSER_UA, 'Accept-Language': 'en-US,en;q=0.9' },
      signal: controller.signal,
    });
    if (!res.ok) return null;
    const html = await res.text();
    const joined = extractBodyHtml(html);
    if (joined.length < 200 && attempt < 3) {
      await new Promise((r) => setTimeout(r, 2000));
      return fetchArticleText(url, attempt + 1);
    }
    return joined || null;
  } catch {
    if (attempt < 3) {
      await new Promise((r) => setTimeout(r, 2000));
      return fetchArticleText(url, attempt + 1);
    }
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function getArticleBody(item) {
  if ((item.content || '').length > 200) {
    const fromFeed = extractBodyHtml(item.content);
    if (fromFeed.length > 200) return fromFeed;
  }
  const fromPage = await fetchArticleText(item.link);
  if (fromPage && fromPage.length > 200) return fromPage;
  return excerptOf(item);
}

async function rewriteWithAI(item, body) {
  const prompt = [
    'Rewrite the news item below as an ORIGINAL short article for "Read Faster", a website that publishes concise daily tech summaries.',
    'Write it entirely in your own words. Do NOT copy or paraphrase any sentence verbatim from the source.',
    'Keep it factual, concrete and topic-focused so it can rank in Google for the topic.',
    'Return ONLY valid JSON with exactly these keys:',
    '- "title": a search-friendly headline, max 10 words',
    '- "description": a click-worthy meta description, max 20 words',
    '- "summary": the full article as 150-200 words of continuous prose, no line breaks',
    '- "tags": an array of 2-3 short lowercase keywords like ["ai","apple"]',
    '',
    `Source: ${item.sourceName}`,
    `Original title: ${item.title}`,
    'Original article:',
    body,
  ].join('\n');

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${AI_MODEL}:generateContent?key=${AI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 900 },
      }),
    }
  );
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

function readFrontmatter(source) {
  const match = source.match(/^source:\s*"(.+)"\s*$/m);
  return match ? match[1] : null;
}

async function existingSourceLinks() {
  const links = new Set();
  try {
    const files = await readdir(POSTS_DIR);
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      const content = await readFile(join(POSTS_DIR, file), 'utf8');
      const link = readFrontmatter(content);
      if (link) links.add(link);
    }
  } catch {
    // directory missing or empty
  }
  return links;
}

async function fetchLatest() {
  const items = [];
  for (const source of SOURCES) {
    try {
      const feed = await parser.parseURL(source.url);
      for (const item of feed.items) {
        if (!item.title || !item.link) continue;
        const title = cleanText(item.title);
        if (!isOnTopic(title)) continue;
        if (JUNK_PATTERNS.some((p) => p.test(title))) continue;
        items.push({
          title,
          link: item.link,
          date: parseDate(item),
          content: item.content || '',
          contentSnippet: item.summary || item.contentSnippet || '',
          sourceName: source.name,
        });
      }
      console.log(`OK   ${source.name}: ${feed.items.length} items`);
    } catch (err) {
      console.log(`FAIL ${source.name}: ${err.message}`);
    }
  }
  return items;
}

async function main() {
  console.log(`AI rewrite: ${AI_ENABLED ? 'ENABLED (' + AI_MODEL + ')' : 'DISABLED (no AI_API_KEY)'}`);
  const existing = await existingSourceLinks();
  console.log(`Existing published: ${existing.size}`);
  const fresh = await fetchLatest();

  const unique = new Map();
  for (const item of fresh) {
    const key = item.link.replace(/[?#].*$/, '').replace(/\/$/, '');
    if (!existing.has(key) && !unique.has(key)) unique.set(key, item);
  }

  const bySource = new Map();
  for (const item of unique.values()) {
    const list = bySource.get(item.sourceName) || [];
    list.push(item);
    bySource.set(item.sourceName, list);
  }
  const capped = [];
  for (const list of bySource.values()) {
    capped.push(...list.sort((a, b) => b.date - a.date).slice(0, PER_SOURCE_CAP));
  }

  const newest = capped
    .sort((a, b) => b.date - a.date)
    .slice(0, ARTICLES_PER_RUN);

  if (newest.length === 0) {
    console.log('Nothing new to publish.');
    return;
  }

  const usedSlugs = new Set();
  for (const file of await readdir(POSTS_DIR).catch(() => [])) {
    if (file.endsWith('.md')) usedSlugs.add(file.replace(/\.md$/, ''));
  }

  let written = 0;
  for (const item of newest) {
    let slug = slugify(item.title);
    let n = 2;
    while (usedSlugs.has(slug)) slug = slugify(item.title) + '-' + n++;
    usedSlugs.add(slug);

    const body = await getArticleBody(item);

    let title = item.title;
    let summary;
    let description;
    let tags = [];

    if (AI_ENABLED && body && body.length > 200) {
      try {
        const rewritten = await rewriteWithAI(item, body);
        title = rewritten.title;
        summary = rewritten.summary;
        description = truncateWords(rewritten.description, 25);
        tags = Array.isArray(rewritten.tags) ? rewritten.tags.slice(0, 3) : [];
        slug = slugify(title);
        while (usedSlugs.has(slug)) slug = slugify(title) + '-' + n++;
        usedSlugs.add(slug);
      } catch (err) {
        console.log(`AI FAIL ${item.sourceName}: ${err.message}`);
      }
    }

    if (!summary) summary = summarizeBody(body);
    const wordCount = summary.split(' ').filter(Boolean).length;
    if (wordCount < MIN_SUMMARY_WORDS) {
      console.log(`SKIP ${item.sourceName}: too short (${wordCount}w): ${item.title}`);
      continue;
    }
    const firstSentence = splitSentences(summary)[0] || summary;
    description = description || truncateWords(firstSentence, 20);
    const frontmatter = [
      '---',
      `title: ${JSON.stringify(title)}`,
      `description: ${JSON.stringify(description)}`,
      `pubDate: ${item.date.toISOString()}`,
      `source: ${JSON.stringify(item.link)}`,
      `sourceName: ${JSON.stringify(item.sourceName)}`,
      ...(tags.length ? ['tags:', ...tags.map((t) => `  - ${JSON.stringify(t)}`)] : []),
      `summary: ${JSON.stringify(summary)}`,
      '---',
      '',
      toParagraphs(summary),
      '',
    ].join('\n');

    await writeFile(join(POSTS_DIR, slug + '.md'), frontmatter, 'utf8');
    written++;
    console.log(`NEW  ${item.sourceName}: ${title}`);
  }

  const allFiles = (await readdir(POSTS_DIR)).filter((f) => f.endsWith('.md'));
  if (allFiles.length > MAX_TOTAL_POSTS) {
    const toDelete = allFiles.length - MAX_TOTAL_POSTS;
    const byDate = [];
    for (const file of allFiles) {
      const content = await readFile(join(POSTS_DIR, file), 'utf8');
      const m = content.match(/^pubDate:\s*"?([^"\r\n]+)"?/m);
      const d = m ? new Date(m[1]) : new Date(0);
      byDate.push({ file, d });
    }
    byDate.sort((a, b) => a.d - b.d);
    for (const { file } of byDate.slice(0, toDelete)) {
      await unlink(join(POSTS_DIR, file));
      console.log(`DEL  ${file}`);
    }
  }

  console.log(`Done. Published ${written} new article(s).`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});