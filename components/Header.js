import { Icon } from '@iconify/react'

// Header secondario con la barra delle sezioni.
export default function Header({ titolo, sezioni }) {
  return (
    <div className="w-full border-b border-line bg-surface">
      <div className="mx-auto flex max-w-[1200px] items-center gap-4 px-4 py-3 md:px-8">
        <button className="rounded-full border border-brand/40 px-4 py-1.5 text-sm font-semibold text-brand hover:bg-brand/5">
          Login
        </button>
        <h2 className="flex-1 truncate text-center text-xl font-bold tracking-tight text-brand">{titolo}</h2>
        <button aria-label="Cerca" className="grid h-9 w-9 place-items-center rounded-full text-brand hover:bg-brand/5">
          <Icon icon="ph:magnifying-glass" className="text-xl" />
        </button>
        <button className="rounded-full bg-ochre px-4 py-1.5 text-sm font-bold text-ink hover:bg-ochre-strong">
          Iscriviti
        </button>
      </div>
      <nav className="mx-auto flex max-w-[1200px] gap-2 overflow-x-auto px-4 pb-3 md:px-8">
        {sezioni &&
          sezioni.map((sezione) => (
            <a
              key={sezione.titolo}
              href={sezione.url}
              className="shrink-0 rounded-full px-3 py-1 text-sm font-semibold text-fg! no-underline! hover:bg-brand/10 hover:text-brand! transition-colors"
            >
              {sezione.titolo}
            </a>
          ))}
      </nav>
    </div>
  )
}
