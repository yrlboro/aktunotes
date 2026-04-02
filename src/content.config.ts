import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

function makeSlug(entry: string): string {
  return entry
    .replace(/\.mdx?$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9/_-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/\/-/g, '/')
    .replace(/-\//g, '/');
}

const noteSchema = z.object({
  topic:        z.string().optional(),
  topic_id:     z.string().optional(),
  parent_topic: z.string().optional(),
  exam:         z.string().optional(),
  difficulty:   z.string().optional(),
  exam_weight:  z.string().optional(),
  ref_book:     z.string().optional(),
  prerequisites:z.string().optional(),
  tags:         z.array(z.string()).optional(),
  status:       z.string().optional(),
  title:        z.string().optional(),
  description:  z.string().optional(),
}).passthrough();

export const collections = {
  cf1: defineCollection({
    loader: glob({
      pattern: ['**/*.md', '!index.md'],
      base: './content/CF1',
      generateId: ({ entry }) => makeSlug(entry),
    }),
    schema: noteSchema,
  }),

  cf2: defineCollection({
    loader: glob({
      pattern: ['**/*.md', '!index.md'],
      base: './content/CF2',
      generateId: ({ entry }) => makeSlug(entry),
    }),
    schema: noteSchema,
  }),

  aamai101: defineCollection({
    loader: glob({
      pattern: ['**/*.md', '!index.md'],
      base: './content/AAMAI-101',
      generateId: ({ entry }) => makeSlug(entry),
    }),
    schema: noteSchema,
  }),
};
