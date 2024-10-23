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
        <div className="testo">
          <p>Scopri il mondo degli animali domestici con noi! Offriamo una vasta selezione di animali, accessori e prodotti per rendere felici i tuoi amici a quattro zampe.</p>
        </div>
        <div className='margin'>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 4 }}>
          I nostri prodotti in vendita
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {prodotti.map((prodotto) => (
            <Grid item xs={12} sm={6} md={4} key={prodotto.id}>
              <NewsCard post={prodotto} />
            </Grid>
          ))}
        </Grid>
        
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 4 }}>
  I nostri servizi
</Typography>
<Grid container spacing={4} justifyContent="center">
  {servizi.map((servizio) => (
    <Grid item xs={12} sm={6} md={4} key={servizio.id}>
      <NewsCard post={servizio} />
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

let servizi = [
  {
    id: 1,
    titolo: 'Toelettatura',
    immagine: 'https://img.pgol.it/meta/0124-Toelettatura.jpg',
    pubblicazione: 'Disponibile ora',
    abstract: 'Servizio professionale di toelettatura per tutti i tipi di animali.',
  },
  {
    id: 2,
    titolo: 'Servizio di adozione',
    immagine: 'https://www.comunecoriglianorossano.eu/wp-content/uploads/2021/08/cani-min.jpg',
    pubblicazione: 'Sempre attivo',
    abstract: 'Adotta un amico a quattro zampe e cambia la sua vita!',
  },
  {
    id: 3,
    titolo: 'Consulenza veterinaria',
    immagine: 'https://naturopet.it/wp-content/uploads/2019/03/consulenza-veterinaria-Naturopet.png',
    pubblicazione: 'Disponibile su appuntamento',
    abstract: 'Consulenze veterinarie professionali per la salute del tuo animale.',
  },
];


// slides per il carousel
let slides = [
  {
    titolo: 'Fatti un bel giro',
    descrizione:
      'Scopri tutti i segreti del nostro Petshop con il tour virtuale!',
    immagine:
      'https://www.purina.it/sites/default/files/2022-01/cane-e-gatto-una-convivenza-felice.jpg',
    colore: '#ED4C67',
    colore2: 'rgba(100,100,100,0)',
    opacity: 0.8,
    blur: '0.5rem',
    buttonText: 'Scopri di più!',
    buttonUrl: 'https://www.petshop.com/tour',
  },
  {
    titolo: 'I nostri amici a quattro zampe',
    descrizione:
      'Scopri la vasta selezione di animali domestici: cani, gatti, conigli e tanto altro! Ogni animale è pronto per trovare una nuova famiglia.',
    immagine:
      'https://www.nostrofiglio.it/images/2019/12/13/conigli-e-bambini-orig.jpg',
    colore: '#22aa22',
    colore2: 'rgba(100,100,100,0)',
    buttonText: 'Adotta ora!',
    buttonUrl: 'https://www.petshop.com/adoptions',
  },
  {
    titolo: 'Accessori e prodotti',
    descrizione:
      'Dai cibi alle lettiere, dai giocattoli agli accessori: tutto ciò di cui hai bisogno per i tuoi animali domestici in un unico posto!',
    immagine:
      'https://www.ilverdemondo.it/public/catalog/categorie/original/accessori-per-cani-it-000.jpg',
    colore: '#3498db',
    colore2: 'rgba(100,100,100,0)',
    buttonText: 'Scopri i prodotti!',
    buttonUrl: 'https://www.petshop.com/products',
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

let prodotti = [
  {
    id: 1,
    titolo: 'Cibo per Cani',
    immagine: 'https://www.zooplus.it/magazine/wp-content/uploads/2020/05/1-30.jpg',
    pubblicazione: 'Disponibile ora',
    abstract: 'Cibo di alta qualità per cani di tutte le razze.',
    articolo: true,
    tag: 'Cibo, Cani',
  },
  {
    id: 2,
    titolo: 'Giocattolo per Gatti',
    immagine: 'https://www.zooplus.it/magazine/wp-content/uploads/2020/10/1-44-768x512.jpg',
    pubblicazione: 'Nuovo!',
    abstract: 'Giocattolo divertente per stimolare il tuo gatto.',
    articolo: true,
    tag: 'Giocattolo, Gatti',
  },
  {
    id: 3,
    titolo: 'Lettiere Eco-Friendly',
    immagine: 'https://croci.net/cdn/shop/files/Lettiera_gatti_agglomerante_Eco_Clean_Croci.jpg?v=1696854729&width=850',
    pubblicazione: 'Sconto 20%',
    abstract: 'Lettiera biodegradabile per una scelta ecologica.',
    articolo: true,
    tag: 'Lettiera',
  },
];

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
