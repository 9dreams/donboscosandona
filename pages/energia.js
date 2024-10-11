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
        rightImageUrl='/images/codici_progetti.png'
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
    'https://channels.donboscosandona.it/api/posts/donboscosandona?q=energia'
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
  'https://lh7-us.googleusercontent.com/H9reO_fhwQ5hI7RJ-IszbV3FyhWoqmOIEAJfAzqt1R7Z9Xyy2TxIvlBR6aAOhVOmEYpaxvWpTb844P6wMro7MByyQ9YAhpzIAOL-82CeZ1v1LLFJe9gniWZVC_587lrCRbs1a1SXIghpgRu9WUPHapQ',
  'https://lh7-us.googleusercontent.com/szNQXDuxanlRJLdi0cDBUCkw6B-DUhFU5t0D5uwS7buJ4HxHEt8tNzhvNJ8q1AwQJYRahx-nodphqeANCxBlxrBEeIbjB5pCMS8XzzuUkmYZqkuwP-BLlkhMFGJwKO6dd16WX6mrqGsCKOsQYdZTRsM',
  'https://lh7-us.googleusercontent.com/OpyvaYDqDSJH8KI1h1xjMusNsfq21wOVWgP8xFkostU7YiG2JG0jEefwhSG_N3LO_BGUihpj3HMmFu7Y4NcQTkGa1IvOyHoRgosTIbis0mwiV1QfaKEc-KUnCb0XTEdEZLeanyzPNwpjvgSOfDqsrTU',
  'https://lh7-us.googleusercontent.com/wDrpmDECz63NjRRM6QyAG9JZ2B9WyVTHqf8H20I4BKLkEoepxa3qXvf3uzj5cuIa1ttp3AZf9y0nkjO2_2Alay32WAMip0KWwpf8mvo8A_q3PxPoS_BWQdR8vPhzfMrE7IbCoAJ6i4SevOjywUjG5k0',
  'https://lh7-us.googleusercontent.com/0BXXTfH38WqUz1pklTwo3kQNxxswgaHbwsdkNFWTUHb1UlieiIcqCvhSxq1rC3kvJTw0ZHzvMJ1X5HeSEAMhCaxzAG6_DFAcqnvU2tXD-GwaGQ0B7-rHCAnkzHN4OOcPSUEZ3mqvcOvdH5K7k6VNCOk',
  'https://lh7-us.googleusercontent.com/sx_q5dgVV0nkrznhnfwNTOLCxYGSePh1Nq5KR8f61CxewtKTwoWYK1EuMv24CwujheDhfqQK2FgW2le4Ot8A5M5csXQv5gqA1b_77ptPBUEATODhV2J017n_yC1rmyjMzQGnjy3nLw5nnMGAvc8GJKI',
  'https://lh7-us.googleusercontent.com/p1SbNuPjcVN_maQlJL775nTQGYJ4kxr95PcaTPjzBYEcj3vaeIAbQ44twzb8Vz9mXuN1bLnfcXBy3d1IwihSveHdwIEccR_V7Bbk-eiTU4Tl6zT3AOrpVwDQbZv27qEybHEEimbrNN7nClQ9iBRtRDw',
  'https://www.insightdiy.co.uk/live/news/wysiwyg/GROHE%20GIVE%20logo.jpg',
  'https://lh7-us.googleusercontent.com/c_PlASOaEfcnsHNEjGHDgtV0L_NmCb5nYBlxTnadncEClA4zFp9VebpisZlWbQuY6wx19cSaa_BNYQ47M_Lqx3zwXSmnDEduO0bXwcwLYP8dUJauJvV7tq5kL9LwmQb7yMhhcgqo4B1MZvkyH__uD8w',
  'https://lh7-us.googleusercontent.com/DdP4lrc4eBjYbDS6pIMtJrrFghAXo9LcQZaTCSyRDyKCzv-lWmZ1h9fv8GEW0AmeYUvx1xupw2rr4okKefxpgAd-tr2mUXelqetvMZA957Nf4hJL5jwAcZ8ZCM1LB1xok_05uKQli7mJ0Q-1GfHC9V4',
  'https://lh7-us.googleusercontent.com/MrchyzFRpLIT6pB7p_OncUEPCAJgnZOVmVnSCoD8jJ5zrt-GzG2qAJovr6GBp1_9qbhGWjJVITmhKRVUnNhxaONBu9es1NOskcoKMB73Hacv6r54xkuCags9-RYw_RgInu1JJeV5d0i9Jh5DY2fz5hE',
  'https://lh7-us.googleusercontent.com/DIloCv68Om2QeRLEHPn3Tlh2LwVbX6H4oB3bQD1_A2Z0Xv714KD6dis3Vhtl3AjLKuw_7F1LPNnaL7d8j-XW2PqOKKi11IlN4_I8Q6tH0pdIkJWXfdl3_Y4_d7L5Qz97EGGxGdZFc6oom-wC47hqDag',
  'https://lh7-us.googleusercontent.com/x0Y_xxxvCfQfdscoUsLoGyxDAo_-D5I2M-nwqol_XJqrMgpjZp0DzI0eQv66cZeKCgAt2-47TqkOhfaXvuiWdnDBCCJ1cJ4Gjj900Zzne3pk7oxF90KcHdxqU8tAVWi1YxiYOOUiuoRiRfK9T1MfST0',
  'https://lh7-us.googleusercontent.com/-tHfDhGK7yxUuqjqsxDfJsJWE4fsCaqUBcuccAlevS1otvKpQY4jHFpxV0d38qrqOeEL6gFnMh222oXQb1KK7k2cxIcilLjCHUUSV0vbhp-J0DYJBwJTHuq6K74xdkw96ycfrTJV1olVoFKG27V5A98',
]
