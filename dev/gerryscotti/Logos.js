import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function TheLogo(props) {
    return (
        <Container>
            <Box
                sx={{

                    left: 500,
                    backgroundColor: props.color,
                }}
            >
                <Grid container

                >
                    <Grid item  xs={0}>

                   
                   
                    
                        <img src={props.logoUrl} width="20%" />
                      
                        <img src={props.sponsorUrl} width="50%" />
                     
                        </Grid>
                    
                </Grid>

            </Box>
        </Container>



    )
}
