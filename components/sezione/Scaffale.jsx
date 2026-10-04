import Image from 'next/image'

// Scaffale di libri: copertina con dorso arrotondato e ombra, anno, titolo,
// autore. Con `onSeleziona` ogni libro è un pulsante (scheda sotto lo scaffale).
export default function Scaffale({ libri = [], accento = '#5E1A63', selezionato, onSeleziona }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-x-[22px] gap-y-7">
      {libri.map((l) => {
        const attivo = selezionato === l.slug
        const contenuto = (
          <>
            <div
              className={`relative aspect-[3/4] overflow-hidden rounded-[4px_10px_10px_4px] shadow-[0_1px_0_#DCCFBE,0_14px_28px_rgba(58,18,64,0.16)] transition-transform group-hover:-translate-y-1 ${
                attivo ? '-translate-y-1 ring-4 ring-current' : ''
              }`}
              style={{ '--accento': accento }}
              data-accento
            >
              {l.copertina && (
                <Image
                  src={l.copertina}
                  alt={`Copertina di ${l.titolo}`}
                  fill
                  sizes="(min-width: 1024px) 200px, 45vw"
                  className="object-cover"
                />
              )}
            </div>
            <span
              className="font-serif-display mb-0.5 mt-3.5 block text-[22px] font-bold"
              style={{ '--accento': accento }} data-accento
            >
              {l.anno}
            </span>
            <span className="mb-1 block text-base font-bold leading-snug text-[#2A2230] dark:text-[#F4EFE6]">
              {l.titolo}
            </span>
            <span className="block text-sm text-[#6E6372] dark:text-[#A79DAD]">{l.autore}</span>
          </>
        )
        return onSeleziona ? (
          <button
            key={l.slug}
            type="button"
            onClick={() => onSeleziona(attivo ? null : l.slug)}
            aria-expanded={attivo}
            className="group block cursor-pointer border-0 bg-transparent p-0 text-left"
          >
            {contenuto}
          </button>
        ) : (
          <article key={l.slug} className="group">
            {contenuto}
          </article>
        )
      })}
    </div>
  )
}
