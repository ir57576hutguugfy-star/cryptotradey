// Site-wide constants and navigation structure.

export const SITE = {
  title: 'CryptoTradey',
  tagline: 'Criptomoedas explicadas de forma simples',
  description:
    'Glossário e comparações de criptomoedas para brasileiros, explicados de forma simples e segura.',
  url: 'https://ir57576hutguugfy-star.github.io',
  locale: 'pt-BR',
  ogImage: '/og-default.png',
  email: 'contato@cryptotradey.com',
} as const;

// Main navigation.
export const NAV_LINKS = [
  { href: '/comparacoes/', label: 'Comparações' },
  { href: '/glossario/', label: 'Glossário' },
] as const;
