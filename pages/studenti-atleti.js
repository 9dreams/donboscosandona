import Head from 'next/head'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Layout } from '/components'

// BOZZA: la pagina non è collegata da menu, footer o altre pagine e chiede ai
// motori di ricerca di non indicizzarla. Studenti, società, gare e risultati
// sono dati di prova, come nel progetto grafico da cui nasce.

const IMG = '/images/studenti_atleti'

const atleti = [
  { name: 'Bortolato Matteo', className: '3A', course: 'Elettrico', sport: 'Canottaggio', specialty: 'Singolo junior', club: 'Canottieri Basso Piave', national: false, photo: 'canottaggio.jpg', pos: '75% center' },
  { name: 'Cester Anna', className: '2B', course: 'Grafico', sport: 'Atletica leggera', specialty: '400 m ostacoli', club: 'Atletica Litorale', national: true, photo: 'atletica.jpg', pos: '42% center' },
  { name: 'Dal Ben Luca', className: '3C', course: 'Meccanico', sport: 'Calcio', specialty: 'Centrocampista, Under 17', club: 'Calcio Litorale Veneto', national: true, photo: 'calcio.jpg', pos: '45% center' },
  { name: 'Furlan Giulia', className: '2A', course: 'Elettrico', sport: 'Pallavolo', specialty: 'Palleggiatrice, Under 18', club: 'Piave Volley', national: false, photo: 'pallavolo.jpg', pos: 'center 25%' },
  { name: 'Marchiori Elisa', className: '1C', course: 'Meccanico', sport: 'Ginnastica ritmica', specialty: 'Individuale, Serie B', club: 'Ritmica Eraclea', national: true, photo: 'ritmica.jpg', pos: 'center 40%' },
  { name: 'Momesso Davide', className: '4A', course: 'Elettrico', sport: 'Rugby', specialty: 'Pilone, Under 18', club: 'Rugby Basso Piave', national: false, photo: 'rugby.jpg', pos: '62% center' },
  { name: 'Pavan Sofia', className: '1F', course: 'Elettrico', sport: 'Nuoto', specialty: '200 m farfalla', club: 'Nuoto Sile', national: true, photo: 'nuoto.jpg', pos: 'center center' },
  { name: 'Tonon Riccardo', className: '2C', course: 'Meccanico', sport: 'Pallacanestro', specialty: 'Ala, Under 17 Gold', club: 'Basket Musile', national: false, photo: 'pallacanestro.jpg', pos: 'center 55%' },
  { name: 'Zanin Marco', className: '4B', course: 'Grafico', sport: 'Ciclismo su strada', specialty: 'Juniores', club: 'Team Pedale Piave', national: true, photo: 'ciclismo.jpg', pos: '38% center' },
]

const news = [
  { title: 'Piave Volley vince il derby e vola al secondo posto', text: 'Il nostro palleggiatore guida la squadra Under 18 alla quinta vittoria di fila, davanti a un palazzetto pieno.', photo: 'news-volley.jpg' },
  { title: 'Raduno federale a Formia: convocata Anna Cester', text: 'Tre giorni di allenamenti con la nazionale Under 18. Le verifiche sono già state concordate con il consiglio di classe.', photo: 'news-formia.jpg' },
  { title: 'Nuove convenzioni con le società sportive del territorio', text: 'Il progetto studenti atleti si allarga: più società, un referente per ognuna e un calendario condiviso con i formatori.', photo: 'news-convenzioni.jpg' },
]

const risultati = [
  { big: 'Argento', name: 'Cester Anna', text: 'Argento ai Campionati italiani Under 18 nei 400 m ostacoli, con il primato personale.', when: 'Giugno 2026' },
  { big: 'Finale', name: 'Pavan Sofia', text: 'In finale ai Criteria giovanili nei 200 m farfalla, al primo anno di categoria.', when: 'Marzo 2026' },
  { big: 'Convocato', name: 'Zanin Marco', text: 'Convocato nella rappresentativa regionale juniores per la stagione su strada.', when: 'Settembre 2026' },
  { big: 'In azzurro', name: 'Dal Ben Luca', text: 'Presenze in Under 17 nazionale nella scorsa stagione, sei da titolare.', when: 'Stagione 2025-2026' },
  { big: 'Vincitore', name: 'Bellio Tommaso', text: 'Primo posto alla regata nazionale di fine stagione nel singolo juniores.', when: 'Ottobre 2025' },
  { big: 'Podio', name: 'Zanella Beatrice', text: 'Terza ai Campionati regionali nei 100 m rana, con il miglior tempo dell’anno.', when: 'Giugno 2026' },
  { big: 'Record', name: 'Pasqualin Elena', text: 'Nuovo record regionale di categoria al corpo libero, con il punteggio più alto della gara.', when: 'Maggio 2026' },
]

// I colori del metallo delle medaglie: disegno, non colori del sito.
const medaglie = {
  oro: { fill: '#e8b730', edge: '#9a6c06', label: 'Medaglia d’oro' },
  argento: { fill: '#c9d1db', edge: '#5f6b7a', label: 'Medaglia d’argento' },
  bronzo: { fill: '#c98a55', edge: '#7a4518', label: 'Medaglia di bronzo' },
}

const albo = [
  { medal: 'oro', name: 'Beatrice Zanella', sport: 'Nuoto', text: 'Oro ai Campionati italiani giovanili nei 100 m rana, 2025.' },
  { medal: 'oro', name: 'Tommaso Bellio', sport: 'Canottaggio', text: 'Oro nel quattro di coppia ai Campionati italiani juniores, 2024.' },
  { medal: 'argento', name: 'Elena Pasqualin', sport: 'Ginnastica ritmica', text: 'Argento nel concorso individuale ai Campionati italiani Allieve, 2025.' },
  { medal: 'argento', name: 'Federico Mazzon', sport: 'Pallavolo', text: 'Argento con la rappresentativa regionale al Trofeo delle Regioni, 2023.' },
  { medal: 'bronzo', name: 'Nicolò Casagrande', sport: 'Ciclismo su strada', text: 'Bronzo ai Campionati italiani juniores a cronometro, 2024.' },
  { medal: 'bronzo', name: 'Sara Gobbo', sport: 'Atletica leggera', text: 'Bronzo nei 800 m ai Campionati italiani Under 18, 2023.' },
]

const numeri = [
  { value: atleti.length, label: 'studenti atleti quest’anno', accent: true },
  { value: new Set(atleti.map((a) => a.sport)).size, label: 'discipline diverse' },
  { value: atleti.filter((a) => a.national).length, label: 'di livello nazionale' },
]

const ancore = [
  { href: '#atleti', label: 'Gli atleti' },
]

const wrap = 'max-w-[1200px] mx-auto px-4 md:px-6 scroll-mt-28'
const h2 = 'm-0 text-4xl md:text-[44px] font-extrabold tracking-tight text-fg'
const card = 'bg-surface rounded-[10px] shadow-[0_1px_2px_rgba(11,31,58,0.08)]'
const serif = 'font-serif text-[17px] leading-normal text-muted'
const diagonale = '[clip-path:polygon(0_26px,100%_0,100%_100%,0_100%)]'

function Medaglia({ tipo }) {
  const m = medaglie[tipo]
  return (
    <svg width="40" height="52" viewBox="0 0 40 52" role="img" aria-label={m.label} className="mb-2.5">
      <path d="M8 0h10l6 18h-10z" fill="var(--brand-deep)" />
      <path d="M32 0h-10l-6 18h10z" fill="var(--ochre)" />
      <circle cx="20" cy="34" r="16" fill={m.fill} stroke={m.edge} strokeWidth="2.5" />
      <circle cx="20" cy="34" r="10.5" fill="none" stroke={m.edge} strokeWidth="1.5" />
      <path d="M20 27.5l2 4.1 4.5.6-3.3 3.1.8 4.5-4-2.2-4 2.2.8-4.5-3.3-3.1 4.5-.6z" fill={m.edge} />
    </svg>
  )
}

export default function StudentiAtletiPage() {
  const [inizio, setInizio] = useState(2)
  const n = risultati.length
  const start = ((inizio % n) + n) % n
  const risultatiInOrdine = risultati.slice(start).concat(risultati.slice(0, start))

  return (
    <Layout>
      <Head>
        <title>Studenti atleti - SFP Don Bosco San Donà di Piave</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Barra delle sezioni */}
      <div className="bg-ink text-white">
        <nav
          aria-label="In questa pagina"
          className="max-w-[1200px] mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center justify-end gap-1"
        >
          {ancore.map((a) => (
            <a key={a.href} href={a.href} className="px-3.5 py-3 text-[15px] font-medium text-white! no-underline!">
              {a.label}
            </a>
          ))}
          <a href="#contatti" className="ml-1 px-4 py-3 rounded-md bg-ochre text-[15px] font-bold text-ink! no-underline!">
            Fai la richiesta
          </a>
        </nav>
      </div>

      {/* Apertura con foto */}
      <section className="relative overflow-hidden bg-brand-deep text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${IMG}/testata.jpg`}
          alt="Atleti di diverse discipline in divisa"
          className="absolute top-0 left-0 w-full h-[360px] md:h-[600px] object-cover object-[center_top]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,69,126,0)_0px,rgba(23,69,126,0.35)_180px,var(--brand-deep)_360px)] md:bg-[linear-gradient(180deg,rgba(23,69,126,0)_0px,rgba(23,69,126,0.35)_300px,var(--brand-deep)_600px)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(246,247,249,0.05)_0_2px,transparent_2px_64px)]"
        />
        <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 pt-[300px] md:pt-[500px] pb-[72px] flex flex-col gap-7">
          <p className="m-0 text-sm font-bold uppercase tracking-[0.14em] text-ochre">Anno formativo 2026-2027</p>
          <h1 className="m-0 max-w-[900px] text-[clamp(48px,8vw,104px)] leading-[0.92] font-black tracking-[-0.03em] text-white">
            Studenti atleti
          </h1>
          <p className="m-0 max-w-[640px] font-serif text-[22px] leading-normal text-[#dbe5f1]">
            Chi si allena ogni giorno e gareggia nel fine settimana non deve scegliere fra lo sport e il diploma. La
            scuola gli costruisce intorno un percorso su misura: assenze per le gare giustificate, verifiche
            programmate, due tutor che si parlano.
          </p>
          <div className="mt-6 grid grid-cols-3 border-t border-white/25">
            {numeri.map((x) => (
              <div key={x.label} className="pt-6 pr-6 flex flex-col gap-1.5">
                <span className={`text-[56px] font-black leading-none ${x.accent ? 'text-ochre' : 'text-white'}`}>
                  {x.value}
                </span>
                <span className="text-[15px] text-[#dbe5f1]">{x.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gli atleti */}
      <section id="atleti" className={`${wrap} pt-[72px] pb-10 flex flex-col gap-7`}>
        <div className="flex flex-col gap-2">
          <h2 className={h2}>Gli atleti</h2>
          <p className="m-0 font-serif text-[19px] text-muted">In ordine di cognome.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
          {atleti.map((a) => (
            <article key={a.name} className={`${card} overflow-hidden flex flex-col`}>
              <div className="relative h-80 bg-ink overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/${a.photo}`}
                  alt={`Foto di ${a.name}`}
                  className="block w-full h-full object-cover"
                  style={{ objectPosition: a.pos }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0)_55%,rgba(11,31,58,0.55)_100%)]"
                />
                {a.national && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-ochre text-ink text-xs font-extrabold uppercase tracking-[0.08em] px-2.5 py-1.5 rounded shadow-[0_2px_8px_rgba(11,31,58,0.25)]">
                    <Icon icon="ph:star-fill" className="text-xs" />
                    Nazionale
                  </span>
                )}
                {/* Fascetta con la disciplina */}
                <div className={`absolute inset-x-0 bottom-0 bg-ochre pt-1.5 ${diagonale}`}>
                  <div className={`bg-brand-deep px-[22px] pt-[34px] pb-3.5 flex flex-col gap-0.5 ${diagonale}`}>
                    <span className="text-[15px] font-black uppercase tracking-widest leading-tight text-white">
                      {a.sport}
                    </span>
                    <span className="text-[13px] font-medium leading-snug text-[#dbe5f1]">{a.specialty}</span>
                  </div>
                </div>
              </div>
              <div className="px-[22px] pt-[18px] pb-5 flex flex-col gap-1 flex-1">
                <h3 className="m-0 text-[21px] font-extrabold leading-tight text-fg">{a.name}</h3>
                <span className="text-sm text-muted">
                  Classe {a.className} · {a.course}
                </span>
              </div>
              {/* Fascia con la società */}
              <div className="bg-brand-deep text-white px-[22px] py-3.5 flex items-center gap-2.5 font-serif text-[17px] leading-tight">
                <Icon icon="ph:shield" className="text-lg text-ochre shrink-0" />
                <span>{a.club}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* News */}
      <section className={`${wrap} pt-16 pb-10 flex flex-col gap-7`}>
        <h2 className={h2}>News</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
          {news.map((x) => (
            <article key={x.title} className={`${card} overflow-hidden flex flex-col`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/${x.photo}`} alt="" className="block w-full h-[210px] object-cover" />
              <div className="px-[22px] pt-5 pb-6 flex flex-col gap-2.5 flex-1">
                <h3 className="m-0 text-[21px] font-extrabold leading-tight text-fg">{x.title}</h3>
                <p className={`m-0 ${serif}`}>{x.text}</p>
                <a href="#" className="mt-auto pt-3 inline-flex items-center gap-2 min-h-11 text-[15px] font-bold no-underline!">
                  Leggi la news <Icon icon="ph:arrow-right-bold" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <a
          href="/news"
          className="self-center inline-flex items-center justify-center min-h-12 px-14 border-2 border-fg rounded-full text-fg! text-[15px] font-bold no-underline!"
        >
          Tutte le News
        </a>
      </section>

      {/* I risultati */}
      <section className={`${wrap} pt-16 pb-[72px] flex flex-col gap-7`}>
        <h2 className={h2}>I Risultati</h2>
        <div className="flex gap-6 overflow-hidden">
          {risultatiInOrdine.map((r) => (
            <div
              key={r.name + r.big}
              className="shrink-0 min-w-0 basis-full sm:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-72px)/4)] border-t-4 border-ochre pt-[18px] flex flex-col gap-2"
            >
              <span className="text-4xl font-black leading-tight tracking-tight text-brand-deep dark:text-brand">{r.big}</span>
              <span className="text-lg font-bold text-fg">{r.name}</span>
              <p className={`m-0 ${serif}`}>{r.text}</p>
              <span className="text-[13px] text-muted">{r.when}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {[
            { label: 'Risultato precedente', icon: 'ph:arrow-left', step: -1 },
            { label: 'Risultato successivo', icon: 'ph:arrow-right', step: 1 },
          ].map((b) => (
            <button
              key={b.label}
              type="button"
              onClick={() => setInizio(start + b.step)}
              aria-label={b.label}
              className="w-12 h-12 rounded-full border-[1.5px] border-fg bg-transparent text-fg flex items-center justify-center cursor-pointer"
            >
              <Icon icon={b.icon} className="text-lg" />
            </button>
          ))}
        </div>
      </section>

      {/* Albo d'oro */}
      <section className="bg-ink text-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-[88px] flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 text-4xl md:text-[44px] font-extrabold tracking-tight text-white">Albo d’Oro</h2>
            <p className="m-0 font-serif text-[19px] text-[#dbe5f1]">
              Oro, argento e bronzo dei nostri migliori atleti negli ultimi anni.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
            {albo.map((h) => (
              <div key={h.name} className="bg-surface text-fg rounded-[10px] px-6 pt-6 pb-7 flex flex-col gap-1.5">
                <Medaglia tipo={h.medal} />
                <h3 className="m-0 text-[21px] font-extrabold text-fg">{h.name}</h3>
                <span className="text-[13px] font-bold text-brand-deep dark:text-brand">{h.sport}</span>
                <p className={`mt-1.5 mb-0 ${serif}`}>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Richiesta */}
      <section id="contatti" className={`${wrap} pt-16 pb-24 flex flex-col items-center gap-6`}>
        <a
          href="mailto:segreteria.fp.sandona@salesianinordest.it?subject=Progetto%20studenti%20atleti"
          className="inline-flex items-center gap-3 max-w-full bg-ochre text-ink! no-underline! px-8 py-5 rounded-full text-lg md:text-xl font-bold text-center"
        >
          <Icon icon="ph:envelope-simple" className="text-2xl shrink-0" />
          Sei uno studente atleta e vuoi essere inserito nel programma? Scrivi alla segreteria
        </a>
        <p className="m-0 text-sm text-muted">Bozza: studenti, società e risultati sono dati di prova.</p>
      </section>
    </Layout>
  )
}
