import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Campos de SEO compartilhados por todas as coleções.
const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  author: z.string().default('Equipe CryptoTradey'),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
});

// Glossário (termos e conceitos).
const glossario = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossario' }),
  schema: seoSchema,
});

export const collections = { glossario };
