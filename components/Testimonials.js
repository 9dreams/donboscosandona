import styles from "./Testimonials.module.css"
import { Container, Grid } from '@mui/material'

const Testimonials = ({ testimonials, cardWidth }) => {
  const { name, text, image, social } = testimonials;


  return (
    <div className={styles.testimonialsContainer}>
      <Container maxWidth="lg">
        <Grid container spacing={2} className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} lg={cardWidth}>
            <div className={styles.card} key={index}>
              <div className={styles.cardHeader}>
                <img src={testimonial.imageUrl} alt={testimonial.name} />
              </div>
              <div className={styles.virgolette}>
                <img src="https://i.ibb.co/yP6QVQk/virgolette.png" alt="" />
              </div>
              <div className={styles.cardBody}>
                <p>{testimonial.text}</p>
              </div>
              <h3>{testimonial.name}</h3>

              <div className={styles.cardBody}>
                <p>{testimonial.social}</p>

              </div>
            </div>
            </Grid>
          ))}
          </Grid>
      </Container>
    </div>
  )
}

export default Testimonials;
