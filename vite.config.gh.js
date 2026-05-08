import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages build config — base must match the repo name in the URL
// Live at: https://sathiyapriya04.github.io/portfolio01/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio01/',
})
