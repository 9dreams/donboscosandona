import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import {
  Featured,
} from '/components'

const theme = createTheme()

export default function Schermo({ data }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ backgroundColor: 'black', height: '100vh' }}>
        <Featured
          data={data.map((post) => ({ ...post, in_evidenza: true }))}
          height='100'
          limit={10}
          animation='fade'
          interval={12000}
        />
      </div>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://channels.donboscosandona.it/api/posts/donboscosandona'
  )
  const data = await res.json()

  return {
    props: { data },
    revalidate: 1800, // In secondi: il build viene fatto al massimo una volta all'ora
  }
}

