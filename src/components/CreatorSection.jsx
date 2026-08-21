import Reveal from './Reveal'
import { PLATFORMS } from '../data/site'
import { socialIcon } from './icons'

export default function CreatorSection() {
  return (
    <section
      aria-label="Content creation"
      className="section-pad relative overflow-hidden border-y border-white/8"
    >
      {/* Ambient wash */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-64"
        style={{
          background:
            'radial-gradient(60% 100% at 50% 0%, rgba(16,185,129,0.08), transparent)',
        }}
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal
            as="h2"
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-display font-semibold tracking-tightest text-white"
          >
            <span>Create</span>
            <span className="text-brand">&rarr;</span>
            <span>Post</span>
            <span className="text-brand">&rarr;</span>
            <span className="text-grad">Grow</span>
          </Reveal>

          <Reveal
            as="p"
            delay={120}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400"
          >
            I enjoy turning ideas into digital content and experimenting with
            different formats, platforms, and creative workflows.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORMS.map((p, i) => {
            const Icon = socialIcon[p.id]
            return (
              <Reveal key={p.id} delay={i * 80}>
                <article className="glass glass-hover group h-full rounded-2xl p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-white/[0.03] text-zinc-300 transition-colors duration-500 group-hover:border-brand/40 group-hover:text-brand">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {p.text}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
