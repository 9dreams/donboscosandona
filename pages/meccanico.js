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
        title='Operatore Meccanico'
        subtitle='Qualifica triennale'
        rightImageUrl='https://archive.donboscosandona.it/img/ck/9957d0b12e8146011f93c1de45aaf2012a2d30fa.png'
      >
        L'operatore meccanico interviene, a livello esecutivo, nel processo di
        produzione meccanica con autonomia e responsabilità limitate a ciò che
        prevedono le procedure e le metodiche della sua operatività. La
        qualificazione nell'applicazione/utilizzo di metodologie di base, di
        strumenti e di informazioni gli consente di svolgere attività relative
        alle lavorazioni di pezzi e complessivi meccanici, al montaggio e
        all'adattamento in opera di gruppi, sottogruppi e particolari meccanici,
        con competenze nell'approntamento e conduzione delle macchine e delle
        attrezzature, nel controllo e verifica di conformità delle lavorazioni
        assegnate, proprie della produzione meccanica.
        <h3>Competenze sviluppate nel corso dei tre anni:</h3>
        <ol>
          <li>Lavorazione meccanica per asportazione e deformazione</li>
          <li>Saldatura e giunzione dei componenti</li>
          <li>Montaggio componenti mecccanici</li>
          <li>
            Fabbricazione e montaggio/installazione di infissi, telai e
            serramenti
          </li>
        </ol>
      </Paragraph>
      <Paragraph
        title='Tecnico Meccanico'
        subtitle='Diploma Professionale Quadriennale in Sistema Duale con indirizzo Programmazione e Gestione di Impianti di Produzione'
      >
        Il Tecnico per la programmazione e la gestione di impianti di produzione
        interviene con autonomia, nel quadro di azione stabilito e delle
        specifiche assegnate, contribuendo - in rapporto ai diversi ambiti di
        esercizio – al presidio del processo di produzione realizzato con
        sistemi CNC, sistemi automatizzati CAD-CAM e linee robotizzate,
        attraverso la partecipazione all'individuazione delle risorse
        strumentali e tecnologiche, la collaborazione nell'organizzazione
        operativa delle lavorazioni, l'implementazione di procedure di
        miglioramento continuo, il monitoraggio e la valutazione del risultato.
        Possiede competenze funzionali - in rapporto ai diversi indirizzi - alla
        produzione di documentazione tecnica e alla programmazione, conduzione,
        manutenzione.
        <ol>
          <h3>Competenze del tecnico meccanico:</h3>
          <li>
            Operare in sicurezza e nel rispetto delle norme di igiene e di
            salvaguardia ambientale, identificando e prevenendo situazioni di
            rischio per sé, per gli altri e per l'ambiente
          </li>
          <li>
            Provvedere al monitoraggio e controllo del ciclo di lavorazione
            effettuando rilevazioni con macchine di misura e producendo
            documentazione tecnica di avanzamento e valutazione relativa alle
            lavorazioni svolte
          </li>
          <li>Realizzaredi modelli tridimensionali con software CAD 3D</li>
        </ol>
      </Paragraph>
      <Products
        title='Primo anno'
        description=''
        cardWidth={4}
        cardWidthXs={6}
        products={primo_anno}
      />
      <Products
        title='Secondo anno'
        description=''
        cardWidth={3}
        cardWidthXs={6}
        products={secondo_anno}
      />
      <Products
        title='Terzo anno'
        description=''
        cardWidth={3}
        cardWidthXs={6}
        products={terzo_anno}
      />
      <Products
        title='Quarto anno'
        description=''
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
    'https://channels.donboscosandona.it/api/posts/donboscosandona?q=meccanico'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 3600, // I dati vengono ricaricati al massimo una volta all'ora
  }
}

let primo_anno = [
  {
    title: '',
    description: 'Sicurezza',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Prime conoscenze della meccanica industriale',
    immagineUrl: '',
  },
  {
    title: '',
    description: "Spiegazione dell'utensileria di base",
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Lettura di una tavola tecnica',
    immagineUrl: '',
  },
  {
    title: '',
    description:
      'Utilizzo di macchine tradizionali come tornio, fresa, trapano a colonna per lavorazioni base e saldatrice',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Realizzazione e lettura fasi di lavoro',
    immagineUrl: '',
  },
  {
    title: '',
    description:
      'Utilizzo di strumenti di misura e precisione quali il calibro ventesimale',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Utilizzo minifresa CNC',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Lettura tolleranze',
    immagineUrl: '',
  },
]

let secondo_anno = [
  {
    title: '',
    description: 'Programmazione di macchine a Controllo Numerico (CNC)',
    immagineUrl: '/images/meccanico/controll numerico cnc.jpg',
  },
  {
    title: '',
    description: 'Utilizzo tornio e fresa CNC per lavorazioni varie',
    immagineUrl: '/images/meccanico/cnc.jpg',
  },
  {
    title: '',
    description: 'Disegno con AutoCAD',
    immagineUrl: '/images/meccanico/disegno autocad.jpg',
  },
  {
    title: '',
    description:
      'Realizzazione di varie tipologie di pezzi complicati per le lavorazioni',
    immagineUrl: '/images/meccanico/pezzi complicati.jpg',
  },
  {
    title: '',
    description: 'Simulazione al PC per tornio CNC',
    immagineUrl: '/images/meccanico/simualzione cnc.jpg',
  },
  {
    title: '',
    description: 'Uso del micrometro',
    immagineUrl: '/images/meccanico/micrometro.jpg',
  },
  {
    title: '',
    description: 'Saldatura TIG-MIG-MAG',
    immagineUrl: '/images/meccanico/saldatura.jpg',
  },
  {
    title: '',
    description: 'Realizzazione accoppiamenti',
    immagineUrl: '/images/meccanico/accoppiamewnti.jpg',
  },
  {
    title: '',
    description: 'Utilizzo della stampante 3D a filo continuo',
    immagineUrl: '/images/meccanico/stampa3d.jpg',
  },
  {
    title: '',
    description: 'Manutenzione alle macchine utensili tradizionali',
    immagineUrl: '/images/meccanico/macchine tradizionali.jpg',
  },
  {
    title: '',
    description: 'Lubrificazione con olio refrigerante dei macchinari',
    immagineUrl: '/images/meccanico/olio lubrificante.jpg',
  },
]



let terzo_anno = [
  {
    title: '',
    description: 'Utilizzo di Inventor per disegni 3D e messa in tavola',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Utilizzo CAD-CAM',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Progettazione di pezzi meccanici',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Utilizzo tolleranze per pezzi di maggior precisione',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Prototipazione rapida con stampante 3D',
    immagineUrl: '',
  },
]

let quarto_anno = [
  {
    title: '',
    description: 'Utilizzo Inventor per modellazione 3D',
    immagineUrl: '',
  },
  {
    title: '',
    description:
      'Utilizzo software CAD-CAM per la gestione di macchine utensili',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'CNC con utilizzo di utensili motorizzati',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Gestione cicli-fasi di lavoro',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Sistemi di produzione',
    immagineUrl: '',
  },
  {
    title: '',
    description: 'Stampa 3D di complessivi meccanici',
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
