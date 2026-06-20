import React from 'react';
import { Link } from 'react-router-dom';

function ComingSoon({ title }) {
  return (
    <section className="coming-soon">
      <h1>{title}</h1>
      <p>This page is coming soon. Explore our homepage or book a table today.</p>
      <p>
        <Link to="/">Return to Home</Link> · <Link to="/booking">Reserve a Table</Link>
      </p>
    </section>
  );
}

export default ComingSoon;
