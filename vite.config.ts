import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tanstackStart({
      tsr: {
        appDirectory: 'src',
        generatedRouteTree: 'src/routeTree.gen.ts',
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
    }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
})
