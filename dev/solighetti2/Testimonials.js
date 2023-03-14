import styles from "../solighetti2/Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    image: "https://i.ibb.co/4MQnQw0/img1.jpg",
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  {
    id: 2,
    image: "https://i.ibb.co/QPG6j9b/img2.jpg",
    name: "Jane Doe",
    text: "Duis aute irure dolor in reprehenderit in voluptate ",
  },
  {
    id: 3,
    image: "https://i.ibb.co/dpQrpNt/img3.jpg",
    name: "Bob Smith",
    text: " aperiam, eaque ipsa quae ab illo.",
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
            <div className={styles.cardHeader}>
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
            </div>
            <div className={styles.cardBody}>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
