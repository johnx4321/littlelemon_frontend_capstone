import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg';

function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="Little Lemon home">
        <img className="logo" src={logo} alt="Little Lemon restaurant logo" />
      </Link>
    </header>
  );
}

export default Header;
