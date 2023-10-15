import Head from 'next/head'

import {
  Layout,
  LandingHero,
  Products,
  SwiperNews,
  Paragraph,
  Sponsor,
  Table,
} from '/components'

export default function Home({ data }) {
  return (
    <Layout>
      <Head />
      <img
        src='/images/informatico/settore-elettrico.jpg'
        style={{ width: '100%' }}
      />
      <Paragraph
        title='Operatore Termoidraulico'
        subtitle='Qualifica triennale'
        rightImageUrl='https://archive.donboscosandona.it/img/ck/9957d0b12e8146011f93c1de45aaf2012a2d30fa.png'
      >
        L’operatore termoidraulico interviene nel processo di progettazione,
        installazione e manutenzione degli impianti termoidraulici civili e
        industriali. È in grado di gestire e utilizzare software per il disegno
        e la progettazione sia in ambito civile che industriale. Sviluppa le
        competenze adatte al lavoro in cantiere e in azienda per l’installazione
        e la manutenzione di qualsiasi tipologia di impianto tecnologico
        (distribuzione riscaldamento tradizionale e ad irraggiamento, adduzione
        e scarico acqua sanitaria, caldaie, climatizzatori, solare termico e
        fotovoltaico, termoregolazione). Conosce le tecnologie da applicare per
        l’ammodernamento energetico di impianti pre-esistenti. Utilizza app e
        software per la configurazione e la supervisione di impianti termici e
        di climatizzazione..
        <h3>Competenze sviluppate nel corso dei tre anni:</h3>
        <ol>
          <li>
            Installare, cablare e configurare i dispositivi per la creazione di
            impianti elettrici civili e di domotica. Implementare l’efficienza
            energetica degli impianti esistenti.
          </li>
          <li>
            Installare, cablare e configurare i dispositivi per la creazione di
            impianti termici civili ed industriali. Effettuare la manutenzione
            degli impianti di condizionamento estivo ed invernale.
          </li>
          <li>
            Utilizzare i software per la progettazione e il disegno degli schemi
            elettrici civili e industriali ed idraulici. Utilizzare i software
            per la programmazione dei dispositivi programmabili negli impianti
            tecnologici.
          </li>
        </ol>
      </Paragraph>
      <Paragraph
        title='Tecnico di Impianti Termici'
        subtitle='Diploma Professionale Quadriennale in Sistema Duale con indirizzo Impianti Civili e Industriali - Impianti di refrigerazione'
      >
        Il Tecnico di impianti termici interviene con autonomia, nel limite
        delle proprie competenze, nell’intero processo di installazione e
        collaudo degli impianti di condizionamento estivo o invernale e negli
        impianti di refrigerazione commerciali ed industriali. Utilizza con
        disinvoltura i software per la progettazione e il disegno di impianti.
        E’ in grado di intervenire attivamente sui processi di programmazione e
        configurazione di dispositivi programmabili per la termoregolazione (PLC
        - HMI) e sistemi di teleassistenza. Partecipa a processi aziendali quali
        organizzazione magazzino, giacenza scorte e preventivazione.
        <ol>
          <h3>Competenze del tecnico elettrico:</h3>
          <li>
            Consultare schemi elettrici e documenti tecnici per l’installazione
            dei dispositivi negli impianti
          </li>
          <li>
            Consultare schemi idraulici e documenti tecnici per l’installazione
            dei dispositivi negli impianti
          </li>
          <li>
            Effettuare l’installazione di impianti di refrigerazione commerciali
            e industriali comprensivi di dispositivi ad alto livello tecnologico
          </li>
          <li>
            Conoscere ed utilizzare correttamente le strumentazioni specifiche
            del settore
          </li>
          <li>
            Collaborare ad avviare il sistema per verificare la funzionalità
            dell’impianto di refrigerazione
          </li>
          <li>
            Effettuare la programmazione di PLC e dispositivi per la
            termoregolazione
          </li>
          <li>
            Collaborare alla verifica dell’impianto elettrico di refrigerazione
            commerciale e industriale rispetto alle specifiche tecniche, alla
            compatibilità delle componenti e all’installazione tecnica
          </li>
        </ol>
      </Paragraph>
      <Products
        title='Primo anno'
        description='Il primo anno ti introduce al mondo dell’impiantistica civile. Imparerai a gestire e utilizzare i principali strumenti di lavoro, ad effettuare le operazioni basilari per l’installazione idraulica e a costruire i primi semplici impianti idraulici. Darai da subito un’occhiata agli impianti civili per la termoregolazione smart, da poter controllare con i dispositivi mobili quali smartphone e/o tablet.'
        cardWidth={4}
        cardWidthXs={6}
        products={primo_anno}
      />
      <Products
        title='Secondo anno'
        description='Nel secondo anno approfondirai le tematiche relative all’installazione e alla manutenzione degli impianti di condizionamento estivo e invernale. Verrai introdotto al mondo dell’impiantistica industriale e ai quadri di comando delle macchine termiche, utilizzando sistemi elettromeccanici.'
        cardWidth={3}
        cardWidthXs={6}
        products={secondo_anno}
      />
      <Products
        title='Terzo anno'
        description='Nel terzo anno imparerai a conoscere gli impianti di refrigerazione industriale, i dispositivi industriali logici programmabili, come inverter, PLC (Controllori Logici Programmabili). Verrai addestrato per svolgere tutte le operazioni richieste da una installazione, manutenzione o riparazione di un impianto di refrigerazione commerciale o industriale.'
        cardWidth={3}
        cardWidthXs={6}
        products={terzo_anno}
      />
      <Products
        title='Quarto anno'
        description='Nel quarto anno approfondirai la programmazione di PLC per termoregolazione e teleassistenza. Avrai la possibilità di diventare un ottimo tecnico di impianti frigoriferi curando sia l’installazione dei dispositivi fisici che la programmazione e il controllo degli impianti grazie ai software dedicati.'
        cardWidth={4}
        cardWidthXs={6}
        products={quarto_anno}
      />
      <SwiperNews title='News dal Settore Elettrico' data={data} limit={15} />
      <Sponsor logos={sponsor} />

      <Paragraph>
        <Table
          title='Piano formativo'
          rows={[
            ['', '1° Anno', '2° Anno', '3° Anno', '4° Anno'],
            ['Italiano', 3, 3, 2, 3],
            ['Storia / Economia / Diritto', 1, 1, 1, 1],
            ['Inglese', 2, 2, 2, 2],
            ['Religione', 1, 1, 1, 1],
            ['Matematica', 3, 3, 3, 2],
            ['Fisica', 2, 2, 2, 2],
            ['CAD', 2, 2, 2, 2],
            ['Informatica', 2, '', '', ''],
            ['Elettrotecnica', 3, 3, 3, ''],
            ['Laboratorio Elettrico', 10, 12, 12, 3],
            ['', '', '', '', ''],
            ['ORE ANNUALI STAGE / APPRENDISTATO FORMATIVO', '', 200, 200, 500],
          ]}
          backgroundImageUrl='/images/informatico/sfondo-piano-formativo.jpg'
          backgroundColor='#003185'
          opacity={0.8}
          blur='0.1rem'
          color='white'
        />
      </Paragraph>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona?q=elettrico'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}

let primo_anno = [
  {
    title: 'Forbici e cacciaviti',
    description: 'Imparare l’uso di forbici, cacciaviti e pinze',
    immagineUrl: '',
  },
  {
    title: 'Tubo e scatole',
    description:
      'Installare e montare gli elementi di supporto all’impianto',
    immagineUrl: '',
  },
  {
    title: 'Lavorazione',
    description: 'Lavorazione specifica del materiale trattato (guarnitura con canapa o teflon, bicchieratura, pressatura)',
    immagineUrl: '',
  },
  {
    title: 'Trasformazione',
    description: 'Trasformazione di un impianto da tradizionale a smart',
    immagineUrl: '',
  },
  {
    title: 'Configurazione Smart',
    description: 'Configurazione dei dispositivi smart con app dedicate',
    immagineUrl: '',
  },
]

let secondo_anno = [
  {
    title: 'Impianti tradizionali',
    description: 'Installazione di impianti su box di simulazione',
    immagineUrl: '',
  },
  {
    title: 'Impianti Smart',
    description: 'Installazione e configurazione di impianti smart',
    immagineUrl: '',
  },
  {
    title: 'Simulazione',
    description:
      'Utilizzo di software per la simulazione di impianti industriali',
    immagineUrl: '',
  },
  {
    title: 'Quadri',
    description: 'Montaggio di quadri di comando',
    immagineUrl: '',
  },
  {
    title: 'Dispositivi industriali',
    description: 'Installazione e cablaggio di dispositivi industriali',
    immagineUrl: '',
  },
  {
    title: 'Climatizzatori',
    description: 'Installazione di generatori di calore e climatizzatori',
    immagineUrl: '',
  },
  {
    title: 'Manutenzione',
    description: 'Manutenzione generatori di calore e climatizzatori',
    immagineUrl: '',
  },
  {
    title: 'Relè programmabili',
    description: 'Introduzione all’utilizzo di dispositivi logici per termoregolazione',
    immagineUrl: '',
  },
]

let terzo_anno = [
  {
    title: 'Disegno di schemi',
    description: 'Disegno di schemi son AutoCAD',
    immagineUrl: '',
  },
  {
    title: 'Inverter',
    description: 'Utilizzo degli inverter per il comando elettronico dei motori elettrici',
    immagineUrl: '',
  },
  {
    title: 'Controllori',
    description:
      'Cablaggio e installazione dei controllori elettronici',
    immagineUrl: '',
  },
  {
    title: 'Programmazione',
    description:
      'Programmazione dei termocontrollori',
    immagineUrl: '',
  },
  {
    title: 'Quadri di comando',
    description: 'Cablaggio di quadri di comando di macchine frigorifere',
    immagineUrl: '',
  },
  {
    title: 'Manutenzione',
    description:
      'Operazioni di vuoto, carica, ricerca guasti e smaltimento impianti di refrigerazione',
    immagineUrl: '',
  },
]

let quarto_anno = [
  {
    title: 'PLC',
    description: 'Programmazione di Controllori Logici Programmabili',
    immagineUrl: '',
  },
  {
    title: 'Refrigerazione Avanzata',
    description: 'Programmazione sistemi di refrigerazione industriali complessi',
    immagineUrl: '',
  },
  {
    title: 'Impianti Frigo',
    description: 'Riparazione e manutenzione di impianti frigo commerciali',
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
