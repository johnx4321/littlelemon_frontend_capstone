import React from 'react';
import BookingForm from './BookingForm';
import '../HomePage.css';

function BookingPage() {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <p>
        Book your table at Little Lemon and enjoy Mediterranean flavors in the
        heart of Chicago.
      </p>
      <BookingForm />
    </section>
  );
}

export default BookingPage;
