import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    source: z.string().optional(),
    sourceName: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { news };