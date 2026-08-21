import { useState } from 'react'
import { profile } from '../data/content'
import SectionTitle from './SectionTitle'
import { Mail, MessageSquare, Code2, Globe, Send, CheckCircle2, AlertTriangle, ArrowUpRight } from 'lucide-react'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data?.error || 'Falha ao enviar a mensagem.')
      }

      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Algo correu mal. Tenta novamente.')
    }
  }

  return (
    <section id="contacto" className="border-b border-border-subtle bg-bg px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          index="05"
          eyebrow="Protocolo de Contacto"
          title="Iniciar Conversa ou Solicitar Orçamento"
          description="Tem um fluxo manual para digitalizar, um sistema em tempo real para desenvolver ou uma proposta de engenharia? Entre em contacto."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Direct channels column */}
          <div className="reveal-on-scroll space-y-4">
            <div className="industrial-card border-border-medium bg-bg-card p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-fg border-b border-border-subtle pb-3">
                Canais Diretos de Comunicação
              </h3>

              <div className="mt-5 space-y-3 font-mono text-xs">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center justify-between border border-border-subtle bg-bg p-3.5 hover:border-accent transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-accent" />
                    <div>
                      <div className="text-[10px] text-fg-faint uppercase">E-mail Principal</div>
                      <div className="text-fg group-hover:text-accent transition-colors">{profile.email}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-fg-faint group-hover:text-accent" />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-border-subtle bg-bg p-3.5 hover:border-tech-green transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare size={16} className="text-tech-green" />
                    <div>
                      <div className="text-[10px] text-fg-faint uppercase">WhatsApp Direto</div>
                      <div className="text-fg group-hover:text-tech-green transition-colors">{profile.whatsapp}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-fg-faint group-hover:text-tech-green" />
                </a>

                {/* GitHub */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-border-subtle bg-bg p-3.5 hover:border-border-strong transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Code2 size={16} className="text-fg-muted" />
                    <div>
                      <div className="text-[10px] text-fg-faint uppercase">GitHub Profile</div>
                      <div className="text-fg-muted group-hover:text-fg transition-colors">github.com/adilsonjacinto</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-fg-faint group-hover:text-fg" />
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-border-subtle bg-bg p-3.5 hover:border-tech-cyan transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="text-tech-cyan" />
                    <div>
                      <div className="text-[10px] text-fg-faint uppercase">LinkedIn Network</div>
                      <div className="text-fg-muted group-hover:text-fg transition-colors">linkedin.com/in/adilsonjacinto</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-fg-faint group-hover:text-tech-cyan" />
                </a>
              </div>

              <div className="mt-6 border-t border-border-subtle pt-4 font-mono text-[11px] text-fg-faint flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-tech-green" />
                <span>Tempo médio de resposta: &lt; 4 horas</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* Form column */}
          <form onSubmit={handleSubmit} className="reveal-on-scroll industrial-card border-border-medium bg-bg-card p-6 sm:p-8 shadow-card hover:shadow-glow transition-all duration-300 space-y-5">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-fg border-b border-border-subtle pb-3">
              Formulário de Mensagem Direta
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                  Nome / Organização *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-none border border-border-subtle bg-bg px-3.5 py-2.5 font-mono text-xs text-fg outline-none transition-colors focus:border-accent placeholder:text-fg-faint"
                  placeholder="Ex: Manuel Silva ou Empresa X"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                  Email Corporativo / Pessoal *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-none border border-border-subtle bg-bg px-3.5 py-2.5 font-mono text-xs text-fg outline-none transition-colors focus:border-accent placeholder:text-fg-faint"
                  placeholder="manuel@empresa.ao"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                Detalhes do Projeto / Requisitos *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-none border border-border-subtle bg-bg px-3.5 py-2.5 font-mono text-xs text-fg outline-none transition-colors focus:border-accent placeholder:text-fg-faint"
                placeholder="Descreva o processo atual, requisitos, prazos ou ideia do software..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex w-full items-center justify-center gap-2 border border-accent bg-accent px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-bg transition-all hover:bg-transparent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'sending' ? (
                <span>A processar envio...</span>
              ) : (
                <>
                  <span>Enviar Mensagem</span>
                  <Send size={14} />
                </>
              )}
            </button>

            {status === 'sent' && (
              <div className="flex items-center gap-2 border border-tech-green/30 bg-tech-green/10 p-3 font-mono text-xs text-tech-green">
                <CheckCircle2 size={16} />
                <span>Mensagem transmitida com sucesso. Entrarei em contacto em breve!</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 border border-accent/30 bg-accent/10 p-3 font-mono text-xs text-accent">
                <AlertTriangle size={16} />
                <span>{errorMsg}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
