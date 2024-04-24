import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightIcon from '@mui/icons-material/Nightlight'

export default function Calendar({
  title,
  description,
  cardWidth,
  events,
  borderRadius,
  aspectRatio,
}) {
  return (
    <Container maxWidth='lg' sx={{ marginBottom: '2rem' }}>
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
        {events.map((date) => (
          <Grid item xs={12} sm={6} md={cardWidth}>
            <Card
              sx={{
                display: 'flex',
                margin: { xs: '5px', md: '0.5rem' },
                backgroundColor: date.bgColor || '#222f3e',
                borderRadius: borderRadius,
                minHeight: '35rem',
                boxShadow: 3,
              }}
              elevation={0}
            >
              <CardContent sx={{ flex: 1, padding: '0px', paddingTop: '10px' }}>
                <CardMedia
                  component='img'
                  sx={{
                    display: {
                      xs: 'block',
                      sm: 'block',
                      margin: '0px',
                      borderRadius: '0px',
                    },
                    aspectRatio: aspectRatio,
                  }}
                  image={date.immagineUrl}
                  alt={date.date}
                />
                <Container sx={{ paddingTop: '1.5rem' }}>
                  <Typography
                    text-align='center'
                    component='h4'
                    variant='h6'
                    style={{ textAlign: 'center' }}
                    color='white'
                    gutterBottom
                  >
                    {date.date}
                  </Typography>
                  {date.morning && (
                    <Typography
                      variant='subtitle1'
                      style={{ padding: '1px' }}
                      color='white'
                      paragraph
                    >
                      <AccessTimeIcon />
                      &nbsp;Mattino: {date.morning}
                    </Typography>
                  )}
                  {date.afternoon && (
                    <Typography
                      variant='subtitle1'
                      style={{ padding: '1px' }}
                      color='white'
                      paragraph
                    >
                      <LightModeIcon />
                      &nbsp;Pomeriggio: {date.afternoon}
                    </Typography>
                  )}
                  {date.evening && (
                    <Typography
                      variant='subtitle1'
                      style={{ padding: '1px' }}
                      color='white'
                      paragraph
                    >
                      <NightlightIcon />
                      &nbsp;Sera: {date.evening}
                    </Typography>
                  )}
                </Container>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

Calendar.defaultProps = {
  cardWidth: 3,
  borderRadius: '5px',
  aspectRatio: '3 / 2',
}
