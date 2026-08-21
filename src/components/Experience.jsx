import { experience, education, languages } from '../data/content'
import SectionTitle from './SectionTitle'
import { Briefcase, GraduationCap, Globe, Award, Calendar } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experiencia" className="border-b border-border-subtle bg-bg-subtle px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle 
          index="04"
          eyebrow="Trajetória & Background" 
          title="Experiência em Produção & Formação" 
          description="Histórico de desenvolvimento de software em produção e rigor metodológico adquirido no Common Core da 42."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Experience Column */}
          <div>
            <div className="mb-6 flex items-center gap-2 border-b border-border-subtle pb-3">
              <Briefcase size={16} className="text-accent" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-fg">
                Histórico Profissional
              </h3>
            </div>

            <div className="space-y-4">
              {experience.map((e) => (
                <div key={e.org} className="industrial-card border-border-medium bg-bg p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border-subtle pb-3">
                    <div>
                      <h4 className="font-display text-base font-bold text-fg">{e.org}</h4>
                      <p className="font-mono text-xs text-accent">{e.role}</p>
                    </div>
                    <div className="flex items-center gap-1.5 border border-border-subtle bg-bg-subtle px-2 py-0.5 font-mono text-[11px] text-fg-muted">
                      <Calendar size={11} />
                      <span>{e.period}</span>
                    </div>
                  </div>
                  <p className="mt-4 font-body text-sm leading-relaxed text-fg-muted">
                    {e.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages Column */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="mb-6 flex items-center gap-2 border-b border-border-subtle pb-3">
                <GraduationCap size={16} className="text-tech-cyan" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-fg">
                  Formação & Certificação
                </h3>
              </div>

              <div className="space-y-3">
                {education.map((ed) => (
                  <div 
                    key={ed.org} 
                    className="industrial-card border-border-subtle bg-bg p-4 transition-colors hover:border-border-strong"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-2 w-2 shrink-0 rounded-none bg-accent" />
                      <div>
                        <p className="font-mono text-sm font-semibold text-fg">{ed.org}</p>
                        <p className="font-body text-xs text-fg-muted mt-0.5">{ed.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="mb-6 flex items-center gap-2 border-b border-border-subtle pb-3">
                <Globe size={16} className="text-tech-green" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-fg">
                  Idiomas & Comunicação
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {languages.map((l) => (
                  <div
                    key={l.name}
                    className="industrial-card border-border-subtle bg-bg p-3.5 text-center font-mono"
                  >
                    <p className="text-xs font-bold text-fg">{l.name}</p>
                    <p className="mt-1 text-[10px] text-accent font-medium">{l.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
