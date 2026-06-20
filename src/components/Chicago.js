import React from 'react';
import marioAndAdrianA from '../assets/mario-and-adrian-a.jpg';
import marioAndAdrianB from '../assets/mario-and-adrian-b.jpg';

function Chicago() {
  return (
    <section className="chicago" id="about" aria-labelledby="chicago-heading">
      <div className="chicago-content">
        <h2 id="chicago-heading">Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon opened in Chicago by Mario and Adrian. Our goal is to spread
          the joy of Mediterranean cuisine far and wide, bringing family recipes
          and a modern dining experience to our neighborhood.
        </p>
      </div>
      <div className="chicago-images">
        <img
          src={marioAndAdrianA}
          alt="Mario and Adrian, co-owners of Little Lemon, in the restaurant kitchen"
        />
        <img
          src={marioAndAdrianB}
          alt="Mario and Adrian preparing fresh Mediterranean dishes together"
        />
      </div>
    </section>
  );
}

export default Chicago;
