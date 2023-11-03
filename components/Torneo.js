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
        height: "90vh",
        backgroundColor: "#588fe8",
        position: "relative",
        overflow: "hidden",
        display: "flex",
      }}
      className={Styles.container}
    >
      <Grid container sx={{ marginTop: 10 }}>
        <Grid item xs={12} sm={4} sx={{ paddingLeft: 10 }}>
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
              <Grid
                item
                xs={12}
                sx={{ top: 20, position: "absolute", left: 160 }}
              >
                <Typography variant="h5" sx={{}}>
                  Podio
                </Typography>
              </Grid>
              <Grid
                container
                sx={{ top: 90, position: "absolute", left: 54, zIndex: 5 }}
              >
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    sx={{ paddingTop: 2, fontSize: "18px" }}
                  >
                    2F
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    sx={{ color: "black", fontSize: "18px" }}
                  >
                    2D
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    sx={{ paddingTop: 3, fontSize: "18px" }}
                  >
                    3F
                  </Typography>
                </Grid>

              </Grid>
              <Grid
               container
               xs={12}
               sx={{ position: 'absolute', left: 40, top: 180, textDecoration: 'duoble'}}
              >
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    sx={{  fontSize: "18px", backgroundColor:'#6AA850', width: '40px', pl:'10px', borderRadius: '30px'}}
                  >
                    230
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    sx={{ color: "black", fontSize: "18px", backgroundColor:'#357214', width: '40px', pl:'10px', borderRadius: '30px'}}
                  >
                    264
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    sx={{  fontSize: "18px", backgroundColor:'#D9EAD3', width: '40px', pl:'10px', borderRadius: '30px' }}
                  >
                    224
                  </Typography>
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

        <Grid item xs={12} sm={4} >
          <table style={{  width: '100%', textAlign: 'center',backgroundColor: 'white'  }}>
            <tr>
              <th>Classe</th>
              <th>Punteggi</th>
            </tr>

            {sezioni.map((sezione) => (
              <tr>
                <td>{sezione.classe}</td>
                <td>{sezione.punti}</td>
              </tr>
            ))}
          </table>

          <style jsx>
            {`
              .table-container {
                border: 2px solid black;
                height: 50px;
              }
              table,
              th,
              td {
                border: 1px solid black;
              }
            `}
          </style>
        </Grid>
      </Grid>

      <div>{pizzettes}</div>
      <div>{pizzettes1}</div>
    </Container>
  );
};

export default Torneo;

let sezioni = [
  { classe: "1A", punti: "345", },
  { classe: "1B", punti: "345", },
  { classe: "1C", punti: "345", },
  { classe: "1D", punti: "345", },
  { classe: "1E", punti: "345", },
  { classe: "1F", punti: "345", },
  { classe: "2A", punti: "345", },
  { classe: "2B", punti: "345", },
  { classe: "2C", punti: "345", },
  { classe: "2E", punti: "345", },
  { classe: "3A", punti: "345", },
  { classe: "3B", punti: "345", },
  { classe: "3C", punti: "345", },
  { classe: "3D", punti: "345", },
  { classe: "3E", punti: "345", },
  { classe: "4A", punti: "345", },
  { classe: "4B", punti: "345", },

];

{/*28, 74, 48, 32, 47, 74, 37,*/}