import {
  Container,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';

import Image from 'next/image';

function readMore(string, maxWords) {
  if (string) {
    var strippedString = string.trim();
    var array = strippedString.split(' ');
    var wordCount = array.length;
    var string = array.splice(0, maxWords).join(' ');

    if (wordCount > maxWords) {
      string += '...';
    }
  }

  return string;
}

export default function NewsCard({ post, aspectRatio, defaultTag }) {
  return (
    <CardActionArea
      component='a'
      href={(post.articolo && '/articoli/' + post.id) || post.link || post.allegato}
      disabled={!post.articolo && !post.link && !post.allegato}
      className="mb-8 group" // Aggiunto 'group' per hover Tailwind
      sx={{
        borderRadius: '20px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.03)',
          boxShadow: '0 16px 40px 0 rgba(31, 38, 135, 0.25)',
          borderColor: '#1976d2',
        },
      }}
    >
      <Card sx={{ display: 'block', minHeight: '33rem', borderRadius: '20px', overflow: 'hidden', boxShadow: 'none' }}>
        <Container
          sx={{
            aspectRatio: aspectRatio,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '20px 20px 0 0',
            p: 0,
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 100%)',
            zIndex: 2,
          }} />
          <Image
            src={post.immagine}
            alt={post.titolo}
            style={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
              borderRadius: '20px 20px 0 0',
              zIndex: 1,
            }}
            fill={true}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </Container>
        <CardContent sx={{ flex: 1, background: 'rgba(255,255,255,0.95)', borderRadius: '0 0 20px 20px', position: 'relative', zIndex: 3 }}>
          {post.tag && post.tag !== defaultTag ? (
            <Stack direction='row' spacing={1} sx={{ marginBottom: '10px' }}>
              {post.tag.split(',').map((tag, index) => (
                <Chip
                  label={tag.toUpperCase()}
                  color='primary'
                  size='small'
                  key={index}
                  sx={{
                    background: 'linear-gradient(90deg, #1976d2 0%, #21cbf3 100%)',
                    color: '#fff',
                    letterSpacing: '0.5px',
                    boxShadow: '0 2px 8px rgba(33,203,243,0.15)',
                  }}
                />
              ))}
            </Stack>
          ) : (
            <Container sx={{ height: '2rem' }} />
          )}
          <Typography component='h2' variant='h5' className="text-lg font-semibold" sx={{ mb: 1 }}>
            {post.titolo}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' className="text-sm" sx={{ mb: 1 }}>
            {post.pubblicazione}
          </Typography>
          <Typography variant='subtitle1' paragraph className="text-base" sx={{ mb: 2 }}>
            {readMore(post.abstract, 40)}
          </Typography>
          {post.articolo && (
            <Typography variant='subtitle1' color='primary' className="text-blue-600 group-hover:underline" sx={{ fontWeight: 600 }}>
              Continua a leggere...
            </Typography>
          )}
          {!post.articolo && post.allegato && (
            <Typography variant='subtitle1' color='primary' className="text-blue-600 group-hover:underline" sx={{ fontWeight: 600 }}>
              Scarica l'allegato
            </Typography>
          )}
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

NewsCard.defaultProps = {
  aspectRatio: '3 / 2',
};
