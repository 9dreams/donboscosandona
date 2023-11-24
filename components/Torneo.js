import styles from './Torneo.module.css'
import React, { useState, useEffect } from 'react'
import { Container, Grid, Typography, Button } from '@mui/material'

const Torneo = (props) => {
  // settare lo stato delle classi
  const [rotatePizza, setRotatePizza] = useState(false)
  const [activePizza, setActivePizza] = useState(false)
  const [activePizza1, setActivePizza1] = useState(false)

  const numPizzettes = props.pizzettes
  const numPizzettes1 = props.pizzettes1

  // funzione per creare una posizione casuale alle pizzette
  const createRandomPosition = () => {
    const randomX = Math.floor(Math.random() * 100) + 'vw'
    const randomY = Math.floor(Math.random() * 100) + 'vh'
    return { left: randomX, top: randomY }
  }

  // impostare l'immagine e darle la funzione per il movimento sullo schermo
  const pizzettes = Array.from({ length: numPizzettes }, (_, index) => (
    <div
      key={index}
      className={styles.pizzette}
      style={{
        backgroundImage: 'url("/images/pizza/pizza1.png")',
        ...createRandomPosition(),
      }}
    />
  ))

  const pizzettes1 = Array.from({ length: numPizzettes1 }, (_, index) => (
    <div
      key={index}
      className={styles.pizzette1}
      style={{
        backgroundImage: 'url("/images/pizza/pizza2.png")',
        ...createRandomPosition(),
      }}
    />
  ))
  // funzione che dice le classi da attivare
  const toggleRotatePizza = () => {
    if (activePizza) {
      setActivePizza(false)
      setRotatePizza(false)
      setActivePizza1(false)
    } else {
      setRotatePizza(true)
      setTimeout(() => {
        // serve per mettere il tempo di delay prima di attivare la classe
        setActivePizza(true)
      }, 1420)
      setTimeout(() => {
        setActivePizza1(true)
      }, 2450)
    }
  }

  if (props.autoRotate) {
    useEffect(() => {
      toggleRotatePizza()
    }, [])
  }

  // mettiamo in ordine decrescente l'array per avere i primi 3 in alto
  props.classi.sort((a, b) => b.punti - a.punti)

  return (
    <Container
      className={styles.container}
      maxWidth
      disableGutters={true}
      sx={{
        height: { xs: '190vh', sm: '130vh', md: '90vh', lg: '80vh' },
        backgroundColor: '#588fe8',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      <Grid container className={styles.gridcontainer}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={4}
          sx={{ paddingLeft: { xs: '30px', sm: '200px', md: '20px' } }}
        >
          <h2 id='titolo'>Classifica Superpizza</h2>
          <p className={styles.p1}>
            Il torneo Superpizza coinvolge tutte le classi della SFP Don Bosco.
            Attraverso la partecipazione alle attività proposte e l'impegno nei
            giochi e nei tornei, le classi accumulano punti e scalano la
            classifica. Alla fine dell'anno, la classe vincitrice viene
            proclamata e riceve come premio una mega pizza.
          </p>
          <style jsx>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

              #titolo {
                font-size: 50px;
                font-family: 'Kaushan Script', cursive !important;
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
                p {
                  width: 350px !important;
                }
              }

              p {
                width: 450px;
                font-size: 18px;
              }
            `}
          </style>
        </Grid>

        <Grid item className={styles.middle} xs={12} sm={12} lg={4} sx={{}}>
          <img // cambia lo stile una volta attiva la pizza
            className={`${styles.rotatingImages} ${
              rotatePizza ? styles.pizzaPodio : ''
            }`}
            src={
              // una volta che si attiva la classe activePizza cambia immagine
              activePizza
                ? '/images/pizza/pizzadietro1.png'
                : '/images/pizza/pizza.png'
            }
            alt='Pizza'
            style={{ zIndex: '1' }}
          />
          {activePizza1 && ( // se è attivatata la classe lo mostra sulla pagina
            <div className={` ${activePizza1 ? styles.punteggio : ''}`}>
              <Grid
                item
                xs={12}
                sx={{ top: 20, position: 'absolute', left: 160 }}
              >
                <Typography variant='h4'>Podio</Typography>
              </Grid>
              <Grid
                container
                sx={{ top: 90, position: 'absolute', left: 54, zIndex: 5 }}
              >
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <Typography
                    variant='h3'
                    sx={{ paddingTop: 2, fontSize: '22px' }}
                  >
                    {/* scrivo la seconda classe classificata nel podio*/}
                    {props.classi[1].classe} {/*secondo posto */}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant='h3'
                    sx={{ color: 'black', fontSize: '22px' }}
                  >
                    {/* scrivo la prima classe classificata nel podio */}
                    {props.classi[0].classe} {/* primo posto*/}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant='h3'
                    sx={{ paddingTop: 3, fontSize: '22px' }}
                  >
                    {/* scrivo la terza classe classificata nel podio*/}
                    {props.classi[2].classe} {/* terzo posto*/}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                xs={12}
                sx={{
                  position: 'absolute',
                  left: 40,
                  top: 180,
                  textDecoration: 'duoble',
                }}
              >
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <Typography
                    variant='body1'
                    sx={{
                      fontSize: '18px',
                      backgroundColor: '#FFC90E',
                      width: '50px',
                      pl: '10px',
                      borderRadius: '30px',
                    }}
                  >
                    {props.classi[1].punti} {/*secondo posto */}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant='body1'
                    sx={{
                      color: 'black',
                      fontSize: '18px',
                      backgroundColor: '#FF5F00',
                      width: '50px',
                      pl: '10px',
                      borderRadius: '30px',
                    }}
                  >
                    {props.classi[0].punti} {/*primo posto */}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant='body1'
                    sx={{
                      fontSize: '18px',
                      backgroundColor: '#DE6F33',
                      width: '50px',
                      pl: '10px',
                      borderRadius: '30px',
                    }}
                  >
                    {props.classi[2].punti} {/*terzo posto */}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          )}

          <div>
            <Button
              className={styles.button}
              style={{ marginTop: '20px' }}
              // funzione che si attiva una volta cliccato il pulsante
              onClick={toggleRotatePizza}
            >
              Gira Pizza
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} lg={4}>
          <table style={{ textAlign: 'center' }}>
            <tr>
              <th id='th1'>Classe</th>
              <th id='th2'>Punteggi</th>
            </tr>

            {props.classi.map((classe) => (
              <tr>
                <td>{classe.classe}</td>
                <td>{classe.punti}</td>
              </tr>
            ))}
          </table>

          <style jsx>
            {`
              // implementazione style css per utilizzo di id="th1"
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
  )
}

export default Torneo

Torneo.defaultProps = {
  pizzettes: 40,
  pizzettes1: 40,
  autoRotate: false,
}
