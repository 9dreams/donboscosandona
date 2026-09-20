import Head from 'next/head'
import { Icon } from '@iconify/react'
import { Layout, LandingHero } from '/components'

const CORSO_URL = 'https://itsdigitalacademy.com/corsi/web-developer-full-stack/'
const OPENDAY_URL =
  'https://landing.itsdigitalacademy.com/open-day/openday-webdev-sandona-photo.html'
const MAIL = 'info@itsdigitalacademy.com'
const MAIL_HREF = 'mailto:info@itsdigitalacademy.com'

const ancore = [
  { href: '#corso', label: 'Il corso' },
  { href: '#openday', label: 'Open Day' },
  { href: '#programma', label: 'Programma' },
  { href: '#sbocchi', label: 'Sbocchi' },
  { href: '#destinatari', label: 'Chi può iscriversi' },
  { href: '#iscriviti', label: 'Iscriviti' },
]

const numeri = [
  { icon: 'ph:clock', value: '1800', label: 'ore nel biennio' },
  { icon: 'ph:briefcase', value: '720', label: 'ore in azienda' },
  { icon: 'ph:certificate', value: 'EQF V', label: 'qualifica' },
  { icon: 'ph:trend-up', value: '87%+', label: 'inserimento' },
]

const perche = [
  {
    icon: 'ph:hammer',
    titolo: 'Pratico',
    testo: 'Una parte sostanziale del biennio si svolge in azienda, a contatto con progetti reali.',
  },
  {
    icon: 'ph:chalkboard-teacher',
    titolo: 'Docenti di alto livello',
    testo: 'Il 70% proviene dall’industria. Gli altri dal mondo accademico e manageriale.',
  },
  {
    icon: 'ph:briefcase',
    titolo: 'Professionalizzante',
    testo: 'Competenze tecniche spendibili subito: front-end, back-end, cloud, database e DevOps.',
  },
  {
    icon: 'ph:seal-check',
    titolo: 'Certificato',
    testo: 'Percorso biennale riconosciuto al V livello EQF: Tecnico Superiore Sviluppatore Software.',
  },
]

const programma = [
  {
    icon: 'ph:code',
    titolo: 'Coding',
    testo: 'Principi di programmazione per costruire applicazioni dinamiche.',
  },
  {
    icon: 'ph:globe',
    titolo: 'Web development',
    testo: 'Sviluppo front-end e back-end di siti e applicazioni web.',
  },
  {
    icon: 'ph:database',
    titolo: 'Database e DevOps',
    testo: 'Configurazione e gestione di database e dei flussi di sviluppo.',
  },
  {
    icon: 'ph:cloud',
    titolo: 'Infrastrutture cloud',
    testo: 'Soluzioni scalabili su piattaforme cloud, con attenzione a performance e sicurezza.',
  },
]

const sbocchi = [
  {
    n: '01',
    titolo: 'Front-end Developer',
    testo:
      'Interfacce web moderne, responsive e accessibili: HTML, CSS, JavaScript e framework come React.',
  },
  {
    n: '02',
    titolo: 'Back-end Developer',
    testo:
      'Logica server-side, database e API RESTful con Node.js, Python o PHP.',
  },
  {
    n: '03',
    titolo: 'Full Stack Developer',
    testo:
      'Tutta la catena di sviluppo di un’applicazione web, dal dato all’interfaccia.',
  },
  {
    n: '04',
    titolo: 'Cloud Developer',
    testo:
      'Distribuzione e gestione di applicazioni su AWS, Azure o GCP: scalabilità, sicurezza, continuità.',
  },
  {
    n: '05',
    titolo: 'Mobile App Developer',
    testo:
      'Applicazioni mobile cross-platform per iOS e Android, a partire dalle competenze web del percorso.',
  },
  {
    n: '06',
    titolo: 'Tecnico Superiore Web Developer',
    testo:
      'Qualifica ufficiale EQF V riconosciuta a livello europeo, al termine del biennio.',
  },
]

const destinatari = [
  'Neodiplomati con diploma di istruzione secondaria superiore',
  'Chi ha ottenuto la specializzazione professionale IFTS',
  'Laureati che cercano una specializzazione spendibile sul lavoro',
  'Giovani adulti interessati a colmare un gap di competenze sul territorio',
]

export default function ItsPage() {
  return (
    <Layout>
      <Head>
        <title>ITS Web Developer Full Stack | SFP Don Bosco</title>
        <meta
          name="description"
          content="Corso biennale ITS Web Developer Full Stack dell’ITS Digital Academy Mario Volpato, con sede a San Donà di Piave presso la SFP Don Bosco. 1800 ore, EQF V, Open Day 2 ottobre 2026."
        />
      </Head>

      <LandingHero
        title="Web Developer Full Stack"
        description="Corso biennale ITS Academy — Tecnico Superiore Sviluppatore Software. A San Donà di Piave, nella nostra sede, con ITS Digital Academy Mario Volpato."
        imageUrl="/images/its/hero.jpg"
        mobileObjectPosition="right"
        opacity={0.35}
        sponsorImage={null}
        buttonUrl="#openday"
        buttonText="Open Day 2 ottobre"
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 -mt-8 relative z-10">
        <div className="flex flex-wrap gap-3 justify-center bg-white dark:bg-[#181b23] rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 p-4">
          {ancore.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="text-sm font-semibold px-4 py-2 rounded-full border border-[#1976D2]/30 dark:border-[#64B5F6]/30 text-[#1976D2] dark:text-[#64B5F6] hover:bg-[#1976D2] hover:text-white dark:hover:bg-[#64B5F6] dark:hover:text-[#0d0f14] transition-colors"
            >
              {a.label}
            </a>
          ))}
        </div>
      </div>

      <div id="corso" className="max-w-[880px] mx-auto px-4 md:px-8 mt-16 mb-12 text-center scroll-mt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-[#1976D2] dark:text-[#64B5F6] font-semibold mb-4">
          ITS Digital Academy Mario Volpato
        </p>
        <h1 className="title-display text-4xl md:text-5xl mb-6">
          Tecnico Superiore Sviluppatore Software
        </h1>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          Il Web Developer Full Stack progetta, struttura e gestisce siti interattivi, database e
          software per il web. Unisce i trend tecnologici più recenti a User Experience e alla
          capacità di lavorare su front-end, back-end, cloud e DevOps.
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Il biennio si svolge anche <strong>a San Donà di Piave, presso la SFP Don Bosco</strong>{' '}
          (Via XIII Martiri, 86). Ambito: Architetture software e data management. Le selezioni per
          il biennio <strong>2026–2028</strong> sono aperte.
        </p>
      </div>

      <section className="max-w-[1100px] mx-auto px-4 md:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {numeri.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6 text-center"
            >
              <Icon icon={item.icon} className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mx-auto mb-3" />
              <p className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">{item.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#181b23] p-5 flex gap-3">
            <Icon icon="ph:calendar-blank" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold m-0">Durata</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 m-0">
                <strong>Due anni</strong>, 1800 ore, di cui 720 di tirocinio in azienda.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#181b23] p-5 flex gap-3">
            <Icon icon="ph:users-three" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold m-0">Classe</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 m-0">
                Fino a <strong>25 studenti</strong>.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#181b23] p-5 flex gap-3">
            <Icon icon="ph:currency-eur" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold m-0">Contributo</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 m-0">
                <strong>900 euro</strong> all’anno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20">
        <div className="grid sm:grid-cols-2 gap-5">
          {perche.map((item) => (
            <div
              key={item.titolo}
              className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6"
            >
              <Icon icon={item.icon} className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
              <h3 className="text-xl font-bold mb-2">{item.titolo}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-7 m-0">{item.testo}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="openday" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="rounded-2xl bg-[#1976D2] text-white p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/70 m-0 mb-3">Open Day gratuito</p>
          <h2 className="text-3xl font-bold text-white m-0 mb-4">2 ottobre 2026 · 15:00–17:00</h2>
          <p className="text-lg leading-8 text-white/90 mb-6">
            Due ore per conoscere il percorso Web Developer Full Stack: programma, tirocinio,
            testimonianze di studenti e alumni, domande su selezioni, costi e borse di studio.
            Sede: <strong>Via XIII Martiri, 86 — San Donà di Piave</strong>. Posti limitati.
          </p>
          <a
            href={OPENDAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#1976D2] font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] hover:bg-white/90 transition-colors no-underline"
          >
            Prenota il tuo posto
            <Icon icon="ph:arrow-right" className="text-lg" />
          </a>
        </div>
      </section>

      <section id="programma" className="max-w-[1100px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:path" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Il programma</h2>
        </div>
        <p className="text-lg leading-8 mb-10 max-w-[880px]">
          Front-end, back-end, cloud, database e i fondamenti dell’intelligenza artificiale applicata
          allo sviluppo: quanto serve per realizzare soluzioni web scalabili, con una parte importante
          del biennio in azienda.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {programma.map((blocco) => (
            <div
              key={blocco.titolo}
              className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6"
            >
              <Icon icon={blocco.icon} className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
              <h3 className="text-lg font-bold mb-2">{blocco.titolo}</h3>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 m-0">{blocco.testo}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sbocchi" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:briefcase" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Cosa puoi diventare</h2>
        </div>
        <p className="text-lg leading-8 mb-10">
          Figure tra le più richieste dalle aziende tech del territorio e dai team di sviluppo di ogni
          settore.
        </p>
        <div className="flex flex-col gap-3">
          {sbocchi.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-5 md:p-6 md:grid md:grid-cols-[4rem_1fr] md:gap-6 md:items-start"
            >
              <p className="text-xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0 mb-2 md:mb-0">{s.n}</p>
              <div>
                <h3 className="text-lg font-bold m-0 mb-1">{s.titolo}</h3>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 m-0">{s.testo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="destinatari" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:student" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Chi può iscriversi</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-4 list-none m-0 p-0 mb-8">
          {destinatari.map((d) => (
            <li
              key={d}
              className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-5 flex gap-3"
            >
              <Icon icon="ph:check" className="text-xl text-[#1976D2] dark:text-[#64B5F6] shrink-0 mt-0.5" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-2xl border-l-4 border-[#1976D2] dark:border-[#64B5F6] bg-white dark:bg-[#181b23] p-6">
          <p className="m-0 leading-7">
            Il diploma IFTS della SFP Don Bosco è uno dei titoli che danno accesso all’ITS. Se stai
            valutando il post-diploma, il nostro{' '}
            <a href="/ifts" className="font-semibold text-[#1976D2] dark:text-[#64B5F6]">
              corso IFTS Full Stack
            </a>{' '}
            è il passaggio naturale verso questo biennio.
          </p>
        </div>
      </section>

      <section id="iscriviti" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-16 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:paper-plane-tilt" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Come iscriversi</h2>
        </div>
        <p className="text-lg leading-8 mb-8">
          Le selezioni e le prenotazioni all’Open Day si gestiscono sui siti ufficiali di ITS Digital
          Academy. Qui sotto i due riferimenti.
        </p>
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <a
            href={CORSO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-6 no-underline text-[var(--fg)] hover:border-[#1976D2]/40 dark:hover:border-[#64B5F6]/40 transition-colors"
          >
            <Icon icon="ph:graduation-cap" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="text-xl font-bold mb-2">Pagina del corso</h3>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 mb-4">
              Programma, selezioni 2026–2028, piano formativo e iscrizione sul sito di ITS Digital
              Academy.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1976D2] dark:text-[#64B5F6]">
              itsdigitalacademy.com
              <Icon icon="ph:arrow-up-right" />
            </span>
          </a>
          <a
            href={OPENDAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-6 no-underline text-[var(--fg)] hover:border-[#1976D2]/40 dark:hover:border-[#64B5F6]/40 transition-colors"
          >
            <Icon icon="ph:calendar-check" className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <h3 className="text-xl font-bold mb-2">Open Day San Donà</h3>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 mb-4">
              Prenota il posto per il 2 ottobre 2026, dalle 15:00 alle 17:00, in Via XIII Martiri 86.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1976D2] dark:text-[#64B5F6]">
              landing.itsdigitalacademy.com
              <Icon icon="ph:arrow-up-right" />
            </span>
          </a>
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20">
        <div className="flex items-center gap-3 mb-6">
          <Icon icon="ph:map-pin" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Sede e contatti</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-6">
            <Icon icon="ph:buildings" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <p className="font-semibold m-0 mb-2">San Donà di Piave</p>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 m-0">
              ITS Digital Academy
              <br />
              c/o SFP Don Bosco
              <br />
              Via XIII Martiri, 86
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-6">
            <Icon icon="ph:envelope" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <p className="font-semibold m-0 mb-2">ITS Digital Academy</p>
            <a href={MAIL_HREF} className="text-sm break-all text-[#1976D2] dark:text-[#64B5F6]">
              {MAIL}
            </a>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-6">
            <Icon icon="ph:info" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <p className="font-semibold m-0 mb-2">Altra sede</p>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 m-0">
              Vicenza, c/o ITE Ambrogio Fusinieri
              <br />
              Via D’Annunzio, 15
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
