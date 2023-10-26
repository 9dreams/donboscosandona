import Styles from './Torneo.module.css'; // Assicurati di creare questo file CSS


const Torneo = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img
        className={Styles.rotatingimage}
        src="/images/pizza.png" // Assumi che tu abbia un'immagine di una pizza nella cartella pubblica
        alt="Pizza"
        style={{ }}
      />
    </div>
  );
};

export default Torneo;
