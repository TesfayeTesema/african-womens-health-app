import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="/"><img src={logo} alt="Organization Logo" className="logo" /> </a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Webinars">Webinars</a></li>
          <li><a href="/devotional">Daily Devotional</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/mentorship">Mentorship</a></li>
          <li><a href="/health">Health & Wellness</a></li>
          <li><a href="/add-item">Add Item</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
