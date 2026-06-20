import React from 'react';
import { Link } from 'react-router-dom';

function BookingPage() {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <p>
        Book your table at Little Lemon and enjoy Mediterranean flavors in the
        heart of Chicago.
      </p>
      <p className="booking-note">
        The reservation form will be added in a later exercise. For now, call us at{' '}
        <a href="tel:+13125550123">(312) 555-0123</a> or return to the{' '}
        <Link to="/">homepage</Link>.
      </p>
    </section>
  );
}

export default BookingPage;
