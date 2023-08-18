import Head from 'next/head'

import { Container, Typography } from '@mui/material'

import Layout from '/components/Layout'
import Date from '/components/Date'
import LandingHero from '/components/LandingHero'

import { getIdArticoli, getDatiArticolo } from '/lib/articoli'

export default function Articolo({ datiArticolo }) {
  return (
    <Layout>
      <Head>
        <title>{datiArticolo.title}</title>
        <meta name='og:url' content={'https://per.donboscosandona.it/articoli/' + datiArticolo.id } />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta
          name='og:title'
          content={datiArticolo.title}
        />
        <meta name='og:description' content={datiArticolo.abstract} />
        <meta property='og:image' content={'https://per.donboscosandona.it' + datiArticolo.imageUrl} />
      </Head>
      <LandingHero
        opacity={0.5}
        title={datiArticolo.title}
        description={datiArticolo.abstract}
        imageUrl={datiArticolo.imageUrl}
      />
      <Container
        maxWidth='lg'
        sx={{
          paddingTop: '5rem',
          paddingBottom: '5rem',
          minHeight: '70vh',
        }}
      >
        <Date dateString={datiArticolo.date} />
        <div dangerouslySetInnerHTML={{ __html: datiArticolo.contentHtml }} />
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getIdArticoli()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const datiArticolo = await getDatiArticolo(params.id)

  return {
    props: {
      datiArticolo,
    },
  }
}
