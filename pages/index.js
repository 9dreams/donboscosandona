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
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 minutes
    revalidate: 1800, // In secondi: il build viene fatto al massimo una volta ogni mezzora
  }
}

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

let servizi = [
  {
    id: 1,
    titolo: 'Personal Trainer',
    immagine: 'https://www.stevensportingclub.it/wp-content/uploads/2023/01/18.jpg',
    pubblicazione: '',
    abstract: 'Scopri come un personal trainer può aiutarti a raggiungere i tuoi obiettivi di fitness, fornendo supporto personalizzato e motivazione.',
  },
  {
    id: 2,
    titolo: 'Attrezzature all\'avanguardia',
    immagine: 'https://www.fitnessway.it/wp-content/uploads/2022/06/aprire-una-palestra.jpg',
    pubblicazione: '',
    abstract: 'Utilizziamo attrezzature moderne e sicure per offrirti la migliore esperienza di allenamento possibile.',
  },
  {
    id: 3,
    titolo: 'Professionalità',
    immagine: 'https://www.robur.com/hubfs/referenze-it/ROBUR_referenze_Palestra-futura-Voghera.jpg',
    pubblicazione: '',
    abstract: 'Il nostro team di esperti è sempre disponibile per guidarti e supportarti in ogni fase del tuo percorso di fitness.',
  },
];

let prodotti = [
  {
    id: 1,
    titolo: 'Manubri',
    immagine: 'https://cdns3.fitfit.fitness/it/media/items/originals/18778-Palestra-New-Genesi-Gym-MlEc1.jpg',
    pubblicazione: '',
    abstract: 'Acquista manubri di alta qualità per allenarti a casa o in palestra.',
  },
  {
    id: 2,
    titolo: 'Integratori',
    immagine: 'https://www.superpalestra.it/wp-content/uploads/2017/09/integratori-palestra.jpg',
    pubblicazione: '',
    abstract: 'Scopri la nostra selezione di integratori per supportare la tua dieta e migliorare le performance.',
  },
  {
    id: 3,
    titolo: 'Divise personalizzate',
    immagine: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HWVOjU-MSeOGtqLxP4ygGib9BObCQYxmNQ&s',
    pubblicazione: '',
    abstract: 'Scegli la nostra linea di divise personalizzate per sentirti parte del nostro team.',
  },
];



// slides per il carousel

let slides = [
  {
    titolo: 'Scopri di più',
    descrizione: 'Esplora la nostra gamma di servizi dedicati al fitness e al benessere.',
    immagine: 'https://quifinanza.it/wp-content/uploads/sites/5/2023/01/consigli-palestra.jpg',
    colore2: 'rgba(100,100,100,0)',
    buttonText: 'Scopri di più!',
  },
  {
    titolo: 'Allenati',
    descrizione: 'Allenati in modo professionale nella nostra palestra, con il supporto di esperti.',
    immagine: 'https://www.fitnessway.it/wp-content/uploads/2022/06/maxi-guida-25-palestre.jpg',
    colore2: 'rgba(100,100,100,0)',
  },
];


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