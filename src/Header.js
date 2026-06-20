import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg';

function Header() {
  return (
    <div className="header">
      <Link to="/" aria-label="On Click">
        <img className="logo" src={logo} alt="Little Lemon restaurant logo" />
      </Link>
    </div>
  );
}

export default Header;
