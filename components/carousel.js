import Carousel from 'react-material-ui-carousel'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import styles from './carousel.module.css'

export default function MyCarousel({ slides }) {
    return (
        <div style={{ marginTop: '5px', color: '#494949' }}>
            <Carousel className={styles.carousel} animation="slide">
                {
                    slides.map(
                        (slide) => (
                            <Paper
                                className={styles.slide}
                                style={{
                                    backgroundColor: slide.colore,
                                    backgroundImage: 'url(' + slide.immagine + ')',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                elevation={5}
                            >
                                <h2>{ slide.titolo }</h2>
                                <p>{ slide.descrizione }</p>

                                <Button className={styles.bottone}>Scopri di più!</Button>
                            </Paper>
                        )
                    )
                }
            </Carousel>
        </div>
    )
}