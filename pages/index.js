import { Container, Grid, Typography } from '@mui/material'
import {
  Carousel,
  Certifications,
  Layout,
  LandingHero,
  Features,
  Products,
  Calendar,
  Testimonials,
  Team,
  Maps,
  Paragraph,
  Table,
  News,
  SwiperNews,
  Featured,
  NavBar,
  Logos,
  Sponsor,
  Elements,
} from '/components'

export default function Home({ data, elementi }) {
  return (
    <Layout>
            <Carousel slides={slides}/>
           
      <Products
        title='I prodotti In evidenza'
        description='Un angolo di eleganza, dove ogni profumo racconta una storia unica di femminilità.'
        cardWidth={4}
        cardWidthXs={12}
        products={prodotti}
      />

    </Layout>
  )
}

export async function getStaticProps() {
  let res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  )
  const data = await res.json()

  res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona_elements'
  )
  const elementi = await res.json()

  return {
    props: { data, elementi },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 minutes
    revalidate: 1800, // In secondi: il build viene fatto al massimo una volta ogni mezzora
  }
}

// I punti di forza
const features = [
  {
    title: 'Progetto educativo',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      'Un progetto chiaro e affidabile per far crescere e diventare uomini. ',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'Didattica attiva',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      'Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti.',
  },
  {
    title: 'Laboratori',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro.",
  },
  {
    title: 'Servizi al lavoro',
    imageUrl:
      'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description:
      "Orientamento, stage e alternanza, i nostri esperti ti accompagneranno fino all'effettivo inserimento nelle aziende del settore.",
  },
]

// slides per il carousel
let slides = [
  {
    titolo: 'Profumeria',
    descrizione:
      'Scopri tutti i nostri profumi per donne',
    immagine:
      'https://media-assets.vanityfair.it/photos/6643a34e9953de97c0fbce6e/master/w_1600%2Cc_limit/l_am_les_extraits_2023_iris%2520pallida.jpg',
    colore: '#ED4C67',
    colore2: 'rgba(100,100,100,0)',
    opacity: 0,
    blur: '0 rem',
    buttonText: 'Scopri di più!',
    buttonUrl: 'https:...',
  },
  {
    titolo: '',
    immagine:"https://www.donnamoderna.com/content/uploads/2023/05/i-profumi-da-donna-piu-amati-e-seducenti-del-2018-tutte-le-novita-500728145616x23391200x500.jpeg",
    descrizione:
      "I profumi migliori di tutta San Donà di Piave",
    colore: '#22aa22',
  },
]

// Il nostro team
let members = [
  {
    name: 'don Nicola Munari',
    role: 'DIRETTORE / CATECHISTA',
    description: 'And I love you like Kanye',
    description1: 'loves Kanye. We need to restart the human foundation',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'c.coso@donboscosandona.it',
    phone: '0421 3388949874950',
  },
  {
    name: 'Alessandro Cappelletto',
    role: 'PRESIDE',
    description: 'And I love you like Kanye',
    description1: 'loves Kanye. We need to restart the human foundation',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Alessandro Ferro',
    role: 'VICE-PRESIDE / TUTOR DIGITALE',
    description1:
      'Vicepreside, gestione organizzazione scolastica e pastorale, insegnamento area scientifica ',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',

    email: 'a.ferro@donboscosandona.it',
    phone: '0421 111 222',
  },
  {
    name: "Anna Maria D'Ambrosio",
    role: 'RESPONSABILE DELLA DISCIPLINA',
    description1:
      'Gestione disciplina,organizzazione scolastica e insegnamento are cultura',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'l.hdggfd@donboscosandona.it',
    phone: '12365598445',
  },
]

let prodotti = [
  {
    title: "Eclissi d' Autunno",
    description:
      "Eclissi d'Autunno è un profumo avvolgente e misterioso, che cattura l'essenza dei giorni che si accorciano e dei colori caldi delle foglie che cadono. All'apertura, si percepiscono note fresche di bergamotto e mela verde, che evocano l'aria frizzante delle prime mattine di ottobre. Man mano che si sviluppa, il cuore rivela un bouquet di fiori di violetta e rosa selvatica, accompagnato da un tocco di cannella, che aggiunge calore e profondità.",
    immagineUrl:
      'https://i0.wp.com/blog.cliomakeup.com/wp-content/uploads/2022/10/cliomakeup-profumi-autunno-2022-foliage-1-copertina.jpg?fit=1024%2C532&ssl=1',
  },
  {
    title: "Ombra di Mare",
    description:
      "Ombra di Mare è un profumo che evoca l’essenza di una fresca brezza marina all’imbrunire. Le note di testa sono un frizzante mix di agrumi, con limone e pompelmo che danzano insieme, creando un’apertura energica e vivace.",
    immagineUrl:
      'https://www.extrait.it/wp-content/uploads/2021/06/fb-megamare-orto-parisi-profumi.jpg',
    url: '/energia',
  },
  {
    title: 'Luce di Luna',
    description:
      "Luce di Luna è un profumo etereo e incantevole, che cattura la magia di una notte stellata. Le note di testa si aprono con fresche sfumature di bergamotto e pera, creando un inizio fruttato e luminoso.",
    immagineUrl:
      'https://brameprofumi.it/wp-content/uploads/2024/06/foto-larghe-brame-9.png',
    url: '/informatico',
  },
]

const testimonials = [
  {
    name: 'Michele Venturato',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: "Grande scuola. Una vera scuola professionale e morale. Sforna ogni anno moltissimi tecnici aggiornati con I tempi e in grado di integrarsi con facilita' nel mondo del lavoro. Complimenti a tutto il sistema.",
    social: '@Google',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    name: 'Daniele Mladenovic',
    text: "Ho trascorso alcuni anni presso il CFP e ho trovato l'ambiente molto accogliente e confortevole, grazie alla disponibilità di tutto il personale. In particolare, ho apprezzato la passione degli insegnanti, che si sono dimostrati molto competenti. Inoltre, ho avuto l'opportunità di partecipare ad attività extracurricolari e progetti che mi hanno permesso di sviluppare le mie capacità. Infine, consiglio questo istituto sottolineando l'importanza dello sviluppo e della scoperta dei propri talenti che è ciò che ci rende unici.",
    social: '@BOBTEK',
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    name: 'Pino West',
    text: "Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione Qui c'è una belissima descrizione ",
    social: '@PINOWEST',
  },
]

let prodotti2 = [
  {
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: 'https://cinema.donboscosandona.it',
  },
]

let certifications = [
  {
    logoUrl:
      'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1: 'ISO 9001:2015',
    text2: 'Reg. n. 2593-A - Settore EA: 37',
  },
  {
    logoUrl:
      'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1:
      'Progettazione ed erogazione di attività formative e di orientamento',
  },
  {
    logoUrl:
      'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1: 'Authorised Training Center',
  },
  {
    logoUrl:
      'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1: 'Cod. A033 - Formazione Iniziale,',
    text2: 'Superiore e Orientamento',
  },
]

let date = [
  {
    date: '15 Giugno',
    afternoon: 'Inizio medie',
    evening: 'Serata film',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio elementari',
    afternoon: 'Inizio medie',
    evening: 'Serata film',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
    bgColor: '#ee5253',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio elementari',
    afternoon: 'Inizio medie',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio elementari',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio elementari',
    afternoon: 'Inizio medie',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio elementari',
    immagineUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/elettrico',
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
]
