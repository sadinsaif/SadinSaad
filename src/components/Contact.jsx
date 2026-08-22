import { useState } from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { LINKS, FORM, isPlaceholder } from '../data/site'
import { Mail, XLogo, Github, Discord, FileText, ArrowUpRight } from './icons'

// Static résumé page lives in public/ — base-aware for both deploy targets.
const RESUME_URL = `${import.meta.env.BASE_URL}resume.html`

/* Contact actions. Any placeholder link renders as a non-navigating button so
   there are no broken links. */
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
  {
    key: 'discord',
    label: 'Discord',
    icon: Discord,
    href: isPlaceholder(LINKS.discord) ? null : LINKS.discord,
    external: true,
  },
  {
    key: 'resume',
    label: 'Résumé',
    icon: FileText,
    href: RESUME_URL,
    external: true,
  },
]

const fieldCls =
  'w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-brand/50 focus:bg-white/[0.03]'

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

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  // When a real Formspree ID is set, submit in-page; otherwise fall back to
  // opening the visitor's email client (works immediately, no backend).
  const formspreeActive = !isPlaceholder(FORM.formspreeId)
  const emailReady = !isPlaceholder(LINKS.email)
  const canSend = formspreeActive || emailReady

  const update = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (status === 'sent' || status === 'error') setStatus('idle')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending' || !canSend) return

    // Fallback — compose an email in the visitor's mail client.
    if (!formspreeActive) {
      const subject = encodeURIComponent(
        `Portfolio message from ${form.name || 'someone'}`
      )
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name}${form.email ? ` · ${form.email}` : ''}`
      )
      window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`
      setStatus('sent')
      return
    }

    // Formspree submission
    try {
      setStatus('sending')
      const res = await fetch(`https://formspree.io/f/${FORM.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setForm({ name: '', email: '', message: '' })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const statusMsg =
    status === 'sending'
      ? 'Sending…'
      : status === 'sent'
        ? formspreeActive
          ? 'Thanks — your message has been sent.'
          : 'Opening your email app…'
        : status === 'error'
          ? 'Something went wrong — please email me directly.'
          : ''

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[36px]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(16,185,129,0.16), transparent 75%)',
          filter: 'blur(24px)',
        }}
      />
      <form
        onSubmit={onSubmit}
        className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
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

        <h3 className="font-display text-xl font-semibold text-white">
          Send a message
        </h3>
        <p className="mt-1.5 text-sm text-zinc-500">
          Fill this in and I&apos;ll get back to you.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="cf-name" className="mb-1.5 block eyebrow-muted">
              Name
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={update}
              placeholder="Your name"
              className={fieldCls}
            />
          </div>
          <div>
            <label htmlFor="cf-email" className="mb-1.5 block eyebrow-muted">
              Email
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={update}
              placeholder="you@example.com"
              className={fieldCls}
            />
          </div>
          <div>
            <label htmlFor="cf-message" className="mb-1.5 block eyebrow-muted">
              Message
            </label>
            <textarea
              id="cf-message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={update}
              placeholder="Tell me about your idea…"
              className={`${fieldCls} resize-none`}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'sending' || !canSend}
          className="btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
          {status !== 'sending' && <ArrowUpRight size={16} />}
        </button>

        {statusMsg && (
          <p
            aria-live="polite"
            className={`mt-3 text-center font-mono text-xs ${
              status === 'error' ? 'text-red-400' : 'text-brand'
            }`}
          >
            {statusMsg}
          </p>
        )}
      </form>
    </div>
  )
}

export default function Contact() {
  const hasPlaceholder = ACTIONS.some((a) => !a.href)

  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
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
                &#8618; Some contact links are placeholders&nbsp;&mdash; set them
                in <span className="text-zinc-500">src/data/site.js</span>.
              </Reveal>
            )}
          </div>

          <Reveal delay={200}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
