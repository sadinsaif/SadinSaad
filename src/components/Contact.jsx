import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { LINKS, isPlaceholder, PILLARS } from '../data/site'
import { Mail, XLogo, Github, ArrowUpRight } from './icons'

/* Contact actions. Email + X are placeholders until real links are provided —
   they render as non-navigating buttons so there are no broken links. */
const ACTIONS = [
  {
    key: 'email',
    label: 'Email Me',
    icon: Mail,
    href: isPlaceholder(LINKS.email) ? null : `mailto:${LINKS.email}`,
    primary: true,
  },
  {
    key: 'x',
    label: 'Connect on X',
    icon: XLogo,
    href: isPlaceholder(LINKS.x) ? null : LINKS.x,
    external: true,
  },
  {
    key: 'github',
    label: 'GitHub',
    icon: Github,
    href: LINKS.github,
    external: true,
  },
]

function Action({ action }) {
  const { icon: Icon, label, href, primary, external } = action
  const cls = `btn ${primary ? 'btn-primary' : 'btn-ghost'}`

  if (!href) {
    return (
      <button
        type="button"
        className={`${cls} cursor-default opacity-80`}
        aria-label={`${label} — link not set yet`}
        title="Add your link in src/data/site.js"
      >
        <Icon size={16} />
        {label}
      </button>
    )
  }

  return (
    <a
      href={href}
      className={`${cls} group/act`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Icon size={16} />
      {label}
    </a>
  )
}

function ContactCard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[36px]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(16,185,129,0.18), transparent 75%)',
          filter: 'blur(24px)',
        }}
      />
      <div
        className="glass relative flex min-h-[240px] flex-col items-center justify-center overflow-hidden rounded-3xl p-8 text-center"
        style={{ borderColor: 'var(--border-brand)' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-14 animate-scan"
          style={{
            background:
              'linear-gradient(to bottom, rgba(52,211,153,0.14), transparent)',
          }}
        />
        <p className="font-display text-3xl font-bold tracking-tightest text-white sm:text-4xl">
          SADIN SAAD
        </p>
        <div className="mt-4 h-px w-40 bg-gradient-to-r from-transparent via-brand to-transparent animate-pulse" />
        <p className="mt-4 font-mono text-xs tracking-[0.22em] text-brand">
          {PILLARS.join(' · ')}
        </p>
      </div>
    </div>
  )
}

export default function Contact() {
  const hasPlaceholder = ACTIONS.some((a) => !a.href)

  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeader
              index="05"
              label="Contact"
              title="Let's build something."
            />
            <Reveal
              as="p"
              delay={160}
              className="mt-5 max-w-md text-lg leading-relaxed text-zinc-400"
            >
              Have an interesting idea, creative project, or digital experiment in
              mind? Let&apos;s connect.
            </Reveal>

            <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
              {ACTIONS.map((a) => (
                <Action key={a.key} action={a} />
              ))}
            </Reveal>

            {hasPlaceholder && (
              <Reveal
                as="p"
                delay={300}
                className="mt-5 font-mono text-xs leading-relaxed text-zinc-600"
              >
                &#8618; Contact links marked as placeholders&nbsp;&mdash; set your
                email and X profile in{' '}
                <span className="text-zinc-500">src/data/site.js</span>.
              </Reveal>
            )}
          </div>

          <Reveal delay={200}>
            <ContactCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
