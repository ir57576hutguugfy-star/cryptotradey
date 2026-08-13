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

// Schema compartilhado por conteúdos com FAQ (artigos e comparações).
const withFaq = seoSchema.extend({
  category: z.string().optional(),
  faq: z
    .array(z.object({ question: z.string(), answer: z.string() }))
    .optional(),
});

// Artigos (posts e conteúdos).
const artigos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artigos' }),
  schema: withFaq,
});

// Comparações (artigos "A vs B").
const comparacoes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/comparacoes' }),
  schema: withFaq,
});

// Glossário (termos e conceitos).
const glossario = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossario' }),
  schema: seoSchema,
});

export const collections = { artigos, comparacoes, glossario };
