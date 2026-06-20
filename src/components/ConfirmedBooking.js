import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking" aria-labelledby="confirmed-heading">
      <h1 id="confirmed-heading">Booking Confirmed!</h1>
      <p>
        Your table at Little Lemon has been reserved. We look forward to
        welcoming you for a Mediterranean dining experience in Chicago.
      </p>
      <Link className="cta-button" to="/" aria-label="On Click">
        Return to Home
      </Link>
    </section>
  );
}

export default ConfirmedBooking;
