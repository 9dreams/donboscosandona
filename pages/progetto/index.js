import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import PostInEvidenza from '/components/PostInEvidenza'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import { Typography } from '@mui/material'
import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'



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



export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head />
      {

      }
      <LandingHero
        opacity={0.5}
        siteName="CFP DON BOSCO"
        title="Progetto educativo"
        description="Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!"
        buttonUrl='j'
        buttonText="Guarda il video"
        imageUrl="/images/progetto/foto-home.jpg"
      />
      <Paragraph>
        Il Progetto Educativo del CNOS-FAP CFP Don Bosco si propone come risposta alle richieste dei genitori e alle esigenze di formazione dei giovani di un ampio contesto territoriale. È uno strumento che mette in luce l’identità del Centro, una guida che delinea le strategie e gli strumenti finalizzati al raggiungimento del successo scolastico, un testo che presenta quei valori umani e cristiani nei quali la Comunità Educativa si riconosce. Conformemente all’insegnamento di don Bosco, offre un disegno di educazione al futuro che investe sull’intelligenza (anche quella delle mani) e sulle potenzialità di ciascuno.<br /><br />
        <a href="/progetto/01">1 Identità del Centro Salesiano</a><br /><br />
        <a href="/progetto/02">2 I soggetti</a><br /><br />
        <a href="/progetto/03">3 Il coordinamento</a><br /><br />
        <a href="/progetto/04">4 Il patto educativo</a><br /><br />
        <a href="/progetto/05">5 Gli obiettivi</a><br /><br />
        <a href="/progetto/06">6 Le azioni educative</a><br /><br />
        <a href="/progetto/07">7 Metodologie e strumenti didattici</a><br /><br />
        <a href="/progetto/08">8 Il regolamento</a><br /><br />
        <a href="/progetto/09">9 Attività promozionali</a><br /><br />
        <a href="/progetto/10">10 Valutazione</a>
      </Paragraph>



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
