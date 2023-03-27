import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'

import Products from '/components/Products'
import Testimonials from '/components/Testimonials'



import { getDatiArticoli } from '/lib/articoli'

// I punti di forza
const features = [
  {
    title: "Progetto educativo",
    image: "https://www.donboscosandona.it/img/ck/77e8fb59e0a23151c46936b674e3c9620c64ff3a.png",
    description: "Un progetto chiaro e affidabile per far crescere e diventare uomini. "
  },
  {
    title: "Didattica attiva",
    image: "https://www.donboscosandona.it/img/ck/c46d55012c575d41c5a23c8fa606cb0a5f67337f.png",
    description: "Lezioni attive e coinvolgenti per dimenticare la noia e partecipare da protagonisti."
  },
  {
    title: "Laboratori",
    image: "https://www.donboscosandona.it/img/ck/1ecf12eb29bb3b57b1629de8376a3288d31c0f4a.png",
    description: "12 ore settimanali in laboratori tecnologicamente all'avanguardia per formare i professionisti del futuro."
  },
  {
    title: "Servizi al lavoro",
    image: "https://www.donboscosandona.it/img/ck/d7e68e6fd443ca3d7573c81ae780ff8e6783ad99.png",
    description: "Orientamento, stage e alternanza, i nostri esperti ti accompagneranno fino all'effettivo inserimento nelle aziende del settore."
  }
]


// slides per il carousel
let slides = [
  {
    titolo: 'Fatti un bel giro',
    descrizione: 'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
    immagine: '/images/news/virtual-tour.jpeg'
  },
  {
    titolo: 'Progetto GIVE',
    descrizione: "Il 15 e 16 maggio il nostro Centro ospiterà l'edizione 2023 di GIVE (GROHE Installer Vocational Training and Education), il programma di formazione dedicato ai giovani installatori idraulici: un ambiente dedicato al training pratico proposto dai professionisti di GROHE.",
    immagine: '/images/news/2023/grohe.jpeg'
  },
  {
    titolo: 'Concorso nazionale settore elettrico',
    descrizione: "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
    immagine: '/images/news/2023/concorso-nazionale-elettrico.jpg'
  },
]

let slides2 = slides



let settori = [
  {
    title: "Elettrico",
    category: "QUALIFICA DI OPERATORE ELETTRICO",
    description: "Installa ed effettua la manutenzione di impianti civili e industriali, sia con tecnologie tradizionali che automatizzate. Realizza la programmazione dei componenti domotici e dei controllori programmabili industriali.",
    immagineUrl: "https://www.donboscosandona.it/img/column/42480c58c90ada8ff75c443fdde83ae71fea75ac.jpg?1539529685",
    url: "https://www.donboscosandona.it/elettrico"
  },
  {
    title: "Energia",
    category: "QUALIFICA DI OPERATORE DI IMPIANTI TERMO-IDRAULICI",
    description: "Interviene nell'installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e fotovoltaici, con una particolare attenzione al risparmio energetico, anche grazie alla building automation.",
    immagineUrl: "https://www.donboscosandona.it/img/column/417afaa0f0697f0f0aabf9ccf61030769cb76f14.jpg?1539529180",
    url: "https://www.donboscosandona.it/energia"
  },
  {
    title: "Informatico",
    category: "DIPLOMA DI TECNICO INFORMATICO",
    description: "Installa e configura hardware e software, esegue la manutenzione di sistemi, reti e terminali utente, fornisce assistenza tecnica, effettua l'elaborazione e la manutenzione di dati su archivi digitali. Con il quarto anno in Sistema Duale diventa tecnico sviluppatore di Soluzioni Software.",
    immagineUrl: "https://www.donboscosandona.it/img/column/97f264e9d16a0856dd2cb973630af1cac4426f73.jpg?1539529314",
    url: "https://www.donboscosandona.it/informatico"
  },
  {
    title: "Meccanico",
    category: "DIPLOMA DI TECNICO PER LA CONDUZIONE E LA MANUTENZIONE DI IMPIANTI AUTOMATIZZATI",
    description: "Realizza lavorazioni al tornio, fresatrice e macchine utensili in generale. Partendo dal progetto realizzato con il CAD effettua la programmazione delle macchine a controllo numerico. Realizza saldature ad arco, TIG, MAG, taglio al plasma.",
    immagineUrl: "https://www.donboscosandona.it/img/column/b0bd034769ac3471bf375239f1e64e39f5684aa6.jpg?1539523300",
    url: "https://www.donboscosandona.it/meccanico"
  },
  {
    title: "Motoristico / Carrozzeria",
    category: "QUALIFICA DI OPERATORE ALLA RIPARAZIONE DI VEICOLI A MOTORE",
    description: "Effettua riparazioni e manutenzione dei motori e dell'autoveicolo in tutte le sue parti. Effettua diagnosi e prove sui gas di scarico intervenendo per risolvere le anomalie.",
    immagineUrl: "https://www.donboscosandona.it/img/column/342f349c6bb5bbf9a37b95353df2bee2309b9792.jpg?1539524741",
    url: "https://www.donboscosandona.it/motoristico"
  },
]





export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head />
      {

      }
      <LandingHero
        opacity={0.5}
        siteName="CFP DON BOSCO"
        title="SETTORE ENERGIE"
        description="OPERATORE DI IMPIANTI TERMO-IDRAULICI"
        imageUrl="https://www.donboscosandona.it/img/column/33b02f7f8b0e7fe98cd0ea48723c1b75b9b12b18.jpg?1539976223"
      />
      <Container maxWidth="lg" sx={{ marginTop: '3rem', marginBottom: '3rem'  }}>
        <Grid container spacing={4}>
          {
           
            
          }
        </Grid>
      </Container>
      <Carousel slides={slides} maxWidth={false} />
      <Products
        title="I settori"
        description="Un'ampia scelta di indirizzi professionali: scopri quello che ti accende di più!"
        cardWidth={4}
        products={settori}
      />
      <Carousel slides={slides2} maxWidth={false} />
      <Features
        title="I nostri punti di forza"
        description="Scopri perché il CFP DON BOSCO è davvero la scuola che fa al caso tuo!"
        features={features}
        cardWidth={3}
      />
      
    
      
    </Layout>
  )
}

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli()
  return {
    props: {
      datiArticoli,
    },
  }
}


