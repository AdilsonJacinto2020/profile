import { useLoaderData, Link } from 'react-router-dom'
import { projects } from '../data/content'
import SectionTitle from '../components/SectionTitle'
import { ArrowLeft, CheckCircle2, Layers, Server, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react'

// Data Router Loader with params
export async function projectLoader({ params }) {
  const project = projects.find((p) => p.id === params.id)
  if (!project) {
    throw new Response('Projeto não encontrado', { status: 404 })
  }
  return { project }
}

export default function ProjectDetailPage() {
  const { project } = useLoaderData()

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-mono text-xs text-fg-muted hover:text-accent transition-colors border border-border-subtle bg-bg-card px-3 py-1.5 mb-8"
      >
        <ArrowLeft size={14} />
        <span>VOLTAR AO INÍCIO</span>
      </Link>

      <div className="industrial-card border-border-medium bg-bg-card p-6 sm:p-10 shadow-card">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-subtle pb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden="true">{project.emoji}</span>
            <div>
              <h1 className="font-display text-2xl font-bold text-fg sm:text-3xl">
                {project.title}
              </h1>
              <p className="font-mono text-xs text-accent mt-0.5">{project.client}</p>
            </div>
          </div>

          <span
            className={`border px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider ${
              project.status === 'Em Produção'
                ? 'border-tech-green/30 bg-tech-green/10 text-tech-green'
                : 'border-accent/30 bg-accent/10 text-accent'
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Overview */}
        <div className="mt-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-fg-faint mb-3">
            VISÃO GERAL DO SISTEMA
          </h2>
          <p className="font-body text-base leading-relaxed text-fg-muted sm:text-lg">
            {project.description}
          </p>
        </div>

        {/* Modules & Architecture Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Modules */}
          <div className="border border-border-subtle bg-bg-subtle p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-fg mb-4 border-b border-border-subtle pb-2">
              <Layers size={14} className="text-accent" />
              <span>Módulos & Capacidades</span>
            </div>
            <ul className="space-y-2">
              {project.modules.map((m) => (
                <li key={m} className="flex items-center gap-2 font-mono text-xs text-fg-muted">
                  <CheckCircle2 size={13} className="text-tech-green" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="border border-border-subtle bg-bg-subtle p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-fg mb-4 border-b border-border-subtle pb-2">
              <Server size={14} className="text-tech-cyan" />
              <span>Stack de Engenharia</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="border border-border-medium bg-bg px-2.5 py-1 font-mono text-xs text-fg font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Callout */}
        {project.impact && (
          <div className="mt-8 border-l-2 border-accent bg-bg-subtle p-5 font-mono text-xs sm:text-sm text-fg-muted">
            <span className="font-bold text-fg">Impacto em Produção: </span>
            {project.impact}
          </div>
        )}

        {/* Action button */}
        <div className="mt-10 pt-6 border-t border-border-subtle flex justify-end">
          <a
            href="/#contacto"
            className="flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-accent"
          >
            <span>Solicitar Sistema Semelhante</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
