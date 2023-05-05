import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/meta-magic/',
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  plugins: [react()],
})
