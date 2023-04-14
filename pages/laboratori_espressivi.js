
import * as React from 'react';
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from 'components/Paragraph'
import { color, Container } from '@mui/system'
import Products from 'components/Products'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'


export default function Pagina() {
  return (
    <Layout>
      <LandingHero
        opacity={0.2}
        title="Laboratori espressivi"
        description="I laboratori espressivi sono spazi in cui le persone possono esplorare e comunicare le proprie emozioni e pensieri in modo creativo e spontaneo, attraverso l'utilizzo di diversi media espressivi, come la pittura, la musica, la danza, la scrittura e la fotografia."
        imageUrl="https://static01.nyt.com/images/2023/01/03/multimedia/03pinocchio-puppets-5-97e3/03pinocchio-puppets-5-97e3-superJumbo.jpg"
      />
      <Paragraph
      >
        <center><h1>Attività espressive</h1></center>
      </Paragraph>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Reporter per caso"
                height="140"
                image="http://www.inoratorio.it/img/column/5a93287e71b29877a5281cf467be3f8d68fbc69d.jpg?1556288964"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  REPORTER PER CASO
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Il ritorno del giornalino della PER con tutte le novità, gli scoop e tante interviste!
                  <br></br>

                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="http://www.inoratorio.it/img/column/ea2862105d595faaa0bb78671367632d5810a58d.jpg?1651925594"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  GIOCHI DA TAVOLO
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sei più un tipo da "Rompicapi" o ti piacciono i giochi di ruoli? Ami "fare alleanze" o il "tutti contro tutti"? Stai in sala giochi e provali tutti!

                </Typography>
              </CardContent>

            </Card>
          </Grid>

          <Grid item xs={4}>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="http://www.inoratorio.it/img/column/4ec55682734019711be21ae9943657b24ad593a9.jpg?1651925492"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CLOWNERIE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Diventa anche tu un bravissimo giocoliere e fai divertire i tuoi amici!
                  <br></br>
                </Typography>
              </CardContent>

            </Card>
          </Grid>

          <Grid item xs={4}>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="http://www.inoratorio.it/img/column/14219bd7feb8ad24996a2994f8dcc3b921105f73.jpg?1651927817"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CANTO
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Passi ore nella doccia cantando a squarciagola davanti a un pubblico immaginario? Partecipa a questa attività, e il pubblico lo avrai davvero!
                  <br></br>
                  <br></br>
                  
                </Typography>
              </CardContent>

            </Card>
          </Grid>

          <Grid item xs={4}>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="http://www.inoratorio.it/img/column/10c0eb81bfda3bf61745b765ea88102a5c410bdf.jpg?1556289237"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CHITARRA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Perfezionare la tecnica o scoprire la passione per lo strumento musicale più diffuso al mondo! (se hai la chitarra è meglio... anche se alcune le possiamo fornire noi!)
                <br></br>
                </Typography>
              </CardContent>

            </Card>
          </Grid>

          <Grid item xs={4}>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="http://www.inoratorio.it/img/column/41e06006898dccf8f0a7d4a8355a9ff3b7cf8da7.jpg?1651925781"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  SKETCH TEATRALI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Assieme agli animatori prepariamo gli sketch comici che verranno messi in scena durante le accoglienze del pomeriggio. I più belli saranno presentati alla serata finale!!!
                </Typography>
              </CardContent>

            </Card>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
      </Container>


    </Layout>
  )
}
