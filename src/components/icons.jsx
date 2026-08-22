/* Inline SVG icon set — no icon library, all inherit currentColor. */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ size = 24, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export const ArrowUpRight = (p) => (
  <Svg {...p}>
    <path {...stroke} d="M7 17 17 7M8 7h9v9" />
  </Svg>
)

export const ArrowDown = (p) => (
  <Svg {...p}>
    <path {...stroke} d="M12 5v14M6 13l6 6 6-6" />
  </Svg>
)

export const ExternalLink = (p) => (
  <Svg {...p}>
    <path {...stroke} d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </Svg>
)

export const Menu = (p) => (
  <Svg {...p}>
    <path {...stroke} d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
)

export const Close = (p) => (
  <Svg {...p}>
    <path {...stroke} d="M6 6l12 12M18 6 6 18" />
  </Svg>
)

export const FileText = (p) => (
  <Svg {...p}>
    <path {...stroke} d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path {...stroke} d="M14 3v5h5M8.5 13h7M8.5 17h7" />
  </Svg>
)

/* ---- Pillar glyphs ---- */

export const Spark = (p) => (
  <Svg {...p}>
    <path {...stroke} d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path {...stroke} d="M12 8.5 13.2 11l2.3 1-2.3 1L12 15.5 10.8 13l-2.3-1 2.3-1L12 8.5Z" />
  </Svg>
)

export const PlayCard = (p) => (
  <Svg {...p}>
    <rect {...stroke} x="3" y="5" width="18" height="14" rx="3" />
    <path {...stroke} d="M10.5 9.5v5l4-2.5-4-2.5Z" />
  </Svg>
)

export const Cube = (p) => (
  <Svg {...p}>
    <path {...stroke} d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
    <path {...stroke} d="M4 7.5 12 12l8-4.5M12 12v9" />
  </Svg>
)

export const CodeBrackets = (p) => (
  <Svg {...p}>
    <path {...stroke} d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" />
  </Svg>
)

export const pillarIcon = { AI: Spark, CONTENT: PlayCard, WEB3: Cube, BUILD: CodeBrackets }

/* ---- Contact / social (brand marks, filled) ---- */

export const Mail = (p) => (
  <Svg {...p}>
    <rect {...stroke} x="3" y="5" width="18" height="14" rx="2.5" />
    <path {...stroke} d="m4 7 8 6 8-6" />
  </Svg>
)

export const Github = ({ size = 24, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M12 1.8a10.2 10.2 0 0 0-3.22 19.88c.5.1.7-.22.7-.48v-1.7c-2.85.62-3.45-1.2-3.45-1.2-.46-1.18-1.14-1.5-1.14-1.5-.93-.63.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.92 1.57 2.4 1.12 2.98.86.1-.67.36-1.12.65-1.38-2.27-.26-4.66-1.14-4.66-5.06 0-1.12.4-2.03 1.05-2.75-.1-.26-.45-1.3.1-2.7 0 0 .86-.28 2.8 1.05a9.7 9.7 0 0 1 5.1 0c1.94-1.33 2.8-1.05 2.8-1.05.55 1.4.2 2.44.1 2.7.65.72 1.05 1.63 1.05 2.75 0 3.93-2.4 4.8-4.68 5.05.37.32.7.94.7 1.9v2.82c0 .27.18.59.7.48A10.2 10.2 0 0 0 12 1.8Z" />
  </svg>
)

export const XLogo = ({ size = 24, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M17.53 3H20.5l-6.5 7.43L21.75 21h-6l-4.7-6.14L5.66 21H2.68l6.96-7.95L2.25 3h6.15l4.25 5.62L17.53 3Zm-1.05 16.2h1.65L7.6 4.7H5.83l10.65 14.5Z" />
  </svg>
)

export const Instagram = ({ size = 24, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...p}>
    <rect {...stroke} x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle {...stroke} cx="12" cy="12" r="4" />
    <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
  </svg>
)

export const TikTok = ({ size = 24, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v5.9c0 3.3-2.4 5.6-5.5 5.6a5.4 5.4 0 0 1-5.4-5.5c0-3.2 2.6-5.4 5.9-5.1v2.7c-.4-.1-.9-.2-1.3-.1-1.4.1-2.4 1.2-2.3 2.7a2.5 2.5 0 0 0 5-.2V3h3.7Z" />
  </svg>
)

export const YouTube = ({ size = 24, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...p}>
    <rect {...stroke} x="2.5" y="6" width="19" height="12" rx="3.5" />
    <path d="M10.5 9.2v5.6l4.6-2.8-4.6-2.8Z" fill="currentColor" />
  </svg>
)

export const Discord = ({ size = 24, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
)

export const socialIcon = { x: XLogo, github: Github, instagram: Instagram, tiktok: TikTok, youtube: YouTube, discord: Discord }
