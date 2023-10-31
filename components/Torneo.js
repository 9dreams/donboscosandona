import React, { useState } from "react";
import Styles from "./Torneo.module.css";
import { Container, Grid,Typography } from "@mui/material";

const Torneo = () => {
  const [rotatePizza, setRotatePizza] = useState(false);
  const [activePizza, setActivePizza] = useState(false);

  const [activePizza1, setActivePizza1] = useState(false);

  const toggleRotatePizza = () => {
    if (activePizza) {
      setActivePizza(false);
      setRotatePizza(false);
      setActivePizza1(false)
    } else {
      setRotatePizza(true);
      setTimeout(() => {
        setActivePizza(true);
      }, 1250);
      setTimeout(() => {
        setActivePizza1(true)
      }, 2450);
    }
  };

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

  return (
    <Container
      maxWidth
      disableGutters={true}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        backgroundColor: "#588fe8",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div>
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
        <div
          className={` ${
            activePizza1 ? Styles.punteggio : ""
          }`}
        ><Grid item xs={6} sx={{textAlign:'center'}}><h3>Podio</h3></Grid>
          <Grid container>
          <Grid item xs={3} >
            
            </Grid>
            <Grid item xs={3} sx={{textAlign:'center'}}>
              <Typography variant="body1">3F</Typography>
            </Grid>
            <Grid item  xs={3} sx={{paddingTop: '15px'}}>
              <Typography variant="body1">3F</Typography>
            </Grid>
            <Grid item  >
              <Typography variant="body1">3F</Typography>
            </Grid>
            
          </Grid>
        </div>
        )}
      </div>

      <div>
        <button onClick={toggleRotatePizza}>Gira Pizza</button>
      </div>

      <div>{pizzettes}</div>
      <div>{pizzettes1}</div>
    </Container>
  );
};

export default Torneo;
