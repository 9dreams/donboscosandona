import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'
import Products from '/components/Products.js'
import { Container, ButtonGroup, Button } from '@mui/material/'

let products = [
  {
    title: 'CALCIO',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Scendi in campo per la sfida più amata! Allenamenti e partite per vivere la passione del pallone insieme.',
    immagineUrl: '/images/laboratori/calcio.jpeg',
  },
  {
    title: 'BASKET',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Pronti a fare canestro? Impara i tiri e i palleggi per diventare un vero campione del parquet.',
    immagineUrl: '/images/laboratori/basket.jpeg',
  },
  {
    title: 'PALLAVOLO',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Schiacciate e bagher! Un laboratorio dinamico per imparare il gioco di squadra nel rettangolo di gioco.',
    immagineUrl: '/images/laboratori/pallavolo.jpeg',
  },
  {
    title: 'BASEBALL',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Home run! Prendi la mazza e corri tra le basi in questo emozionante sport di precisione e velocità.',
    immagineUrl: '/images/laboratori/baseball.jpeg',
  },
  {
    title: 'PING PONG',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Riflessi pronti e colpi veloci! Sfide mozzafiato al tavolo verde per diventare il re della racchetta.',
    immagineUrl: '/images/laboratori/pingpong.jpeg',
  },
  {
    title: 'RUGBY',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Forza, coraggio e spirito di squadra! Impara le basi della palla ovale e il valore del terzo tempo.',
    immagineUrl: '/images/laboratori/rugby.jpeg',
  },
  {
    title: 'PALLAMANO',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Velocità e mira! Uno sport di squadra veloce e coinvolgente dove ogni gol è una vittoria collettiva.',
    immagineUrl: '/images/laboratori/pallamano.jpeg',
  },
  {
    title: 'MINI TENNIS',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Sinner spostati! Arriviamo noi (per partecipare sarà necessario venire con una propria racchetta da tennis)',
    immagineUrl: '/images/laboratori/tennis.png',
  },
]

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name='og:url'
          content='https://per.donboscosandona.it/laboratori_sportivi'
        />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta name='og:image' content='/images/sportivi.png' />
      </Head>
      <LandingHero
        opacity={0.2}
        title='Laboratori Sportivi'
        imageUrl='/images/sportivi.png'
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
      <Products products={products} cardWidth={4} />
    </Layout>
  )
}
