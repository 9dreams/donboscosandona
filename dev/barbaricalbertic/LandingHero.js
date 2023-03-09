import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import styles from './LandingHero.module.css'
import Button from '@mui/material/Button'
import { Celebration, Verified, WidthFull } from '@mui/icons-material'
import { minWidth, Stack, width } from '@mui/system'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem';

export default function LandingHero(props) {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
      }}
    >
      <Paper
        sx={{
          position: 'relative',
          color: '#fff',
          mb: 4,
          height: '100vh',
          backgroundImage:
            'url(http://www.donboscosandona.it/img/column/a12efc512fdbb2a25d0a9088b19412f96e1800f3.jpg?1598796861)',
          padding: 0,
          margin: 0,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', // Centra l'immagine e la fa coprire l'intero sfondo senza bordi bianchi
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
        />
        <Container maxWidth="lg">

          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid xs={8}>
                    <Stack sx={{
                      paddingLeft: '50px'

                    }}>
                      <Typography
                        component="p"
                        variant="subtitle1"
                        color="white"
                        paddingTop="0px"
                        marginLeft='0px'
                        marginRight='20%'
                      >
                        {props.siteName}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid xs={1}>
                    <Button variant="outlined"
                      sx={{
                        float: 'right',
                        marginRight:'7vh'
                      }}
                    >Novità!</Button>
                  </Grid>
                  <Grid xs={1}>
                    <Button variant="outlined"
                      sx={{
                        float: 'right'
                      }}
                    >Accedi</Button>
                  </Grid>
                  <Grid xs={1}>
                    <Avatar alt="Elia Barbaric" src="/static/images/avatar/2.jpg"
                      sx={{
                        height: '37px',
                        float: 'center'
                      }}

                    />
                  </Grid>
                </Grid>
              </Box>







              <Stack
                sx={{
                  paddingTop: '200px'
                }}>
                <Typography
                  component="p"
                  variant="h3"
                  color="inherit"
                  paddingTop="px"
                  width='650px'
                >
                  {props.title}
                </Typography>
              </Stack>

              <Stack
                sx={{
                  marginTop: '50px'
                }}>
                <Typography
                  component="p"
                  variant="p"
                  color="inherit"
                  paddingTop="0px"
                  fontFamily='serif'
                >
                  {props.description}
                </Typography>
              </Stack>
              <Stack sx={{
                marginTop: '70px',
                paddingLeft: '0px',
                marginLeft: '0px',
                width: '160px',
                backgroundColor: 'red'

              }}>
                <Button
                  component="botton"
                  variant="h6"
                  color="red"
                  href={props.buttonUrl}
                  paddingTop="100px"
                >
                  {props.buttonText}
                </Button>
              </Stack>



            </Box>
          </Grid>

        </Container>
      </Paper>
    </Container>
  );
}

let menu = [
  { title: 'Informatico', url: '/informatico' },
  { title: 'Energie', url: '/energie' },
  { title: 'Elettrico', url: '/elettrico' },
  { title: 'Meccanico', url: '/meccanico' },
  { title: 'Motoristico', url: '/motoristico' },
  { title: 'Carrozzeria', url: '/carrozzeria' },
  { title: 'Trasparenza', url: '/trasparenza' },
]

/*
<>
          <p>{props.siteName}</p>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div>{props.imageUrl}</div>
          <button>{props.buttonText}</button>
       </>

/*
le props da far apparire sono queste
-creare l'interfaccia uguale a quella di Books
-assegnare le props seguendo il video dell'app react di pitone programmatore
-provare su index.js ad importare il componente e verificare che funzioni



<LandingHero
siteName="CFP DON BOSCO"
title="Your Story Starts With Us."
description="Every landing page needs a small description......."
imageUrl="https://url.dell.immagine"
opacity={ 0.7 }
buttonText="WATCH VIDEO"
buttonUrl="https://....."
menu={ menu }
/>

*/