import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';

function CallToAction() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <div className="cta-content">
        <h1 id="cta-heading">Little Lemon</h1>
        <p className="cta-location">
          <span className="highlight">Chicago</span>
        </p>
        <p className="cta-tagline">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link className="cta-button" to="/booking" aria-label="On Click">
          Reserve a Table
        </Link>
      </div>
      <img className="cta-image" src={heroImage} alt="Chef preparing Mediterranean dishes" />
    </section>
  );
}

export default CallToAction;
