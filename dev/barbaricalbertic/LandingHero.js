import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import styles from './LandingHero.module.css'
import Button from '@mui/material/Button'
import { Celebration } from '@mui/icons-material'

export default function PostInEvidenza(props) {
  return (
    <Container maxWidth={false}
      sx={{
        height: '100vh'
      }}>
      <Paper
        sx={{
          position: 'relative',
          color: '#fff',
          mb: 4,
          height: '100vh',
          backgroundImage: 'url(http://www.donboscosandona.it/img/column/a12efc512fdbb2a25d0a9088b19412f96e1800f3.jpg?1598796861)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          
          
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
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <Typography component="p" variant="h" color="grey" paddingTop= '0px' marginTop={0} >
                {props.siteName}
                </Typography>
                <Typography component="p" variant="h3" color="inherit" paddingTop= 'px'>
                { props.title }
                </Typography>
                <Button component="botton" variant="h6" color="red" href={props.buttonUrl}>
                { props.buttonText }
                </Button>
                <Typography component="p" variant="h6" color="inherit" paddingTop= '0px'>
                { props.siteName }
                </Typography>
              


              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  )
}

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