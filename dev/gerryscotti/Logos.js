import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function TheLogo(props) {
    return (
        <Container >
            <Box
                sx={{


                    backgroundColor: props.color,
                }}
            >
                <Grid container

                >
                    
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 0, md: 0 },
                                pr: { md: 0},
                                left: 400,
                                top:90,
                            }}
                        >




                            <img src={props.sponsorUrl} width="55%" />



                        </Box>
                    </Grid>
                    
                    <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 0, md: 1 },
                                pr: { md: 0 },
                                left: 1,
                            }}
                        >
                        <img src={props.logoUrl} width="20%" />
                        </Box>
                    

                


            </Box>
        </Container>



    )
}
