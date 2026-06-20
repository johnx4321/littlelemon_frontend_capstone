import React from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import '../HomePage.css';

function BookingPage({ availableTimes, dispatch, submitForm }) {
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
            {availableTimes.length === 0 ? (
              <li className="booking-slot booking-slot--booked">
                <span>No available slots for this date</span>
              </li>
            ) : (
              availableTimes.map((slotTime) => (
                <BookingSlot
                  key={slotTime}
                  time={slotTime}
                  available
                />
              ))
            )}
          </ul>
        </section>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;
