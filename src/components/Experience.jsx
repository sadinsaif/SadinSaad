import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { EXPERIENCE } from '../data/site'
import { pillarIcon } from './icons'

const ROLE_ICON = {
  'ai-trainer': 'AI',
  'content-creator': 'CONTENT',
  'web3-research': 'WEB3',
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-page">
        <SectionHeader index="04" label="Experience" title="What I do." />

        <div className="relative mt-14 max-w-3xl">
          {/* Timeline spine */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-0 top-2 w-px bg-gradient-to-b from-brand/50 via-white/12 to-transparent"
          />

          <ul className="space-y-5">
            {EXPERIENCE.map((exp, i) => {
              const Icon = pillarIcon[ROLE_ICON[exp.id]]
              return (
                <Reveal as="li" key={exp.id} delay={i * 100} className="relative pl-8 sm:pl-12">
                  {/* Node */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-6 grid h-4 w-4 -translate-x-1/2 place-items-center"
                  >
                    <span className="absolute h-4 w-4 rounded-full bg-brand/20" />
                    <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_#10b981]" />
                  </span>

                  <article className="glass rounded-2xl p-6 transition-colors duration-500 hover:border-brand/25 sm:p-7">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                        <Icon size={18} />
                      </span>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                        {exp.role}
                      </h3>
                    </div>

                    <p className="eyebrow-muted mt-5">Focus</p>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {exp.focus.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 text-sm text-zinc-300"
                        >
                          <span className="h-1 w-4 shrink-0 rounded-full bg-brand/60" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
