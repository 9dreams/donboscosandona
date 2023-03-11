import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function MediaCard({ movie }) {
    return (
        <Card>
            <CardMedia
                sx={{ height: 300 }}
                image={movie.poster_path}
                title={movie.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.director}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Condividi</Button>
                <Button size="small">Scopri di più</Button>
            </CardActions>
        </Card>
    )
}

