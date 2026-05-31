import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  tsr: {
    appDirectory: 'src',
    generatedRouteTree: 'src/routeTree.gen.ts',
  },
  server: {
    preset: 'cloudflare-pages',
  },
  vite: {
    plugins: () => [tailwindcss(), tsConfigPaths()],
  },
})
