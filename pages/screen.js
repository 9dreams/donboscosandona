import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'

import { Featured } from '/components'

const theme = createTheme()

export default function Schermo({ data }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <meta http-equiv='refresh' content='600' />
      </Head>
      <div
        style={{ backgroundColor: 'black', height: '100vh', cursor: 'none' }}
      >
        <Featured
          data={data.map((post) => ({
            ...post,
            in_evidenza: true,
            titolo: post.immagine_schermo ? '' : post.titolo,
            abstract: post.immagine_schermo ? '' : post.abstract,
            immagine: post.immagine_schermo || post.immagine,
            tag: post.immagine_schermo ? '' : post.tag,
            articolo: '',
            link: '',
            allegato: null,
          }))}
          height='100'
          limit={10}
          animation='fade'
          interval={12000}
          duration={0}
          defaultTag=''
        />
      </div>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/inoratorio'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 3600, // In secondi: il build viene fatto al massimo una volta all'ora
  }
}
