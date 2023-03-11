import { Grid } from '@mui/material';
import styles from './Features.module.css';

const HomePage = (props) => {
  const { title, description, Props } = props;

  const features = [
    {
      id: 1,
      image: "https://i.ibb.co/JjgJ35G/comment.png",
      title: "Chi siamo",
      description: "Una breve descrizione di chi siamo."
    },
    {
      id: 2,
      image: "https://i.ibb.co/LNkL1hY/shield.png",
      title: "Cosa facciamo",
      description: "Una breve descrizione di cosa facciamo"
    },
    {
      id: 3,
      image: "https://i.ibb.co/f4sGXQp/fingerprint.png",
      title: "Contattaci",
      description: "I nostri contatti"
    }
  ];

  return (
    <div className={`${styles.container} text-center`} {...Props}>
      <h1 className={`${styles.title}`}>{title}</h1>
      <p className={`${styles.description}`}>{description}</p>
      <Grid container spacing={2} className={styles.grid}>
        {features.map((feature) => (
          <Grid key={feature.id} item xs={12} sm={6} md={4} lg={4}>
            <div className={styles.feature}>
              <img src={feature.image} alt={feature.title} width="100" height="100" />
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

HomePage.defaultProps = {
  title: 'Features',
  description: 'Questo è un paragrafo',
};

export default HomePage;
