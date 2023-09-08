import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@mui/material'

export default function NewsCard({ post }) {
  return (
    <CardActionArea
      component='a'
      href={
        (post.articolo && '/articoli/' + post.id) ||
        post.link ||
        post.allegato
      }
      disabled={!post.articolo && !post.link && !post.allegato}
    >
      <Card sx={{ display: {xs: 'block', sm: 'flex'} }}>
        <CardMedia
          component='img'
          sx={{ width: '100%', display: { xs: 'block', sm: 'none' } }}
          image={post.immagine}
          alt={post.titolo}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography component='h2' variant='h5'>
            {post.titolo}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            {post.pubblicazione}
          </Typography>
          <Typography variant='subtitle1' paragraph>
            {post.abstract}
          </Typography>
          {post.articolo && (
            <Typography variant='subtitle1' color='primary'>
              Continua a leggere...
            </Typography>
          )}
          {!post.articolo && post.allegato && (
            <Typography variant='subtitle1' color='primary'>
              Scarica l'allegato
            </Typography>
          )}
        </CardContent>
        <CardMedia
          component='img'
          sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
          image={post.immagine}
          alt={post.titolo}
        />
      </Card>
    </CardActionArea>
  )
}
