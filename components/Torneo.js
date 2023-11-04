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
        <Grid item xs={12} sm={3} >
          <h2 id="titolo">Classifica Superpizza</h2>
          <style jsx>
            {`
              @import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

              #titolo {
                font-size: 50px;
                font-family: "Kaushan Script", cursive !important;
                letter-spacing: 0;
                padding: .25em 0 .325em;
                display: block;
                margin: 0 auto;
                text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

                background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png)
                  repeat-y;
                -webkit-background-clip: text;
                background-clip: text;

                -webkit-text-fill-color: transparent;
                -webkit-animation: aitf 80s linear infinite;

                -webkit-transform: translate3d(0, 0, 0);
                -webkit-backface-visibility: hidden;
              }

              @-webkit-keyframes aitf {
                0% {
                  background-position: 0% 50%;
                }
                100% {
                  background-position: 100% 50%;
                }
              }
              @media (max-width: 600px){
                #titolo{
                  font-size: 30px;
                }
              }
            `}
          </style>
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
                    1B {/*secondo posto */}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    sx={{ color: "black", fontSize: "18px" }}
                  >
                    1F {/* primo posto*/}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    sx={{ paddingTop: 3, fontSize: "18px" }}
                  >
                    2F {/* terzo posto*/}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                sx={{
                  position: "absolute",
                  left: 40,
                  top: 180,
                  textDecoration: "duoble",
                }}
              >
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "18px",
                      backgroundColor: "#6AA850",
                      width: "40px",
                      pl: "10px",
                      borderRadius: "30px",
                    }}
                  >
                    230 {/*secondo posto */}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      fontSize: "18px",
                      backgroundColor: "#357214",
                      width: "40px",
                      pl: "10px",
                      borderRadius: "30px",
                    }}
                  >
                    263 {/*primo posto */}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "18px",
                      backgroundColor: "#D9EAD3",
                      width: "40px",
                      pl: "10px",
                      borderRadius: "30px",
                    }}
                  >
                    224 {/*terzo posto */}
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

        <Grid item xs={12} sm={4}>
          <table style={{ textAlign: "center" }}>
            <tr>
              <th id="th1">Classe</th>
              <th id="th2">Punteggi</th>
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
              table {
                width: 230px;
                border-collapse: collapse;
                margin: 10px auto;
              }

              th {
                padding: 10px;
                color: white;
                text-align: center;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
              }

              #th1 {
                background-color: gold;
              }

              #th2 {
                background-color: crimson;
              }

              td {
                padding: 5px;
                text-align: center;
                border-top: 1px solid black;
                border-radius: 0;
                background-color: slategray;
                color: black;
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
  { classe: "1A", punti: "199" },
  { classe: "1C", punti: "223" },
  { classe: "1D", punti: "183" },
  { classe: "1E", punti: "173" },
  { classe: "2A", punti: "189" },
  { classe: "2B", punti: "163" },
  { classe: "2C", punti: "182" },
  { classe: "2D", punti: "213" },
  { classe: "2E", punti: "160" },
  { classe: "3A", punti: "165" },
  { classe: "3B", punti: "126" },
  { classe: "3C", punti: "129" },
  { classe: "3D", punti: "198" },
  { classe: "3E", punti: "155" },
  { classe: "3F", punti: "220" },
  { classe: "4A", punti: "169" },
  { classe: "4B", punti: "191" },
];
