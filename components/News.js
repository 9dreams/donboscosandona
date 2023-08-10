import useSWR from 'swr'

import { Container, Grid, Typography } from '@mui/material'

import NewsCard from '/components/NewsCard'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function News({ title, channel, limit }) {
  const { data, error } = useSWR('https://channels.donboscosandona.it/api/posts/' + channel, fetcher)

  if (error || data && data.status=='404') return <div>Errore di caricamento delle news.</div>
  if (!data) return <div>Caricamento...</div>
  
  data.splice(limit)

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

News.defaultProps = {
  title: 'News',
  limit: 6,
}