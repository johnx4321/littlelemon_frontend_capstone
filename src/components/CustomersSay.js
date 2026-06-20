import React from 'react';
import { testimonials } from '../data/specials';
import customerImage from '../assets/customer.svg';

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </div>
  );
}

function CustomersSay() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">What our customers say!</h2>
      <ul className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <article className="testimonial-card">
              <StarRating rating={testimonial.rating} />
              <img src={customerImage} alt={`${testimonial.name} portrait`} />
              <blockquote>
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <cite className="testimonial-name">{testimonial.name}</cite>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CustomersSay;
