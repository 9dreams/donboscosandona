import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Torneo } from '/components'

const theme = createTheme()

export default function Schermo() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ backgroundColor: 'black', height: '100vh' }}>
        <Torneo classi={classi} pizzettes={15} pizzettes1={15} autoRotate={true} />
      </div>
    </ThemeProvider>
  )
}

let classi = [
  { classe: '1A', punti: '199' },
  { classe: '1B', punti: '230' },
  { classe: '1C', punti: '223' },
  { classe: '1D', punti: '183' },
  { classe: '1E', punti: '173' },
  { classe: '1F', punti: '263' },
  { classe: '2A', punti: '189' },
  { classe: '2B', punti: '163' },
  { classe: '2C', punti: '182' },
  { classe: '2D', punti: '213' },
  { classe: '2E', punti: '160' },
  { classe: '2F', punti: '224' },
  { classe: '3A', punti: '165' },
  { classe: '3B', punti: '126' },
  { classe: '3C', punti: '129' },
  { classe: '3D', punti: '198' },
  { classe: '3E', punti: '155' },
  { classe: '3F', punti: '220' },
  { classe: '4A', punti: '169' },
  { classe: '4B', punti: '191' },
]