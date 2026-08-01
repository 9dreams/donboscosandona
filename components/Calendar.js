import Image from 'next/image'
import { Icon } from '@iconify/react'

export default function Calendar({ title, description, cardWidth, events, borderRadius, aspectRatio }) {
  const mdCols = cardWidth ? Math.round(12 / cardWidth) : 4

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-8">
      {title && <h3 className="text-3xl text-center mb-4">{title}</h3>}
      {description && <p className="text-center text-gray-500 dark:text-gray-300 mb-6 px-2">{description}</p>}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${mdCols} gap-3`}>
        {events.map((date, i) => (
          <div
            key={i}
            className="flex flex-col min-h-[35rem] shadow-md overflow-hidden"
            style={{ backgroundColor: date.bgColor || '#222f3e', borderRadius }}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio }}>
              <Image
                src={date.immagineUrl}
                alt={date.date || ''}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="flex-1 px-4 pt-6 pb-4">
              <h4 className="text-center text-lg font-semibold text-white mb-3">{date.date}</h4>
              {date.morning && (
                <p className="text-white flex items-center gap-1 mb-1">
                  <Icon icon="ph:clock" /> Mattino: {date.morning}
                </p>
              )}
              {date.afternoon && (
                <p className="text-white flex items-center gap-1 mb-1">
                  <Icon icon="ph:sun" /> Pomeriggio: {date.afternoon}
                </p>
              )}
              {date.evening && (
                <p className="text-white flex items-center gap-1">
                  <Icon icon="ph:moon-stars" /> Sera: {date.evening}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Calendar.defaultProps = {
  cardWidth: 3,
  borderRadius: '5px',
  aspectRatio: '3 / 2',
}
