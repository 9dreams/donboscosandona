import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const carouselImages = [
    '/images/carouselbirra1.jpg',
    '/images/carouselbirra2.jpg',
    '/images/carouselbirra3.jpg',
    '/images/carouselbirra4.jpg'
];

const cardData = [
  {
    title: 'Birra Peroni',
    description: 'Uno dei grandi classici della birra italiana.',
    image: '/images/birramoretti.png',
  },
  {
    title: 'Birra Moretti',
    description: 'La grande rivale.',
    image: '/images/birraperoni.png',
  },
  {
    title: 'Birra Corona',
    description: 'qualcosa',
    image: '/images/birracorona.png',
  },
  {
    title: 'Birra Heiniken',
    description: 'La nostra birra luppolata, dal gusto deciso e unico.',
    image: '/images/birraheineken.png',
  },
];

export default function Home() {
  return (
    <div>
      
      <AppBar position="static" class='bg-yellow-600'>
        <Toolbar>
          <Typography variant="h4">Birreria Salesiani</Typography>
        </Toolbar>
      </AppBar>

 
      <Carousel>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel Image`}/>
          </div>
        ))}
      </Carousel>

     
      <Container>
        <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: 4 }}>
          Benvenuto alla Birreria Salesiana!
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          La nostra birreria è il luogo ideale dove gustare birre artigianali di qualità, preparate con passione
          e ingredienti freschi. Siamo orgogliosi delle nostre ricette uniche e dell'atmosfera accogliente.
          Oltre ad avere i grandi classici. 
        </Typography>
      </Container>

      <Container sx={{ marginTop: 5 }} >
        <Grid container spacing={6} justifyContent="center" >
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={7} md={6} key={index} >
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </div>
  );
}
