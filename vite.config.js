import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages (and local dev) serve the app under /SadinSaad/.
  // Vercel serves it at the domain root, so use '/' there.
  base: process.env.VERCEL ? '/' : '/SadinSaad/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
})
