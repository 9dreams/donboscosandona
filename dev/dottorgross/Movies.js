import useSWR from 'swr'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import MovieCard from '/dev/dottorgross/MovieCard'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Movies() {
    const { data, error } = useSWR('https://cinema.donboscosandona.it/movie/featured.json', fetcher)

    if (error) return <div>Errore di caricamento.</div>
    if (!data) return <div>Caricamento...</div>

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




