import Image from 'next/image'
import { Icon } from '@iconify/react'

const MD_COLS = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' }

// Le date di un calendario: scheda con foto, giorno e fasce orarie.
export default function Calendar({ title, description, cardWidth, events, aspectRatio }) {
  const mdCols = cardWidth ? Math.round(12 / cardWidth) : 4

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 my-12">
      {title && <h2 className="text-3xl font-bold tracking-tight text-brand text-center mb-3">{title}</h2>}
      {description && (
        <p className="text-center font-serif text-lg leading-relaxed text-muted mb-6 px-2">{description}</p>
      )}
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${MD_COLS[mdCols] || 'md:grid-cols-4'} gap-5`}>
        {events.map((date, i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-2xl bg-surface border border-line shadow-sm">
            <div className="relative overflow-hidden" style={{ aspectRatio }}>
              <Image
                src={date.immagineUrl}
                alt={date.date || ''}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="flex-1 p-5">
              <h3 className="text-lg font-bold text-brand mb-3">{date.date}</h3>
              <ul className="space-y-2 text-sm text-fg">
                {date.morning && (
                  <li className="flex items-center gap-2">
                    <Icon icon="ph:clock" className="text-lg text-brand" /> Mattino: {date.morning}
                  </li>
                )}
                {date.afternoon && (
                  <li className="flex items-center gap-2">
                    <Icon icon="ph:sun" className="text-lg text-brand" /> Pomeriggio: {date.afternoon}
                  </li>
                )}
                {date.evening && (
                  <li className="flex items-center gap-2">
                    <Icon icon="ph:moon-stars" className="text-lg text-brand" /> Sera: {date.evening}
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

Calendar.defaultProps = {
  cardWidth: 3,
  aspectRatio: '3 / 2',
}
