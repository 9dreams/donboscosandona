import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Footer(props) {
    return (
        <Container
            maxWidth={true}
            disableGutters={true}
        >
            <Box
                sx={{
                    position: 'relative',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: props.color,
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        {/* Chi siamo */}
                        <Grid item xs={12} lg={4}>
                            <Typography component="h1" color="White" paddingBottom="2rem">
                                {props.title1}
                            </Typography>
                            <Typography component="h5" color="darkgrey" paragraph>
                                {props.description1}
                            </Typography>

                            {/* Social Feed in riga sotto Chi siamo (link sull'immagine, testo rimosso) */}
                            <Grid container spacing={1} sx={{ marginTop: '1rem' }}>
                                {props.socials.map((social) => (
                                    <Grid item key={social.title}>
                                        <Link
                                            href={social.url}
                                            sx={{ p: 1, flexShrink: 0 }}
                                        >
                                            <img src={social.imageUrl} width="30" alt={social.title} />
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        {/* Immagini */}
                        <Grid item xs={12} lg={4}>
                            <Typography component="h1" color="White" paddingBottom="2rem">
                                {props.title3}
                            </Typography>
                            <Grid container spacing={2} minHeight={160}>
                                {props.images.map((image) => (
                                    <Grid item xs={4} display="flex" justifyContent="center" alignItems="center" key={image.imageUrl}>
                                        <Link
                                            color="inherit"
                                            noWrap
                                            variant="body2"
                                            sx={{ p: 1, flexShrink: 3 }}
                                        >
                                            <img src={image.imageUrl} width="200" alt="image" />
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        {/* Linea */}
                        <Grid item xs={12}>
                            <Typography component="h1">
                                <hr />
                            </Typography>
                        </Grid>

                        {/* Menù */}
                        <Grid item xs={12} lg={8}>
                            <Toolbar
                                component="nav"
                                variant="dense"
                                sx={{
                                    overflowX: 'auto',
                                    float: 'right',
                                    color: '#fff',
                                }}
                            >
                                <Grid container sx={{ marginBottom: '10px', pb: '10px' }}>
                                    {props.menu.map((link) => (
                                        <Button
                                            color="inherit"
                                            noWrap
                                            key={link.title}
                                            variant="body2"
                                            href={link.url}
                                            sx={{ p: 1, flexShrink: 0, marginRight: '20px' }}
                                        >
                                            {link.title}
                                        </Button>
                                    ))}
                                </Grid>
                            </Toolbar>
                        </Grid>

                        {/* Copyright */}
                        <Grid item xs={12} lg={4}>
                            <Typography component="h1" color="White" sx={{ marginLeft: '27px', marginBottom: '15px' }}>
                                {props.copyright}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Container>
    );
}