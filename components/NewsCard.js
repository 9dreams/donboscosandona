import { Container, Typography, Card, CardActionArea, CardContent } from '@mui/material'

import Image from 'next/image'

function readMore(string, maxWords) {
  if (string) {
    var strippedString = string.trim()
    var array = strippedString.split(' ')
    var wordCount = array.length
    var string = array.splice(0, maxWords).join(' ')

    if (wordCount > maxWords) {
      string += '...'
    }
  }

  return string
}

export default function NewsCard({ post, aspectRatio }) {
  return (
    <CardActionArea
      component='a'
      href={
        (post.articolo && '/articoli/' + post.id) || post.link || post.allegato
      }
      disabled={!post.articolo && !post.link && !post.allegato}
    >
      <Card sx={{ display: 'block', minHeight: '33rem', marginBottom: '2rem' }}>
        <Container
          sx={{
            aspectRatio: aspectRatio,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src={post.immagine}
            alt={post.titolo}
            style={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
            }}
            fill={true}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </Container>
        <CardContent sx={{ flex: 1 }}>
          <Typography component='h2' variant='h5'>
            {post.titolo}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            {post.pubblicazione}
          </Typography>
          <Typography variant='subtitle1' paragraph>
            {readMore(post.abstract, 40)}
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
      </Card>
    </CardActionArea>
  )
}

NewsCard.defaultProps = {
  aspectRatio: '3 / 2',
}
