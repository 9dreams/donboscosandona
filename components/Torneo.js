import React, { useState } from 'react';

const Torneo = () => {
  const [rotation, setRotation] = useState(0);

  const rotatePizza = () => {
    setRotation(rotation + 1);
    requestAnimationFrame(rotatePizza);
  };

  // Inizia l'animazione quando il componente si monta
  React.useEffect(() => {
    rotatePizza();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img
        url="/components/pizza.png" // Assumi che tu abbia un'immagine di una pizza nella cartella pubblica
        alt="Pizza"
        style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s' }}
      />
    </div>
  );
};

export default Torneo;
