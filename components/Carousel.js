import Carousel from 'react-material-ui-carousel'
import {
  Paper,
  Button,
  Box,
  Grid,
  Typography,
  Container,
  Stack,
  Chip,
} from '@mui/material'
import styles from './Carousel.module.css'

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

export default function MyCarousel({
  slides,
  maxWidth,
  height,
  animation,
  interval,
  duration,
  defaultTag,
}) {
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters={true}
      sx={{
        border: '300px',
        marginBottom: '2rem',
      }}
    >
      <Carousel
        className={styles.carousel}
        interval={interval}
        duration={duration}
        animation={animation}
        stopAutoPlayOnHover={false}
        sx={{ height: height + 'vh' }}
      >
        {slides.map((slide) => (
          <Paper
            className={styles.slide}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: height + 'vh',
              paddingTop: height / 2 - 10 + 'vh',
            }}
            elevation={5}
          >
            <Container
              className='hidden lg:block'
              maxWidth={false}
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                overflow: 'hidden',
              }}
            >
              <Image
                src={slide.immagine}
                alt={slide.titolo}
                style={{
                  width: '100%',
                  display: 'block',
                  objectFit: 'cover',
                }}
                fill={true}
                sizes='100vw'
              />
            </Container>
            <Container
              className='block lg:hidden'
              maxWidth={false}
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                overflow: 'hidden',
              }}
            >
              <Image
                src={(slide.immagine_mobile || slide.immagine)}
                alt={slide.titolo}
                style={{
                  width: '100%',
                  display: 'block',
                  objectFit: 'cover',
                }}
                fill={true}
                sizes='100vw'
              />
            </Container>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                opacity: slide.opacity,
                background:
                  !slide.titolo ||
                  `linear-gradient(${
                    slide.colore2 || slide.colore || 'transparent'
                  }, ${slide.colore || 'black'})`,
              }}
            />
            <Container
              maxWidth={false}
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backdropFilter: 'blur(' + slide.blur + ')',
              }}
            />
            <Container maxWidth='lg'>
              <Grid container>
                <Grid item md={8}>
                  <Box
                    sx={{
                      position: { xs: 'absolute', md: 'relative' },
                      bottom: { xs: '3rem' },
                      marginTop: { md: '12rem' },
                      p: { xs: 3, md: 6 },
                      pr: { md: 0 },
                    }}
                  >
                    {slide.tag && slide.tag != defaultTag && (
                      <Stack direction='row' spacing={1} marginBottom={2}>
                        {slide.tag.split(',').map((tag) => (
                          <Chip label={tag} color='primary' />
                        ))}
                      </Stack>
                    )}
                    <Typography
                      component='h2'
                      variant='h3'
                      color='inherit'
                      gutterBottom
                    >
                      {slide.titolo}
                    </Typography>
                    <Typography component='h5' color='inherit' paragraph>
                      {readMore(slide.descrizione, 50)}
                    </Typography>
                    {slide.buttonUrl && (
                      <Button
                        variant='contained'
                        size='large'
                        color='error'
                        href={slide.buttonUrl}
                        sx={{
                          marginTop: '1rem',
                          borderRadius: '2rem',
                        }}
                      >
                        {slide.buttonText}
                      </Button>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        ))}
      </Carousel>
    </Container>
  )
}

MyCarousel.defaultProps = {
  maxWidth: false,
  height: 90,
  animation: 'slide',
  interval: 7000,
  duration: 3000,
  defaultTag: '',
}
