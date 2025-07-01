import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/troll/',
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/troll/',
})
