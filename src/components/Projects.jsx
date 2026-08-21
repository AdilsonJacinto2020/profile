import { Link } from 'react-router-dom'
import { projects as defaultProjects } from '../data/content'
import SectionTitle from './SectionTitle'
import { Server, Database, Layers, ArrowUpRight, Shield, Cpu, ChevronRight } from 'lucide-react'

export default function Projects({ projects = defaultProjects }) {
  return (
    <section id="projetos" className="border-b border-border-subtle bg-bg px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          index="01"
          eyebrow="Portfolio de Produção"
          title="Sistemas em uso real e missão crítica"
          description="Sistemas concebidos, desenvolvidos e implantados de ponta a ponta para clientes reais em Angola. Foco em estabilidade, auditoria de dados e fluxos operacionais."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <article
              key={p.id}
              className="industrial-card group flex flex-col justify-between p-6 hover:shadow-glow"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-accent">0{idx + 1}</span>
                    <span className="font-mono text-[11px] text-fg-faint uppercase">SYS_REF</span>
                  </div>
                  <span
                    className={`border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${
                      p.status === 'Em Produção'
                        ? 'border-tech-green/30 bg-tech-green/10 text-tech-green'
                        : 'border-accent/30 bg-accent/10 text-accent'
                    }`}
                  >
                    {p.status}
                  </span>
                </div>

                {/* Title & Client */}
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl" aria-hidden="true">{p.emoji}</span>
                    <h3 className="font-display text-lg font-bold text-fg group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-1 font-mono text-xs text-fg-muted">{p.client}</p>
                </div>

                {/* Description */}
                <p className="mt-4 font-body text-sm leading-relaxed text-fg-muted">
                  {p.description}
                </p>

                {/* Modules / Features */}
                <div className="mt-6 border-t border-border-subtle/60 pt-4">
                  <div className="mb-2 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-fg-faint">
                    <Layers size={12} className="text-accent" />
                    <span>Módulos Implementados</span>
                  </div>
                  <ul className="space-y-1.5">
                    {p.modules.map((m) => (
                      <li key={m} className="flex items-center gap-2 font-mono text-xs text-fg-muted">
                        <span className="h-1 w-1 bg-accent" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Stack & Impact & Detail Link */}
              <div className="mt-8 space-y-4 border-t border-border-subtle pt-4">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="border border-border-subtle bg-bg-subtle px-2 py-0.5 font-mono text-[10px] text-fg-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Impact callout */}
                {p.impact && (
                  <div className="border-l-2 border-accent bg-bg-subtle p-3 font-mono text-xs text-fg-muted leading-relaxed">
                    <span className="font-semibold text-fg">Impacto: </span>
                    {p.impact}
                  </div>
                )}

                {/* Detail Page Link via Data Router */}
                <div className="pt-2">
                  <Link
                    to={`/projetos/${p.id}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent hover:underline"
                  >
                    <span>Ver Especificação Completa</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
