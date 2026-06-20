import React from 'react';
import { Link } from 'react-router-dom';
import { specials } from '../data/specials';
import greekSalad from '../assets/greek-salad.svg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon-dessert.svg';

const images = {
  'greek-salad': greekSalad,
  bruchetta,
  'lemon-dessert': lemonDessert,
};

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This week&apos;s specials!</h2>
        <Link className="cta-button cta-button--dark" to="/menu">
          Online Menu
        </Link>
      </div>
      <div className="specials-grid">
        {specials.map((item) => (
          <article className="special-card" key={item.id}>
            <img src={images[item.image]} alt={item.name} />
            <div className="special-card-body">
              <div className="special-card-title">
                <h3>{item.name}</h3>
                <span className="special-price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <Link className="special-link" to="/order-online">
                Order a delivery
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
