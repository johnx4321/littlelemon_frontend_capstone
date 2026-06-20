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
    <section className="testimonials">
      <h2>What our customers say!</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.id}>
            <StarRating rating={testimonial.rating} />
            <img src={customerImage} alt={`${testimonial.name} portrait`} />
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
            <span className="testimonial-name">{testimonial.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
