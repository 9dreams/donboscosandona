import styles from "../solighetti2/Testimonials.module.css";

const testimonials = [
  {
    name: "Alec Thompson",
    image: "https://i.ibb.co/4MQnQw0/img1.jpg",
    text: "Qui c'è una belissima descrizione",
    social: "@AlecThompson"
  },
  {
    image: "https://i.ibb.co/QPG6j9b/img2.jpg",
    name: "Gina Andrew",
    text: "Qui c'è una belissima descrizione",
    social: "@GinaAndrew"
  },
  {
    image: "https://i.ibb.co/dpQrpNt/img3.jpg",
    name: "George West",
    text: "Qui c'è una belissima descrizione",
    social: "@GeorgeWest"
  },
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      <div>
        <h2>I nostri professori</h2>
      </div>
      <p>Testimonials</p>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial) => (
          <div className={styles.card} key={testimonial.id}>
            <div className={styles.cardBody}>
              <p>{testimonial.text}</p>
            </div>

            <div className={styles.cardHeader}>
              <img src={testimonial.image} alt={testimonial.name} />

              <h3>{testimonial.name}</h3>
            </div>
            <div className={styles.cardBody}>
              <p>{testimonial.social}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
