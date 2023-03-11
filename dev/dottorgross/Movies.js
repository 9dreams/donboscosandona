import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import MovieCard from './MovieCard'

export default function Movies({data}) {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {
                    data.map((movie) => (
                        <Grid item xs={12} md={6} lg={4} xl={3}>
                            <MovieCard movie={movie} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}




