import Reveal from './Reveal'

/* Outlined (ghost) treatment for the middle word */
const OUTLINE = {
  color: 'transparent',
  WebkitTextStroke: '1.5px rgba(255,255,255,0.22)',
}

export default function Philosophy() {
  return (
    <section
      aria-label="Personal philosophy"
      className="section-pad relative overflow-hidden"
    >
      <div className="container-page">
        <div className="font-display font-bold uppercase leading-[0.9] tracking-tightest text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
          <Reveal as="p" className="text-white">
            Create.
          </Reveal>
          <Reveal as="p" delay={120} style={OUTLINE}>
            Experiment.
          </Reveal>
          <Reveal as="p" delay={240} className="text-grad">
            Build.
          </Reveal>
        </div>

        <Reveal
          as="p"
          delay={360}
          className="mt-12 max-w-xl text-lg leading-relaxed text-zinc-400 lg:ml-auto lg:text-right"
        >
          Technology moves fast. I believe curiosity, experimentation, and
          consistent building are the best ways to keep moving forward.
        </Reveal>
      </div>
    </section>
  )
}
