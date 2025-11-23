import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishDate: z.date(),
    image: z.string().optional(),
  }),
});

const logsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'logs': logsCollection,
};
