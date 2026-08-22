/**
 * Generates the Open Graph share image (public/og.png, 1200x630) for link previews.
 *
 * This is a one-off asset generator, not part of the build. The @resvg/resvg-js
 * dependency is intentionally NOT kept in package.json to keep installs/CI lean.
 * To regenerate after editing the SVG below:
 *
 *   npm i -D @resvg/resvg-js
 *   node scripts/generate-og.mjs
 *   npm uninstall @resvg/resvg-js
 */
import { Resvg } from '@resvg/resvg-js'
import { writeFileSync } from 'node:fs'

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="50%" cy="34%" r="62%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.24"/>
      <stop offset="55%" stop-color="#10b981" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0"/>
      <stop offset="50%" stop-color="#34d399" stop-opacity="1"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#050505"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="40" y="40" width="1120" height="550" rx="28" fill="none" stroke="#10b981" stroke-opacity="0.28" stroke-width="1.5"/>
  <text x="600" y="212" text-anchor="middle" font-family="Consolas, 'Courier New', monospace" font-size="22" letter-spacing="10" fill="#34d399">P O R T F O L I O</text>
  <text x="600" y="330" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="116" font-weight="700" letter-spacing="-3" fill="#ffffff">SADIN SAAD<tspan fill="#10b981">.</tspan></text>
  <rect x="420" y="372" width="360" height="2" fill="url(#rule)"/>
  <text x="600" y="436" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="500" fill="#a1a1aa">AI Trainer &#183; Content Creator &#183; Web3 Enthusiast &#183; Digital Builder</text>
  <text x="600" y="500" text-anchor="middle" font-family="Consolas, 'Courier New', monospace" font-size="23" letter-spacing="6" fill="#34d399">AI &#183; CONTENT &#183; WEB3 &#183; BUILD</text>
  <text x="600" y="562" text-anchor="middle" font-family="Consolas, 'Courier New', monospace" font-size="21" letter-spacing="2" fill="#52525b">sadin-saad.vercel.app</text>
</svg>`

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
  background: '#050505',
})
writeFileSync('public/og.png', resvg.render().asPng())
console.log('Wrote public/og.png')
