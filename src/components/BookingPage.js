import React from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import { initializeTimes } from '../utils/updateTimes';
import '../HomePage.css';

function BookingPage({ availableTimes, dispatch }) {
  const allTimes = initializeTimes();

  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <p>
        Book your table at Little Lemon and enjoy Mediterranean flavors in the
        heart of Chicago.
      </p>

      <div className="booking-layout">
        <section className="booking-slots" aria-label="Table booking slots">
          <h2>Table Availability</h2>
          <ul className="booking-slots-list">
            {allTimes.map((slotTime) => (
              <BookingSlot
                key={slotTime}
                time={slotTime}
                available={availableTimes.includes(slotTime)}
              />
            ))}
          </ul>
        </section>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
      </div>
    </section>
  );
}

export default BookingPage;
