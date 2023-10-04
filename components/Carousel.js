import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Grid, Typography, Container } from '@mui/material'
import styles from './Carousel.module.css'

export default function MyCarousel({
  slides,
  maxWidth,
  height,
  animation,
  interval,
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
        animation={animation}
        sx={{ height: height + 'vh' }}
      >
        {slides.map((slide) => (
          <Paper
            className={styles.slide}
            sx={{
              position: 'relative',
              backgroundImage: 'url(' + slide.immagine + ')',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: height + 'vh',
              paddingTop: height / 2 - 10 + 'vh',
            }}
            elevation={5}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                opacity: slide.opacity,
                background: `linear-gradient(${
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
                <Grid item md={6}>
                  <Box
                    sx={{
                      position: {xs: 'absolute', md: 'relative'},
                      bottom: {xs: '3rem'},
                      marginTop: {md: '12rem'},
                      p: { xs: 3, md: 6 },
                      pr: { md: 0 },
                    }}
                  >
                    <Typography
                      component='h2'
                      variant='h3'
                      color='inherit'
                      gutterBottom
                    >
                      {slide.titolo}
                    </Typography>
                    <Typography component='h5' color='inherit' paragraph>
                      {slide.descrizione}
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
  animation: 'fade',
  interval: 4000,
}
