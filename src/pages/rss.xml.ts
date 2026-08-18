import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_NAME, SITE_DESCRIPTION } from '../site';

export async function GET(context: { site: URL }) {
  const posts = (await getCollection('news')).sort((a, b) => b.data.pubDate - a.data.pubDate);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.slice(0, 30).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: new URL(base + `/article/${post.slug}/`, context.site).href,
    })),
  });
}