import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Recycle, Lightbulb, ChevronDown, Sparkles, Menu, X } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

// ─── Assets (Wix CDN) ─────────────────────────────────────────────────────────
const NEXTONE_LOGO =
  'https://static.wixstatic.com/media/a95e83_de38a145a04c459a800a50ad7658e6b7~mv2.png/v1/fill/w_254,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nextone.png'
const VIKAFLEX_LOGO =
  'https://static.wixstatic.com/media/a95e83_1c5a3a631b5148148eaf534cbeb198b2~mv2.png/v1/fill/w_328,h_268,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IV_Vikaflex_1cor_black.png'
const VIKAFLEX_SELO =
  'https://static.wixstatic.com/media/a95e83_397780850cdb4d1abd6eea6ea13553fd~mv2.png/v1/fill/w_212,h_212,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SELOS%20FINAIS7.png'
const NEXTONE_SELO =
  'https://static.wixstatic.com/media/a95e83_8b5c5535a27f4a638ca67c056e7cb9c3~mv2.png/v1/crop/x_0,y_0,w_691,h_596/fill/w_224,h_194,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Artboard%201_2x.png'
const MARCUS_FOTO =
  'https://static.wixstatic.com/media/a95e83_cf73e39d208c4e58be4bd7847f0d9d26~mv2.jpg/v1/fill/w_253,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PHOTO-2020-06-30-18-52-06_edited_edited_.jpg'

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Nossos Serviços', id: 'servicos' },
  { label: 'Nossos Clientes', id: 'clientes' },
  { label: 'Oportunidades', id: 'oportunidades' },
]

const STATS = [
  { value: '20+', label: 'anos' },
  { value: '1600°C', label: 'processamento' },
  { value: '10+', label: 'clientes' },
  { value: '01', label: 'spin-off' },
]

const SERVICES = [
  {
    icon: Recycle,
    title: 'Aproveitamento de Rejeitos',
    description:
      'A Economia Circular impõe às empresas o abandono das tradicionais práticas de estabilização e descarte de rejeitos industriais. Com base na tecnologia WALK, desenvolvemos processos específicos para cada tipo de rejeito, transformando passivos ambientais em novos produtos com valor de mercado.',
    subject: 'Aproveitamento de Rejeitos',
  },
  {
    icon: Lightbulb,
    title: 'Gestão da Inovação',
    description:
      'Empresas estão sendo forçadas a operar de maneiras radicalmente novas. Nosso programa de capacitação e diagnóstico em gestão da inovação equipa equipes com metodologias e ferramentas para criar, proteger e explorar inovações de forma sustentável.',
    subject: 'Gestão da Inovação',
  },
]

// URLs dos logos precisam ser preenchidas com as IDs reais do Wix CDN
const CLIENTS = [
  { name: 'Nexa Resources', logo: '' },
  { name: 'Casagrande', logo: '' },
  { name: 'FGV', logo: '' },
  { name: 'Michelin', logo: '' },
  { name: 'Eternit', logo: '' },
  { name: 'Carboox', logo: '' },
  { name: 'SENAI', logo: '' },
  { name: 'Fundação COPPETEC', logo: '' },
  { name: 'Principal', logo: '' },
  { name: 'CT Gás', logo: '' },
]

const TESTIMONIALS = [
  {
    name: 'Rodrigo Gomes',
    role: 'Gerente Geral de Inovação e Energia | Nexa Resources',
    initials: 'RG',
    text: 'Através do programa Mining Lab a KD pôde agregar seu conhecimento às necessidades da Nexa de forma a viabilizar o desenvolvimento de uma tecnologia inovadora de processamento de resíduos minero-metalúrgicos em materiais vitro-cerâmicos para aplicação como piso e revestimento. O projeto segue a filosofia de Economia Circular reaproveitando materiais que ficavam depositados em novos mercados.',
  },
  {
    name: 'Lucimar Dantas',
    role: 'Gerente de Articulações Corporativas | Parque Tecnológico UFRJ',
    initials: 'LD',
    text: 'Já faz tempo que a KD está na jornada da transformação de resíduos industriais em produtos, desde uma época em que o conceito de economia circular ainda não existia. O time é enxuto, mas grande é sua capacidade de articulação no meio científico aos desafios empresariais para criar novas rotas de transformação que criam valor para a indústria, o consumidor e o planeta.',
  },
  {
    name: 'Nilson Schwartz da Silva',
    role: 'Diretor de Marketing e Produto | T-minas Minerais Industrias',
    initials: 'NS',
    text: 'A capacidade da KD de identificar o potencial de aplicação de rejeitos minerais, formular o produto, estabelecer seu processo de fabricação e criar estratégias para posicioná-lo no mercado, integrando todas essas etapas, foi um grande aprendizado. Compreendemos melhor o que importa de fato em um projeto de transformação de resíduos em produtos de valor.',
  },
  {
    name: 'Chrysler Guimarães',
    role: 'Especialista em Desenvolvimento de Produtos | CSN',
    initials: 'CG',
    text: 'A KD do Brasil nos auxiliou com sua expertise na fase de seleção e classificação de projetos destinados a desenvolver aplicações industriais inovadoras para o programa Inova Mineral do BNDES e FINEP. Uma empresa brasileira com atividades de PD&I que segue contribuindo com as políticas de inovação e sustentabilidade para criar valor para os negócios.',
  },
  {
    name: 'Cayo Moraes',
    role: 'Gestor Executivo de Operação e PDI | Energia Pecém',
    initials: 'CM',
    text: 'Foi possível comprovar através da prova de conceito que realizamos com a KD que as cinzas de carvão de nossas caldeiras, depositadas como resíduo, foram imobilizadas com a tecnologia empregada, transformando os resíduos em uma rica fonte de matéria-prima para fabricação de porcelanatos e vitrocerâmicas com alto valor agregado, os quais precisam ainda ser testados em linha de produção.',
  },
]

const OPPORTUNITIES = [
  {
    logo: VIKAFLEX_LOGO,
    seal: VIKAFLEX_SELO,
    sealLabel: 'HousingPact 2021 Vencedor',
    name: 'VIKAFLEX',
    headline: 'Um novo material para a construção civil.',
    description:
      'Leve, impermeável, incombustível e resistente, essa placa cerâmica substitui mais de 50 tijolos convencionais, oferecendo desempenho superior com menor impacto ambiental na construção.',
    pitchPdf: '#',
  },
  {
    logo: NEXTONE_LOGO,
    seal: NEXTONE_SELO,
    sealLabel: 'Vencedor Mining Lab – Nexa 2018',
    name: 'NEXTONE',
    headline: 'O rejeito como matéria-prima industrial.',
    description:
      'Vitrocerâmica de alta resistência ao risco e ao desgaste, para uso em pisos e paredes. Desenvolvida a partir de rejeitos industriais processados a 1.600°C em planta especializada.',
    pitchPdf: '#',
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────
const MAILTO = 'mailto:contato@kddobrasil.com.br'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="relative z-50 bg-transparent"
    >
      <div className="container-x flex items-start justify-between py-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="KD do Brasil — início"
        >
          <img src="/logo.gif" alt="KD do Brasil" className="h-20 w-auto" loading="eager" />
        </button>

        <nav className="hidden items-start gap-8 pt-1 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <a
            href={`${MAILTO}?subject=Contato`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Fale Conosco
          </a>
        </nav>

        <button
          className="pt-1 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 md:hidden">
          <div className="container-x flex flex-col gap-4 py-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollTo(link.id)
                  setOpen(false)
                }}
                className="text-left text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`${MAILTO}?subject=Contato`}
              className="text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-background">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.76 0.10 75 / 0.06), transparent)',
        }}
      />

      <div className="container-x relative py-16 lg:py-24">
        <p className="eyebrow mb-6">KD do Brasil · Desde 1998</p>

        <h1 className="font-display mb-6 max-w-3xl text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Criamos processos para transformar resíduos industriais em novos produtos.
        </h1>

        <h2 className="mb-10 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Gestão, capacitação e diagnóstico em inovação para empresas são nossas competências.
        </h2>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('servicos')}
            className="bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Conheça nossos serviços
          </button>
          <a
            href={`${MAILTO}?subject=Falar com um especialista`}
            className="border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Falar com um especialista
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-10 border-t border-border pt-10">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground">
          <span className="text-xs tracking-wider">Role para descobrir</span>
          <ChevronDown size={18} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

// ─── Sobre ────────────────────────────────────────────────────────────────────
function Sobre() {
  return (
    <section id="sobre" className="bg-background py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Sobre</p>
            <h2 className="font-display text-3xl text-foreground lg:text-4xl">
              Inovação com propósito desde 1998.
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground lg:col-span-7 lg:col-start-6">
            <p>
              Desde 1998, a{' '}
              <strong className="text-foreground">Knowledge Direction do Brasil</strong> atua em
              novas abordagens e processos para imobilização e aproveitamento de rejeitos
              industriais, bem como na construção de conhecimento em gestão da inovação.
            </p>
            <p>
              Com a agilidade de uma estrutura enxuta, avaliamos e respondemos — com investimentos
              compatíveis aos benefícios — às demandas mais complexas em aproveitamento de rejeitos
              e em gestão da inovação.
            </p>
            <p>
              Essa capacidade tem origem na formação e experiência de nosso corpo técnico que
              conecta o universo acadêmico ao mercado, por meio de um hub de inovação, que acessa
              diferentes competências relacionadas aos desafios propostos.
            </p>

            <div className="mt-8 border border-border p-6">
              <div className="flex items-start gap-4">
                <Sparkles size={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Nessa trajetória, a KD em 2021, gera uma spin-off —{' '}
                    <strong className="text-foreground">NEXTONE</strong> — com infraestrutura
                    adequada ao processamento de materiais a alta temperatura (1.600ºC), ampliando
                    as possibilidades de transformação de rejeitos industriais em produtos de alto
                    valor agregado.
                  </p>
                  <img
                    src={NEXTONE_LOGO}
                    alt="NEXTONE"
                    className="mt-4 max-h-8"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Serviços ─────────────────────────────────────────────────────────────────
function Servicos() {
  return (
    <section id="servicos" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <p className="eyebrow mb-4">Serviços</p>
        <h2 className="font-display mb-12 text-3xl text-gray-900 lg:text-4xl">O que fazemos.</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group flex flex-col border border-gray-200 p-8 transition-colors hover:border-primary"
              >
                <Icon size={28} className="mb-4 text-primary" />
                <h3 className="font-display mb-4 text-xl text-gray-900">{service.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <a
                  href={`${MAILTO}?subject=${encodeURIComponent(service.subject)}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                >
                  Quero em minha empresa →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Clientes ─────────────────────────────────────────────────────────────────
function Clientes() {
  return (
    <section id="clientes" className="bg-background py-24 lg:py-32">
      <div className="container-x">
        <p className="eyebrow mb-4">Clientes</p>
        <h2 className="font-display mb-12 text-3xl text-foreground lg:text-4xl">
          Empresas que confiam na KD.
        </h2>

        <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-5">
          {CLIENTS.map((client) => (
            <div key={client.name} className="flex items-center justify-center bg-background p-8">
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain opacity-80 transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              ) : (
                <span className="text-center text-xs font-semibold text-muted-foreground">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Depoimentos ──────────────────────────────────────────────────────────────
function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="flex flex-col border border-border p-6">
      <p className="font-display mb-4 text-3xl leading-none text-primary">"</p>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

function Depoimentos() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-x">
        <p className="eyebrow mb-12">Depoimentos</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-[66.7%]">
          {TESTIMONIALS.slice(3).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Oportunidades ────────────────────────────────────────────────────────────
function Oportunidades() {
  return (
    <section id="oportunidades" className="bg-primary py-24 lg:py-32">
      <div className="container-x">
        <p className="eyebrow mb-4 text-center text-primary-foreground/70">Oportunidades</p>
        <h2 className="font-display mb-4 text-center text-3xl text-primary-foreground lg:text-4xl">
          Tecnologias para investir.
        </h2>
        <p className="mb-12 text-center text-primary-foreground/80 mx-auto max-w-xl">
          Spin-offs com tecnologias proprietárias e mercado validado, abertas a investidores
          estratégicos.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {OPPORTUNITIES.map((opp) => (
            <div
              key={opp.name}
              className="border border-primary-foreground/20 bg-primary-foreground/5 p-8 transition-colors hover:border-primary-foreground/50"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <img
                  src={opp.logo}
                  alt={opp.name}
                  className="max-h-10 max-w-[180px] object-contain"
                  loading="lazy"
                />
                <img
                  src={opp.seal}
                  alt={opp.sealLabel}
                  className="max-h-16 max-w-[80px] object-contain opacity-80"
                  loading="lazy"
                />
              </div>

              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
                {opp.sealLabel}
              </p>
              <h3 className="font-display mb-3 text-2xl text-primary-foreground">{opp.headline}</h3>
              <p className="mb-6 text-sm leading-relaxed text-primary-foreground/75">
                {opp.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={opp.pitchPdf}
                  className="border border-primary-foreground/40 px-4 py-2 text-sm text-primary-foreground/80 transition-colors hover:border-primary-foreground hover:text-primary-foreground"
                >
                  Ver pitch deck
                </a>
                <a
                  href={`${MAILTO}?subject=${encodeURIComponent(`Quero investir – ${opp.name}`)}`}
                  className="bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
                >
                  Quero investir →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`${MAILTO}?subject=Quero investir agora`}
            className="bg-primary px-8 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Quero investir agora
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Time ─────────────────────────────────────────────────────────────────────
function Time() {
  return (
    <section id="time" className="bg-surface py-24 lg:py-32">
      <div className="container-x">
        <p className="eyebrow mb-12 text-center">Time</p>

        <div className="mx-auto max-w-sm text-center">
          <div className="group mx-auto mb-6 h-64 w-64 overflow-hidden border border-border">
            <img
              src={MARCUS_FOTO}
              alt="Marcus Vinícius"
              className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              loading="lazy"
            />
          </div>

          <p className="eyebrow mb-1">CEO & Fundador</p>
          <h3 className="font-display mb-4 text-2xl text-foreground">Marcus Vinícius</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Engenheiro Químico, empreendedor e apaixonado pelo que faz. A trajetória pela UFRJ (EQ,
            IQ e COPPE) e USP (DSc. Eng.) construiu uma sólida cultura de inovação.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Contato ──────────────────────────────────────────────────────────────────
function Contato() {
  return (
    <section id="contato" className="bg-background py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Contato</p>
            <h2 className="font-display mb-6 text-3xl text-foreground lg:text-4xl">
              Vamos conversar?
            </h2>
            <p className="text-muted-foreground">
              Entre em contato e descubra como a KD do Brasil pode ajudar sua empresa a transformar
              desafios em oportunidades de inovação.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={`${MAILTO}?subject=Aproveitamento de Rejeitos`}
              className="group flex items-center justify-between border border-border p-6 transition-colors hover:border-primary"
            >
              <div>
                <p className="font-semibold text-foreground">Aproveitamento de Rejeitos</p>
                <p className="text-sm text-muted-foreground">Transforme seus rejeitos industriais</p>
              </div>
              <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href={`${MAILTO}?subject=Gestão da Inovação`}
              className="group flex items-center justify-between border border-border p-6 transition-colors hover:border-primary"
            >
              <div>
                <p className="font-semibold text-foreground">Gestão da Inovação</p>
                <p className="text-sm text-muted-foreground">Capacite sua equipe em inovação</p>
              </div>
              <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href={`${MAILTO}?subject=Contato Geral`}
              className="flex items-center justify-center bg-primary p-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              contato@kddobrasil.com.br →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <img src="/logo.gif" alt="KD do Brasil" className="h-8 w-auto" loading="lazy" />
            <p className="mt-1 text-sm text-muted-foreground">
              © {year} Knowledge Direction do Brasil. Desde 1998.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {[
              { id: 'sobre', label: 'Sobre' },
              { id: 'servicos', label: 'Serviços' },
              { id: 'clientes', label: 'Clientes' },
              { id: 'oportunidades', label: 'Oportunidades' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Clientes />
        <Depoimentos />
        <Oportunidades />
        <Time />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
