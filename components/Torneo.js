import React, { useState } from "react";
import Styles from "./Torneo.module.css";
import { Container, Grid, Typography, Button } from "@mui/material";

const Torneo = () => {
  const [rotatePizza, setRotatePizza] = useState(false);
  const [activePizza, setActivePizza] = useState(false);
  const [activePizza1, setActivePizza1] = useState(false);

  const numPizzettes = 15;
  const numPizzettes1 = 15;

  const createRandomPosition = () => {
    const randomX = Math.floor(Math.random() * 100) + "vw";
    const randomY = Math.floor(Math.random() * 100) + "vh";
    return { left: randomX, top: randomY };
  };

  const pizzettes = Array.from({ length: numPizzettes }, (_, index) => (
    <div
      key={index}
      className={Styles.pizzette}
      style={{
        backgroundImage: 'url("/images/pizza/pizza1.png")',
        ...createRandomPosition(),
      }}
    />
  ));

  const pizzettes1 = Array.from({ length: numPizzettes1 }, (_, index) => (
    <div
      key={index}
      className={Styles.pizzette1}
      style={{
        backgroundImage: 'url("/images/pizza/pizza2.png")',
        ...createRandomPosition(),
      }}
    />
  ));

  const toggleRotatePizza = () => {
    if (activePizza) {
      setActivePizza(false);
      setRotatePizza(false);
      setActivePizza1(false);
    } else {
      setRotatePizza(true);
      setTimeout(() => {
        setActivePizza(true);
      }, 1250);
      setTimeout(() => {
        setActivePizza1(true);
      }, 2450);
    }
  };

  return (
    <Container
      maxWidth
      style={{
        height: "80vh",
        backgroundColor: "#588fe8",
        position: "relative",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Typography>Colonna 1</Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
            <img
              className={`${Styles.rotatingImages} ${
                rotatePizza ? Styles.pizzaPodio : ""
              }`}
              src={
                activePizza
                  ? "/images/pizza/pizzadietro1.png"
                  : "/images/pizza/pizza.png"
              }
              alt="Pizza"
              style={{ zIndex: "1" }}
            />
            {activePizza1 && (
              <div className={` ${activePizza1 ? Styles.punteggio : ""}`}>
                <Grid item xs={12} sx={{top:20, position: 'absolute', left: 160}}>
                  <Typography variant="h5" sx={{ }}>
                    Podio
                  </Typography>
                </Grid>
                <Grid container sx={{top:90, position: 'absolute', left: 60,zIndex: 5}}>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={3} >
                    <Typography variant="body1" sx={{paddingTop: 2, fontSize: '18px'}}>2F</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body1" sx={{color: 'black', fontSize: '18px'}}>2D</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" sx={{paddingTop: 3, fontSize: '18px'}}>3F</Typography>
                  </Grid>
                </Grid>
              </div>
            )}
          

          <div>
            <Button
              className={Styles.button}
              style={{ marginTop: "20px" }}
              onClick={toggleRotatePizza}
            >
              Gira Pizza
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography>Colonna 3</Typography>
        </Grid>
      </Grid>

      <div>{pizzettes}</div>
      <div>{pizzettes1}</div>
    </Container>
  );
};

export default Torneo;
