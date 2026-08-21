import { LINKS, isPlaceholder } from '../data/site'
import { XLogo, Github, Instagram, Discord } from './icons'

const FOOTER_NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { key: 'x', label: 'X', icon: XLogo, href: isPlaceholder(LINKS.x) ? null : LINKS.x },
  { key: 'github', label: 'GitHub', icon: Github, href: LINKS.github },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: Instagram,
    href: isPlaceholder(LINKS.instagram) ? null : LINKS.instagram,
  },
  { key: 'discord', label: 'Discord', icon: Discord, href: isPlaceholder(LINKS.discord) ? null : LINKS.discord },
]

function Social({ item }) {
  const { icon: Icon, label, href } = item
  const cls =
    'grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 transition-colors duration-300 hover:border-brand/40 hover:text-brand'

  if (!href) {
    return (
      <button
        type="button"
        className={`${cls} cursor-default`}
        aria-label={`${label} — link not set yet`}
        title="Add your link in src/data/site.js"
      >
        <Icon size={18} />
      </button>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cls}
    >
      <Icon size={18} />
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-base-100/40">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a
              href="#home"
              className="font-display text-2xl font-bold tracking-tightest text-white"
            >
              Sadin Saad<span className="text-brand">.</span>
            </a>
            <p className="mt-3 font-mono text-xs tracking-[0.15em] text-zinc-500">
              AI Trainer · Content Creator · Digital Builder
            </p>
          </div>

          {/* Nav + socials */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <p className="eyebrow-muted">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="eyebrow-muted">Connect</p>
              <div className="mt-4 flex gap-2.5">
                {SOCIALS.map((item) => (
                  <Social key={item.key} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-zinc-600">
            © 2026 Sadin Saad. All rights reserved.
          </p>
          <p className="font-mono text-xs text-zinc-600">
            Built with curiosity &amp; code.
          </p>
        </div>
      </div>
    </footer>
  )
}
