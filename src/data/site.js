/* ============================================================
   Central content + links for the Sadin Saad portfolio.
   Single source of truth — edit copy and links here.
   ============================================================ */

/**
 * Links.
 * PulseFy links are final. Personal contact links are PLACEHOLDERS —
 * replace the YOUR_* values below once real ones are available.
 */
export const LINKS = {
  // Featured project — PulseFy (final)
  pulsefyLive: 'https://pulsefycorp.vercel.app/',
  pulsefyGithub: 'https://github.com/sadinsaif/Pulsefy',

  // Testnet token project — PULSE (PLSX) on Solana Devnet
  pulseLive: 'https://pulse-token-six.vercel.app/',

  // Web design build — LUMÉA Aesthetics (med-spa concept site)
  lumeaLive: 'https://lumea-med-spa.vercel.app/',

  // GitHub profile (provided)
  github: 'https://github.com/sadinsaif',

  // Contact (provided)
  email: 'sadinsaif.ss.bd3@gmail.com',
  x: 'https://x.com/sadinsaadbtc',
  instagram: 'https://www.instagram.com/memetoonhubb',
  discord: 'https://discord.com/users/904955428759306301',
}

/**
 * Contact form delivery — uses FormSubmit (https://formsubmit.co); no account
 * or API key needed. `endpoint` is the FormSubmit alias hash for LINKS.email,
 * so the raw address never appears in the form's network request — messages
 * still land in the same inbox. (Get a new hash by submitting once with the
 * plain email as `endpoint`; FormSubmit mails the alias in its activation link.)
 *
 * `enabled: false` → the form instead opens the visitor's own mail client
 * (mailto), which still uses the plain LINKS.email.
 */
export const FORM = {
  enabled: true,
  endpoint: 'b66a312a2abbd3855e292e325ef850bf', // alias → sadinsaif.ss.bd3@gmail.com
}

/** True for any unset YOUR_* placeholder value. */
export const isPlaceholder = (value) =>
  typeof value === 'string' && value.startsWith('YOUR_')

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

/** The four pillars of the brand — reused in hero, about and contact. */
export const PILLARS = ['AI', 'CONTENT', 'WEB3', 'BUILD']

export const ABOUT_CARDS = [
  {
    id: 'ai',
    title: 'AI',
    text: 'Exploring artificial intelligence and AI-assisted workflows.',
  },
  {
    id: 'content',
    title: 'Content',
    text: 'Creating digital and short-form content.',
  },
  {
    id: 'web3',
    title: 'Web3',
    text: 'Exploring crypto, blockchain, and decentralized ecosystems.',
  },
  {
    id: 'build',
    title: 'Build',
    text: 'Turning ideas into websites, products, and digital experiences.',
  },
]

export const SKILL_GROUPS = [
  {
    id: 'ai',
    title: 'AI & Technology',
    items: [
      'AI Training',
      'AI Tools',
      'Prompt Engineering',
      'AI-assisted Workflows',
      'Generative AI',
    ],
  },
  {
    id: 'content',
    title: 'Content',
    items: [
      'Content Creation',
      'Short-form Content',
      'Social Media Content',
      'Content Writing',
      'Video Content',
      'Creative Strategy',
    ],
  },
  {
    id: 'web3',
    title: 'Web3',
    items: [
      'Web3 Research',
      'Crypto Content',
      'Blockchain Ecosystem Research',
      'Community Content',
    ],
  },
  {
    id: 'build',
    title: 'Digital Building',
    items: [
      'Website Development',
      'UI/UX Concepts',
      'GitHub',
      'Vercel',
      'AI-assisted Development',
    ],
  },
]

export const TOOLS = [
  'ChatGPT',
  'Claude',
  'Midjourney',
  'DALL·E',
  'Sora',
  'Runway',
  'VEED',
  'GitHub',
  'Vercel',
]

export const PROJECTS = [
  {
    id: 'pulsefy',
    index: '01',
    title: 'PulseFy',
    featured: true,
    description:
      'A creator-focused digital platform designed around campaigns, content workflows, submissions, reporting, moderation, and creator management.',
    tags: ['Creator Economy', 'Web Platform', 'Campaigns', 'Digital Product'],
    live: LINKS.pulsefyLive,
    github: LINKS.pulsefyGithub,
  },
  {
    id: 'lumea',
    index: '02',
    title: 'LUMÉA Aesthetics',
    featured: false,
    icon: 'BUILD',
    description:
      'A premium medical-aesthetics (med-spa) website — a Next.js front-end build with a full luxury-wellness marketing site: treatments, a consultation-booking flow, before & after, team, and FAQ. A design concept with demonstration content.',
    tags: ['Web Design', 'Next.js', 'UI/UX', 'Concept'],
    live: LINKS.lumeaLive,
  },
  {
    id: 'pulse',
    index: '03',
    title: 'PULSE (PLSX)',
    featured: false,
    icon: 'WEB3',
    description:
      'A Solana SPL token on Devnet — a non-custodial site that reads your on-chain PLSX balance (never moving or holding it), with a fixed 1,000,000,000 supply, Metaplex on-chain metadata, tokenomics, and a public roadmap. Testnet / beta, no monetary value.',
    tags: ['Solana', 'SPL Token', 'Web3', 'Devnet'],
    live: LINKS.pulseLive,
  },
]

export const EXPERIENCE = [
  {
    id: 'ai-trainer',
    role: 'AI Trainer',
    focus: [
      'AI-related workflows',
      'Quality-focused tasks',
      'AI systems',
      'Content / data evaluation',
    ],
  },
  {
    id: 'content-creator',
    role: 'Content Creator',
    focus: [
      'Short-form content',
      'Social media content',
      'Creative concepts',
      'Campaign content',
    ],
  },
  {
    id: 'web3-research',
    role: 'Web3 Content & Research',
    focus: [
      'Crypto projects',
      'Web3 research',
      'Educational content',
      'Community-focused content',
    ],
  },
]

export const PLATFORMS = [
  { id: 'x', name: 'X', text: 'Digital conversations and Web3 / technology content.' },
  { id: 'instagram', name: 'Instagram', text: 'Visual and short-form content.' },
  { id: 'tiktok', name: 'TikTok', text: 'Short-form creative content.' },
  { id: 'youtube', name: 'YouTube Shorts', text: 'Short-form video experiments.' },
]
