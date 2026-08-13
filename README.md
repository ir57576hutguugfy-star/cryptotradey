# CryptoTradey

Site de criptomoedas para brasileiros (pt-BR), focado em conteúdo **educacional
e SEO** — guias, tutoriais e reviews de corretoras. Não é um portal de notícias.

Construído com [Astro](https://astro.build), pré-renderizado (SSG), otimizado
para Core Web Vitals e com dados estruturados (Schema.org) completos.

## Stack

- **Astro 7** (SSG, zero JS por padrão)
- **Content Collections** (Markdown) para artigos, corretoras e glossário
- **@astrojs/sitemap** para `sitemap-index.xml`
- **Vercel** para deploy

## Começando

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site estático em dist/
npm run preview  # serve o build localmente
```

## Estrutura

```
src/
├── content/            # Markdown das coleções (ver src/content/README.md)
│   ├── artigos/        # tutoriais e guias
│   ├── corretoras/     # reviews de corretoras
│   └── glossario/      # termos e conceitos
├── content.config.ts   # schema das coleções (Zod)
├── layouts/            # BaseLayout (HTML + SEO)
├── components/         # Header, Footer, Breadcrumbs, SEO
├── pages/              # rotas (aprenda, corretoras, glossario, sobre...)
├── lib/seo.ts          # builders de Schema.org (JSON-LD)
└── styles/global.css   # design system
```

## SEO implementado

- `title` / `description` / `canonical` em todas as páginas
- `hreflang` pt-BR + x-default
- Open Graph + Twitter Card
- JSON-LD: Organization, WebSite, BreadcrumbList, Article, FAQPage, Review
- `sitemap-index.xml` (via integração) + `robots.txt`
- URL amigável com `trailingSlash: always`

## Como adicionar conteúdo

Veja `src/content/README.md` para o formato do frontmatter de cada coleção.
