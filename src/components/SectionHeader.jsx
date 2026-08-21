import Reveal from './Reveal'

/**
 * Numbered section header. The index (01, 02…) encodes the guided
 * order of the portfolio — a real sequence, not decoration.
 */
export default function SectionHeader({
  index,
  label,
  title,
  intro,
  center = false,
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal
        className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}
      >
        <span className="eyebrow">{index}</span>
        <span className="h-px w-8 bg-brand/40" />
        <span className="eyebrow-muted">{label}</span>
      </Reveal>

      <Reveal
        as="h2"
        delay={80}
        className="mt-5 text-display font-semibold tracking-tightest text-white"
      >
        {title}
      </Reveal>

      {intro && (
        <Reveal
          as="p"
          delay={140}
          className={`mt-4 text-base leading-relaxed text-zinc-400 ${
            center ? 'mx-auto' : ''
          }`}
        >
          {intro}
        </Reveal>
      )}
    </div>
  )
}
