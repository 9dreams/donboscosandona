import Head from 'next/head'
import { siteBaseUrl } from '/config/default'

import { Container, Typography, Chip, Stack } from '@mui/material'

import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero'

import { getIdArticoli } from '../../lib/articoli'

export default function Show({ data }) {
  if (!data) return <div>Caricamento...</div>

  return (
    <Layout>
      <Head>
        <title>{data.titolo}</title>
        <meta
          name='og:url'
          content={siteBaseUrl + '/articoli/show?id=' + data.id}
        />
        <meta name='og:type' content='website' />
        <meta name='og:locale' content='it_IT' />
        <meta name='og:title' content={data.titolo} />
        <meta name='og:description' content={data.abstract} />
        <meta property='og:image' content={data.immagine} />
      </Head>
      <LandingHero
        opacity={0.5}
        title={data.titolo}
        description={data.abstract}
        imageUrl={data.immagine}
        buttonText={
          (data.link && 'Scopri di più') ||
          (data.allegato && "Scarica l'allegato")
        }
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
        {data.tag && (
          <Stack direction='row' spacing={1}>
            {data.tag.split(',').map((tag) => (
              <Chip label={tag} />
            ))}
          </Stack>
        )}
      </Container>
    </Layout>
  )
}

// This gets called on every request
export async function getStaticProps({ params }) {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/post/' + params.id
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data }, revalidate: 3600 }
}

export async function getStaticPaths() {
  const paths = await getIdArticoli()
  console.log(paths)
  return {
    paths,
    fallback: 'blocking',
  }
}
