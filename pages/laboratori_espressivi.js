import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'
import Products from '/components/Products.js'
import { Container, ButtonGroup, Button } from '@mui/material/'

let products = [
  {
    title: 'CANTO',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Passi ore nella doccia cantando a squarciagola davanti a un pubblico immaginario? Partecipa a questa attività, e il pubblico lo avrai davvero!',
    immagineUrl: '/images/laboratori/canto.jpeg',
  },
  {
    title: 'REPORTER PER CASO',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Creiamo il giornalino della PER con tutte le novità, gli scoop e tante interviste',
    immagineUrl: '/images/laboratori/reporter.jpeg',
  },
  {
    title: 'DRAW UP',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Fai uscire l’artista che c’è in te! Realizza vere e proprie opere d’arte utilizzando le più diverse tecniche artistiche',
    immagineUrl: '/images/laboratori/drawup.jpeg',
  },
]

let serata = [
  {
    title: 'BALLI DI GRUPPO',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      "Grandi novità! Non solo Zumba... quest'anno si gira il mondo con balli Country, Sudamericani e Danze Etniche...",
    immagineUrl: '/images/laboratori/balli.jpeg',
  },
  {
    title: 'BALLO HIP-HOP',
    category: '1ª ora elementari / 2ª ora medie',
    description: 'Disciplina di ballo che proviene dal movimento Hip Hop e ne conserva le caratteristiche culturali ed estetiche.',
    immagineUrl: '/images/laboratori/hiphop.webp',
  },
  {
    title: 'TEATRO',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Essere o non essere? Questo è il dilemma...',
    immagineUrl: '/images/laboratori/sketch.jpeg',
  },
  {
    title: 'CHITARRA',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Perfezionare la tecnica o scoprire la passione per lo strumento musicale più diffuso al mondo!',
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
