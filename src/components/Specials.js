import React from 'react';
import { Link } from 'react-router-dom';
import { specials } from '../data/specials';
import greekSalad from '../assets/greek-salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon-dessert.jpg';
import basketIcon from '../assets/basket.svg';
import dishIcon from '../assets/dish-icon.svg';

const images = {
  'greek-salad': greekSalad,
  bruchetta,
  'lemon-dessert': lemonDessert,
};

function Specials() {
  return (
    <section className="specials" aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading">This week&apos;s specials!</h2>
        <Link className="cta-button cta-button--dark specials-menu-link" to="/menu" aria-label="On Click">
          <img src={dishIcon} alt="" aria-hidden="true" className="special-link-icon" />
          Online Menu
        </Link>
      </div>
      <ul className="specials-grid">
        {specials.map((item) => (
          <li key={item.id}>
            <article className="special-card">
              <img src={images[item.image]} alt={item.name} />
              <div className="special-card-body">
                <div className="special-card-title">
                  <h3>{item.name}</h3>
                  <span className="special-price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <Link className="special-link" to="/order-online" aria-label="On Click">
                  <img src={basketIcon} alt="" aria-hidden="true" className="special-link-icon" />
                  Order a delivery
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Specials;
