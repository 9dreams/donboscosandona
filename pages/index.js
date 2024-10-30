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
  NewsCard,
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
  <Carousel
    slides={slides}
    height={100}
    animation='slide'
    interval={5000}
    duration={1000}
  />
<Container>
        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 4 }}>
Servizi
</Typography>
<Grid container spacing={4} justifyContent="center">
  {servizi.map((servizio) => (
    <Grid item xs={12} sm={6} md={4} key={servizio.id}>
      <NewsCard post={servizio} />
    </Grid>
  ))}
</Grid>

        </div>
        
        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 4 }}>
Prodotti
</Typography>
<Grid container spacing={4} justifyContent="center">
  {prodotti.map((prodotti) => (
    <Grid item xs={12} sm={6} md={4} key={prodotti.id}>
      <NewsCard post={prodotti} />
    </Grid>
  ))}
  </Grid>
  </div>
</Container>
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
    revalidate: 1800,
  }
}

const features = [
  {
    title: 'Attrezzature sportive',
    imageUrl: 'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description: 'Una vasta gamma di attrezzature per ogni sport, dal calcio al trekking.',
    url: 'https://cinema.donboscosandona.it',
  },
  {
    title: 'Consulenza esperta',
    imageUrl: 'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description: 'I nostri esperti sono pronti ad aiutarti a trovare il prodotto giusto per te.',
  },
  {
    title: 'Eventi sportivi',
    imageUrl: 'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description: 'Partecipa a eventi e competizioni per mettere alla prova le tue abilità.',
  },
  {
    title: 'Community attiva',
    imageUrl: 'https://teamtrex.com.au/wp-content/uploads/2021/06/Strength-icon.png',
    description: 'Unisciti a una community di appassionati per condividere esperienze e consigli.',
  },
]

let servizi = [
  {
    id: 1,
    titolo: 'Assistenza personalizzata',
    immagine: 'https://www.pambianconews.com/wp-content/uploads/2020/02/Decathlon.jpg',
    abstract: 'I nostri esperti ti guideranno nella scelta dei prodotti migliori per le tue esigenze sportive.',
  },
  {
    id: 2,
    titolo: 'Rimborso garantito',
    immagine: 'https://patatofriendly.com/wp-content/uploads/2019/11/Annotazione-2019-11-21-133027.jpg',
    abstract: 'Se non sei soddisfatto, hai 30 giorni per restituire i prodotti acquistati.',
  },
  {
    id: 3,
    titolo: 'Attività per bambini',
    immagine: 'https://contents.mediadecathlon.com/p2224837/k$5d9a8b89e25d769c4d0762dd2bdba49b/1920x0/4096pt2734/8192xcr5468/default.jpg?format=auto',
    abstract: 'Scopri i nostri programmi sportivi pensati per bambini e ragazzi, per farli divertire e muoversi.',
  },
];

let prodotti = [
  {
    id: 1,
    titolo: 'Scarpe da corsa',
    immagine: 'https://contents.mediadecathlon.com/p2599017/k$c681369622729d6857acd7cf1f0e5b34/picture.jpg',
    abstract: 'Trova le scarpe perfette per il tuo running, con supporto e comfort ottimali.',
  },
  {
    id: 2,
    titolo: 'Attrezzatura da campeggio',
    immagine: 'https://contents.mediadecathlon.com/p2634993/k$22ed824d3b3fa3851bad1c3dfbde2432/picture.jpg',
    abstract: 'Preparati per la tua avventura all’aperto con tende, sacchi a pelo e accessori di alta qualità.',
  },
  {
    id: 3,
    titolo: 'Set di yoga',
    immagine: 'https://contents.mediadecathlon.com/p2210691/k$ea21e008f1f6c789badfb222f47ce8ae?format=auto&f=3000x0',
    abstract: 'Scopri il nostro set di yoga, ideale per migliorare la tua flessibilità e concentrazione.',
  },
];

// slides per il carousel

let slides = [
  {
    titolo: 'Tecathlon',
    descrizione: 'Esplora la nostra gamma di attrezzature sportive.',
    immagine: 'https://mail.google.com/mail/u/0?ui=2&ik=e12e6e61be&attid=0.1&permmsgid=msg-f:1814328783786486862&th=192dca6a875c2c4e&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ80HIXFXtaEO1hlZEW1XHjnYaqhDOWUsBNHJ83axwCovd8M7zEeKBYmTeonrTL1cSujbnrI5kWqQjYKC4PRnenvXpryMLkCbZmEq1gbIxryYcjsJzX9CUB9zwg&disp=emb&realattid=ii_m2vnabko0',
    colore2: 'rgba(100,100,100,0)',
    buttonText: 'Scopri di più!',
  },
  {
    titolo: 'Sport per tutti',
    descrizione: 'Unisciti a noi e scopri il tuo sport preferito!',
    immagine: 'https://contents.mediadecathlon.com/p2501272/k$66ed4af7acfe5b4491694b24f252b16d/1920x0/4372pt2938/7618xcr3411/sports-decathlon.jpg?format=auto',
    colore2: 'rgba(100,100,100,0)',
  },
];

// Il nostro team
let members = [
  {
    name: 'don Nicola Munari',
    role: 'DIRETTORE / CATECHISTA',
    description: 'Appassionato di sport e educazione.',
    description1: 'Guida la nostra community verso uno stile di vita attivo.',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'c.coso@donboscosandona.it',
    phone: '0421 3388949874950',
  },
  {
    name: 'Alessandro Cappelletto',
    role: 'PRESIDE',
    description: 'Leader della nostra scuola sportiva.',
    description1: 'Promuove l’importanza dell’educazione fisica.',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    name: 'Alessandro Ferro',
    role: 'VICE-PRESIDE / TUTOR DIGITALE',
    description1: 'Specialista in tecnologie per il fitness.',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'a.ferro@donboscosandona.it',
    phone: '0421 111 222',
  },
  {
    name: "Anna Maria D'Ambrosio",
    role: 'RESPONSABILE DELLA DISCIPLINA',
    description1: 'Gestisce le attività sportive e la disciplina.',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'l.hdggfd@donboscosandona.it',
    phone: '12365598445',
  },
]

const testimonials = [
  {
    name: 'Michele Venturato',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: "Decathlon offre una vasta selezione di prodotti di qualità a prezzi accessibili. Consiglio vivamente di visitare il negozio!",
    social: '@Google',
  },
  {
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    name: 'Daniele Mladenovic',
    text: "L'ampia scelta e l'assistenza disponibile sono senza pari. Ho trovato tutto ciò che cercavo per il mio sport preferito!",
    social: '@BOBTEK',
  },
  {
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    name: 'Pino West',
    text: "Un'esperienza fantastica! Ho acquistato attrezzatura da trekking e non potrei essere più soddisfatto. Grazie Decathlon!",
    social: '@PINOWEST',
  },
]

let prodotti2 = [
  {
    immagineUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: 'https://cinema.donboscosandona.it',
  },
]

let certifications = [
  {
    logoUrl: 'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1: 'ISO 9001:2015',
    text2: 'Reg. n. 2593-A - Settore EA: 37',
  },
  {
    logoUrl: 'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1: 'Progettazione ed erogazione di attività formative e di orientamento',
  },
  {
    logoUrl: 'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1: 'Authorised Training Center',
  },
  {
    logoUrl: 'https://seeklogo.com/images/C/CERMET_SINCERT-logo-129ABB30BE-seeklogo.com.png',
    text1: 'Cod. A033 - Formazione Iniziale,',
    text2: 'Superiore e Orientamento',
  },
]

let date = [
  {
    date: '15 Giugno',
    afternoon: 'Inizio corsi di nuoto',
    evening: 'Serata giochi',
    immagineUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/nuoto',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio corsi di calcio',
    afternoon: 'Inizio corsi di nuoto',
    evening: 'Serata giochi',
    immagineUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/calcio',
    bgColor: '#ee5253',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio corsi di ciclismo',
    afternoon: 'Inizio corsi di nuoto',
    immagineUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/ciclismo',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio corsi di ginnastica',
    immagineUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/ginnastica',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio corsi di yoga',
    afternoon: 'Inizio corsi di nuoto',
    immagineUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/yoga',
  },
  {
    date: '15 Giugno',
    morning: 'Inizio corsi di atletica',
    immagineUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    url: '/atletica',
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
