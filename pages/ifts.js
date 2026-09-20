import Head from 'next/head'
import { Icon } from '@iconify/react'
import { Layout, LandingHero } from '/components'

const MAIL = 'f.cicogna@donboscosandona.it'
const MAIL_HREF =
  'mailto:f.cicogna@donboscosandona.it?subject=Candidatura%20corso%20IFTS%202026%2F2027%20Full%20Stack%20Developer'
const TEL = '0421338969'
const TEL_LABEL = '0421 338969'

const ancore = [
  { href: '#corso', label: 'Il corso' },
  { href: '#metodo', label: 'Coding & Vibe Coding' },
  { href: '#programma', label: 'Programma' },
  { href: '#argomenti', label: 'Argomenti' },
  { href: '#competenze', label: 'Competenze' },
  { href: '#destinatari', label: 'Chi può iscriversi' },
  { href: '#candidati', label: 'Candidati' },
]

const numeri = [
  { icon: 'ph:clock', value: '800', label: 'ore totali' },
  { icon: 'ph:chalkboard-teacher', value: '400', label: 'ore in aula' },
  { icon: 'ph:briefcase', value: '400', label: 'ore di stage' },
  { icon: 'ph:certificate', value: 'EQF IV', label: 'certificato' },
]

const fasi = [
  {
    n: '0',
    titolo: 'PHP e programmazione a oggetti',
    periodo: 'Fondamenti',
    testo:
      'Si parte dal linguaggio e dalla logica: variabili, array, funzioni, form HTML e il passaggio a classi, ereditarietà e interfacce. L’obiettivo è scrivere codice che si capisce, si legge e si può modificare.',
    punti: [
      'Sintassi PHP, tipi, array e funzioni',
      'Form, GET/POST e primi script lato server',
      'Classi, proprietà, metodi e visibilità',
      'Ereditarietà, interfacce e debugging',
    ],
  },
  {
    n: '1',
    titolo: 'Laravel core e Livewire',
    periodo: 'Applicazione web',
    testo:
      'Si entra nel framework con cui si costruiscono applicazioni reali: routing, controller, template Blade, database con Eloquent e componenti interattivi Livewire, senza ricaricare la pagina.',
    punti: [
      'Installazione Laravel, Artisan, routing e controller',
      'Blade, form, validazione e messaggi flash',
      'Migration, model Eloquent, CRUD e paginazione',
      'Componenti Livewire: binding, azioni, ciclo di vita',
    ],
  },
  {
    n: '2',
    titolo: 'Relazioni, autenticazione e Filament',
    periodo: 'Applicazione professionale',
    testo:
      'Il progetto cresce: relazioni tra tabelle, login e permessi, poi il pannello di amministrazione Filament — form, tabelle, filtri e ruoli — capendo che sotto il cofano c’è Livewire.',
    punti: [
      'Relazioni 1-N e N-N tra i dati',
      'Autenticazione, Policy, Gate e middleware',
      'Pannello Filament: Resource, form e tabelle',
      'Relazioni nel pannello, ruoli e permessi',
    ],
  },
  {
    n: '3',
    titolo: 'Progetto di gruppo',
    periodo: 'Dal requisito al deploy',
    testo:
      'Si lavora in team su un’applicazione completa: analisi, schema dati, CRUD, logica di business, upload, una feature extra, pubblicazione online e presentazione del lavoro.',
    punti: [
      'Analisi dei requisiti e disegno dello schema dati',
      'CRUD con Filament e logica di business',
      'Upload file, code in background e una feature extra',
      'Deploy, collaudo e presentazioni finali',
    ],
  },
]

const argomenti = [
  {
    icon: 'ph:code',
    titolo: 'PHP',
    items: [
      'Variabili, tipi, array e funzioni',
      'Form HTML e passaggio dati (GET / POST)',
      'Prime pagine dinamiche lato server',
    ],
  },
  {
    icon: 'ph:cube',
    titolo: 'Programmazione a oggetti',
    items: [
      'Classi, proprietà e metodi',
      'Visibilità (public, private, protected)',
      'Ereditarietà e interfacce',
    ],
  },
  {
    icon: 'ph:stack',
    titolo: 'Laravel',
    items: [
      'Installazione, Artisan, routing e controller',
      'Template Blade e form',
      'Migration, model ed Eloquent',
      'CRUD, validazione, flash e paginazione',
    ],
  },
  {
    icon: 'ph:lightning',
    titolo: 'Livewire',
    items: [
      'Componenti (classe PHP + vista Blade)',
      'Binding bidirezionale e azioni',
      'Ciclo di vita e aggiornamenti senza reload',
    ],
  },
  {
    icon: 'ph:database',
    titolo: 'Dati e autenticazione',
    items: [
      'Basi di dati relazionali e SQL',
      'Relazioni 1-N e N-N',
      'Login, Policy, Gate e autorizzazioni',
    ],
  },
  {
    icon: 'ph:squares-four',
    titolo: 'Filament',
    items: [
      'Pannello di amministrazione',
      'Resource: form, tabelle e filtri',
      'Relazioni, ruoli e permessi',
    ],
  },
  {
    icon: 'ph:git-branch',
    titolo: 'DevOps',
    items: [
      'Git, branch, pull request e code review',
      'Container con Docker',
      'Ambienti, CI/CD, deploy e monitoraggio di base',
    ],
  },
  {
    icon: 'ph:sparkle',
    titolo: 'Intelligenza artificiale',
    items: [
      'Specifiche e prompt chiari, completi, verificabili',
      'Lettura critica del codice generato',
      'Riconoscere errori, allucinazioni e convenzioni violate',
      'Integrare l’AI in un progetto reale senza perderne il controllo',
    ],
  },
]

const competenze = [
  {
    ore: 23,
    titolo: 'Progettare applicazioni software',
    testo:
      'Analisi dei requisiti, modello dei dati, architettura MVC, interfacce con Blade e Livewire, usabilità dei pannelli Filament.',
  },
  {
    ore: 39,
    titolo: 'Sviluppare applicazioni software',
    testo:
      'PHP, programmazione a oggetti, debugging, versionamento con Git e gestione delle dipendenze con Composer.',
  },
  {
    ore: 31,
    titolo: 'Sviluppare il Front End',
    testo:
      'HTML, CSS, Tailwind, templating Blade e componenti interattivi Livewire (binding, azioni, ciclo di vita).',
  },
  {
    ore: 47,
    titolo: 'Sviluppare il Back End',
    testo:
      'Laravel (routing, controller, migration), Eloquent, relazioni, autenticazione e autorizzazione, Filament, basi di dati relazionali.',
  },
  {
    ore: 70,
    titolo: 'Uso critico dell’intelligenza artificiale',
    testo:
      'Non è una materia a parte: è il tempo in cui progettazione e sviluppo si affrontano in modalità AI-assistita, con criterio e responsabilità.',
  },
  {
    ore: 66,
    titolo: 'DevOps',
    testo:
      'Git avanzato, Docker, integrazione e distribuzione continua, ambienti di staging e produzione, deploy, logging di base.',
  },
  {
    ore: 12,
    titolo: 'Sicurezza e salute nei luoghi di lavoro',
    testo:
      'Modulo obbligatorio: normativa, rischi al videoterminale, comportamenti e procedure di emergenza.',
  },
]

const destinatari = [
  'Diploma di istruzione secondaria di secondo grado',
  'Diploma professionale di tecnico di 4° anno IeFP',
  'Ammissione al quinto anno dei percorsi di liceo',
  'Qualifica di operatore di 3° anno IeFP, con riconoscimento di crediti formativi',
]

const documenti = [
  'Carta d’identità',
  'Codice fiscale',
  'Curriculum vitae',
  'Titolo di studio',
]

const stack = [
  { src: '/images/informatico/loghi/php.png', alt: 'PHP' },
  { src: '/images/informatico/loghi/laraver.webp', alt: 'Laravel' },
  { src: '/images/informatico/loghi/filament.jpg', alt: 'Filament' },
  { src: '/images/informatico/tailwind-css.jpeg', alt: 'Tailwind CSS' },
  { src: '/images/informatico/sql.png', alt: 'SQL' },
  { src: '/images/informatico/loghi/vibe_coding.png', alt: 'Vibe Coding' },
]

export default function IftsPage() {
  return (
    <Layout>
      <Head>
        <title>Corso IFTS Full Stack Developer 2026/2027 | SFP Don Bosco</title>
        <meta
          name="description"
          content="Corso IFTS Full Stack Developer — Tecniche per la progettazione e lo sviluppo di applicazioni informatiche. Edizione 2026/2027 Coding & Vibe Coding. 800 ore, gratuito, certificato EQF IV."
        />
      </Head>

      <LandingHero
        title="Full Stack Developer"
        description="Corso IFTS 2026/2027 — Coding & Vibe Coding. Impara a progettare e sviluppare applicazioni web, comprendendone a fondo il funzionamento e con l’aiuto dell’intelligenza artificiale."
        imageUrl="/images/ifts/hero-desktop.jpg"
        imageMobileUrl="/images/ifts/hero-mobile.jpg"
        opacity={0.45}
        sponsorImage={null}
        buttonUrl="#candidati"
        buttonText="Candidati al corso"
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
          Istruzione e Formazione Tecnica Superiore
        </p>
        <h1 className="title-display text-4xl md:text-5xl mb-6">
          Tecniche per la progettazione e lo sviluppo di applicazioni informatiche
        </h1>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
          Percorso post-diploma della <strong>SFP Don Bosco di San Donà di Piave</strong>, edizione{' '}
          <strong>2026/2027</strong>. Forma sviluppatori full stack in grado di coprire l’intero ciclo
          di un’applicazione web: dati, server, interfaccia e pubblicazione.
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Il corso è <strong>gratuito</strong>, si attiva con almeno 15 allievi e si conclude con un
          esame per il <strong>Certificato di Specializzazione Tecnica Superiore</strong> (livello{' '}
          <strong>EQF IV</strong>), valido anche per l’accesso agli ITS Academy.
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
              <p className="font-semibold m-0">Calendario</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 m-0">
                Selezione il <strong>30 ottobre</strong>. Lezioni dal <strong>3 novembre 2026</strong> a{' '}
                <strong>giugno 2027</strong>.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#181b23] p-5 flex gap-3">
            <Icon icon="ph:users-three" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold m-0">Frequenza</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 m-0">
                Obbligatoria almeno al <strong>70%</strong> del monte ore. Corso a numero chiuso.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#181b23] p-5 flex gap-3">
            <Icon icon="ph:currency-eur" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold m-0">Costo</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 m-0">
                <strong>Interamente gratuito</strong> per gli allievi, con il sostegno della Regione del Veneto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20">
        <div className="rounded-2xl bg-[#1976D2]/5 dark:bg-[#64B5F6]/10 border border-[#1976D2]/15 dark:border-[#64B5F6]/20 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-[#1976D2] dark:text-[#64B5F6] mb-4">Chi è il Full Stack Developer</h2>
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 m-0">
            È lo sviluppatore che tiene insieme tutto lo stack: dal database al server, dall’interfaccia
            utente al pannello di amministrazione. Non si limita a “far funzionare le pagine”: progetta
            i dati, scrive la logica, cura l’esperienza su desktop e mobile e pubblica il risultato.
            Lo stack di questa edizione è quello usato ogni giorno nelle software house:{' '}
            <strong>PHP, Laravel, Livewire, Filament, Tailwind e SQL</strong>, con Git e le pratiche DevOps
            per lavorare in team.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {stack.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                className="h-12 w-auto max-w-[120px] object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:sparkle" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Coding &amp; Vibe Coding</h2>
        </div>
        <p className="text-lg leading-8 mb-8">
          L’intelligenza artificiale scrive codice in pochi secondi. Chi non sa programmare, però, non
          sa dire se quel codice è giusto. Il principio del corso è uno solo:{' '}
          <strong>capire prima di delegare</strong>. Per questo ogni argomento si affronta due volte.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-[#1976D2] dark:text-[#64B5F6] font-semibold mb-2">
              Traccia manuale
            </p>
            <h3 className="text-xl font-bold mb-3">Si scrive con le proprie mani</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-7 m-0">
              Lezione, esercizio, correzione. Si costruisce il vocabolario tecnico: sintassi, errori,
              convenzioni. Senza questa base l’AI resta una scatola nera.
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-[#1976D2] dark:text-[#64B5F6] font-semibold mb-2">
              Traccia AI-assistita
            </p>
            <h3 className="text-xl font-bold mb-3">Si guida, si legge, si giudica</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-7 m-0">
              Stesso argomento, strumenti di generazione del codice. Si impara a scrivere una specifica
              chiara, a leggere il diff, a cogliere bug e scorciatoie, a integrare solo ciò che regge.
            </p>
          </div>
        </div>
      </section>

      <section id="programma" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:path" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Il percorso in quattro fasi</h2>
        </div>
        <p className="text-lg leading-8 mb-10">
          La specializzazione tecnica è un cammino unico: ogni fase poggia sulla precedente. Si arriva
          al progetto finale sapendo perché le cose funzionano, non solo come si cliccano.
        </p>
        <div className="flex flex-col gap-6">
          {fasi.map((fase) => (
            <article
              key={fase.n}
              className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6 md:p-8 md:grid md:grid-cols-[auto_1fr] md:gap-8"
            >
              <div className="mb-4 md:mb-0 md:w-40 shrink-0">
                <p className="text-5xl font-bold text-[#1976D2] dark:text-[#64B5F6] leading-none m-0">
                  {fase.n}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-2 m-0">{fase.periodo}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{fase.titolo}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-7 mb-4">{fase.testo}</p>
                <ul className="grid sm:grid-cols-2 gap-2 m-0 p-0 list-none">
                  {fase.punti.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <Icon icon="ph:check-circle" className="text-lg text-[#1976D2] dark:text-[#64B5F6] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="argomenti" className="max-w-[1100px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:list-bullets" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Argomenti trattati</h2>
        </div>
        <p className="text-lg leading-8 mb-10 max-w-[880px]">
          Il dettaglio del programma tecnico: dalle basi del linguaggio fino al deploy del progetto di
          gruppo, con un filo conduttore sull’uso responsabile dell’intelligenza artificiale.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {argomenti.map((blocco) => (
            <div
              key={blocco.titolo}
              className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 shadow-sm p-6"
            >
              <Icon icon={blocco.icon} className="text-3xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
              <h3 className="text-lg font-bold mb-3">{blocco.titolo}</h3>
              <ul className="m-0 pl-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {blocco.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="competenze" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:target" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Competenze in uscita</h2>
        </div>
        <p className="text-lg leading-8 mb-8">
          La specializzazione Full Stack è articolata in queste competenze. Le ore dell’intelligenza
          artificiale non aggiungono argomenti extra: sono il tempo in cui le stesse competenze tecniche
          si allenano in modalità assistita.
        </p>
        <div className="flex flex-col gap-3">
          {competenze.map((c) => (
            <div
              key={c.titolo}
              className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-5 md:p-6 md:grid md:grid-cols-[5rem_1fr] md:gap-6 md:items-start"
            >
              <p className="text-2xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0 mb-2 md:mb-0">
                {c.ore}
                <span className="text-sm font-semibold ml-1">ore</span>
              </p>
              <div>
                <h3 className="text-lg font-bold m-0 mb-1">{c.titolo}</h3>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 m-0">{c.testo}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
          Alle 400 ore in aula si affiancano <strong>400 ore di stage</strong> in azienda: il contesto
          reale in cui mettere alla prova quanto appreso a scuola.
        </p>
      </section>

      <section id="destinatari" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-20 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:student" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Chi può iscriversi</h2>
        </div>
        <p className="text-lg leading-8 mb-6">
          Il corso è aperto a chi ha già concluso (o sta concludendo) un percorso di scuola superiore
          o di istruzione e formazione professionale, in una di queste condizioni:
        </p>
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
            Al termine, dopo l’esame, si ottiene il <strong>Certificato di Specializzazione Tecnica
            Superiore</strong> (EQF IV). Il titolo consente l’<strong>accesso ai percorsi ITS Academy</strong>,
            tra cui l’indirizzo Web Developer Full Stack dell’ITS Digital Academy Mario Volpato, con
            sede anche a San Donà di Piave.
          </p>
        </div>
      </section>

      <section id="candidati" className="max-w-[1000px] mx-auto px-4 md:px-8 mb-16 scroll-mt-28">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="ph:paper-plane-tilt" className="text-3xl text-[#1976D2] dark:text-[#64B5F6]" />
          <h2 className="text-3xl font-bold text-[#1976D2] dark:text-[#64B5F6] m-0">Come candidarsi</h2>
        </div>
        <p className="text-lg leading-8 mb-8">
          Invia la candidatura a{' '}
          <a href={MAIL_HREF} className="font-semibold text-[#1976D2] dark:text-[#64B5F6]">
            {MAIL}
          </a>
          , allegando:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {documenti.map((doc, i) => (
            <div
              key={doc}
              className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-5 text-center"
            >
              <p className="text-sm font-bold text-[#1976D2] dark:text-[#64B5F6] m-0 mb-2">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="m-0 font-medium">{doc}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-[#1976D2] text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/70 m-0 mb-2">Selezione</p>
            <h3 className="text-2xl font-bold text-white m-0 mb-2">30 ottobre 2026</h3>
            <p className="m-0 text-white/90 leading-7">
              Le attività formative iniziano il <strong>3 novembre 2026</strong>. Posti limitati:
              si attiva con almeno 15 allievi.
            </p>
          </div>
          <a
            href={MAIL_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#1976D2] font-semibold px-8 py-4 text-sm uppercase tracking-[0.15em] hover:bg-white/90 transition-colors shrink-0 no-underline"
          >
            Invia la candidatura
            <Icon icon="ph:arrow-right" className="text-lg" />
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
            <p className="font-semibold m-0 mb-2">SFP Don Bosco</p>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 m-0">
              Via XIII Martiri, 86
              <br />
              30027 San Donà di Piave (VE)
            </p>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-6">
            <Icon icon="ph:phone" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <p className="font-semibold m-0 mb-2">Telefono</p>
            <a href={`tel:${TEL}`} className="text-sm text-[#1976D2] dark:text-[#64B5F6]">
              {TEL_LABEL}
            </a>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#181b23] border border-gray-200 dark:border-white/10 p-6">
            <Icon icon="ph:envelope" className="text-2xl text-[#1976D2] dark:text-[#64B5F6] mb-3" />
            <p className="font-semibold m-0 mb-2">Candidature</p>
            <a href={MAIL_HREF} className="text-sm break-all text-[#1976D2] dark:text-[#64B5F6]">
              {MAIL}
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto px-4 md:px-8 mb-24">
        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#181b23] p-8">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ifts/salesiani-formazione.jpg"
              alt="Salesiani per la Formazione Professionale — Don Bosco San Donà"
              className="h-16 w-auto object-contain"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ifts/accreditamento-regione.jpg"
              alt="Organismo di Formazione accreditato dalla Regione del Veneto"
              className="h-24 w-auto object-contain"
            />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ifts/finanziatori.jpg"
            alt="Repubblica Italiana, Regione del Veneto, Fondo per lo Sviluppo e la Coesione, Piano Sviluppo e Coesione Veneto"
            className="w-full max-w-[720px] mx-auto h-auto object-contain"
          />
          <p className="text-xs leading-5 text-center text-gray-500 dark:text-gray-400 mt-8 m-0">
            Corso IFTS “Tecniche per la progettazione e lo sviluppo di applicazioni informatiche”,
            edizione 2026/2027. Approvato con DGR n. 680 del 17/06/2025 e Decreto n. 1149 del 29/09/2025.
          </p>
        </div>
      </section>
    </Layout>
  )
}
