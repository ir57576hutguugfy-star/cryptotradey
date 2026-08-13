# Como adicionar conteúdo

O conteúdo vive em Markdown (`.md`) dentro das pastas abaixo. Cada pasta é uma
coleção com um schema próprio (ver `src/content.config.ts`).

## Coleções

| Pasta                  | Coleção     | Para quê                              |
| ---------------------- | ----------- | ------------------------------------- |
| `artigos/`             | `artigos`   | Tutoriais e guias                     |
| `corretoras/`          | `corretoras`| Reviews de corretoras                 |
| `glossario/`           | `glossario` | Termos e conceitos                    |

## Exemplo — artigo (`artigos/o-que-e-bitcoin.md`)

```md
---
title: O que é Bitcoin?
description: Entenda o que é Bitcoin de forma simples.
publishedAt: 2026-08-13
updatedAt: 2026-08-13
author: Equipe CryptoTradey
category: iniciantes
tags: [bitcoin, iniciantes]
featured: true
faq:
  - question: Bitcoin é seguro?
    answer: Sim, a rede é descentralizada e criptografada.
---

Corpo do artigo em Markdown (H2, H3, listas, tabelas...).
```

## Exemplo — corretora (`corretoras/mercado-bitcoin.md`)

```md
---
title: Mercado Bitcoin vale a pena?
description: Análise completa da Mercado Bitcoin.
publishedAt: 2026-08-13
author: Equipe CryptoTradey
exchangeName: Mercado Bitcoin
rating: 4.5
verdict: Boa opção para quem quer uma corretora 100% brasileira.
pros: [Regulada no Brasil, Suporte em português]
cons: [Menos criptos listadas]
founded: 2013
fees: Variável
---

Corpo do review.
```

> O campo `category` de `artigos` aceita apenas: `iniciantes`, `como-fazer`,
> `carteiras`, `seguranca`.
