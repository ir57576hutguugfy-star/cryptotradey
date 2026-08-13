# Como adicionar conteúdo

O conteúdo vive em Markdown (`.md`) dentro das pastas abaixo. Cada pasta é uma
coleção com um schema próprio (ver `src/content.config.ts`).

## Coleções

| Pasta          | Coleção      | Para quê          |
| -------------- | ------------ | ----------------- |
| `glossario/`   | `glossario`  | Termos e conceitos |

## Exemplo — termo (`glossario/bitcoin.md`)

```md
---
title: Bitcoin
description: A primeira criptomoeda descentralizada do mundo.
publishedAt: 2026-08-13
updatedAt: 2026-08-13
author: Equipe CryptoTradey
tags: [bitcoin, iniciantes]
---

Definição e explicação do termo em Markdown.
```
