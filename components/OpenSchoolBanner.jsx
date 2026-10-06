// Banner home: calendario Open School e Laboratori promozionali 2026/27.
// Le date si aggiornano qui; il banner sparisce da solo dopo l'ultimo evento.

const OPEN_SCHOOL = [
  { label: '1° Open School', giorno: '07', mese: 'nov 2026', orario: '14:30–17:30' },
  { label: '2° Open School', giorno: '28', mese: 'nov 2026', orario: '9:00–11:00' },
  { label: '3° Open School', giorno: '28', mese: 'nov 2026', orario: '14:30–17:30' },
  { label: '4° Open School', giorno: '19', mese: 'dic 2026', orario: '14:30–17:30' },
  { label: 'Open School primaverile', giorno: '17', mese: 'apr 2027', orario: '9:00–11:00', evidenza: true },
]

const LABORATORI = [
  { giorno: '9', mese: 'novembre 2026' },
  { giorno: '18', mese: 'gennaio 2027' },
]

const AREE = [
  { nome: 'Area meccanica · motoristica', orario: '15:00–17:00' },
  { nome: 'Area elettrica · informatica · energie', orario: '14:30–17:00' },
]

// Giorno successivo all'ultimo evento (17 aprile 2027)
const FINE = new Date('2027-04-18T00:00:00+02:00')

const display = 'font-[family-name:var(--font-display)]! font-bold leading-none'
const eyebrow = 'text-xs font-bold uppercase tracking-[0.14em] text-[#90CAF9]'

function Sezione({ titolo, children }) {
  return (
    <div className='relative flex flex-col gap-3.5'>
      <div className={`flex items-center gap-3.5 ${eyebrow}`}>
        {titolo}
        <span className='hidden h-px flex-1 bg-white/15 md:block' />
      </div>
      {children}
    </div>
  )
}

export default function OpenSchoolBanner() {
  if (new Date() >= FINE) return null

  return (
    <section
      id='open-school'
      aria-labelledby='open-school-titolo'
      className='relative mb-12 overflow-hidden bg-[#0B2A4F] text-white md:mb-16'
    >
      <div className='pointer-events-none absolute -right-30 -top-40 hidden size-130 rounded-full border border-white/8 md:block' />
      <div className='pointer-events-none absolute -right-10 -top-20 hidden size-90 rounded-full border border-white/6 md:block' />

      <div className='relative mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 md:gap-9 md:px-16 md:py-14'>
        <div className='flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12'>
          <div className='flex max-w-2xl flex-col gap-3'>
            <p className={eyebrow}>Scuola aperta · SFP Don Bosco San Donà</p>
            <h2
              id='open-school-titolo'
              className={`${display} m-0 text-[56px] text-white md:text-[84px]`}
            >
              Open School <span className={`${display} text-[#FF9800]`}>2026/27</span>
            </h2>
            <p className='mt-1 text-base leading-relaxed text-[#CFD8E3] md:text-lg'>
              Vieni a conoscere la SFP Don Bosco: visita i laboratori, incontra
              formatori e allievi e scopri i nostri indirizzi.
            </p>
          </div>

          <div className='flex shrink-0 flex-col gap-2.5 rounded-2xl border border-white/15 bg-white/7 p-5 lg:w-85'>
            <p className='flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[#FF9800]'>
              <span className='size-2.5 animate-pulse rounded-full bg-[#FF9800] shadow-[0_0_0_4px_rgba(255,152,0,0.25)]' />
              Prenotazioni in arrivo
            </p>
            <p className='text-[15px] leading-snug text-[#E3E8EF]'>
              A breve potrai prenotare la tua visita o il laboratorio
              direttamente da questo sito.
            </p>
            <button
              type='button'
              disabled
              className='mt-1 h-11 cursor-not-allowed rounded-full border border-dashed border-white/40 bg-transparent text-[15px] font-semibold text-white'
            >
              Prenota · presto disponibile
            </button>
          </div>
        </div>

        <Sezione titolo='Open School · il sabato'>
          <ul className='m-0 grid list-none gap-3 p-0 lg:grid-cols-5 lg:gap-3.5'>
            {OPEN_SCHOOL.map((e) => (
              <li
                key={e.label}
                className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 lg:flex-col lg:items-start lg:gap-1 lg:p-4.5 ${
                  e.evidenza ? 'bg-[#FF9800] text-[#2B1A00]' : 'bg-white text-[#0B2A4F]'
                }`}
              >
                <p
                  className={`order-2 text-xs font-bold uppercase tracking-[0.08em] lg:order-1 ${
                    e.evidenza ? '' : 'text-[#1565C0]'
                  }`}
                >
                  {e.label}
                  <span
                    className={`block text-base font-semibold normal-case tracking-normal lg:hidden ${
                      e.evidenza ? '' : 'text-[#353B48]'
                    }`}
                  >
                    Sabato · {e.orario}
                  </span>
                </p>
                <p className='order-1 flex w-20 shrink-0 flex-col items-center lg:order-2 lg:w-auto lg:flex-row lg:items-baseline lg:gap-2'>
                  <span className={`${display} text-[40px] lg:text-[56px]`}>{e.giorno}</span>
                  <span className='whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.08em] lg:text-[15px] lg:font-semibold lg:normal-case lg:tracking-normal'>
                    {e.mese}
                  </span>
                </p>
                <p
                  className={`order-3 hidden text-[15px] font-semibold lg:block ${
                    e.evidenza ? '' : 'text-[#353B48]'
                  }`}
                >
                  Sabato · {e.orario}
                </p>
              </li>
            ))}
          </ul>
        </Sezione>

        <Sezione titolo='Laboratori promozionali · il lunedì'>
          <ul className='m-0 grid list-none gap-3 p-0 md:grid-cols-2 md:gap-3.5'>
            {LABORATORI.map((l) => (
              <li
                key={l.mese}
                className='flex flex-col gap-3 rounded-2xl border border-white/20 p-4.5 md:flex-row md:items-center md:gap-6 md:px-5.5'
              >
                <p className='flex items-baseline gap-2.5 md:w-24 md:shrink-0 md:flex-col md:items-center md:gap-0'>
                  <span className={`${display} text-[40px] md:text-[52px]`}>{l.giorno}</span>
                  <span className='text-sm font-semibold uppercase tracking-[0.08em] text-[#CFD8E3] md:text-center md:text-[13px]'>
                    {l.mese}
                  </span>
                </p>
                <div className='flex flex-1 flex-col gap-2.5 text-[15px]'>
                  {AREE.map((a, i) => (
                    <div key={a.nome} className='flex flex-col gap-2.5'>
                      {i > 0 && <div className='h-px bg-white/12' />}
                      <p className='flex flex-col md:flex-row md:justify-between md:gap-3'>
                        <span>{a.nome}</span>
                        <span className='font-bold text-[#FF9800]'>{a.orario}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Sezione>
      </div>
    </section>
  )
}
