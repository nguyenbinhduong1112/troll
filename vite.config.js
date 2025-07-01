import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect if running on Vercel or GitHub Pages
const isVercel = process.env.VERCEL === '1'

export default defineConfig({
  base: isVercel ? '/' : '/troll/',
  plugins: [react()],
})
