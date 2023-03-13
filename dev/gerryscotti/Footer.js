import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Toolbar from '@mui/material/Toolbar'


export default function TheFooter(props) {
    return (
        <Container maxWidth= {true}>
            
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
                    <Grid item md={4}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
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
                                position: 'assolute',
                                p: { xs: 0, md: 0},
                                pr: { md: 0 },
                            }}
                                >
                             <Typography component="h1" color="White" >
                                {props.title2}
                            </Typography>
                                </Box>

                        </Box>
                    </Grid>

                    <Grid item md={4}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
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
                                position: 'assolute',
                                p: { xs: 0, md: 0},
                                pr: { md: 0},
                            }}
                                >
                             <Typography component="h1" color="White" >
                                {props.title2}
                            </Typography>
                                </Box>

                        </Box>
                    </Grid>

                    <Grid item md={4}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
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
                                position: 'assolute',
                                p: { xs: 0, md: 0},
                                pr: { md: 0 },
                            }}
                                >
                             <Typography component="h1" color="White" >
                                {props.title2}
                            </Typography>
                                </Box>

                        </Box>
                    </Grid>
                </Grid>
           

           </Box>
           
        </Container>
    )
}