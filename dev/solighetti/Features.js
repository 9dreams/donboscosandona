import React from 'react';
import PropTypes from 'prop-types';
import styles from './Features.module.css';

const Features = ({ title, description, features, cardWidth }) => {
  return (
    <div className="position-relative my-5">
      <h2 className="position-absolute top-50 start-50 translate-middle">{title}</h2>
      <p>{description}</p>
      <div className="row">
        {features.map((feature, index) => (
          <div className={`col-md-${cardWidth} mb-3`} key={index}>
            <img src={feature.imageUrl} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
        <div className={`col-md-${cardWidth} mb-3`}>
          <img src="https://via.placeholder.com/150" alt="Verified Users" />
          <h3>Verified Users</h3>
          <p>Make sure you're talking to the right person. Verified users have a checkmark next to their name.</p>
        </div>
        <div className={`col-md-${cardWidth} mb-3`}>
          <img src="https://via.placeholder.com/150" alt="Fingerprint" />
          <h3>Fingerprint</h3>
          <p>Verify that the person on the other end is really who they say they are with our fingerprint authentication.</p>
        </div>
      </div>
    </div>
  );
};

Features.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  cardWidth: PropTypes.number.isRequired,
};

export default Features;
