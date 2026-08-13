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

// Tutoriais e guias ("O que é", "Como fazer", carteiras, segurança).
const artigos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/artigos' }),
  schema: seoSchema.extend({
    category: z.enum(['iniciantes', 'como-fazer', 'carteiras', 'seguranca']),
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .optional(),
  }),
});

// Reviews de corretoras ("Vale a pena", "Melhor corretora").
const corretoras = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/corretoras' }),
  schema: seoSchema.extend({
    exchangeName: z.string(),
    rating: z.number().min(0).max(5),
    verdict: z.string(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    founded: z.number().optional(),
    fees: z.string().optional(),
  }),
});

// Glossário (termos e conceitos).
const glossario = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/glossario' }),
  schema: seoSchema,
});

export const collections = { artigos, corretoras, glossario };
