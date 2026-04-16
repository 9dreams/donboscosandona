import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'
import Products from '/components/Products.js'
import { Container, ButtonGroup, Button } from '@mui/material/'

let products = [
  {
    title: 'REPORTER PER CASO',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Creiamo il giornalino della PER con tutte le novità, gli scoop e tante interviste',
    immagineUrl: '/images/laboratori/reporter.jpeg',
  },
  {
    title: 'ACCADEMIA JEDI',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Luogo dove custodire la Bellezza della galassia e i tuoi ricordi di questo viaggio spaziale. Come? Costruendo con le tue mani piccoli diari e taccuini, rivestendo quadernoni con stoffa e carta, trasformando con disegni e colori un semplice quaderno in un pezzo da collezione...',
    immagineUrl: '/images/laboratori/legatoria.png',
  },
  {
    title: 'CANTO',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      '(Laboratorio per la serata finale)',
    immagineUrl: '/images/laboratori/canto.jpeg',
  },
  {
    title: 'GIOCOLERIA',
    category: 'solo 1ª ora medie',
    description:
      'vuoi dare spazio allo spettacolo? Il laboratorio giusto per imparare a usare palline, diablo e tanto altro…',
    immagineUrl: '/images/laboratori/giocoleria.jpg',
  },
]

let serata = [
  {
    title: 'BALLI DI GRUPPO',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      "Divertimento assicurato con le hit dell'estate! Impariamo le coreografie più famose per scatenarci tutti insieme.",
    immagineUrl: '/images/laboratori/balli.jpeg',
  },
  {
    title: 'BALLO HIP-HOP',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Ritmo, energia e stile! Muoviti a tempo di musica e impara i passi base di questa cultura urbana.',
    immagineUrl: '/images/laboratori/hiphop.webp',
  },
  {
    title: 'TEATRO',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Entra in scena! Giochi di improvvisazione, espressione corporea e recitazione per vincere la timidezza e divertirsi sul palco.',
    immagineUrl: '/images/laboratori/sketch.jpeg',
  },
  {
    title: 'CHITARRA',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Straccia le corde! Dai primi accordi alle canzoni più famose, un viaggio musicale per scoprire il fascino della sei corde.',
    immagineUrl: '/images/laboratori/chitarra.jpeg',
  },
]

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name='og:url'
          content='https://per.donboscosandona.it/laboratori_espressivi'
        />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta
          name='og:description'
          content='Laboratori espressivi/musicali e preparazione della serata finale.'
        />
        <meta name='og:image' content='/images/espressivi.png' />
      </Head>
      <LandingHero
        opacity={0.2}
        title='Laboratori espressivi'
        imageUrl='/images/espressivi.png'
      />
      <Container sx={{ padding: '2rem', textAlign: 'center' }}>
        <ButtonGroup
          color='secondary'
          aria-label='Scelta del tipo di laboratori'
        >
          <Button key='espressivi' href='/laboratori_espressivi'>
            Espressivi
          </Button>
          <Button key='sportivi' href='/laboratori_sportivi'>
            Sportivi
          </Button>
          <Button key='manuali' href='/laboratori_manuali'>
            Manuali
          </Button>
          <Button key='novità' href='/laboratori_new'>
            Novità
          </Button>
        </ButtonGroup>
      </Container>
      <Products products={products} cardWidth={3} />
      <Products
        description='Per questi quattro laboratori non è previsto il cambio attività a metà PER:'
        products={serata}
        cardWidth={3}
      />
    </Layout>
  )
}
