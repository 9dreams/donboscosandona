import styles from "./Testimonials.module.css";

const Testimonials = ({ testimonials }) => {
  const { name, text, image, social } = testimonials;


  return (
    <div className={styles.testimonialsContainer}>
      <div>
        <h2>I nostri professori</h2>
      </div>
      <p>Testimonials</p>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.virgolette}>
              <img src="https://i.ibb.co/yP6QVQk/virgolette.png" alt="" />
            </div>
            <div className={styles.cardBody}>
              <p>{testimonial.text}</p>
            </div>
            <h3>{testimonial.name}</h3>

            <div className={styles.cardBody}>
              <p>{testimonial.social}</p>
                <div className={styles.cardHeader}>
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
