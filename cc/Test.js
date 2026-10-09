import { useState } from 'react'
import { Icon } from '@iconify/react'

// Il quiz di orientamento (in home e su /quiz): una domanda alla volta, con
// le risposte come schede da toccare, poi il settore consigliato e i punteggi.

const SETTORI = [
  { key: 'elettrico', label: 'Elettrico', url: '/elettrico' },
  { key: 'energia', label: 'Energia', url: '/energia' },
  { key: 'informatico', label: 'Informatico', url: '/informatico' },
  { key: 'meccanico', label: 'Meccanico', url: '/meccanico' },
  { key: 'motoristico', label: 'Motoristico', url: '/automotive' },
]

const vuoto = () => Object.fromEntries(SETTORI.map((s) => [s.key, 0]))

export default function Test(props) {
  const n = props.domande.length
  const [indice, setIndice] = useState(0)
  const [punti, setPunti] = useState(vuoto)

  const item = props.domande[indice]

  function scelta(s) {
    setPunti((p) => Object.fromEntries(SETTORI.map(({ key }) => [key, p[key] + (s[key] || 0)])))
    setIndice(indice + 1)
  }

  function reset() {
    setPunti(vuoto())
    setIndice(0)
  }

  const totale = SETTORI.reduce((t, { key }) => t + punti[key], 0)
  const percentuale = (v) => (totale > 0 ? ((v / totale) * 100).toFixed(1) : '0')
  const massimo = Math.max(...SETTORI.map(({ key }) => punti[key]))
  const consigliati = SETTORI.filter(({ key }) => punti[key] === massimo)

  return (
    <section id="quiz" className="max-w-[1100px] mx-auto px-4 md:px-8 my-16 md:my-20 scroll-mt-28">
      <div className="overflow-hidden rounded-2xl bg-surface border border-line shadow-sm">
        <div className="bg-ink px-6 py-7 md:px-10 md:py-9 text-white">
          <span className="inline-block rounded-md bg-ochre px-2.5 py-1 text-[12px] font-bold uppercase tracking-widest text-ink">
            Quiz di orientamento
          </span>
          <h2 className="wordmark mt-4 text-3xl md:text-4xl text-white">Qual è il settore giusto per te?</h2>
          <p className="mt-2 font-serif text-lg leading-relaxed text-white/75">
            Il quiz preparato dagli allievi della 3F informatici: {n} domande, una risposta per ciascuna.
          </p>
          {indice < n && (
            <div className="mt-6 flex items-center gap-4">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/15">
                <div className="h-full rounded-full bg-ochre transition-all duration-500" style={{ width: `${(indice / n) * 100}%` }} />
              </div>
              <span className="text-sm font-bold tabular-nums text-white/80">
                {indice + 1}/{n}
              </span>
            </div>
          )}
        </div>

        {indice < n ? (
          <div className="grid gap-8 p-6 md:grid-cols-[1fr_minmax(0,320px)] md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">Domanda {indice + 1}</p>
              <h3 className="text-2xl font-bold tracking-tight leading-snug text-fg mb-6">{item.domanda}</h3>
              <div className="flex flex-col gap-3">
                {['a', 'b', 'c'].map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => scelta(item[key])}
                    className="group flex w-full cursor-pointer items-center gap-4 rounded-xl border-[1.5px] border-line bg-surface px-4 py-3.5 text-left text-fg transition-colors hover:border-brand hover:bg-brand/5"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand/10 font-bold uppercase text-brand transition-colors group-hover:bg-brand group-hover:text-white dark:group-hover:text-[#0d0f14]">
                      {key}
                    </span>
                    <span className="font-medium">{item[key].risposta}</span>
                  </button>
                ))}
              </div>
            </div>
            {item.immagine && (
              <div className="order-first md:order-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full rounded-xl object-cover" src={item.immagine} alt="" />
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">Complimenti!</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-fg m-0">
                  La nostra IA ti consiglia: <span className="text-brand">{consigliati.map((s) => s.label).join(', ')}</span>
                </h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {consigliati.map((s) => (
                    <a
                      key={s.key}
                      href={s.url}
                      className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-bold text-white! dark:text-[#0d0f14]! no-underline! hover:bg-brand-strong transition-colors"
                    >
                      Scopri il settore {s.label} <Icon icon="ph:arrow-right" />
                    </a>
                  ))}
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-brand/40 px-6 py-3 font-bold text-brand hover:bg-brand/5 transition-colors"
                  >
                    <Icon icon="ph:arrow-counter-clockwise" /> Ripeti il test
                  </button>
                </div>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {SETTORI.map((s) => {
                const top = punti[s.key] === massimo
                return (
                  <li key={s.key} className="grid grid-cols-[110px_1fr_auto] items-center gap-4">
                    <span className={`font-semibold ${top ? 'text-fg' : 'text-muted'}`}>{s.label}</span>
                    <span className="h-3 overflow-hidden rounded-full bg-line">
                      <span
                        className={`block h-full rounded-full ${top ? 'bg-ochre' : 'bg-brand/60'}`}
                        style={{ width: `${percentuale(punti[s.key])}%` }}
                      />
                    </span>
                    <span className="w-28 text-right text-sm tabular-nums text-muted">
                      {punti[s.key]} pt · {percentuale(punti[s.key])}%
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
