import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import '../styles.css'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'KD do Brasil – Consultoria em Inovação e Economia Circular' },
      {
        name: 'description',
        content:
          'Há mais de 20 anos transformando resíduos industriais em novos produtos e capacitando empresas em gestão da inovação.',
      },
      {
        property: 'og:title',
        content: 'KD do Brasil – Consultoria em Inovação e Economia Circular',
      },
      {
        property: 'og:description',
        content:
          'Processos para transformar resíduos industriais em novos produtos. Gestão, capacitação e diagnóstico em inovação.',
      },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&display=swap',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
