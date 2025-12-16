import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ied_202526/' : '/',
  publicDir: 'public',
})
