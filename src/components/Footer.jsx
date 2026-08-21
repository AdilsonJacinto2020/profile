import { profile } from '../data/content'
import { Terminal, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-card px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 font-mono text-[11px] text-fg-faint sm:flex-row">
        <div className="flex items-center gap-2">
          <Terminal size={13} className="text-accent" />
          <span>© {new Date().getFullYear()} {profile.name.toUpperCase()} · LUANDA, AO</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="border border-border-subtle bg-bg px-2 py-0.5 text-fg-muted">REACT + TAILWIND</span>
          <span className="border border-border-subtle bg-bg px-2 py-0.5 text-fg-muted">SWISS INDUSTRIAL UI</span>
        </div>
      </div>
    </footer>
  )
}
