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
      <LandingHero
        imageUrl='https://moveo.telepass.com/wp-content/uploads/2023/09/riparazione-carrozzeria-auto.jpg'
        title='Settore Motoristico'
        description='Pagina in costruzione'
        height={100}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio?q=motoristico'
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
    immagineUrl: '/images/meccanico/sicurezza.png',
  },
  {
    title: '',
    description: 'Prime conoscenze della meccanica industriale',
    immagineUrl: '/images/meccanico/primeconoscenze.png',
  },
  {
    title: '',
    description: "Spiegazione dell'utensileria di base",
    immagineUrl: '/images/meccanico/utensileriadibase.png',
  },
  {
    title: '',
    description: 'Lettura di una tavola tecnica',
    immagineUrl: '/images/meccanico/tabelle.png',
  },
  {
    title: '',
    description:
      'Utilizzo di macchine tradizionali come tornio, fresa, trapano a colonna per lavorazioni base e saldatrice',
    immagineUrl: '/images/meccanico/tornio.png',
  },
  {
    title: '',
    description: 'Realizzazione e lettura fasi di lavoro',
    immagineUrl: '/images/meccanico/fasidilavoro.png',
  },
  {
    title: '',
    description:
      'Utilizzo di strumenti di misura e precisione quali il calibro ventesimale',
    immagineUrl: '/images/meccanico/calibro.png',
  },
  {
    title: '',
    description: 'Utilizzo minifresa CNC',
    immagineUrl: '/images/meccanico/cnc.png',
  },
  {
    title: '',
    description: 'Lettura tolleranze',
    immagineUrl: '/images/meccanico/tolleranze.png',
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
    immagineUrl: '/images/meccanico/cnc.png',
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
    immagineUrl: '/images/meccanico/3dmessaintavola.jpg',
  },
  {
    title: '',
    description: 'Utilizzo CAD-CAM',
    immagineUrl: '/images/meccanico/cadmeccanico.jpg',
  },
  {
    title: '',
    description: 'Progettazione di pezzi meccanici',
    immagineUrl: '/images/meccanico/progmec.png',
  },
  {
    title: '',
    description: 'Utilizzo tolleranze per pezzi di maggior precisione',
    immagineUrl: '/images/meccanico/tolleranza.png',
  },
  {
    title: '',
    description: 'Prototipazione rapida con stampante 3D',
    immagineUrl: '/images/meccanico/fsi-stampa-3d.png',
  },
]

let quarto_anno = [
  {
    title: '',
    description: 'Utilizzo Inventor per modellazione 3D',
    immagineUrl: '/images/meccanico/inventormodellazione3d.jpg',
  },
  {
    title: '',
    description:
      'Utilizzo software CAD-CAM per la gestione di macchine utensili',
    immagineUrl: '/images/meccanico/cadcam2.png',
  },
  {
    title: '',
    description: 'CNC con utilizzo di utensili motorizzati',
    immagineUrl: '/images/meccanico/macchine-cnc.jpg',
  },
  {
    title: '',
    description: 'Gestione cicli-fasi di lavoro',
    immagineUrl: '/images/meccanico/1_meccanica.jpg',
  },
  {
    title: '',
    description: 'Sistemi di produzione',
    immagineUrl: '/images/meccanico/software-mes-produzione-1024x640.jpg',
  },
  {
    title: '',
    description: 'Stampa 3D di complessivi meccanici',
    immagineUrl:
      '/images/meccanico/stampa3dmetallo.jpg.9948dab902dafe72fe3c04f7de37cd28.jpg',
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
