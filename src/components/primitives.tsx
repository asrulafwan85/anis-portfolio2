import { ReactNode } from 'react'

export function Section({ id, title, children }: { id: string; title?: string; children: ReactNode }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      {title ? <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2> : null}
      {children}
    </section>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm hover:shadow-md transition ${className}`}>
      {children}
    </div>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-2xl px-3 py-1 text-sm border border-slate-300/60 dark:border-slate-700/60 shadow-sm hover:shadow transition">
      {children}
    </span>
  )
}
