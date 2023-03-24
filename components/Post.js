import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import Date from '/components/Date'

export default function Post({ post }) {
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href={'/articoli/' + post.id}>
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            <Date dateString={post.date} />
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.abstract}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Continua a leggere...
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
                        image={post.imageUrl}
                        alt={post.title}
                    />
                </Card>
            </CardActionArea>
        </Grid>
    )
}