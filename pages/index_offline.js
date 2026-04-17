import Head from 'next/head'
import { Container, Typography, Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: '"Exo 2", "Orbitron", sans-serif',
    h1: { fontFamily: '"Orbitron", sans-serif' },
    h2: { fontFamily: '"Orbitron", sans-serif' },
    h3: { fontFamily: '"Orbitron", sans-serif' },
    h4: { fontFamily: '"Orbitron", sans-serif' },
    h5: { fontFamily: '"Orbitron", sans-serif' },
    h6: { fontFamily: '"Orbitron", sans-serif' },
  },
})

const blueGlow = {
  color: '#00aaff !important',
  textShadow: '0 0 10px #00aaff, 0 0 20px #00aaff, 0 0 30px #0088ff !important',
  WebkitTextFillColor: '#00aaff !important',
  WebkitTextStroke: '0.5px white !important',
  letterSpacing: '4px',
  fontWeight: 'bold'
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>#PER26 - Coming Soon</title>
      </Head>
      <Container 
        maxWidth={false}
        disableGutters
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          textAlign: 'center',
          p: 0,
        }}
      >
        <Typography 
          variant="h1" 
          sx={{ 
            ...blueGlow,
            mb: 4,
            fontSize: { xs: '3rem', md: '5rem' }
          }}
        >
          #per26
        </Typography>

        <Box
          component="img"
          src="/images/manuali.png"
          alt="Coming Soon"
          sx={{
            width: { xs: '90%', md: '80%', lg: '60%' },
            maxWidth: '1000px',
            borderRadius: '2rem',
            mb: 6,
            boxShadow: '0 0 40px rgba(0, 170, 255, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        />
        
        <Typography 
          variant="h2" 
          sx={{ 
            ...blueGlow,
            fontSize: { xs: '2rem', md: '3.5rem' }
          }}
        >
          Coming soon...
        </Typography>
      </Container>
    </ThemeProvider>
  )
}
