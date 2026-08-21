export default function SectionTitle({ index, eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="flex items-center gap-3">
        {index && (
          <span className="flex h-5 items-center border border-accent/40 bg-accent/10 px-1.5 font-mono text-[10px] font-bold text-accent">
            {index}
          </span>
        )}
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 font-body text-sm leading-relaxed text-fg-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
