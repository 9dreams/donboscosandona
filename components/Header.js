import { Icon } from '@iconify/react'

export default function Header({ titolo, sezioni }) {
  return (
    <div className="w-full">
      <div className="flex items-center border-b border-gray-200 dark:border-white/10 px-4 py-2 gap-4">
        <button className="text-sm px-3 py-1 border border-gray-300 dark:border-white/20 rounded">Login</button>
        <h2 className="flex-1 text-center text-xl font-semibold truncate">{titolo}</h2>
        <button aria-label="Cerca" className="p-1">
          <Icon icon="ph:magnifying-glass" className="text-xl" />
        </button>
        <button className="text-sm px-3 py-1 border border-gray-300 dark:border-white/20 rounded">Iscriviti</button>
      </div>
      <nav className="flex flex-wrap gap-2 px-4 py-2 overflow-x-auto">
        {sezioni && sezioni.map((sezione) => (
          <a key={sezione.titolo} href={sezione.url} className="text-sm px-3 py-1 shrink-0 hover:text-[#FF9800] transition-colors">
            {sezione.titolo}
          </a>
        ))}
      </nav>
    </div>
  )
}
