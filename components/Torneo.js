import React, { useState } from "react";
import Styles from "./Torneo.module.css";
import { Container } from "@mui/material";

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
              ? "/images/pizza/pizzadietro.png"
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
        >
          <h3 style={{ textAlign: "center" }}>Podio</h3>
          <p alt="2 posto" style={{ paddingLeft: "55px" }}>
            3F
          </p>
          <p
            alt="1 posto"
            style={{
              paddingLeft: "120px",
              position: "absolute",
              top: 42,
            }}
          >
            2D
          </p>
          <p
            alt="3 posto"
            style={{
              paddingLeft: "190px",
              position: "absolute",
              top: 60,
            }}
          >
            2F
          </p>
        </div>)}
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
