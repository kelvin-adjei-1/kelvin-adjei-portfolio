import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kelvin-adjei-portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})
