import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'
import Products from '@/components/Products'
import { Container, ButtonGroup, Button } from '@mui/material/'

let laboratori = [
  {
    title: 'LEGO',
    description:
      'Divertiti con i mattoncini più iconici del mondo!',
    immagineUrl: '/images/laboratori/lego.jpg',
    category: '2ªora elementari',
  },
  {
    title: 'GIOIELLERIA',
    description: 'Crea stupendi gioielli con pietre e metalli! ',
    immagineUrl: '/images/laboratori/gioielleria.avif',
    category: '1ªora medie / 2ªora elementari',
  },
  {
    title: 'MINI TENNIS',
    description:
      'Sinner spostati! Arriviamo noi. IMPORTANTE: Per partecipare sarà necessario venire con una PROPRIA RACCHETTA DA TENNIS',
    immagineUrl: '/images/laboratori/tennis.png',
    category: '1ªora elementari / 2ªora medie',
  },
  {
    title: 'GIOCOLERIA',
    description:
      'Ritorna dopo un anno di pausa la scuola di giocoleria! (solo medie)',
    immagineUrl: '/images/laboratori/giocoleria.jpg',
    category: '1ªora medie',
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
        title='Novità 2025'
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
      <Paragraph>
        E per le terze medie??? Il GRUPPO SPECIAL, con attività e laboratori
        pensati ad hoc!
      </Paragraph>
    </Layout>
  )
}
