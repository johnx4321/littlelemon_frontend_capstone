import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <ul className="navigation-list">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/booking">Reservations</NavLink>
        </li>
        <li>
          <NavLink to="/order-online">Order Online</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
