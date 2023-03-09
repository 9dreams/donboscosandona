import styles from './Features.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Features</h1>
      <p className={styles.description}>Questo è un paragrafo</p>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <img id='freechat' src="https://i.ibb.co/JjgJ35G/comment.png" alt="" />
          <h2>Chi siamo</h2>
          <p>Una breve descrizione di chi siamo.</p>
        </div>
        <div className={styles.gridItem}>
          <img src="https://i.ibb.co/LNkL1hY/shield.png" alt="" />
          <h2>Cosa facciamo</h2>
          <p>Una breve descrizione di cosa facciamo</p>
        </div>
        <div className={styles.gridItem}>
          <img src="https://i.ibb.co/f4sGXQp/fingerprint.png" alt="" />
          <h2>Contattaci</h2>
          <p>I nostri contatti</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
