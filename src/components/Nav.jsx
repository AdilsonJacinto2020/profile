import { useState, useEffect } from 'react'
import { profile } from '../data/content'
import { Terminal, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react'

const links = [
  { href: '#projetos', num: '01', label: 'Projetos' },
  { href: '#terminal', num: '02', label: 'Terminal' },
  { href: '#skills', num: '03', label: 'Stack' },
  { href: '#experiencia', num: '04', label: 'Trajetória' },
  { href: '#contacto', num: '05', label: 'Contacto' },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) return savedTheme
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand */}
        <a 
          href="#top" 
          className="group flex items-center gap-3 font-mono text-xs font-semibold tracking-wider text-fg transition-colors hover:text-accent"
        >
          <div className="flex h-7 w-7 items-center justify-center border border-border-medium bg-bg-card font-mono text-xs text-accent transition-colors group-hover:border-accent">
            <Terminal size={14} />
          </div>
          <div className="flex flex-col">
            <span className="leading-tight">ADILSON JACINTO</span>
            <span className="text-[10px] text-fg-faint">FULL-STACK ENG</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-center gap-1.5 font-mono text-xs text-fg-muted transition-colors hover:text-fg"
            >
              <span className="text-[10px] text-fg-faint transition-colors group-hover:text-accent">
                {l.num}.
              </span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        {/* Right actions: Theme Toggle + Status + CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center border border-border-medium bg-bg-card text-fg-muted transition-all hover:border-accent hover:text-accent"
            aria-label={`Alternar para modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
            title={`Modo ${theme === 'dark' ? 'Claro' : 'Escuro'}`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <div className="hidden items-center gap-2 border border-border-subtle bg-bg-card px-2.5 py-1 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-tech-green animate-blink" />
            <span className="font-mono text-[10px] tracking-wide text-fg-muted">DISPONÍVEL</span>
          </div>

          <a
            href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 border border-accent bg-accent px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-accent"
          >
            <span className="hidden xs:inline">Iniciar Projeto</span>
            <span className="xs:hidden">Orçamento</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center border border-border-medium bg-bg-card text-fg-muted hover:text-fg lg:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border-subtle bg-bg-subtle px-6 py-4 lg:hidden">
          <nav className="flex flex-col space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-border-subtle/50 py-2 font-mono text-xs text-fg-muted hover:text-accent"
              >
                <span>{l.label}</span>
                <span className="text-fg-faint">{l.num}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
