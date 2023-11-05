import React, { useState } from "react";
import Styles from "./Torneo.module.css";
import { Container, Grid, Typography, Button } from "@mui/material";

const Torneo = (props) => {
  // settare lo stato delle classi
  const [rotatePizza, setRotatePizza] = useState(false);
  const [activePizza, setActivePizza] = useState(false);
  const [activePizza1, setActivePizza1] = useState(false);

  const numPizzettes = props.pizzettes;
  const numPizzettes1 = props.pizzettes1;

  // funzione per creare una posizione casuale alle pizzette
  const createRandomPosition = () => {
    const randomX = Math.floor(Math.random() * 100) + "vw";
    const randomY = Math.floor(Math.random() * 100) + "vh";
    return { left: randomX, top: randomY };
  };

  // serve per impostare l'immagine e darli la funzioneae per il movimento sullo schermo
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
  // funzione che dice le classi da attivare
  const toggleRotatePizza = () => {
    if (activePizza) {
      setActivePizza(false);
      setRotatePizza(false);
      setActivePizza1(false);
    } else {
      setRotatePizza(true);
      setTimeout(() => { // serve per mettere del tempo di deley prima di attivare la classe
        setActivePizza(true);
      }, 1420);
      setTimeout(() => {
        setActivePizza1(true);
      }, 2450);
    }
  };

  const idPrimoPosto = "1";
  const idSecondoPosto = "2";
  const idTerzoPosto = "3";

  // Trova gli oggetti del podio in base all'ID
  const primoPosto = props.classi.find((element) => element.id === idPrimoPosto);
  const secondoPosto = props.classi.find((element) => element.id === idSecondoPosto);
  const terzoPosto = props.classi.find((element) => element.id === idTerzoPosto);

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
        <Grid item xs={12} sm={4}>
          <h2 id="titolo">Classifica Superpizza</h2>
          <p>Il torneo Superpizza coinvolge tutte le classi del CFP Don Bosco. Attraverso la partecipazione alle attività proposte e l'impegno nei giochi e nei tornei, le classi accumulano punti e scalano la classifica. Alla fine dell'anno, la classe vincitrice viene proclamata e riceve come premio una mega pizza.</p>
          <style jsx>
            {`
              @import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

              #titolo {
                font-size: 50px;
                font-family: "Kaushan Script", cursive !important;
                letter-spacing: 0;
                padding: 0.25em 0 0.325em;
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
              @media (max-width: 600px) {
                #titolo {
                  font-size: 30px;
                }
              }

              p{
                width: 400px !important;
                font-size: 18px
              }
            `}
          </style>
        </Grid>

        <Grid item xs={12} sm={4}>
          <img // cambia lo stile una volta attiva la pizza
            className={`${Styles.rotatingImages} ${
              rotatePizza ? Styles.pizzaPodio : ""
            }`}
            src={ // una volta che si attiva la classe activePizza cambia immagine
              activePizza
                ? "/images/pizza/pizzadietro1.png"
                : "/images/pizza/pizza.png"
            }
            alt="Pizza"
            style={{ zIndex: "1" }}
          />
          {activePizza1 && ( // se attivato lo mostra 
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
                    {secondoPosto.classe} {/*secondo posto */}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    sx={{ color: "black", fontSize: "18px" }}
                  >
                    {primoPosto.classe} {/* primo posto*/}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    sx={{ paddingTop: 3, fontSize: "18px" }}
                  >
                    {terzoPosto.classe} {/* terzo posto*/}
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
                      width: "50px",
                      pl: "10px",
                      borderRadius: "30px",
                    }}
                  >
                    {secondoPosto.punti} {/*secondo posto */}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "black",
                      fontSize: "18px",
                      backgroundColor: "#357214",
                      width: "50px",
                      pl: "10px",
                      borderRadius: "30px",
                    }}
                  >
                    {primoPosto.punti} {/*primo posto */}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "18px",
                      backgroundColor: "#D9EAD3",
                      width: "50px",
                      pl: "10px",
                      borderRadius: "30px",
                    }}
                  >
                    {terzoPosto.punti} {/*terzo posto */}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          )}

          <div>
            <Button
              className={Styles.button}
              style={{ marginTop: "20px" }}
              // funzione che si attiva una volta cliccato il pulsante
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

            {props.classi
            // filtra le props se hanno un id non lo scrive
            .filter(classe => !classe.hasOwnProperty('id'))
            .map(classe => (
              <tr>
                <td>{classe.classe}</td>
                <td>{classe.punti}</td>
              </tr>
            ))}

          </table>
              
          <style jsx>
            {` // implementazione style css per utilizzo di id="th1"
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




Torneo.defaultProps = {
  pizzettes : "40",
  pizzettes1 : "40",
}
