import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { Container, Typography } from '@mui/material'

import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Show() {
  const router = useRouter()
  const { id } = router.query

  const { data, error } = useSWR(
    'https://channels.donboscosandona.it/api/post/' + id,
    fetcher
  )

  if (error) return <div>Errore di caricamento dell'articolo.</div>
  if (!data) return <div>Caricamento...</div>

  return (
    <Layout>
      <Head>
        <title>{data.titolo}</title>
        <meta name='og:title' content={data.titolo} />
      </Head>
      <LandingHero
        opacity={0.5}
        title={data.titolo}
        description={data.abstract}
        imageUrl={data.immagine}
        buttonText={data.link && 'Scopri di più' || data.allegato && 'Scarica l\'allegato'}
        buttonUrl={data.link || data.allegato}
      />
      <Container
        maxWidth='lg'
        sx={{
          paddingTop: '5rem',
          paddingBottom: '5rem',
          minHeight: '70vh',
        }}
      >
        <Typography component='h5' color='inherit' paragraph>
          {data.pubblicazione}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </Container>
    </Layout>
  )
}
