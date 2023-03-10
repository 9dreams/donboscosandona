import * as React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import styles from './LandingHero.module.css'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import { Toolbar } from '@mui/material'
import Stack from '@mui/material/Stack';

export default function LandingHero(props) {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',

        padding: 0
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

        <Container maxWidth='lg'>

          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                  <Grid xs={3}>
                    <Stack sx={{
                      paddingLeft: '50px'

                    }}>
                      <Button
                        component="h3"
                        variant="subtitle1"
                        color="beige"
                        marginTop="15px"
                        marginLeft='0px'
                        marginRight='20%'
                        href='#'
                      >
                        {props.siteName}
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid xs={9}>
                    <Toolbar
                      component="nav"
                      variant="dense"
                      sx={{ overflowX: 'auto',
                      float:'right'
                    }}

                    >
                      {
                        menu.map((link) => (
                          <Button
                            color="inherit"
                            noWrap
                            key={link.title}
                            variant="body2"
                            href={link.url}
                            sx={{ p: 1, flexShrink: 0 }}
                          >
                            {link.title}
                          </Button>
                        ))
                      }
                      <Button variant="outlined"
                        sx={{
                          float: 'right'
                        }}
                      >Accedi</Button>
                    </Toolbar>



                  </Grid>

                </Grid>
              </Box>


              <Stack
                sx={{
                  paddingTop: '200px'
                }}>
                <Typography
                  component="h3"
                  variant="h2"
                  color=""
                  paddingTop="px"
                  width='600px'
                >
                  {props.title}
                </Typography>
              </Stack>

              <Stack
                sx={{
                  marginTop: '50px'
                }}>
                <Typography
                  component="h"
                  variant="h6"
                  color="lightgrey"
                  paddingTop="0px"

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