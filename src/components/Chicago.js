import React from 'react';
import restaurantImage from '../assets/restaurant.svg';

function Chicago() {
  return (
    <section className="chicago" id="about">
      <div className="chicago-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon opened in Chicago by Mark and Adrian. Our goal is to spread
          the joy of Mediterranean cuisine far and wide, bringing family recipes
          and a modern dining experience to our neighborhood.
        </p>
      </div>
      <img src={restaurantImage} alt="Little Lemon restaurant interior in Chicago" />
    </section>
  );
}

export default Chicago;
