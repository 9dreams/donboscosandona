import React from 'react';
import Styles from './Torneo.module.css';
import { Container } from '@mui/material';

const Torneo = () => {
  const numPizzettes = 20; // Numero di pizzette da mostrare

  const createRandomPosition = () => {
    const randomX = Math.floor(Math.random() * 100) + 'vw'; // Posizione orizzontale casuale
    const randomY = Math.floor(Math.random() * 100) + 'vh'; // Posizione verticale casuale
    return { left: randomX, top: randomY };
  };

  const pizzettes = Array.from({ length: numPizzettes }, (_, index) => (
    <div
      key={index}
      className={Styles.pizzette}
      style={{
        backgroundImage: `url("/images/pizza/pizza.png")`,
        ...createRandomPosition(),
      }}
    />
  ));

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundImage: 'url("/images/pizza/pizzeria.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Imposta il posizionamento al centro
        position: 'relative',
        overflow: 'hidden', // Nasconde le pizzette che cadono al di fuori del container
      }}
    >
      {/* La pizza che gira */}
      <div>
        <img
          className={Styles.rotatingimage}
          src="/images/pizza/pizza.png"
          alt="Pizza"
          style={{ zIndex: '-1' }}
        />
      </div>

      {/* Le pizzette che cadono dall'alto e girano contemporaneamente */}
      <div className={Styles.pizzettesContainer}>{pizzettes}</div>
    </Container>
  );
};

export default Torneo;
