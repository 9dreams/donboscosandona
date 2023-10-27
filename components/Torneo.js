import React, { useState } from 'react';
import Styles from './Torneo.module.css';
import { Container } from '@mui/material';

const Torneo = () => {
  const numPizzettes = 15;
  const numPizzettes1 = 15;

  const createRandomPosition = () => {
    const randomX = Math.floor(Math.random() * 100) + 'vw'; 
    const randomY = Math.floor(Math.random() * 100) + 'vh'; 
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

  function Example() {
     const [count, setCount] = useState(0);
  }


  return (
    <Container
    maxWidth
    disableGutters={true}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundColor: '#588fe8',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden', 
      }}
    >
      <div>
        <img
          className={Styles.rotatingimage}
          src="/images/pizza/pizza.png"
          alt="Pizza"
          style={{ zIndex: '-1' }}
        />
      </div>
       
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
10:         Click me
11:   </button>

      <div>{pizzettes}</div>
      <div>{pizzettes1}</div>
    </Container>
  );
};




export default Torneo;

