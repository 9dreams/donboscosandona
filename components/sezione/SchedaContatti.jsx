import { Icon } from '@iconify/react'

// Scheda colorata con i contatti di un gruppo: nome, ruolo, telefono,
// email, link e orari (campi tutti facoltativi).
export default function SchedaContatti({ contatti = [], colore = '#1976D2', titolo = 'Contatti' }) {
  if (contatti.length === 0) return null
  return (
    <div className="rounded-[22px] p-7 text-white" style={{ backgroundColor: colore }}>
      <h2 className="font-serif-display mb-4 text-3xl font-semibold !text-white">{titolo}</h2>
      <ul className="m-0 flex list-none flex-col gap-5 p-0">
        {contatti.map((c, i) => (
          <li key={i} className="text-[15px] leading-relaxed text-white/90">
            {c.nome && <span className="block font-bold text-white">{c.nome}</span>}
            {c.ruolo && <span className="block text-white/75">{c.ruolo}</span>}
            {c.telefono && (
              <a href={`tel:${String(c.telefono).split(/[-–]/)[0].replace(/[^\d+]/g, '')}`} className="mt-1 flex items-center gap-2 !text-white">
                <Icon icon="ph:phone" className="flex-none" /> {c.telefono}
              </a>
            )}
            {c.email && (
              <a href={`mailto:${c.email}`} className="flex items-center gap-2 break-all !text-white">
                <Icon icon="ph:envelope" className="flex-none" /> {c.email}
              </a>
            )}
            {c.link && (
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 !text-white underline underline-offset-4">
                <Icon icon="ph:arrow-square-out" className="flex-none" /> Apri la pagina
              </a>
            )}
            {c.orari && (
              <span className="flex items-center gap-2">
                <Icon icon="ph:clock" className="flex-none" /> {c.orari}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
