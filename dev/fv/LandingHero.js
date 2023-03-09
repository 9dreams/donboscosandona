import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Paper from '@mui/material/Paper'


export default function LandingHero(menu) {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundImage: 'url(' + menu.imageUrl + ')',
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
                    backgroundColor: 'rgba(0,0,0,0.4)'
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h2" variant="h6" color="inherit" gutterBottom>
                            { menu.siteName }
                        </Typography>
                        <Typography component="h2" variant="h6" color="inherit" gutterBottom>
                            { menu.title }
                        </Typography>
                        <Typography component="h5" color="inherit" paragraph>
                            { menu.description }
                        </Typography>
                        <Button href= { menu.buttonUrl } variant="outlined" size="medium" color="success" backgroundColor='white' >{ menu.buttonText }</Button>
                    </Box>

                </Grid>
            </Grid>
        </Paper>
    )
}
