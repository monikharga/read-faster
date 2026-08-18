export async function GET(context: { site?: URL }) {
  const site = new URL(context.site?.href ?? 'http://localhost:4321');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL(base + '/sitemap-index.xml', site).href}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}