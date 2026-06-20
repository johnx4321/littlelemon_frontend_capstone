import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import ComingSoon from './components/ComingSoon';
import { submitAPI } from './api';
import { initializeTimes, updateTimes } from './utils/updateTimes';

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      dispatch({ type: 'BOOK_SLOT', payload: formData.time });
      navigate('/confirmed-booking');
    }
  };

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        <Route path="/about" element={<ComingSoon title="About Little Lemon" />} />
        <Route path="/menu" element={<ComingSoon title="Menu" />} />
        <Route path="/order-online" element={<ComingSoon title="Order Online" />} />
      </Routes>
    </main>
  );
}

export default Main;
