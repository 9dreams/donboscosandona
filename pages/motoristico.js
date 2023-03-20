import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'



let menu = [
    { title: 'Chi siamo', url: 'https://www.donboscosandona.it/1-identita-del-centro-salesiano' },
    { title: 'News', url: 'https://www.donboscosandona.it/search?t=a&q='},
    { title: 'Gallery', url: 'https://www.donboscosandona.it/search?t=f&q='},
    { title: 'Contatti', url: 'https://www.donboscosandona.it/search?t=f&q=' },
    { title: 'Dove siamo', url: 'https://www.donboscosandona.it/dove-siamo' },
    { title: 'Trasparenza', url: 'https://www.donboscosandona.it/trasparenza' },
  ]

  let slides = [
    {
      titolo: 'Fatti un bel giro',
      descrizione: 'Scopri tutti i segreti del nostro Centro con il tour virtuale!',
      immagine: '/images/motoristico/carousel1.jpg'
    },
    {
      titolo: 'Progetto GIVE',
      descrizione: "Il 15 e 16 maggio il nostro Centro ospiterà l'edizione 2023 di GIVE (GROHE Installer Vocational Training and Education), il programma di formazione dedicato ai giovani installatori idraulici: un ambiente dedicato al training pratico proposto dai professionisti di GROHE.",
      immagine: '/images/motoristico/carousel2.jpg'
    },
    {
      titolo: 'Concorso nazionale settore elettrico',
      descrizione: "A maggio il nostro Centro avrà l'onore di ospitare il Concorso Nazionale del Settore Elettrico: tutti i Centri di Formazione Professionale salesiani d'Italia invieranno i loro campioni per una settimana di sfida e condivisione professionale...",
      immagine: '/images/motoristico/carousel3.jpg'
    },
  ]
  
  let slides2 = slides

  export default function Home({ datiArticoli }) {
    return (
      <Layout>
        <Head />
        {
  
        }
        <LandingHero
        opacity={0.5}
        siteName="CFP DON BOSCO"
        title="Settore Meccanico"
        description="·Efettua riparazioni e manutenzione di motori diesel e a benzina, di piccole e grandi dimensioni.
        Interviene sul cambio, blocco sterzo e vari componenti meccanici dell'autoveicolo."
        buttonUrl={'https://www.youtube.com/watch?v=wyjm1yGmu9g'}
        buttonText="Guarda il video"
        imageUrl="/images/motoristico/settore-motoristico.jpg"
        menu={menu}
      />
       <Carousel slides={slides} maxWidth={false} />
      </Layout>
    )
  }

 