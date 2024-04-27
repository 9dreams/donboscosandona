import { Container, Grid, Typography } from '@mui/material'

import NewsCard from '/components/NewsCard'

export default function News({ title, data, limit, defaultTag }) {
  if (!data) return <div>Caricamento...</div>
  if (data && data.status=='404') return <div>Errore: il canale specificato per le News è inesistente.</div>
  
  data = data.filter((post) => (!post.in_evidenza))
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
          <Grid item xs={12} sm={6} md={4}>
            <NewsCard post={post} defaultTag={defaultTag} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

News.defaultProps = {
  title: 'News',
  limit: 6,
  defaultTag: '',
}