import { profile, systems } from '../data/content'
import { ArrowDownRight, Terminal, Server, ShieldCheck, Database, CheckCircle2, Activity } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-border-subtle bg-bg px-4 pb-20 pt-12 sm:px-6 md:pt-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          
          {/* Main Statement */}
          <div>
            {/* Location & Status Tag */}
            <div className="inline-flex items-center gap-2 border border-border-medium bg-bg-card px-3 py-1 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-fg-muted">{profile.location.toUpperCase()}</span>
              <span className="text-fg-faint">/</span>
              <span className="text-accent font-medium">FULL-STACK PRODUCTION SYSTEMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-fg sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Construo <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-8">sistemas de gestão</span> de missão crítica em produção.
            </h1>

            {/* Subtitle / Summary */}
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-fg-muted sm:text-lg">
              <strong className="text-fg font-semibold">{profile.name}</strong> — {profile.summary}
            </p>

            {/* Key Metric Highlights */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-y border-border-subtle py-4">
              <div>
                <div className="font-mono text-2xl font-bold text-fg sm:text-3xl">3+</div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-fg-faint">Anos de Exp.</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-accent sm:text-3xl">100%</div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-fg-faint">Casos Reais</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-tech-green sm:text-3xl">42</div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-fg-faint">Common Core</div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="group flex items-center gap-2 border border-accent bg-accent px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-bg transition-all hover:bg-transparent hover:text-accent"
              >
                <span>Explorar Sistemas</span>
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contacto"
                className="flex items-center gap-2 border border-border-medium bg-bg-card px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-fg transition-colors hover:border-fg hover:text-accent"
              >
                <span>Falar Diretamente</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-fg-faint">
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                github.com/adilsonjacinto
              </a>
              <span className="hidden sm:inline text-border-medium">·</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                linkedin.com/in/adilsonjacinto
              </a>
              <span className="hidden sm:inline text-border-medium">·</span>
              <a href={profile.website} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                adijacinto.tech
              </a>
            </div>
          </div>

          {/* Technical HUD / System Monitor Panel */}
          <div className="industrial-card border-border-medium bg-bg-card p-6 shadow-industrial">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border-subtle pb-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted">
                <Activity size={14} className="text-accent" />
                <span>telemetry_monitor.sys</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-tech-green">
                <span className="h-2 w-2 rounded-full bg-tech-green animate-blink" />
                <span>ACTIVE_NODES: 3</span>
              </div>
            </div>

            {/* Live Systems List */}
            <div className="mt-5 space-y-3">
              {systems.map((s, idx) => (
                <div
                  key={s.label}
                  className="group flex items-center justify-between border border-border-subtle bg-bg-subtle p-3.5 transition-colors hover:border-border-strong"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-fg-faint">0{idx + 1}</span>
                    <div>
                      <h3 className="font-mono text-sm font-semibold text-fg">{s.label}</h3>
                      <p className="font-mono text-xs text-fg-faint">{s.note}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-tech-green border border-tech-green/30 bg-tech-green/10 px-2 py-0.5">
                    <CheckCircle2 size={10} />
                    <span>{s.status === 'online' ? 'ONLINE' : 'SHIPPED'}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Spec Matrix Box */}
            <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border-subtle pt-4 font-mono text-[11px]">
              <div className="border border-border-subtle/70 bg-bg/50 p-2.5">
                <div className="text-fg-faint flex items-center gap-1.5 mb-1">
                  <Server size={12} className="text-accent" />
                  <span>CORE STACK</span>
                </div>
                <div className="text-fg font-medium">React · NestJS · PostgreSQL</div>
              </div>
              <div className="border border-border-subtle/70 bg-bg/50 p-2.5">
                <div className="text-fg-faint flex items-center gap-1.5 mb-1">
                  <ShieldCheck size={12} className="text-tech-cyan" />
                  <span>SECURITY</span>
                </div>
                <div className="text-fg font-medium">OAuth 2.0 · JWT · TypeORM</div>
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-fg-faint">
              <span>UPTIME: 99.98% PROD</span>
              <span>HOSTED & MAINTAINED</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
