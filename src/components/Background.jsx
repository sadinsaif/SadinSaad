/* Ambient background: radial emerald glow, fine grid, drifting blobs, faint particles.
   Fixed behind all content, no pointer events, transform-only animation. */

const PARTICLES = [
  { top: '18%', left: '12%', delay: '0s', size: 3 },
  { top: '32%', left: '82%', delay: '-2s', size: 2 },
  { top: '54%', left: '24%', delay: '-4s', size: 2 },
  { top: '68%', left: '68%', delay: '-1s', size: 3 },
  { top: '80%', left: '40%', delay: '-3s', size: 2 },
  { top: '12%', left: '58%', delay: '-5s', size: 2 },
]

export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Top emerald wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 85% at 50% -12%, rgba(16,185,129,0.11), transparent 55%)',
        }}
      />

      {/* Fine grid, faded toward the bottom */}
      <div className="absolute inset-0 fine-grid mask-fade-b opacity-70" />

      {/* Drifting ambient glow */}
      <div
        className="absolute -left-40 -top-48 h-[44rem] w-[44rem] rounded-full animate-drift"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.15), transparent 62%)',
          filter: 'blur(34px)',
        }}
      />
      <div
        className="absolute top-1/2 -right-52 h-[40rem] w-[40rem] rounded-full animate-drift"
        style={{
          animationDelay: '-9s',
          background:
            'radial-gradient(circle, rgba(16,185,129,0.09), transparent 62%)',
          filter: 'blur(44px)',
        }}
      />

      {/* Faint particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-float-slow"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            background: 'rgba(52,211,153,0.65)',
            boxShadow: '0 0 8px rgba(16,185,129,0.7)',
          }}
        />
      ))}

      {/* Bottom fade to base */}
      <div
        className="absolute inset-x-0 bottom-0 h-96"
        style={{ background: 'linear-gradient(to top, #050505, transparent)' }}
      />
    </div>
  )
}
