import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { PROJECTS } from '../data/site'
import { pillarIcon, ArrowUpRight, Github, ExternalLink } from './icons'

/* Schematic, abstract representation of the PulseFy platform — built from
   UI primitives (no screenshots, no invented metrics). Decorative only. */
function PlatformVisual() {
  return (
    <div className="glass group-hover:border-brand/30 relative h-full min-h-[280px] overflow-hidden rounded-2xl border-white/10 p-4 transition-all duration-500 group-hover:scale-[1.015]">
      <div className="absolute inset-0 fine-grid opacity-40" aria-hidden="true" />

      <div className="relative flex h-full flex-col">
        {/* App chrome */}
        <div className="flex items-center gap-2 border-b border-white/8 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="ml-2 font-mono text-[0.62rem] tracking-widest text-zinc-500">
            pulsefy
          </span>
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.6rem] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_#10b981]" />
            live
          </span>
        </div>

        <div className="flex flex-1 gap-3 pt-3">
          {/* Sidebar */}
          <div className="flex w-9 flex-col gap-2">
            {['bg-brand/70', 'bg-white/10', 'bg-white/10', 'bg-white/10'].map(
              (c, i) => (
                <span key={i} className={`h-7 w-full rounded-md ${c}`} />
              )
            )}
          </div>

          {/* Main */}
          <div className="flex-1">
            {/* Feature chips */}
            <div className="flex flex-wrap gap-1.5">
              {['Campaigns', 'Submissions', 'Creators', 'Reporting'].map((f) => (
                <span
                  key={f}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[0.58rem] text-zinc-400"
                >
                  {f}
                </span>
              ))}
            </div>

            {/* Schematic activity bars */}
            <div className="mt-4 flex h-20 items-end gap-1.5">
              {[38, 62, 45, 80, 55, 70, 48, 90, 60].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    background:
                      i % 3 === 1
                        ? 'linear-gradient(to top, #10b981, #34d399)'
                        : 'rgba(255,255,255,0.09)',
                  }}
                />
              ))}
            </div>

            {/* Queue rows */}
            <div className="mt-4 space-y-2">
              {[0, 1, 2].map((r) => (
                <div key={r} className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full border border-brand/25 bg-brand/10" />
                  <span className="h-1.5 flex-1 rounded-full bg-white/8" />
                  <span className="h-1.5 w-8 rounded-full bg-brand/40" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Compact geometric motif for the non-featured cards. */
function MotifVisual({ id }) {
  const Icon = pillarIcon[id === 'ai-content' ? 'AI' : 'WEB3']
  return (
    <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-xl border border-white/8 bg-white/[0.015]">
      <div className="absolute inset-0 fine-grid opacity-30" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute h-24 w-24 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.18), transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
      <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-brand/25 bg-base-200/60 text-brand transition-transform duration-500 group-hover:scale-110">
        <Icon size={26} />
      </span>
    </div>
  )
}

function FeaturedCard({ project }) {
  return (
    <Reveal>
      <article className="glass glass-hover group grid gap-6 rounded-3xl p-6 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10">
        {/* Content */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-brand">{project.index}</span>
            <span className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-widest text-brand">
              Featured
            </span>
          </div>

          <h3 className="mt-5 font-display text-4xl font-bold tracking-tightest text-white sm:text-5xl">
            {project.title}
          </h3>

          <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group/live"
            >
              Live Project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
              />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>

        {/* Visual */}
        <PlatformVisual />
      </article>
    </Reveal>
  )
}

function SecondaryCard({ project, delay }) {
  return (
    <Reveal delay={delay}>
      <article className="glass glass-hover group flex h-full flex-col rounded-3xl p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-brand">{project.index}</span>
          <span className="font-mono text-[0.62rem] uppercase tracking-widest text-zinc-600">
            Ongoing
          </span>
        </div>

        <div className="mt-5">
          <MotifVisual id={project.id} />
        </div>

        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  const [featured, ...rest] = PROJECTS

  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <SectionHeader
          index="03"
          label="Projects"
          title="Things I've built."
          intro="A selection of digital projects and experiments."
        />

        <div className="mt-14 space-y-4">
          <FeaturedCard project={featured} />

          <div className="grid gap-4 md:grid-cols-2">
            {rest.map((p, i) => (
              <SecondaryCard key={p.id} project={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
