import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import styles from 'dev/fv/LandingHero.module.css'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'

export default function LandingHero(props) {
    return (
        <Container
            maxWidth
            disableGutters={true}
            sx={{
                height: '100vh',
                padding: 'ovh',
                margin: '0vh',
                width: '100%'
            }}>
            <Paper
                sx={{
                    position: 'relative',
                    color: '#fff',
                    mb: 4,
                    height: '100vh',
                    backgroundImage: 'url(' + props.imageUrl + ')',
                    padding: 0,
                    margin: 0,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,' + props.opacity + ')'
                    }}
                />
                <Grid container >
                    <Grid item md={6} xs={8} >
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
                                top: 55,
                            }}
                        >
                            <Typography component="h2" variant="h6" color="inherit" gutterBottom>
                                {props.siteName}
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item md={6} className={styles.nav}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 2, md: 5 },
                                pr: { md: 0 },
                                top: 55,
                                overflow: 'auto',
                                width: '100%',
                            }}
                        >
                            <Toolbar
                                component="nav"
                                variant="dense"
                                sx={{
                                    justifycontent: 'space-between',
                                    overflowX: 'auto',
                                    overflow: 'hidden',
                                    overflowWrap: 'break-word',
                                }}
                            >
                                <Grid container>
                                    {
                                        props.menu.map((settore) => (
                                            <Grid item>
                                                <Link className={styles.link_settori}
                                                    color="inherit"
                                                    noWrap
                                                    key={settore.title}
                                                    variant="body2"
                                                    href={settore.url}
                                                    sx={{ p: 1, flexShrink: 0,}}
                                                >
                                                    {settore.title}
                                                </Link>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Toolbar>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={2} />
                    <Grid item md={5}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
                                top: {md: 130, xs: 100},
                            }}
                        >
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {props.title}
                            </Typography>
                            <Typography component="h5" color="inherit" paragraph>
                                {props.description}
                            </Typography>
                            <Button variant="subtitle1" href={props.buttonUrl} className={styles.btLanding} >{props.buttonText}</Button>
                        </Box>
                    </Grid>
                </Grid>

            </Paper>
        </Container>
    )
}