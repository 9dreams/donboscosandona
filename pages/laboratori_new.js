import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'
import Products from '@/components/Products'
import { Container, ButtonGroup, Button } from '@mui/material/'

let laboratori = [
  {
    title: 'MEDIEVAL WAR',
    description:
      'Indossa la tua armatura, sella il tuo destriero e... caricaaaaa!',
    immagineUrl: '/images/laboratori/medieval.jpeg',
    category: '1ªora elementari / 2ªora elementari',
  },
  {
    title: 'SOPRAVVIVENZA',
    description:
      'E se un giorno le città fossero invase da zombie e tu ti trovassi da solo nella foresta?... Impara a sopravvivere ad ogni costo!!!',
    immagineUrl: '/images/laboratori/survival.jpeg',
    category: '1ªora medie / 2ªora elementari',
  },
  {
    title: 'GRANDI GIOCHI',
    description: 'Ogni giorno un grande gioco in cui la strategia è tutto!',
    immagineUrl: '/images/laboratori/grandi_giochi.jpeg',
    category: '1ªora elementari / 2ªora elementari',
  },
]

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name='og:url'
          content='https://per.donboscosandona.it/laboratori_new'
        />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta name='og:description' content="Tutte le novità di quest'anno!" />
        <meta name='og:image' content='/images/novità.png' />
      </Head>
      <LandingHero
        opacity={0.1}
        title='Novità 2024'
        imageUrl='/images/novità.png'
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
      <Products cardWidth={4} products={laboratori} cardHeigth={4} />
    </Layout>
  )
}
