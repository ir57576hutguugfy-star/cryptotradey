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

// Artigos (posts e conteúdos).
const artigos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artigos' }),
  schema: seoSchema.extend({
    category: z.string().optional(),
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .optional(),
  }),
});

// Glossário (termos e conceitos).
const glossario = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossario' }),
  schema: seoSchema,
});

export const collections = { artigos, glossario };
