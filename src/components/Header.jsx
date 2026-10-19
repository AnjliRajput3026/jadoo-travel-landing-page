import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          Jadoo<span className="logo-dot"></span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links & Actions */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#destinations" className="nav-link" onClick={() => setIsMenuOpen(false)}>Destinations</a>
          <a href="#book-trip" className="nav-link" onClick={() => setIsMenuOpen(false)}>How to Book</a>
          <a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#subscribe" className="nav-link" onClick={() => setIsMenuOpen(false)}>Subscribe</a>
          <button className="signup-btn">Sign up</button>
          
          <div className="lang-selector">
            <span>EN</span>
            <span className="arrow-down">▾</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;