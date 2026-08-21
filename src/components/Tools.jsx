import { TOOLS } from '../data/site'

export default function Tools() {
  const loop = [...TOOLS, ...TOOLS]

  return (
    <section
      aria-label="Tools I explore"
      className="border-y border-white/8 bg-base-100/40 py-12"
    >
      <div className="container-page">
        <p className="eyebrow-muted text-center">Tools I Explore</p>
      </div>

      <div className="relative mt-8 overflow-hidden mask-fade-x">
        <ul className="flex w-max animate-marquee gap-3 pause-hover">
          {loop.map((tool, i) => (
            <li
              key={`${tool}-${i}`}
              aria-hidden={i >= TOOLS.length ? 'true' : undefined}
              className="group flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-zinc-400 transition-colors duration-300 hover:border-brand/40 hover:text-brand"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 transition-colors duration-300 group-hover:bg-brand" />
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
