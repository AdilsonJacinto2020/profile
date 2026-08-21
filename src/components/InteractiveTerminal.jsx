import { useState, useRef, useEffect } from 'react'
import { profile, projects, skills, experience } from '../data/content'
import SectionTitle from './SectionTitle'
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react'

export default function InteractiveTerminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'AdilsonOS Interactive CLI [v3.4.2-prod]\nDigite "help" para ver os comandos disponíveis.',
    },
  ])
  const terminalEndRef = useRef(null)

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [history])

  const handleCommand = (e) => {
    e.preventDefault()
    const rawCmd = input.trim()
    if (!rawCmd) return

    const cmd = rawCmd.toLowerCase()
    const newHistory = [...history, { type: 'user', text: rawCmd }]

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `Comandos disponíveis:
  • about       - Ver resumo do perfil e localização
  • projects    - Listar projetos e status de produção
  • skills      - Ver matriz de tecnologias e proficiência
  • experience  - Histórico profissional e formação 42
  • contact     - Meios de contacto direto (Email, WhatsApp)
  • clear       - Limpar o terminal`,
        })
        break

      case 'about':
        newHistory.push({
          type: 'response',
          text: `NOME: ${profile.name}
ROLE: ${profile.role}
LOCAL: ${profile.location}
RESUMO: ${profile.summary}`,
        })
        break

      case 'projects':
        newHistory.push({
          type: 'response',
          text: projects
            .map(
              (p, i) =>
                `[${i + 1}] ${p.title} (${p.status})
    Cliente: ${p.client}
    Stack: ${p.stack.join(', ')}`
            )
            .join('\n\n'),
        })
        break

      case 'skills':
        newHistory.push({
          type: 'response',
          text: skills
            .map((s) => `${s.category.toUpperCase()}:\n  ${s.items.join(' · ')}`)
            .join('\n\n'),
        })
        break

      case 'experience':
        newHistory.push({
          type: 'response',
          text: `EXPERIÊNCIA:\n${experience
            .map((e) => `• ${e.org} (${e.period}) - ${e.role}\n  ${e.description}`)
            .join('\n')}\n\nFORMAÇÃO:\n• 42 Luanda — Common Core Concluído (Fase 1)\n• ISIA — Engenharia Informática`,
        })
        break

      case 'contact':
        newHistory.push({
          type: 'response',
          text: `EMAIL:    ${profile.email}
WHATSAPP: ${profile.whatsapp}
GITHUB:   ${profile.github}
LINKEDIN: ${profile.linkedin}`,
        })
        break

      case 'clear':
        setHistory([])
        setInput('')
        return

      default:
        newHistory.push({
          type: 'error',
          text: `Comando não reconhecido: "${rawCmd}". Digite "help" para ver os comandos.`,
        })
        break
    }

    setHistory(newHistory)
    setInput('')
  }

  const runQuickCmd = (c) => {
    setInput(c)
  }

  return (
    <section id="terminal" className="border-b border-border-subtle bg-bg-subtle px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          index="02"
          eyebrow="Console Interativo"
          title="CLI de Auditoria & Inspeção"
          description="Inspecione dados técnicos, rotas de infraestrutura e detalhes de arquitetura diretamente através da linha de comandos."
        />

        <div className="reveal-on-scroll industrial-card border-border-medium bg-[#0E131F] text-[#F4F5F7] shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden font-mono">
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between border-b border-[#1F293D] bg-[#161D2E] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-2 text-xs font-semibold tracking-wider text-[#94A3B8]">
                adijacinto@sys-core:~ (zsh)
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
              <TerminalIcon size={12} className="text-accent" />
              <span className="hidden sm:inline">UTF-8 / LATENCY: 12ms</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 min-h-[280px] max-h-[420px] overflow-y-auto space-y-3 text-xs sm:text-sm">
            {history.map((h, i) => (
              <div key={i} className="leading-relaxed">
                {h.type === 'user' && (
                  <div className="flex items-center gap-2 text-white font-medium">
                    <span className="text-accent font-bold">➜</span>
                    <span className="text-[#38BDF8]">~</span>
                    <span>{h.text}</span>
                  </div>
                )}
                {h.type === 'system' && (
                  <div className="text-[#64748B] whitespace-pre-wrap">{h.text}</div>
                )}
                {h.type === 'response' && (
                  <div className="text-[#CBD5E1] whitespace-pre-wrap border-l-2 border-[#334155] pl-3 my-1">
                    {h.text}
                  </div>
                )}
                {h.type === 'error' && (
                  <div className="text-[#F87171] whitespace-pre-wrap">{h.text}</div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Quick command buttons */}
          <div className="flex flex-wrap items-center gap-2 border-t border-[#1F293D] bg-[#161D2E]/60 px-4 py-2 text-[11px]">
            <span className="text-[#64748B] mr-1 flex items-center gap-1">
              <Sparkles size={11} className="text-accent" /> Atalhos:
            </span>
            {['help', 'about', 'projects', 'skills', 'experience', 'contact', 'clear'].map((btn) => (
              <button
                key={btn}
                onClick={() => runQuickCmd(btn)}
                className="border border-[#334155] bg-[#0E131F] px-2 py-0.5 text-[#94A3B8] hover:border-accent hover:text-white transition-colors"
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Input Line */}
          <form onSubmit={handleCommand} className="flex items-center border-t border-[#1F293D] bg-[#0E131F] px-4 py-3">
            <span className="text-accent font-bold mr-2">➜</span>
            <span className="text-[#38BDF8] mr-2 font-mono">~</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite um comando (ex: projects, skills, contact)..."
              className="flex-1 bg-transparent text-white text-xs sm:text-sm outline-none placeholder:text-[#475569]"
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit" className="text-[#64748B] hover:text-accent p-1">
              <CornerDownLeft size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
