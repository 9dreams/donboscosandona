import { Container, Grid, Typography } from '@mui/material'

import ElementsCard from '/components/ElementsCard'

export default function Elements({ data, limit, defaultTag, aspectRatio, borderRadius, xs, sm, md }) {
  if (!data) return <div>Caricamento...</div>
  if (data && data.status=='404') return <div>Errore: il canale specificato per le News è inesistente.</div>
  
  data = data.filter((post) => (!post.in_evidenza))
  data.splice(limit)

  return (
    <Container maxWidth='lg' sx={{ marginTop: '5rem', marginBottom: '6rem' }}>
      <Grid container spacing={4}>
        {data.map((post) => (
          <Grid item xs={xs} sm={sm} md={md}>
            <ElementsCard post={post} defaultTag={defaultTag} aspectRatio={aspectRatio} borderRadius={borderRadius} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

Elements.defaultProps = {
  limit: 6,
  defaultTag: '',
  xs: 12,
  sm: 6,
  md: 4,
}