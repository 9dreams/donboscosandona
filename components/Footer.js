import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function Footer(props) {
    return (
        <h1>Footer</h1>
    )
}

function TheFooter(props) {
    return (
        <Container maxWidth={true}>

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: props.color,



                }}
            >
                <Grid container>
                    <Grid item xs={3}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 0, md: 6 },
                                pr: { md: 0 },
                                left: 300,
                            }}
                        >

                            <Typography component="h1" color="White" >
                                {props.title1}
                            </Typography>
                            <Typography component="h5" color="darkgrey" paragraph>
                                {props.description1}
                            </Typography>


                            <Box
                                sx={{
                                    position: 'relative',
                                    p: { xs: 0, md: 0 },
                                    pr: { md: 0 },
                                    left: 250,
                                }}
                            >

                            </Box>

                        </Box>
                    </Grid>

                    <Grid item xs={2}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 0, md: 6 },
                                pr: { md: 0 },
                                left: 400,
                            }}
                        >
                            <Typography component="h1" color="White">
                                {props.title2}

                            </Typography>


                            <Typography component="h1" color="White" >
                                {
                                    props.socials.map((social) => (
                                        <Grid item xs={3}>
                                            <Link
                                                color="inherit"
                                                noWrap
                                                key={social.title}

                                                variant="body2"
                                                href={social.url}
                                                sx={{ p: 1, flexShrink: 0, }}
                                            >
                                                <img src={social.imageUrl} width="20" />
                                                {social.title}


                                            </Link>
                                        </Grid>

                                    ))
                                }
                            </Typography>






                            <Box
                                sx={{
                                    position: 'relative',
                                    p: { xs: 0, md: 0 },
                                    pr: { md: 0 },
                                    left: 350,
                                }}
                            >

                            </Box>

                        </Box>
                    </Grid>

                    <Grid item md={3}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 0, md: 6 },
                                pr: { md: 0 },
                                left: 300,
                            }}
                        >
                            <Typography component="h1" color="White">
                                {props.title3}

                            </Typography>
                            <Grid container spacing={2} minHeight={160}>


                                {
                                    props.images.map((image) => (


                                        <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                                            <Link
                                                color="inherit"
                                                noWrap


                                                variant="body2"

                                                sx={{ p: 1, flexShrink: 3, }}
                                            >
                                                <img src={image.imageUrl} width="150" />



                                            </Link>
                                        </Grid>


                                    ))
                                }
                            </Grid>






                        </Box>


                    </Grid>

                </Grid>


                <Typography >

                    <hr>
                    </hr>
                </Typography>




                <Grid container spacing={2} minHeight={160}>

                    {
                        props.menu.map((menu) => (


                            <Grid item xs={1} display="flex" justifyContent="right" alignItems="left"  >
                                <Link
                                    color="inherit"
                                    noWrap


                                    variant="body2"

                                    sx={{ p: 0, flexShrink: 0, }}
                                >

                                    <Typography component="h3" color="White" position="right">
                                        {menu.title}


                                    </Typography>








                                </Link>
                            </Grid>


                        ))
                    }
                    <Grid item xs={0}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 0, md: 0 },
                                pr: { md: 0 },
                                left: 800,
                            }}
                        >

                            <Typography component="h1" color="White" >
                                {props.copyright}
                            </Typography>



                            <Box
                                sx={{
                                    position: 'relative',
                                    p: { xs: 0, md: 0 },
                                    pr: { md: 0 },

                                }}
                            >

                            </Box>

                        </Box>
                    </Grid>
                </Grid>





            </Box>




        </Container>
    )
}