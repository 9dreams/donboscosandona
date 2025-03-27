import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import styles from '/components/Products.module.css'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export default function Sponsor({
  title,
  description,
  cardWidth,
  cardWidthXs,
  logos,
}) {
  return (
    <Container maxWidth='lg'>
      <Typography
        text-align='center'
        style={{ textAlign: 'center' }}
        component='h3'
        variant='h3'
        color='inherit'
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        variant='subtitle1'
        style={{ textAlign: 'center', padding: '10px' }}
        text-align='center'
        color='text.secondary'
        paragraph
      >
        {description}
      </Typography>
      <Grid container>
        {logos.map((logo) => (
          <Grid item xs={cardWidthXs} sm={3} md={cardWidth}>
            <CardMedia
              component='img'
              sx={{
                display: {
                  xs: 'block',
                  sm: 'block',
                  margin: 'auto',
                },
                padding: {xs: '0.5rem', sm: '1rem', md: '2rem',}
              }}
              image={logo}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

Sponsor.defaultProps = {
  title: '',
  description: '',
  cardWidth: 2,
  cardWidthXs: 4,
  borderRadius: '10px',
}
