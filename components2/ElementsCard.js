import {
  Container,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
} from '@mui/material'

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

export default function ElementsCard({ post, aspectRatio, borderRadius }) {
  return (
    <CardActionArea
      component='a'
      href={
        (post.articolo && '/articoli/' + post.id) || post.link || post.allegato
      }
      disabled={!post.articolo && !post.link && !post.allegato}
    >
      <Container
        sx={{
          aspectRatio: aspectRatio,
          position: 'relative',
          overflow: 'hidden',
          borderRadius: borderRadius,
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
      {(post.titolo || post.abstract) && (
        <CardContent sx={{ flex: 1 }}>
          {post.titolo && (
            <Typography component='h2' variant='h5'>
              {post.titolo}
            </Typography>
          )}
          {post.abstract && (
            <Typography variant='subtitle1' paragraph>
              {readMore(post.abstract, 40)}
            </Typography>
          )}
        </CardContent>
      )}
    </CardActionArea>
  )
}

ElementsCard.defaultProps = {
  aspectRatio: '3 / 2',
  borderRadius: '10px',
}
