import Head from 'next/head'

import {
  Layout,
  LandingHero,
  Products,
  SwiperNews,
  Paragraph,
  Sponsor,
} from '/components'

export default function Home({ data }) {
  return (
    <Layout>
      <Head />
      <LandingHero
        opacity={0}
        siteName='CFP DON BOSCO'
        imageUrl='/images/informatico/settore-informatico.jpg'
      />
      <Paragraph
        title='Operatore Informatico'
        subtitle='Qualifica triennale'
        rightImageUrl='https://archive.donboscosandona.it/img/ck/168ae5996c23866c9a579f8c6d948f441cb0697e.png'
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
      <Paragraph
        title='Tecnico Informatico'
        subtitle='Diploma Professionale Quadriennale in Sistema Duale con indirizzo Sviluppo soluzioni ICT'
        leftImageUrl='https://archive.donboscosandona.it/img/ck/ef718d5f3b16b5b074f7305e4bf7bad73ede5378.jpeg'
      >
        Il Tecnico informatico interviene con autonomia - nelle specifiche
        assegnate - al presidio dei processi relativi ai sistemi, reti, data
        management, sviluppo di soluzioni ICT (Information & Communication
        Technologies). Supporta operativamente l'installazione, aggiornamento e
        dismissione di hardware, software e componenti di sottosistema, la
        sicurezza e il testing di conformità, la gestione di reti informatiche e
        del data management.
        <ol>
          <h3>
            Competenze del tecnico informatico con indirizzo Sviluppo soluzioni
            ICT:
          </h3>
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
      <Products
        title='Primo anno'
        description="Durante primo anno vivrai un primo approccio alle Tecnologie dell'Informazione e al Coding grazie al laboratorio Internet of Things: imparerai a conoscere i componenti elettronici e a farli comunicare con il mondo esterno utilizzando dei moduli programmabili (Lego Mindstorms, Arduino, Raspberry)."
        cardWidth={3}
        cardWidthXs={6}
        products={primo_anno}
      />
      <Products
        title='Secondo anno'
        description="Il secondo anno è dedicato all\'assistenza tecnica al cliente da tutti i punti di vista. Nella parte di programmazione vedremo lo sviluppo front-end."
        cardWidth={3}
        cardWidthXs={6}
        products={secondo_anno}
      />
      <Products
        title='Terzo anno'
        description='Il terzo anno ti insegnerà a gestire le reti e i server. Entrerai inoltre nel mondo dello sviluppo back-end, full-stack e delle API (Application Programming Interfaces)'
        cardWidth={4}
        cardWidthXs={12}
        products={terzo_anno}
      />
      <Products
        title='Quarto anno'
        description="Il quarto anno se deciderai di non fermarti alla qualifica ma di conseguire il diploma di tecnico, sarai collocato in un'azienda del settore per una formazione con il Sistema Duale (scuola e azienda)."
        cardWidth={3}
        cardWidthXs={6}
        products={quarto_anno}
      />
      <SwiperNews title='News dal Settore Informatico' data={data} limit={15} />
      <Paragraph topImageUrl='/images/informatico/programma-scolastico.svg' />
      <Sponsor logos={sponsor} />
      <Paragraph topImageUrl='/images/informatico/tabella-ore.png' />
      <Products
        title='I nostri progetti'
        description='...'
        cardWidth={3}
        cardWidthXs={6}
        products={progetti}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona?q=informatico'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}

let progetti = [
  {
    title: '9dreams Agency',
    category: '...',
    description: 'La nostra agenzia di comunicazione.',
    immagineUrl:
      'http://localhost:3000/_next/image?url=%2Fimages%2Finformatico%2F9dreams.png&w=750&q=75',
  },
  {
    title: 'Books',
    category: '...',
    description: '...',
    immagineUrl: '/images/informatico/books.png',
  },
  {
    title: 'Dottor Gross Academy',
    category: '...',
    description: 'Il canale dottorGross Academy con le nostre videolezioni',
    immagineUrl:
      'https://archive.donboscosandona.it/img/ck/fb02222d070f1589f6a5de9f022e9d47d32588f4.png',
  },
  {
    title: 'FreeCodeCamp',
    category: '...',
    description:
      'Siamo fieri di contribuire con le nostre classi alla traduzione italiana del progetto freeCodeCamp, che ha la mission di insegnare a programmare gratuitamente in tutto il mondo, rilasciando anche certificazioni di livello Universitario.',
    immagineUrl:
      'https://archive.donboscosandona.it/img/column/0355dfc4fe258cf1982ba5ac69a051d4ebd245c4.jpg?1622362155',
  },
]

let primo_anno = [
  {
    title: 'Sicurezza',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Assemblaggio PC',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Sistemi Operativi',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Arduino',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'C++',
    description: '',
    immagineUrl: '',
  },
  {
    title: 'LEGO Mindstorms',
    description: '...',
    immagineUrl: '',
  },
]

let secondo_anno = [
  {
    title: 'Assistenza al cliente',
    description: 'Con il resto della classe farai parte del centro di assistenza tecnica dell’intera scuola, imparando così a fornire assistenza in casi reali sempre diversi e non con dei semplici esercizi scolastici. Questo ti aiuterà anche a sviluppare le competenze relazionali fondamentali in qualunque ambiente di lavoro.',
    immagineUrl: '',
  },
  {
    title: 'Scelta dei componenti',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Benchmark e Test',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Apparati di rete',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Shell Linux',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Python',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Raspberry',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Versioning',
    description: 'Visual Studio Code, estensioni, GitHub, Fork...',
    immagineUrl: '',
  },
  {
    title: 'HTML',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'CSS',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Bootstrap',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'JavaScript',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'ReactJS',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'NextJS',
    description: '...',
    immagineUrl: '',
  },
  {
    title: '.NET',
    description: '...',
    immagineUrl: '',
  },
]

let terzo_anno = [
  {
    title: 'Server Windows',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Server Linux',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Virtualizzazione',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Domini Active Directory',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Router',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Cisco Packet Tracer',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Sicurezza Informatica',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'SQL',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'NodeJS',
    description: 'API con NodeJS e Express',
    immagineUrl: '',
  },
  {
    title: 'MongoDB',
    description: 'Un esempio di database NoSQL',
    immagineUrl: '',
  },
  {
    title: 'Ruby on Rails',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Figma',
    description: 'UI e UX',
    immagineUrl: '',
  },
  {
    title: 'Fotoritocco',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Droni',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Montaggio video',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Unreal Engine 5',
    description: 'VR...',
    immagineUrl: '',
  },
]

let quarto_anno = [
  {
    title: 'React Native',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Flutter',
    description: '...',
    immagineUrl: '',
  },
  {
    title: 'Test Sistematici',
    description: '...',
    immagineUrl: '',
  },
]

let sponsor = [
  'https://agsol.com/wp-content/uploads/2018/09/new-microsoft-logo-SIZED-SQUARE.jpg',
  'https://assets.ubuntu.com/v1/57a889f6-ubuntu-logo112.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
  'https://dev.socialidnow.com/images/9/94/Mikrotik-logo.png',
  'https://www.raspberrypi.org/app/uploads/2018/03/RPi-Logo-Reg-SCREEN.png',
  'https://www.arduino.cc/en/uploads/Trademark/ArduinoCommunityLogo.png',
  'https://images-eu.ssl-images-amazon.com/images/I/413W%2BhcdyEL.png',
  'https://www.comitec.it/img/logo.png?v=1.1',
  'https://archive.donboscosandona.it/img/ck/1e0a315dbf7a64beb118a36bbc2148c8d20f55a3.png',
  'https://www.amd.com/system/files/11340-oculus-logo-hero-vertical-447x362.png',
]
