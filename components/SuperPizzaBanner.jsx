// Banner home della SuperPizza: la classifica delle classi letta in diretta
// dall'API del sito dei tornei, con un clic che porta alla pagina completa.
//
// I dati arrivano già da getStaticProps (pages/index.js), così la home si
// vede completa anche senza JavaScript; SWR li rinfresca nel browser, perché
// la pagina statica si rigenera solo ogni venti minuti. Se l'API non risponde
// il banner resta, senza numeri: porta comunque alla classifica.
import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'

// L'indirizzo si può cambiare da .env per provare il banner contro un sito dei
// tornei in locale.
export const SUPERPIZZA_API =
  process.env.NEXT_PUBLIC_SUPERPIZZA_API ?? 'https://tornei.donboscosandona.it/api/v1/superpizza'
const SUPERPIZZA_PAGE = 'https://tornei.donboscosandona.it/superpizza'

const fetcher = (url) => fetch(url).then((res) => (res.ok ? res.json() : null))

const LETTERE = ['S', 'u', 'p', 'e', 'r', 'P', 'i', 'z', 'z', 'a']
const COLORI = ['text-pizza-tomato', 'text-pizza-cheese', 'text-pizza-mozzarella', 'text-pizza-basil']

// Le pizzette che cadono sullo sfondo: posizioni fisse, così server e browser
// disegnano la stessa cosa.
const PIZZETTE = [
  { left: 6, size: 34, d: 11, delay: 0, img: 1 },
  { left: 18, size: 22, d: 14, delay: 4, img: 2 },
  { left: 33, size: 28, d: 12, delay: 7, img: 1 },
  { left: 47, size: 20, d: 15, delay: 2, img: 2 },
  { left: 61, size: 30, d: 13, delay: 9, img: 1 },
  { left: 76, size: 24, d: 10, delay: 5, img: 2 },
  { left: 90, size: 32, d: 16, delay: 1, img: 1 },
]

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Il numero conta da zero la prima volta che compare sullo schermo.
function Contatore({ valore, visibile }) {
  const [mostrato, setMostrato] = useState(valore)

  useEffect(() => {
    if (!visibile || prefersReducedMotion() || valore === 0) {
      setMostrato(valore)
      return
    }
    let frame
    const inizio = performance.now()
    const passo = (ora) => {
      const t = Math.min((ora - inizio) / 1600, 1)
      setMostrato(Math.round(valore * (1 - Math.pow(1 - t, 4))))
      if (t < 1) frame = requestAnimationFrame(passo)
    }
    setMostrato(0)
    frame = requestAnimationFrame(passo)
    return () => cancelAnimationFrame(frame)
  }, [valore, visibile])

  return mostrato.toLocaleString('it-IT', { useGrouping: 'always' })
}

// Uno spicchio di pizza disegnato: il gradino del podio.
function Spicchio({ className = '' }) {
  return (
    <svg viewBox='0 0 100 120' className={className} aria-hidden='true'>
      <path d='M50 2 L4 106 Q50 126 96 106 Z' fill='var(--pizza-crust)' />
      <path d='M50 12 L12 100 Q50 114 88 100 Z' fill='var(--pizza-cheese)' />
      <path d='M50 12 L12 100 Q50 114 88 100 Z' fill='url(#superpizza-sugo)' opacity='0.35' />
      <circle cx='40' cy='82' r='8' fill='var(--pizza-tomato)' />
      <circle cx='62' cy='70' r='7' fill='var(--pizza-tomato)' />
      <circle cx='50' cy='46' r='6' fill='var(--pizza-tomato)' />
      <ellipse cx='60' cy='92' rx='5' ry='3' fill='var(--pizza-basil)' transform='rotate(-25 60 92)' />
      <ellipse cx='43' cy='62' rx='4' ry='2.5' fill='var(--pizza-basil)' transform='rotate(30 43 62)' />
      <defs>
        <radialGradient id='superpizza-sugo'>
          <stop offset='0%' stopColor='var(--pizza-tomato)' />
          <stop offset='100%' stopColor='transparent' />
        </radialGradient>
      </defs>
    </svg>
  )
}

const GRADINI = [
  // Secondo, primo, terzo: il più alto sta in mezzo.
  { posto: 1, altezza: 'h-28 md:h-36', ritardo: '0.15s' },
  { posto: 0, altezza: 'h-36 md:h-48', ritardo: '0s' },
  { posto: 2, altezza: 'h-22 md:h-28', ritardo: '0.3s' },
]

export default function SuperPizzaBanner({ iniziale = null }) {
  const { data } = useSWR(SUPERPIZZA_API, fetcher, {
    fallbackData: iniziale,
    revalidateOnFocus: false,
  })
  const ref = useRef(null)
  const [visibile, setVisibile] = useState(false)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return
    const osservatore = new IntersectionObserver(
      ([voce]) => {
        if (voce.isIntersecting) {
          setVisibile(true)
          osservatore.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    osservatore.observe(nodo)
    return () => osservatore.disconnect()
  }, [])

  const classifica = (data?.classifica ?? []).filter((riga) => riga.punti > 0)
  const podio = classifica.slice(0, 3)
  const altre = classifica.slice(3)

  return (
    <a
      ref={ref}
      href={SUPERPIZZA_PAGE}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='SuperPizza: guarda la classifica completa delle classi'
      className={`superpizza-banner group mx-auto my-12 block max-w-[1200px] px-4 no-underline hover:no-underline md:my-16 md:px-8 ${visibile ? 'is-in' : ''}`}
    >
      <div className='relative overflow-hidden rounded-3xl bg-ink text-white shadow-xl shadow-ink/20 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/images/pizza/superpizza.webp'
          alt=''
          className='superpizza-kenburns absolute inset-0 size-full object-cover'
        />
        {/* Il velo scuro serve solo dove c'è il testo: a sinistra su desktop,
            più uniforme su telefono, dove il testo copre tutta l'immagine. */}
        <div className='absolute inset-0 bg-ink/60 md:bg-transparent md:bg-gradient-to-r md:from-ink/90 md:via-ink/45 md:to-transparent' />

        <div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden='true'>
          {PIZZETTE.map((p, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={`/images/pizza/pizza${p.img}.png`}
              alt=''
              className='superpizza-cade absolute -top-12'
              style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDuration: `${p.d}s`, animationDelay: `-${p.delay}s` }}
            />
          ))}
        </div>

        <div className='relative grid gap-8 px-6 py-9 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-center md:gap-10 md:px-12 md:py-12'>
          <div className='flex flex-col gap-4'>
            <p className='m-0'>
              <span className='inline-flex items-center gap-2 rounded-md bg-pizza-tomato px-2.5 py-1 text-[12px] font-bold uppercase tracking-widest text-white'>
                <span className='superpizza-gira inline-block' aria-hidden='true'>🍕</span>
                Gara tra le classi · in diretta
              </span>
            </p>

            <h2 className='superpizza-titolo m-0 whitespace-nowrap text-[44px] leading-[0.9] sm:text-[60px] md:text-[84px]' aria-label='SuperPizza'>
              {LETTERE.map((lettera, i) => (
                <span
                  key={i}
                  aria-hidden='true'
                  className={`superpizza-lettera inline-block ${COLORI[i % COLORI.length]}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  {lettera}
                </span>
              ))}
            </h2>

            <p className='m-0 max-w-md font-serif text-lg leading-relaxed text-white/80'>
              Feste, presenze, pagelle e gite: ogni evento mette punti nel forno della tua classe.
              Chi arriva in cima a fine anno vince una mega pizza.
            </p>

            {podio.length > 0 ? (
              <p className='m-0 text-base font-semibold text-white'>
                In testa c&apos;è la <span className='text-pizza-cheese'>{podio[0].classe}</span> con{' '}
                <span className='text-pizza-cheese'><Contatore valore={podio[0].punti} visibile={visibile} /></span> punti
                {data?.eventi_sfornati ? ` dopo ${data.eventi_sfornati} ${data.eventi_sfornati === 1 ? 'evento' : 'eventi'}` : ''}.
              </p>
            ) : null}

            <span className='mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-pizza-cheese px-5 py-3 text-sm font-bold uppercase tracking-wider text-ink transition group-hover:gap-3 group-hover:bg-white'>
              Guarda la classifica completa
              <span aria-hidden='true'>→</span>
            </span>
          </div>

          {podio.length > 0 ? (
            <div className='flex min-w-0 flex-col gap-5'>
              <div className='flex items-end justify-center gap-3 md:gap-5'>
                {GRADINI.filter((g) => podio[g.posto]).map(({ posto, altezza, ritardo }) => {
                  const riga = podio[posto]
                  return (
                    <div key={riga.classe} className='flex w-1/3 max-w-32 flex-col items-center'>
                      {posto === 0 ? (
                        <span className='superpizza-corona mb-1 text-3xl' aria-hidden='true'>👑</span>
                      ) : null}
                      <span className='wordmark text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] md:text-3xl'>{riga.classe}</span>
                      <span className='mb-2 rounded-full bg-ink/70 px-2 py-0.5 text-sm font-bold text-pizza-cheese'>
                        <Contatore valore={riga.punti} visibile={visibile} /> pt
                      </span>
                      <div className={`superpizza-gradino relative flex w-full justify-center ${altezza}`} style={{ transitionDelay: ritardo }}>
                        <Spicchio className='superpizza-spicchio h-full w-auto drop-shadow-xl' />
                        <span className='wordmark absolute bottom-[22%] text-3xl text-ink md:text-4xl'>{riga.posizione}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {altre.length > 0 ? (
                <div className='overflow-hidden rounded-full border border-white/15 bg-ink/75 py-2.5 backdrop-blur-sm' aria-label='Le altre classi in classifica'>
                  <ul className='superpizza-nastro m-0 flex w-max list-none p-0'>
                    {[...altre, ...altre].map((riga, i) => (
                      <li
                        key={i}
                        aria-hidden={i >= altre.length ? 'true' : undefined}
                        className='flex items-center gap-1.5 whitespace-nowrap px-4 text-sm font-semibold text-white/85'
                      >
                        <span className='text-white/50'>{riga.posizione}°</span>
                        <span className='font-bold text-white'>{riga.classe}</span>
                        <span className='text-pizza-cheese'>{riga.punti}</span>
                        <span className='pl-3 text-white/30' aria-hidden='true'>🍕</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : (
            <div className='flex flex-col items-center gap-3 text-center'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/images/pizza/pizza.png' alt='' className='superpizza-gira size-40 md:size-52' />
              <p className='m-0 text-lg font-semibold text-white'>Il forno si sta scaldando…</p>
            </div>
          )}
        </div>
      </div>
    </a>
  )
}
