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

  // GitHub profile (provided)
  github: 'https://github.com/sadinsaif',

  // Placeholders — swap these for real destinations
  email: 'YOUR_EMAIL_HERE',
  x: 'YOUR_X_PROFILE_HERE',
  instagram: 'YOUR_INSTAGRAM_HERE',
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
    id: 'ai-content',
    index: '02',
    title: 'AI & Content Experiments',
    featured: false,
    description:
      'Creative experiments combining artificial intelligence, digital content, visual tools, and emerging workflows.',
    tags: ['AI', 'Content', 'Creative', 'Experiments'],
  },
  {
    id: 'web3',
    index: '03',
    title: 'Web3 Exploration',
    featured: false,
    description:
      'Exploring Web3 ecosystems, crypto projects, digital communities, and emerging blockchain technologies through research and content.',
    tags: ['Web3', 'Research', 'Crypto', 'Community'],
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
