import Styles from './Torneo.module.css';
import { Container } from '@mui/material';

const Torneo = () => {

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundImage: '/images/pizza/pizzeria.jpg', borderRadius: '50px', border: '2px black solid', }}>
      <div style={{
        position: 'absolute',
        left: 40,
        border: '2px solid black', 
        width: '400px',
        height: '200px',
        zIndex: 1,
        backgroundColor: 'rgba(178, 79, 172, 0.5)',
      }}>
        
      </div>
    <div>
      <img
        className={Styles.rotatingimage}
        src="/images/pizza/pizza.png" 
        alt="Pizza"
        style={{zIndex:'-1' }}
      />
    </div>
    <div style={{
        position: 'absolute',
        right: 40,
        border: '2px solid black', 
        width: '400px',
        height: '200px',
        zIndex: 1,
        backgroundColor: 'rgba(51, 172, 203, 0.5)',
      }}>

      </div>
    </Container>
  );
};

export default Torneo;
