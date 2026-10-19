import Head from 'next/head'
import Image from 'next/image'

import {
  QuickNav,
  Layout,
  LandingHero,
  SectionTitle,
  NewsWall,
  Paragraph,
  Sponsor,
  Table,
} from '/components'
import { excludeTag } from '/lib/posts'

export default function Home({ data }) {
  return (
    <Layout>
      <Head />
      <LandingHero
        eyebrow='Qualifica e diploma'
        title='Settore Informatico'
        description='Reti, programmazione, sistemi operativi e sviluppo web: il percorso che ti forma come tecnico del futuro digitale.'
        imageUrl='/images/settori/Informatico2.png'
      />
      <QuickNav
        links={[
          { href: '#news', label: 'News' },
          { href: '#qualifiche', label: 'Qualifiche' },
          { href: '#percorso', label: 'Il percorso anno per anno' },
          { href: '#ifts', label: 'IFTS' },
          { href: '#piano-formativo', label: 'Piano formativo' },
        ]}
      />

      <div id='news' className='scroll-mt-28'>
        <NewsWall
          title='News dal Settore Informatico'
          data={data}
          limit={7}
          defaultTag='informatico'
        />
      </div>

      <a
        href='https://www.donboscoitalia.it/go-beyond-traditional-education/'
        target='_blank'
        rel='noopener noreferrer'
        className='block w-full bg-black'
        aria-label='GO Beyond Traditional Education'
      >
        <img
          src='/images/gobeyond.png'
          alt='GO beyond traditional education'
          className='block w-full'
        />
      </a>

      <Paragraph
        id='qualifiche'
        title='Operatore Informatico'
        subtitle='Qualifica triennale'
        rightImageUrl='/images/codici_progetti.png'
      >
        L'Operatore informatico interviene nel processo di sviluppo e gestione
        di prodotti e servizi informatici. Supporta operativamente sistemi, reti
        e soluzioni di Data Management, nello specifico negli ambiti
        dell'installazione, configurazione e utilizzo di supporti e dispositivi
        informatici hardware e software presenti nell'office automation e a
        supporto della comunicazione digitale, della manutenzione ordinaria e
        straordinaria di sistemi, reti, dispositivi e terminali utenti,
        dell'elaborazione, manutenzione e trasmissione di dati gestiti da
        archivi digitali.
        <h3>Competenze sviluppate nel corso dei tre anni:</h3>
        <ol>
          <li>
            Installare, configurare e utilizzare supporti informatici hardware e
            software tipici dell’office automation e della comunicazione
            digitale sulla base delle specifiche esigenze del cliente
          </li>
          <li>
            Eseguire la manutenzione ordinaria e straordinaria di sistemi, reti,
            dispositivi e terminali utenti, individuando eventuali anomalie e
            problemi di funzionamento
          </li>
          <li>
            Effettuare l’elaborazione, manutenzione e trasmissione di dati
            gestiti da archivi digitali
          </li>
        </ol>
      </Paragraph>
      <section className='mx-auto mb-16 grid max-w-[1100px] gap-2 lg:gap-0 px-4 md:px-8 lg:mb-24 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.4fr)] lg:items-start'>
        <div className='lg:sticky lg:top-24 lg:mt-14'>
          <img
            src='/images/informatico/sistema-educativo-formazione.png'
            alt='Sistema educativo di istruzione e formazione'
            className='mx-auto w-full max-w-[420px] rounded-2xl border border-line shadow-sm lg:max-w-none'
          />
        </div>
        <div>
      <Paragraph
        maxWidth={false}
        title='Tecnico Informatico'
        subtitle='Diploma Professionale Quadriennale in Sistema Duale con indirizzo Sviluppo soluzioni ICT'
      >
        Il Tecnico informatico interviene con autonomia - nelle specifiche
        assegnate - al presidio dei processi relativi ai sistemi, reti, data
        management, sviluppo di soluzioni ICT (Information & Communication
        Technologies). Supporta operativamente l'installazione, aggiornamento e
        dismissione di hardware, software e componenti di sottosistema, la
        sicurezza e il testing di conformità, la gestione di reti informatiche e
            del data management.
            <h3>
              Competenze del tecnico informatico con indirizzo Sviluppo soluzioni
              ICT:
            </h3>
            <ol>
          <li>
            Elaborare prodotti di comunicazione che descrivono prodotti,
            servizi, componenti o applicazioni conformi con i requisiti relativi
            alla documentazione, identificando e selezionando lo stile e il
            media appropriato per il materiale di presentazione
          </li>
          <li>
            Curare gli interventi necessari pianificati per implementare la
            soluzione, tra cui l'installazione, l'aggiornamento e la
            dismissione, registrando tutte le informazioni rilevanti, compresi
            gli indirizzi delle apparecchiature, i dati di configurazione e di
            performance
          </li>
          <li>
            Collaborare a implementare la politica della sicurezza
            dell'informazione, controllando e attuando interventi a fronte di
            intrusioni, frodi e buchi o falle della sicurezza al fine di
            assicurare che i rischi siano analizzati e gestiti
          </li>
          <li>
            Realizzare sulla base delle analisi effettuate, delle specifiche
            rilevate e dei modelli esistenti un nuovo modello per implementare
            le applicazioni in conformità con la politica e le esigenze
            dell'utente/cliente
          </li>
          <li>
            Adattare le soluzioni esistenti, sviluppando e collaudando
            applicativi di bassa complessità
          </li>
          <li>
            Costruire, effettuandone la relativa implementazione, le procedure
            di test sistematico per i sistemi IT o per i requisiti di usabilità
            del cliente per stabilire la conformità con le specifiche di
            progettazione
          </li>
        </ol>
      </Paragraph>
      <Paragraph
        id='ifts'
        maxWidth={false}
        title='Full Stack Developer'
        subtitle='Corso IFTS 2026/2027 — Coding & Vibe Coding'
        topImageUrl=''
      >
        Percorso post-diploma di Istruzione e Formazione Tecnica Superiore:
        800 ore, di cui 400 in aula e 400 di stage in azienda, gratuito, con
        esame finale e Certificato di Specializzazione Tecnica Superiore
        (EQF IV), valido anche per l&apos;accesso agli ITS Academy. In questa
        edizione si diventa sviluppatori full stack su PHP, Laravel, Livewire
        e Filament, imparando a scrivere il codice con le proprie mani e a
        usare l&apos;intelligenza artificiale con criterio — capire prima di
        delegare. Inizio a novembre 2026.
        {' '}
        <a href="/ifts" className="font-semibold">
          Tutte le informazioni sul corso IFTS →
        </a>
      </Paragraph>
        </div>
      </section>
      <LandingHero
        opacity={0.35}
        title="ITS Academy — Web Developer Full Stack"
        description="Il biennio ITS Digital Academy Mario Volpato è anche a San Donà, nella nostra sede. 1800 ore, tirocinio in azienda, qualifica EQF V. Open Day il 2 ottobre 2026."
        buttonUrl="/its"
        buttonText="Scopri il corso ITS"
        imageUrl="/images/its/hero.jpg"
        mobileObjectPosition="78% 40%"
        sponsorImage={null}
      />
      <section id='percorso' className='max-w-[1400px] mx-auto px-4 md:px-8 my-16 scroll-mt-28'>
        <SectionTitle icon='ph:path'>Il percorso anno per anno</SectionTitle>
        <div className='grid md:grid-cols-2 gap-6'>
          {banner.map((b) => (
            <Image
              key={b.src}
              src={b.src}
              alt={b.alt}
              width={b.width}
              height={b.height}
              sizes='(min-width: 768px) 50vw, 100vw'
              className='w-full h-auto rounded-2xl border border-line shadow-sm'
            />
          ))}
        </div>
      </section>

      {/* <Paragraph topImageUrl='/images/informatico/programma-scolastico.svg' /> */}
      <Sponsor logos={sponsor} />

      <Table
        id='piano-formativo'
        title='Piano formativo'
        rows={[
          ['', '1° Anno', '2° Anno', '3° Anno', '4° Anno', 'IFTS'],
          ['Italiano', 3, 3, 2, 3, 1],
          ['Storia / Economia / Diritto', 1, 1, 1, 1, 1],
          ['Inglese', 2, 2, 2, 2, 1],
          ['Religione', 1, 1, 1, 1, null],
          ['Matematica', 3, 3, 3, 2, 1],
          ['Fisica', 2, 2, 2, 2, 1],
          ['CAD', 2, 2, 2, 2, null],
          ['Teoria Sistemi e reti', 5, 3, 3, null, null],
          ['Laboratorio Sistemi e Programmazione', 10, 12, 12, 3, 10],
          [null, null, null, null, null, null],
          [
            'ORE ANNUALI STAGE / APPRENDISTATO FORMATIVO',
            '',
            200,
            200,
            500,
            400,
          ],
        ]}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio?q=informatico'
  )
  const data = excludeTag(await res.json(), 'screen')

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}

let banner = [
  {
    src: '/images/informatico/banner-programmazione.jpg',
    alt: 'Programmazione, dalla prima riga di codice alle app vere: HTML e Arduino al 1° anno; JavaScript, CSS, Bootstrap, ReactJS, versioning e Raspberry al 2°; Tailwind CSS, NextJS e SQL al 3°; PHP, Laravel e React Native al 4° anno in Sistema Duale; PHP e OOP, database relazionali, Tailwind, Laravel, Livewire, Filament e Vibe Coding all’IFTS Full Stack Developer',
    width: 1536,
    height: 2581,
  },
  {
    src: '/images/informatico/banner-sistemi.jpg',
    alt: 'Sistemi e reti, dal primo PC alla rete di un’azienda: sicurezza, assemblaggio PC e sistemi operativi al 1° anno; assistenza tecnica, scelta dei componenti, benchmark, apparati di rete e shell Linux al 2°; server Windows e Linux, virtualizzazione, router, MikroTik, Cisco Packet Tracer, droni, fotoritocco e sicurezza informatica al 3°; Sistema Duale al 4° anno; DevOps, container Docker, deploy, pubblicazione negli store e gestione dei domini all’IFTS',
    width: 1536,
    height: 2569,
  },
]

let sponsor = [
  'https://agsol.com/wp-content/uploads/2018/09/new-microsoft-logo-SIZED-SQUARE.jpg',
  'https://assets.ubuntu.com/v1/57a889f6-ubuntu-logo112.png',
  'https://dev.socialidnow.com/images/9/94/Mikrotik-logo.png',
  'https://www.itquadro.com/wp-content/uploads/2023/06/Fortinet_Logo.png',
  'https://www.arduino.cc/en/uploads/Trademark/ArduinoCommunityLogo.png',
  'https://images-eu.ssl-images-amazon.com/images/I/413W%2BhcdyEL.png',
  'https://www.comitec.it/img/logo.png?v=1.1',
  'https://images.squarespace-cdn.com/content/v1/5a9651691137a60b454560da/1520306528003-SNVBGH088XW7W7NM8F06/11340-oculus-logo-hero-vertical-447x362.png',
  'https://framerusercontent.com/images/LUfj3Wtf4rSkQ19ocMokPTaCJI.svg',
  'https://www.freelogovectors.net/wp-content/uploads/2025/06/cursor-logo-freelogovectors.net_.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/PhpStorm_Icon.svg/1280px-PhpStorm_Icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',
  'https://antigravity.google/assets/image/brand/antigravity-icon__full-color.png',
  '/images/informatico/loghi/proxmox.png',
]
