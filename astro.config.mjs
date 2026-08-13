// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

// Caminho base do site (GitHub Pages). Deve ser igual ao `base` abaixo.
const BASE_PATH = '/cryptotradey/';

/**
 * Plugin hast do Sätteri: Astro não aplica `base` automaticamente em links
 * absolutos escritos no Markdown (ex.: `/glossario/bitcoin/`). Este plugin
 * prefixa o caminho base em links internos (`/...`), sem afetar links
 * externos (`https://`) nem protocol-relative (`//...`).
 */
const basePathPlugin = {
  name: 'base-path',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties?.href;
      if (
        typeof href === 'string' &&
        href.startsWith('/') &&
        !href.startsWith('//') &&
        !href.startsWith(BASE_PATH)
      ) {
        ctx.setProperty(node, 'href', BASE_PATH + href.slice(1));
      }
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://ir57576hutguugfy-star.github.io',
  base: BASE_PATH,
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    processor: satteri({ hastPlugins: [basePathPlugin] }),
  },
  build: {
    format: 'directory',
  },
});
