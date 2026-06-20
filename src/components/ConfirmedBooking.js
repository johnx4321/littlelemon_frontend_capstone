import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>
        Your table at Little Lemon has been reserved. We look forward to
        welcoming you for a Mediterranean dining experience in Chicago.
      </p>
      <Link className="cta-button" to="/">
        Return to Home
      </Link>
    </section>
  );
}

export default ConfirmedBooking;
