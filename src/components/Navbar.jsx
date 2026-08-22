import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '../data/site'
import { Menu, Close, ArrowUpRight } from './icons'

// Static résumé page lives in public/ — base-aware so it resolves on both
// Vercel (root) and GitHub Pages (/SadinSaad/).
const RESUME_URL = `${import.meta.env.BASE_URL}resume.html`

function Wordmark({ onClick }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className="group font-display text-lg font-bold tracking-tightest text-white transition-colors"
      aria-label="Sadin Saad — home"
    >
      SADIN<span className="text-brand transition-colors group-hover:text-brand-bright">.</span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Translucent + blur after a small scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'border-b border-white/10 bg-base/70 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.9)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
        aria-label="Primary"
      >
        <div className="container-page flex h-16 items-center justify-between md:h-[72px]">
          <Wordmark onClick={close} />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const id = item.href.slice(1)
              const isActive = active === id
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-brand transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full px-3.5 py-2 text-sm text-zinc-400 transition-colors hover:text-white lg:inline-flex"
            >
              Résumé
            </a>
            <a href="#contact" className="btn btn-primary hidden h-10 px-5 !text-sm lg:inline-flex">
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.02] text-white transition-colors hover:border-brand/40 lg:hidden"
            >
              {open ? <Close size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-0 z-40 lg:hidden ${
          open ? '' : 'pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-base/95 backdrop-blur-xl transition-opacity duration-[400ms] ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={close}
        />
        <div
          className={`relative flex h-full flex-col justify-center px-8 transition-all duration-500 ease-out-expo ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="flex items-baseline gap-4 border-b border-white/8 py-4 font-display text-3xl font-semibold text-white transition-colors hover:text-brand"
                  style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
                >
                  <span className="font-mono text-xs text-brand">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={close} className="btn btn-primary mt-10 w-full">
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="btn btn-ghost mt-3 w-full"
          >
            View Résumé
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}
