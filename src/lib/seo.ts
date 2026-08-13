import { SITE } from '../consts';
import { toAbs } from './url';

export type JsonLd = Record<string, unknown>;

/** Base Organization schema (E-E-A-T / trust signals). */
export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.title,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/favicon.svg`,
    },
    email: SITE.email,
  };
}

/** WebSite schema with site-level identity. */
export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.title,
    url: SITE.url,
    inLanguage: 'pt-BR',
    description: SITE.description,
  };
}

export interface Crumb {
  name: string;
  /** Root-relative path, e.g. "/aprenda/". */
  path: string;
}

export function breadcrumbSchema(items: Crumb[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: toAbs(item.path),
    })),
  };
}

export interface ArticleInput {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
}

/** Article schema for tutorial/content pages. */
export function articleSchema(input: ArticleInput): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    image: input.image,
    url: input.url,
    inLanguage: 'pt-BR',
    author: {
      '@type': 'Person',
      name: input.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.title,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/favicon.svg`,
      },
    },
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    mainEntityOfPage: input.url,
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQPage schema — targets "Perguntas frequentes" / People Also Ask. */
export function faqSchema(items: FaqItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export interface HowToStep {
  name: string;
  text: string;
}

/** HowTo schema for "como fazer" guides. */
export function howToSchema(title: string, steps: HowToStep[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
    })),
  };
}

export interface ReviewInput {
  itemName: string;
  description: string;
  url: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

/** Review + Product schema for corretora review pages. */
export function reviewSchema(input: ReviewInput): JsonLd {
  const bestRating = input.bestRating ?? 5;
  const worstRating = input.worstRating ?? 1;
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: input.itemName,
      description: input.description,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: input.ratingValue,
      bestRating,
      worstRating,
    },
    author: {
      '@type': 'Organization',
      name: SITE.title,
    },
    url: input.url,
    ...(input.reviewCount ? { reviewCount: input.reviewCount } : {}),
  };
}
