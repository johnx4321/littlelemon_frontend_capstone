import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from './assets/home-icon.svg';
import basketIcon from './assets/basket.svg';
import hamburgerIcon from './assets/hamburger-menu.svg';

const navItems = [
  { to: '/', label: 'Home', end: true, icon: homeIcon },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/booking', label: 'Reservations' },
  { to: '/order-online', label: 'Order Online', icon: basketIcon },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation" aria-label="Main navigation">
      <button
        type="button"
        className="navigation-toggle"
        aria-label="On Click"
        aria-expanded={menuOpen}
        aria-controls="main-navigation-list"
        onClick={toggleMenu}
      >
        <img src={hamburgerIcon} alt="" aria-hidden="true" />
        <span className="visually-hidden">Toggle navigation menu</span>
      </button>
      <ul
        id="main-navigation-list"
        className={`navigation-list${menuOpen ? ' navigation-list--open' : ''}`}
      >
        {navItems.map(({ to, label, end, icon }) => (
          <li key={to}>
            <NavLink to={to} end={end} aria-label="On Click" onClick={closeMenu}>
              {icon && (
                <img src={icon} alt="" aria-hidden="true" className="navigation-icon" />
              )}
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
