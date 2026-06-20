import React, { useState } from 'react';
import '../BookingForm.css';

const getTodayString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('');
  const today = getTodayString();

  const isDateValid = date !== '' && date >= today;
  const isTimeValid = time !== '' && availableTimes.includes(time);
  const guestCount = Number(guests);
  const areGuestsValid = Number.isInteger(guestCount) && guestCount >= 1 && guestCount <= 10;
  const isFormValid = isDateValid && isTimeValid && areGuestsValid;

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    setTime('');
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <form
      className="booking-form"
      aria-label="Table reservation form"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend>Reservation details</legend>

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          value={date}
          min={today}
          onChange={handleDateChange}
          required
          aria-invalid={date !== '' && !isDateValid}
          aria-describedby={date !== '' && !isDateValid ? 'date-error' : undefined}
        />
        {date !== '' && !isDateValid && (
          <span id="date-error" className="field-error" role="alert">
            Please choose today or a future date.
          </span>
        )}

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="res-time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          required
          aria-invalid={time !== '' && !isTimeValid}
          aria-describedby={
            date !== '' && time === '' && availableTimes.length === 0
              ? 'time-error'
              : undefined
          }
        >
          <option value="">Select a time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        {date !== '' && time === '' && availableTimes.length === 0 && (
          <span id="time-error" className="field-error" role="alert">
            No available times for this date.
          </span>
        )}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={guests}
          min="1"
          max="10"
          step="1"
          onChange={(event) => setGuests(event.target.value)}
          required
          aria-invalid={guests !== '' && !areGuestsValid}
          aria-describedby={guests !== '' && !areGuestsValid ? 'guests-error' : undefined}
        />
        {guests !== '' && !areGuestsValid && (
          <span id="guests-error" className="field-error" role="alert">
            Reservations require between 1 and 10 guests.
          </span>
        )}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </fieldset>

      <button
        className="cta-button"
        type="submit"
        disabled={!isFormValid}
        aria-label="On Click"
      >
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;
