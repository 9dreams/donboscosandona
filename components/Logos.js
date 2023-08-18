import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

export default function TheLogo(props) {
    return (
        <Container maxWidth={true} backgroundColor="props.color" sx={{ padding: {lg: '2rem'} }}>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={5}>
                </Grid>
                <Grid item xs={12} lg={7} >
                    <img src={props.url} width="100%" />
                </Grid>
            </Grid>
        </Container>
    )
}
