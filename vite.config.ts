import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    allowedHosts: ['.e2b.dev', '.docy.app', '.docy.dev'],
    headers: {
      'Content-Security-Policy': "frame-ancestors 'self' http://localhost:3000 https://localhost:3000 https://alpha.build.docyrus.app https://build.docyrus.app https://docyrus.app https://alpha.build.docy.app https://docy.app",
    },
  },
})
