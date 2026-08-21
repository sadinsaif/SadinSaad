import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { ABOUT_CARDS } from '../data/site'
import { pillarIcon } from './icons'

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <SectionHeader index="01" label="About" title="A little about me." />

        {/* Two-column: statement / narrative */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl">
              I explore <span className="text-grad">AI</span>, create{' '}
              <span className="text-grad">content</span>, and build for the{' '}
              <span className="text-grad">digital world</span>.
            </p>
            <p className="mt-8 border-l-2 border-brand/40 pl-5 font-mono text-sm leading-relaxed text-zinc-400">
              &ldquo;Stay curious. Keep experimenting. Build something real.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:pt-2">
            <p className="text-lg leading-relaxed text-zinc-300">
              I&apos;m Sadin Saad, an AI Trainer and digital creator interested in
              artificial intelligence, content creation, technology, and Web3. I
              enjoy experimenting with new tools, learning emerging technologies,
              and turning ideas into practical digital projects.
            </p>
          </Reveal>
        </div>

        {/* Pillar cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_CARDS.map((card, i) => {
            const Icon = pillarIcon[card.title.toUpperCase()]
            return (
              <Reveal key={card.id} delay={i * 80}>
                <article className="glass glass-hover group h-full rounded-2xl p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand transition-transform duration-500 group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {card.text}
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
