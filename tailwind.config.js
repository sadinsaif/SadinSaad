/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#050505',
          100: '#0A0A0A',
          200: '#0D0D0D',
          300: '#141414',
          400: '#1A1A1A',
        },
        brand: {
          DEFAULT: '#10B981',
          bright: '#34D399',
          soft: '#6EE7B7',
          deep: '#065F46',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 9vw, 7.5rem)',
        'display': 'clamp(2.25rem, 5vw, 4rem)',
        'mega': 'clamp(3.5rem, 14vw, 12rem)',
      },
      letterSpacing: {
        'tightest': '-0.055em',
      },
      maxWidth: {
        content: '1240px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-16px) translateX(6px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '15%, 85%': { opacity: '1' },
          '100%': { transform: 'translateY(2000%)', opacity: '0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '70%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(3%, -4%) scale(1.05)' },
          '66%': { transform: 'translate(-3%, 3%) scale(0.97)' },
        },
      },
      animation: {
        marquee: 'marquee 34s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        scan: 'scan 7s linear infinite',
        'pulse-ring': 'pulse-ring 2.6s ease-out infinite',
        drift: 'drift 26s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
