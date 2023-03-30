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
    
    image: "/images/energie/pci.jpg",
    description: "installazione, collaudo e manutenzione di impianti termici, idraulici, di condizionamento e di apparecchiature idrosanitarie "
  },
  {
    title: "Didattica attiva",
    image: "/images/energie/pci.jpg",
    description: "Effettua l’installazione, la manutenzione e il collaudo di impianti tecnologici ad eelvata efficienza energetica (fotovoltaico, solare, termico, …) compresi quelli di building automation per il risparmio energetico"
  },
  {
    title: "Laboratori",
    image: "https://www.donboscosandona.it/img/ck/1ecf12eb29bb3b57b1629de8376a3288d31c0f4a.png",
    description: "Esegue i disegni al CAD con la distribuzione dei vari componenti"
  },
 
]


// slides per il carousel
let slides = [
  {
    titolo: 'Il Laboratorio di energie',
    descrizione: 'il nostro laboratorio di energie ! ',
    immagine: '/images/energie/fotolabidra.JPG'
  },
  {
    titolo: 'I nostri ragazzi al lavoro ',
    descrizione: "3 ragazzi del settore energetico che lavorano nel proprio impianto ",
    immagine: '/images/energie/fotolavoro.JPG'
  },
  {
    titolo: 'Pannello ',
    descrizione: "Un pannello finito ",
    immagine: '/images/energie/fotoimpianto.JPG'
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
          <Features
        title="Qualifica triennale"
        description="Cosa acquisisci conseguendo la qualifica triennale al CFP DON BOSCO"
        features={features}
        cardWidth={4}
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


