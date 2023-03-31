import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

export default function TheLogo(props) {
    return (
        <Container maxWidth={true} backgroundColor="props.color">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={5}>
                    <img src={props.logoUrl} width="30%" />
                </Grid>
                <Grid item xs={12} lg={7} >
                    <img src={props.sponsorUrl} width="100%" />
                </Grid>
            </Grid>
        </Container>
    )
}
