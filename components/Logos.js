import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

export default function TheLogo(props) {
    return (
        <Container maxWidth={true} backgroundColor="props.color">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={5}>
                    
                </Grid>
                <Grid item xs={12} lg={7} >
                
                </Grid>
            </Grid>
        </Container>
    )
}
