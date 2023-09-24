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
        title='Operatore Elettrico'
        subtitle='Qualifica triennale'
        rightImageUrl='https://archive.donboscosandona.it/img/ck/9957d0b12e8146011f93c1de45aaf2012a2d30fa.png'
      >
        L’operatore elettrico interviene nel processo di progettazione,
        installazione e manutenzione degli impianti elettrici civili e
        industriali. È in grado di gestire e utilizzare software per il disegno
        e la progettazione elettrica sia in ambito civile che industriale.
        Sviluppa le competenze adatte al lavoro in cantiere e in azienda per
        l’installazione e la manutenzione di qualsiasi tipologia di impianto
        (elettrico, domotico, TV, TVCC, allarme, antincendio, macchine
        industriali). Utilizza app e software per la configurazione e la
        supervisione di impianti domotici e di automazione industriale.
        <h3>Competenze sviluppate nel corso dei tre anni:</h3>
        <ol>
          <li>
            Installare, cablare e configurare i dispositivi per la creazione di
            impianti elettrici civili e di domotica. Effettuare la manutenzione
            degli impianti elettrici civili e domotici.
          </li>
          <li>
            Installare, cablare e configurare i dispositivi per la creazione di
            impianti elettrici industriali e di automazione. Effettuare la
            manutenzione degli impianti elettrici industriali e di automazione.
          </li>
          <li>
            Utilizzare i software per la progettazione e il disegno degli schemi
            elettrici civili e industriali. Utilizzare i software per la
            programmazione dei dispositivi programmabili negli impianti domotici
            e di automazione industriale.
          </li>
        </ol>
      </Paragraph>
      <Paragraph
        title='Tecnico Elettrico'
        subtitle='Diploma Professionale Quadriennale in Sistema Duale con indirizzo Impianti Elettrici Civili e Industriali - Building Automation'
      >
        Il Tecnico Elettrico interviene con autonomia, nel limite delle proprie
        competenze, nell’intero processo di installazione e collaudo degli
        impianti elettrici civili e industriali. Utilizza con disinvoltura i
        software per la progettazione e il disegno di impianti. è in grado di
        intervenire attivamente sui processi di programmazione e configurazione
        di dispositivi programmabili industriali (PLC - HMI) e di sistemi di
        domotica e building automation (KNX). Partecipa a processi aziendali
        quali organizzazione magazzino, giacenza scorte e preventivazione.
        <ol>
          <h3>Competenze del tecnico elettrico:</h3>
          <li>
            Consultare schemi elettrici e documenti tecnici per l’installazione
            dei dispositivi negli impianti
          </li>
          <li>
            Effettuare l’installazione di impianti elettrici civili e
            industriali comprensivi di dispositivi ad alto livello tecnologico
          </li>
          <li>
            Collaborare ad avviare il sistema per verificare la funzionalità
            dell’impianto elettrico
          </li>
          <li>Effettuare la programmazione di PLC e dispositivi HMI</li>
          <li>
            Effettuare la programmazione e la configurazione di impianti di
            domotica e building automation (KNX)
          </li>
          <li>
            Collaborare alla verifica dell’impianto elettrico civile e
            industriale rispetto alle specifiche tecniche, alla compatibilità
            delle componenti e all’installazione tecnica
          </li>
        </ol>
      </Paragraph>
      <Products
        title='Primo anno'
        description='Il primo anno ti introduce al mondo dell’impiantistica civile. Imparerai a gestire e utilizzare i principali strumenti di lavoro, ad effettuare le operazioni basilari per l’installazione elettrica e a costruire i primi semplici impianti elettrici. Darai da subito un’occhiata agli impianti civili smart, da poter controllare con i dispositivi mobili quali smartphone e/o tablet.'
        cardWidth={4}
        cardWidthXs={6}
        products={primo_anno}
      />
      <Products
        title='Secondo anno'
        description='Nel secondo anno approfondirai le tematiche relative all’installazione e alla manutenzione degli impianti civili. Scoprirai gli impianti domotici e le numerosi applicazioni che consentono. Verrai introdotto al mondo dell’impiantistica industriale e ai quadri di comando delle macchine, utilizzando sistemi elettromeccanici e pneumatici.'
        cardWidth={3}
        cardWidthXs={6}
        products={secondo_anno}
      />
      <Products
        title='Terzo anno'
        description='Nel terzo anno imparerai a conoscere i dispositivi industriali logici programmabili, come inverter, PLC (Controllori Logici Programmabili) e HMI (Interfaccia Uomo Macchina), curandone schemistica, installazione e programmazione con adeguati software. Verrai introdotto al mondo della building automation e degli impianti Konnex (KNX). Utilizzerai software di disegno elettrico complessi.'
        cardWidth={3}
        cardWidthXs={6}
        products={terzo_anno}
      />
      <Products
        title='Quarto anno'
        description='Nel quarto anno approfondirai la programmazione di PLC, HMI e azionamenti scoprendo le grandi potenzialità del software TIA Portal di Siemens. Avrai la possibilità di diventare un ottimo tecnico di building automation curando sia l’installazione dei dispositivi domotici che la programmazione grazie al software ETS.'
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
    description: 'Imparare l’uso di forbici e cacciaviti',
    immagineUrl: '',
  },
  {
    title: 'Tubo e scatole',
    description: 'Installazione e montaggio degli elementi di supporto all’impianto',
    immagineUrl: '',
  },
  {
    title: 'Cablaggio',
    description: 'Passaggio fili e cablaggio dei dispositivi',
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
    title: 'Impianti domotici',
    description: 'Installazione e configurazione di impianti domotici',
    immagineUrl: '',
  },
  {
    title: 'Simulazione',
    description: 'Utilizzo di software per la simulazione di impianti industriali',
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
    title: 'Motori',
    description: 'Comando di motori elettrici',
    immagineUrl: '',
  },
  {
    title: 'Impianti pneumatici',
    description: 'Realizzazione di impianti ad aria compressa',
    immagineUrl: '',
  },
  {
    title: 'Relè programmabili',
    description: 'Introduzione all’utilizzo di dispositivi logici',
    immagineUrl: '',
  },
]

let terzo_anno = [
  {
    title: 'SPAC Automazione',
    description: 'Disegno di schemi son SPAC Automazione',
    immagineUrl: '',
  },
  {
    title: 'Functional Safety',
    description: 'Studio e utilizzo dei sistemi di sicurezza funzionale',
    immagineUrl: '',
  },
  {
    title: 'Inverter',
    description: 'Utilizzo degli inverter per il comando elettronico dei motori elettrici',
    immagineUrl: '',
  },
  {
    title: 'PLC',
    description: 'Cablaggio e installazione dei Controllori Logici Programmabili',
    immagineUrl: '',
  },
  {
    title: 'Programmazione',
    description: 'Programmazione PLC e HMI',
    immagineUrl: '',
  },
  {
    title: 'KNX',
    description: 'Configurazione e programmazione di sistemi di building automation basati su tecnologia Konnex',
    immagineUrl: '',
  },
]

let quarto_anno = [
  {
    title: 'PLC Avanzato',
    description: 'Programmazione PLC in TIA Portal',
    immagineUrl: '',
  },
  {
    title: 'HMI Avanzato',
    description: 'Programmazione HMI in TIA Portal',
    immagineUrl: '',
  },
  {
    title: 'Sistemi',
    description: 'Programmazione di sistemi industriali complessi',
    immagineUrl: '',
  },
  {
    title: 'KNX',
    description: 'Installazione componenti impianti KNX',
    immagineUrl: '',
  },
  {
    title: 'ETS',
    description: 'Programmazione di sistemi KNX con software ETS',
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
