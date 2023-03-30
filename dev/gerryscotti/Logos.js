

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'


export default function TheLogo(props) {
    return (
        <Container maxWidth={true} backgroundColor = "props.color">

            


            <Grid container spacing={2}

            >

                <Grid item xs={4} >

                    <img src={props.logoUrl} width="45%" />

                </Grid>

            
            <Grid item xs={4} >

                <img src={props.sponsorUrl} width="160%" />

            </Grid>
            </Grid>
        </Container >



    )
}
