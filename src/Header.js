import React from 'react';
import logo from './assets/Logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Little Lemon restaurant logo" />
    </header>
  );
}

export default Header;
