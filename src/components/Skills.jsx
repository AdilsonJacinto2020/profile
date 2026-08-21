import { skills } from '../data/content'
import SectionTitle from './SectionTitle'
import { Layout, Server, Database, Wrench, Shield, Check } from 'lucide-react'

const categoryIcons = {
  'Frontend': Layout,
  'Backend': Server,
  'Bases de Dados & Segurança': Database,
  'Engenharia & Ferramentas': Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border-subtle bg-bg px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle 
          index="03"
          eyebrow="Matriz Tecnológica" 
          title="Competências de Engenharia & Arquitetura"
          description="Especialização em ecossistemas modernos TypeScript/JavaScript, serviços escaláveis em Node.js/NestJS e integridade relacional SQL."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, idx) => {
            const Icon = categoryIcons[group.category] || Wrench
            return (
              <div 
                key={group.category} 
                className="reveal-on-scroll industrial-card group p-6 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-accent" />
                    <span className="font-mono text-[10px] text-fg-faint">MOD_{idx + 1}</span>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-border-strong group-hover:bg-accent transition-colors" />
                </div>

                <h3 className="mt-4 font-mono text-xs font-bold uppercase tracking-wider text-fg group-hover:text-accent transition-colors">
                  {group.category}
                </h3>

                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li 
                      key={item} 
                      className="flex items-center justify-between border-b border-border-subtle/40 pb-2 text-xs font-mono text-fg-muted hover:text-fg transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="h-1 w-1 bg-accent" />
                        {item}
                      </span>
                      <span className="text-[10px] text-fg-faint uppercase font-sans">Ready</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
