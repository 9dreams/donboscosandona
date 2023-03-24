import { Grid } from '@mui/material';
import Container from '@mui/material/Container'
import styles from './Features.module.css'

const Features = (props) => {
  const { title, description, features, cardWidth } = props;

  return (
    <Container
      maxWidth="lg"
      disableGutters={true}
      className={`${styles.container} text-center`}
    >
        <h1 className={`${styles.title}`}>{title}</h1>
        <p className={`${styles.description}`}>{description}</p>
        <Grid container spacing={2} className={styles.grid}>
          {features.map((feature) => (
            <Grid key={feature.id} item xs={12} lg={cardWidth}>
              <div className={styles.feature}>
                <img src={feature.image} alt={feature.title} width="100" height="100" />
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </Grid>
          ))}
        </Grid>
    </Container>
  )
}

Features.defaultProps = {
  title: 'Features',
  description: 'Questo è un paragrafo',
};

export default Features;
