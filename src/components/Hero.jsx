import { useEffect, useState } from 'react'
import { PILLARS } from '../data/site'
import { pillarIcon, ArrowUpRight, ArrowDown } from './icons'

// Static résumé page lives in public/ — base-aware for both deploy targets.
const RESUME_URL = `${import.meta.env.BASE_URL}resume.html`

/* Local load-in fade (staggered on mount) */
function Fade({ show, delay = 0, className = '', as: T = 'div', ...rest }) {
  return (
    <T
      className={`reveal ${show ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    />
  )
}

const MICRO = [
  { label: 'AI', pos: 'top-8 -left-4 sm:-left-7', delay: '0s' },
  { label: 'CREATIVE', pos: 'top-28 -right-5 sm:-right-10', delay: '-2.2s' },
  { label: 'BUILD', pos: 'bottom-28 -left-3 sm:-left-9', delay: '-3.4s' },
  { label: 'WEB3', pos: 'bottom-10 -right-4 sm:-right-8', delay: '-1.1s' },
]

function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-brand/[0.06] px-3.5 py-1.5 text-xs text-zinc-300">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-brand animate-pulse-ring" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
      </span>
      Available for creative &amp; digital projects
    </span>
  )
}

function IdentityPanel() {
  return (
    <div className="relative mx-auto w-full max-w-md animate-float-slow">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[40px]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(16,185,129,0.22), transparent 75%)',
          filter: 'blur(26px)',
        }}
      />

      {/* Floating micro-labels */}
      {MICRO.map((m) => (
        <span
          key={m.label}
          aria-hidden="true"
          className={`absolute z-10 hidden animate-float items-center gap-1.5 rounded-full border border-white/10 bg-base-200/80 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.18em] text-zinc-300 backdrop-blur sm:inline-flex ${m.pos}`}
          style={{ animationDelay: m.delay }}
        >
          <span className="h-1 w-1 rounded-full bg-brand" />
          {m.label}
        </span>
      ))}

      {/* Glass panel */}
      <div
        className="glass relative overflow-hidden rounded-[26px] p-5 sm:p-6"
        style={{ borderColor: 'var(--border-brand)' }}
      >
        {/* Sweeping scan line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan"
          style={{
            background:
              'linear-gradient(to bottom, rgba(52,211,153,0.16), transparent)',
          }}
        />

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_#10b981]" />
            <span className="eyebrow-muted">identity</span>
          </div>
          <span className="eyebrow-muted">02:26</span>
        </div>

        {/* Name block */}
        <div className="mt-6">
          <div className="font-display text-2xl font-bold tracking-tightest text-white sm:text-[1.7rem]">
            SADIN SAAD
          </div>
          <div className="mt-1.5 font-mono text-[0.68rem] tracking-[0.22em] text-brand">
            AI · CONTENT · WEB3 · BUILD
          </div>
        </div>

        {/* Animated hairline */}
        <div className="my-5 h-px w-full bg-gradient-to-r from-brand/70 via-brand/20 to-transparent animate-pulse" />

        {/* Node grid */}
        <div className="grid grid-cols-2 gap-3">
          {PILLARS.map((p, i) => {
            const Icon = pillarIcon[p]
            return (
              <div
                key={p}
                className="glass glass-hover rounded-2xl p-3.5"
                style={{ background: 'rgba(16,185,129,0.035)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand">
                    <Icon size={16} />
                  </span>
                  <span className="font-mono text-[0.6rem] text-zinc-600">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-3 font-display text-sm font-semibold text-white">
                  {p}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20 md:pt-24"
    >
      <div className="container-page grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left */}
        <div className="max-w-xl">
          <Fade show={loaded} delay={80} className="eyebrow">
            Hello, I&apos;m Sadin
          </Fade>

          <Fade
            show={loaded}
            delay={160}
            as="h1"
            className="mt-5 text-hero font-bold leading-[0.95] tracking-tightest text-white"
          >
            Sadin Saad
          </Fade>

          <Fade
            show={loaded}
            delay={260}
            as="p"
            className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight text-zinc-300 sm:text-3xl"
          >
            <span className="text-grad">AI Trainer.</span> Content Creator.{' '}
            <span className="text-grad">Digital Builder.</span>
          </Fade>

          <Fade
            show={loaded}
            delay={360}
            as="p"
            className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400"
          >
            I explore AI, create digital content, build technology projects, and
            experiment with emerging ideas across the digital world.
          </Fade>

          <Fade show={loaded} delay={460} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let&apos;s Connect
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Résumé
              <ArrowUpRight size={16} />
            </a>
          </Fade>

          <Fade show={loaded} delay={560} className="mt-8">
            <StatusBadge />
          </Fade>
        </div>

        {/* Right — signature identity visual */}
        <Fade show={loaded} delay={420} className="relative">
          <IdentityPanel />
        </Fade>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to explore"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-brand md:flex"
      >
        <span className="font-mono text-[0.65rem] tracking-[0.25em]">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown size={16} className="animate-float" />
      </a>
    </section>
  )
}
