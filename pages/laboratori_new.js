import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'
import Products from '@/components/Products'
import { Container, ButtonGroup, Button } from '@mui/material/'

let laboratori = [
  {
    title: 'OFFICINA DELLE FORME GALATTICHE',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Divertiti a lavorare con vari materiali per creare oggetti e sculture spaziali!',
    immagineUrl: '/images/laboratori/scenografia.jpeg',
  },
  {
    title: 'POLLICE VERDE',
    category: '1ª ora elementari / 2ª ora medie',
    description: 'Ritorna dopo un anno di pausa la scuola di giardinaggio!',
    immagineUrl: '/images/laboratori/polliceverde.jpeg',
  },
  {
    title: 'BASI DI BALLO LATINO/AMERICANO',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'Un modo per approcciarsi al mondo delle danze sudamericane e scatenarsi a ritmo tropicale.',
    immagineUrl: '/images/laboratori/balli.jpeg',
  },
  {
    title: 'SCHERMA',
    category: '1ª ora medie / 2ª ora elementari',
    description: "L'arte della spada e del fioretto. Velocità, coordinazione e rispetto: mettiti in guardia!",
    immagineUrl: '/images/laboratori/medieval.jpeg',
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
        title='Novità 2026'
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
