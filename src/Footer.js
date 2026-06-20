import React from 'react';
import logo from './assets/Logo.svg';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon restaurant logo" />

      <section aria-label="Site navigation">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
        </ul>
      </section>

      <section aria-label="Contact information">
        <h3>Contact</h3>
        <address>
          Little Lemon<br />
          Chicago, IL<br />
          <a href="tel:+13125550123">(312) 555-0123</a><br />
          <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
        </address>
      </section>

      <section aria-label="Social media links">
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
        </ul>
      </section>

      <p>Copyright &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
