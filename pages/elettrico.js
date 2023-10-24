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
  'https://lh4.googleusercontent.com/8_mbSQHPD2UwkdVUauvbobO0W2IulAM_KFiA2OrcQpy3gqxeqHhYdRy7mGl0psM0qE6v-BLv7oZEJB2fX5L3QF01GpRXpXxt2W25ibaW7wZkyksJNwhcn2dVrAW6krsR99KFZcBJYW-NscWu8drZKQc',
  'https://lh4.googleusercontent.com/clkMFecWjtAL0Xz5r51O-V4Nm33ELJL2EtysVS_g-7bOEXYg6gPsbYmirLx8Usb7y134HXw5c-ITouMQnOP3Q1O0Wq9qtEudjzIOhwy8S9wtFIZgq2e-WsqQuGSnSfeDd1q0qPGerxDd6_n2o_ZujaA',
  'https://lh6.googleusercontent.com/dEF-WzIQf5YxdIC_TYI0_zeYQdnKvoGPwKvPyEEtjFfd48mdgiViavupUW5mNDVyYvbUhnAL6ntaiFPk5kE_t0ncoziuTLQSN8aRLBYd-T_Wy9dMgUxxLEV6jNvHpQO0LjcCIyKyL1BaolMFCSg5IYg',
  'https://lh4.googleusercontent.com/4IN-71MEeyoUNR8HxHyLzxDP_zCDzi2GdXTxCWy4xIiK5S0TxNv61yrGepy9c06ioWABItku5vzm9xxPUF7eyfzUIIzAF3wzbT6Y0u1AH06lmgi05oc_ga3cMAOEZpw6x0agNQBjkXaIPwoaBy2_yHk',
  'https://lh3.googleusercontent.com/l5QgmCgV8mGn249m88v4zba0VFaQK6xJToC67NoS15JxiAmoZ6odSrJS0NiZRrEh-EikZKv5h_AWxUvFWj_xSvn20CTA0N499vso-ShlVVGn0PVp58HBWhsujY6BTkN2SS9p0RuXUth3JlEF3MBvwZg',
  'https://lh5.googleusercontent.com/DN8QrRH_bjKdRmuhJy8_ktJpvvFqCE-aLgc417ApmV9JVu8h_E3Mrag75cxiKAqvkFqPGFR_AoNxciIVgD9XzdLAzVuJvMNyFMRomNqLNjfyr4HZncCN5XDwCAY7PlbmrP8HNtGJ9o6BKVAG8ffEdDo',
  'https://lh3.googleusercontent.com/_qFYv12ckSJHg4rm7aBbJ2KjppzxD375hC9GE-_OOJYlPkUzzJYV5rt46lJXRCEO8iWUedhWEXABVK_u68ejbvNE0EdLkG5_bowmbSZT2vGBjroE_Qpxl3_F01ZZIffXvrM85hpCtWzuv1gH369zeek',
  'https://lh3.googleusercontent.com/bTQLn03ur15FNLuKOql5jS9mcO5SrO5_57TJu6nW7JZdvAq9QQ8UMSmB8-Dh953QGrc9huAWFDdxWJuSateoBFv9nDPN9uYVWub1Ct0CXoPDQEORyIDrYHCJniZ1IQm04bIlta6ZO6_V93T1NRDY6Zk',
  'https://lh6.googleusercontent.com/eS4O8yNbXNNP97Lx-bRrbzQz6aUoP0SwA9-xkHXXeH36464JBdELOpVC3cDWcdg9rCCGetJmrtrqzqL_JQi7UgRvd7h1n9Jpnzy3Z6eO508ky4OePdUXD08Fhyh8GO0Ty8ZredFaWXj6oqkocFcmQnc',
  'https://lh5.googleusercontent.com/Cd7ibQCQKxhjvPZgRGWs0g1LM9Q0HxBESjXFXFRyvJvBqIV5L_mkEwIWmydObqW2ry9HWzpGRO7zHeJG0FV2IlxBs7iuXd9PCczRziQpWFqb8QnT6nXna41qFkLuRXSONXgiMt4tS17qj-V8FCtKYc8',
  'https://lh6.googleusercontent.com/CeqUDqI_Azn41g035BxOV_MmbyR-nlpsLRkUkjYRANITNg3kpJL_OIaJaotXVfZ8XRWcrMC7qEpqcAD1XJwXADHaZtiQC7apqGA3rha0xSM4v7NwBH3dMrziWIIePM-rFXtV0GiXuLkmKjPeIedN0mw',
  'https://lh3.googleusercontent.com/AGu1oBODndQ056KKs-Imc35ja49LCjNn965GqLLqJifsmj3TAfICw85Dh34c9WpgLjk3PUej2i2mccw5051T1eF5P2Kg3yc4Q6y4NjTs_osiOklwi9GL4L28iedK3scGjf3TiBgaPK4wUavb6vEdl7o',
  'https://lh6.googleusercontent.com/m-OL5QHqMgJ3LMC-llqJd5jV9wvepTg5RdB4YcjC3YxnF0qaanlCt_kKW-39idvPzHgtEnS7BUQPLHuwt8cFfwnm7kugebXGEzMPkjF2bKbntW21YHi8xFfSq4Yo840q9a9U8dgbzTiHzkBMApGlzXE',
  'https://lh6.googleusercontent.com/eLXKAIsaspkixnGKygjzSpnxvv7mIPkUPiWxbz3LqJG6RVJyTKoVdUOknKzKzvY0JDyDrMPnxqTjhxDla42L4yKfeisDuOoXAs8iFPO2EjBpatqo4VSMbRSznEgFz91bqcbXCl3EPpoxyMLJ4bxGGso',
  'https://lh6.googleusercontent.com/0CPjjJ5RcxAO6rDTI82WcbxpV2YR-EuJ9L-147VzsJjESJOvgdWd1XFuZYX244ch0ZMlOkhXUyd2MJIYMFoGhDmuKaAJy-lW44ZKAvPHW0UxmLS1VInrroLUf32bNs_apEGd10cLTCg5pj917d8mdgQ',
]
