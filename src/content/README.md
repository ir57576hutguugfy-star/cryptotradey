# Como adicionar conteúdo

O conteúdo vive em Markdown (`.md`) dentro das pastas abaixo. Cada pasta é uma
coleção com um schema próprio (ver `src/content.config.ts`).

## Coleções

| Pasta          | Coleção      | Para quê          |
| -------------- | ------------ | ----------------- |
| `artigos/`     | `artigos`    | Posts e artigos   |
| `glossario/`   | `glossario`  | Termos e conceitos |

## Exemplo — artigo (`artigos/como-comprar-bitcoin.md`)

```md
---
title: Como comprar Bitcoin no Brasil
description: Guia passo a passo para comprar Bitcoin com segurança.
publishedAt: 2026-08-13
updatedAt: 2026-08-13
author: Equipe CryptoTradey
tags: [bitcoin, iniciantes]
featured: true
faq:
  - question: Qual a melhor forma de comprar Bitcoin?
    answer: Por uma corretora regulada, com verificação de identidade.
---

Corpo do artigo em Markdown (H2, H3, listas, tabelas...).
```

## Exemplo — termo (`glossario/bitcoin.md`)

```md
---
title: Bitcoin
description: A primeira criptomoeda descentralizada do mundo.
publishedAt: 2026-08-13
author: Equipe CryptoTradey
tags: [bitcoin]
---

Definição e explicação do termo em Markdown.
```
