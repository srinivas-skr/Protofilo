import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  publicDir: 'public', // Forces Vite to look in public folder
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
