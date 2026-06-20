import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ComingSoon from './components/ComingSoon';
import { initializeTimes, updateTimes } from './utils/updateTimes';

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

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
            />
          }
        />
        <Route path="/about" element={<ComingSoon title="About Little Lemon" />} />
        <Route path="/menu" element={<ComingSoon title="Menu" />} />
        <Route path="/order-online" element={<ComingSoon title="Order Online" />} />
      </Routes>
    </main>
  );
}

export default Main;
