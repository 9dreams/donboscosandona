import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import styles from 'dev/fv/landing.module.css'
import Toolbar from '@mui/material/Toolbar'

export default function LandingHero(props) {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundImage: 'url(' + props.imageUrl + ')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '90vh'
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
                    backgroundColor: 'rgba(0,0,0,0.4)',
                }}
            />
            <Grid container>
                <Grid item md={2}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h2" variant="h6" color="inherit" gutterBottom>
                            {props.siteName}
                        </Typography>

                    </Box>
                </Grid>
                <Grid item md={5}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                            top: 290,
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
                <Grid item md={5}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Toolbar
                            component="nav"
                            variant="dense"
                            sx={{ justifycontent: 'space-between', overflowX: 'auto' }}
                        >
{
                            props.menu.map((settore) => (
                                <Link className={styles.link_settori}
                                    color="inherit"
                                    noWrap
                                    key={settore.title}
                                    variant="body2"
                                    href={settore.url}
                                    sx={{ p: 1, flexShrink: 0 }}
                                >
                                    {settore.title}
                                </Link>
                            ))
                        }
                        </Toolbar>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}
