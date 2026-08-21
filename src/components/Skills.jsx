import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { SKILL_GROUPS } from '../data/site'
import { pillarIcon } from './icons'

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-page">
        <SectionHeader
          index="02"
          label="Skills"
          title="What I work with."
          intro="Areas of work and interest across AI, content, Web3, and digital building — the tools and practices I actively explore."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = pillarIcon[group.id.toUpperCase()]
            return (
              <Reveal key={group.id} delay={(i % 2) * 100}>
                <article className="glass group h-full rounded-2xl p-6 transition-colors duration-500 hover:border-brand/25 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {group.title}
                    </h3>
                    <span className="ml-auto font-mono text-xs text-zinc-600">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="tag hover:border-brand/40 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
