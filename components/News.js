import useSWR from 'swr'

import { Container, Grid, Typography } from '@mui/material'

import NewsCard from '/components/NewsCard'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function News({ title, url }) {
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div>Errore di caricamento delle news.</div>
  if (!data) return <div>Caricamento...</div>

  return (
    <Container maxWidth='lg' sx={{ marginTop: '5rem', marginBottom: '6rem' }}>
      <Typography
        style={{ textAlign: 'left', paddingBottom: '2rem' }}
        component='h2'
        variant='h4'
        color='inherit'
        gutterBottom
      >
        { title }
      </Typography>
      <Grid container spacing={4}>
        {data.map((post) => (
          <Grid item xs={12} md={6}>
            <NewsCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
