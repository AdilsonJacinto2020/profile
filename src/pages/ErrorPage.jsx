import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'
import { AlertTriangle, ArrowLeft } from 'lucide-react'

export default function ErrorPage() {
  const error = useRouteError()

  let errorMessage = 'Ocorreu um erro inesperado na rota.'
  let statusCode = 500

  if (isRouteErrorResponse(error)) {
    statusCode = error.status
    errorMessage = error.statusText || error.data || errorMessage
  } else if (error instanceof Error) {
    errorMessage = error.message
  }

  return (
    <div className="min-h-screen bg-bg text-fg flex items-center justify-center p-6 font-mono">
      <div className="industrial-card border-border-medium bg-bg-card p-8 max-w-lg w-full text-center shadow-card">
        <div className="inline-flex h-12 w-12 items-center justify-center border border-accent/40 bg-accent/10 text-accent mb-4">
          <AlertTriangle size={24} />
        </div>

        <div className="text-3xl font-bold text-accent mb-2">{statusCode}</div>
        <h1 className="font-display text-xl font-bold text-fg mb-4">Erro de Rota / Navegação</h1>
        <p className="text-xs text-fg-muted leading-relaxed mb-8 border border-border-subtle bg-bg-subtle p-3">
          {errorMessage}
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-transparent hover:text-accent transition-all"
        >
          <ArrowLeft size={14} />
          <span>Voltar à Página Principal</span>
        </Link>
      </div>
    </div>
  )
}
