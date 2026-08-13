// Site-wide constants and navigation structure.

export const SITE = {
  title: 'CryptoTradey',
  tagline: 'Criptomoedas explicadas de forma simples',
  description:
    'Guias e tutoriais de criptomoedas para brasileiros: como comprar Bitcoin, escolher a melhor corretora, proteger suas criptos e muito mais.',
  url: 'https://cryptotradey.com',
  locale: 'pt-BR',
  ogImage: '/og-default.png',
  email: 'contato@cryptotradey.com',
} as const;

// Main navigation.
export const NAV_LINKS = [
  { href: '/aprenda/', label: 'Aprenda' },
  { href: '/corretoras/', label: 'Corretoras' },
  { href: '/comparacoes/', label: 'Comparações' },
  { href: '/glossario/', label: 'Glossário' },
] as const;

// Content categories under /aprenda.
export const CATEGORIES = [
  {
    slug: 'iniciantes',
    name: 'Iniciantes',
    description: 'O básico para começar do zero.',
  },
  {
    slug: 'como-fazer',
    name: 'Como fazer',
    description: 'Guias passo a passo para comprar, vender e guardar.',
  },
  {
    slug: 'carteiras',
    name: 'Carteiras',
    description: 'Como guardar suas criptos com segurança.',
  },
  {
    slug: 'seguranca',
    name: 'Segurança',
    description: 'Proteja-se contra golpes, fraudes e perdas.',
  },
] as const;
