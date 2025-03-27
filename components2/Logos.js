import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

export default function TheLogo(props) {
  return (
    <Container
      backgroundColor='props.color'
      sx={{ padding: { xs: '1rem',lg: '2rem' } }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <img src={props.url} width='100%' />
        </Grid>
      </Grid>
    </Container>
  )
}
