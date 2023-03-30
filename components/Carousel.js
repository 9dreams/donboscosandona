import Carousel from 'react-material-ui-carousel'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import styles from './Carousel.module.css'

export default function MyCarousel({ slides, maxWidth }) {
    return (
        <Container
            maxWidth={maxWidth}
            disableGutters={true}
            sx={{
                minHeight: '90vh',
                border: '300px',
                marginBottom: '2rem',
            }}
        >
            <Carousel className={styles.carousel} animation="slide">
                {
                    slides.map(
                        (slide) => (
                            <Paper
                                className={styles.slide}
                                sx={{
                                    backgroundColor: slide.colore,
                                    backgroundImage: 'url(' + slide.immagine + ')',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
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
                                        backgroundColor: slide.immagine ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)',
                                    }}
                                />
                                <Container maxWidth="lg">
                                    <Grid container>
                                        <Grid item md={6}>
                                            <Box
                                                sx={{
                                                    position: 'relative',
                                                    p: { xs: 3, md: 6 },
                                                    pr: { md: 0 },
                                                }}
                                            >
                                                <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                                                    {slide.titolo}
                                                </Typography>
                                                <Typography component="h5" color="inherit" paragraph>
                                                    {slide.descrizione}
                                                </Typography>
                                                <Button className={styles.bottone}>Scopri di più!</Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Paper>
                        )
                    )
                }
            </Carousel>
        </Container>
    )
}

MyCarousel.defaultProps = {
    maxWidth: false,
    height: '90vh'
}