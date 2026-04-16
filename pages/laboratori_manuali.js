import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero.js'
import Paragraph from 'components/Paragraph'
import Products from '/components/Products.js'
import { Container, ButtonGroup, Button } from '@mui/material/'

let products = [
  {
    title: 'SCENOGRAFIA',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'Prepariamo gli sfondi per gli spettacoli della PER',
    immagineUrl: '/images/laboratori/scenografia.jpeg',
  },
  {
    title: 'INTRECCI GALATTICI',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Costruire... intrecciare... decorare... inventare... Una galassia piena di fili colorati e perline... Tutto magico!',
    immagineUrl: '/images/laboratori/perline.jpeg',
  },
  {
    title: 'COSMO ATELIER',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Hai voglia di trasformare il tuo look in qualcosa di galattico? Porta una felpa, un vecchio jeans o una t-shirt e rendili capi unici da vera star!',
    immagineUrl: '/images/laboratori/sartoria.jpeg',
  },
  {
    title: 'NEBULA CARTA',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Piegare, tagliare, incollare e inventare piccoli mondi di carta. Un universo da costruire.',
    immagineUrl: '/images/laboratori/carta.jpeg',
  },
  {
    title: 'AQUILONI',
    category: '1ª ora elementari / 2ª ora medie',
    description: 'L’attività che vi lascerà con il naso all’insù',
    immagineUrl: '/images/laboratori/aquiloni.jpeg',
  },
  {
    title: 'PIROGRAFIA',
    category: '1ª ora medie / 2ª ora elementari',
    description: 'Scriviamo con il fuoco sul legno',
    immagineUrl: '/images/laboratori/pirografia.jpeg',
  },
  {
    title: 'ECO WARS LAB',
    category: '1ª ora elementari / 2ª ora medie',
    description: 'La creatività sostenibile per difendere il nostro pianeta.',
    immagineUrl: '/images/laboratori/ecoart.jpeg',
  },
  {
    title: 'INFORMATICA E STAMPA 3D',
    category: '1ª ora medie / 2ª ora medie',
    description:
      'Migliora le tue skill tecnologiche e impara a progettare e stampare oggetti in 3D.',
    immagineUrl: '/images/laboratori/informatica2.jpeg',
  },
  {
    title: 'GIOCHI DA TAVOLO',
    category: '1ª ora medie / 2ª ora elementari',
    description:
      'Divertiti con noi con i giochi da tavolo più belli del mondo e sfida i tuoi amici.',
    immagineUrl: '/images/laboratori/giochi.jpeg',
  },
  {
    title: 'SCACCHI',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Una sfida di logica e strategia sulla scacchiera. Re, Regine e Alfieri ti aspettano!',
    immagineUrl: '/images/laboratori/scacchi.jpeg',
  },
  {
    title: 'TRAFORO',
    category: '1ª ora medie / 2ª ora medie',
    description: 'L’intaglio del legno per dei lavori indimenticabili.',
    immagineUrl: '/images/laboratori/traforo.jpeg',
  },
  {
    title: 'SOPRAVVIVENZA',
    category: '1ª ora elementari / 2ª ora medie',
    description:
      'Tecniche di orientamento, nodi e piccoli segreti per cavarsela in ogni situazione immersi nella natura.',
    immagineUrl: '/images/laboratori/survival.jpg',
  },
  {
    title: 'LEGO',
    category: 'solo 2ª ora elementari',
    description:
      'Mattoncini colorati per dare sfogo alla tua fantasia e costruire astronavi e basi stellari.',
    immagineUrl: '/images/laboratori/lego.jpg',
  },
]

export default function Pagina() {
  return (
    <Layout>
      <Head>
        <title>Proposta Estate Ragazzi di San Donà di Piave</title>
        <meta
          name='og:url'
          content='https://per.donboscosandona.it/laboratori_manuali'
        />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content='Proposta Estate Ragazzi di San Donà di Piave'
        />
        <meta name='og:image' content='/images/manuali.png' />
      </Head>
      <LandingHero
        opacity={0.2}
        title='Laboratori Manuali'
        imageUrl='/images/manuali.png'
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
    </Layout>
  )
}
