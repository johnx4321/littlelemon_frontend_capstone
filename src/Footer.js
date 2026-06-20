import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.svg';

function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-logo" aria-label="Little Lemon logo">
        <img className="logo" src={logo} alt="Little Lemon restaurant logo" />
      </section>

      <nav className="footer-nav" aria-label="Footer navigation">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><Link to="/" aria-label="On Click">Home</Link></li>
          <li><Link to="/about" aria-label="On Click">About</Link></li>
          <li><Link to="/menu" aria-label="On Click">Menu</Link></li>
          <li><Link to="/booking" aria-label="On Click">Reservations</Link></li>
          <li><Link to="/order-online" aria-label="On Click">Order Online</Link></li>
        </ul>
      </nav>

      <section className="footer-contact" aria-label="Contact information">
        <h3>Contact</h3>
        <address>
          Little Lemon<br />
          Chicago, IL<br />
          <a href="tel:+13125550123" aria-label="On Click">(312) 555-0123</a><br />
          <a href="mailto:hello@littlelemon.com" aria-label="On Click">hello@littlelemon.com</a>
        </address>
      </section>

      <section className="footer-social" aria-label="Social media links">
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://facebook.com" aria-label="On Click">Facebook</a></li>
          <li><a href="https://instagram.com" aria-label="On Click">Instagram</a></li>
          <li><a href="https://twitter.com" aria-label="On Click">Twitter</a></li>
        </ul>
      </section>

      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()}{' '}
        <span>Little Lemon</span>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
