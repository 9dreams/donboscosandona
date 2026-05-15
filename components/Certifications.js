import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import styles from '/components/Products.module.css'

export default function Certifications({ certifications, cardWidth, maxWidth }) {
    return (
        <Container
            maxWidth={maxWidth}
            className="bg-neutral-300 transition-colors duration-300 dark:bg-[#0d0f14]"
        >
            <Container maxWidth="lg">
                <Grid container className="bg-neutral-300 transition-colors duration-300 dark:bg-[#0d0f14]">
                    {
                        certifications.map(
                            (certification) => (
                                <Grid item xs={12} sm={6} md={cardWidth} sx={{ height: '295px' }}>
                                    <img src={certification.logoUrl} style={{ width: '75%', padding: '15px', borderRadius: '40px', height: '170px', paddingLeft: '90px' }} className={styles.immagine} />
                                    <Typography variant="subtitle1" style={{ textAlign: 'center', width: '250px', paddingLeft: '20px', height: '' }} color="text.secondary" paragraph>
                                        {certification.text1}
                                        {certification.text2}
                                    </Typography >
                                </Grid>
                            )
                        )
                    }
                </Grid>
            </Container>
        </Container>
    )
}

Certifications.defaultProps = {
    maxWidth: false
}