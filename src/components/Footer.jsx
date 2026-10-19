import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand Description Column */}
        <div className="footer-brand">
          <h2 className="footer-logo">Jadoo.</h2>
          <p className="footer-desc">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {/* Links Column 1: Company */}
        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#mobile">Mobile</a></li>
          </ul>
        </div>

        {/* Links Column 2: Contact */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-links">
            <li><a href="#help">Help/FAQ</a></li>
            <li><a href="#press">Press</a></li>
            <li><a href="#affiliates">Affiliates</a></li>
          </ul>
        </div>

        {/* Links Column 3: More */}
        <div className="footer-col">
          <h4 className="footer-heading">More</h4>
          <ul className="footer-links">
            <li><a href="#airlinefees">Airlinefees</a></li>
            <li><a href="#airline">Airline</a></li>
            <li><a href="#lowfare">Low fare tips</a></li>
          </ul>
        </div>

        {/* Right Action Column: Social Links & App Downloads */}
        <div className="footer-actions">
          {/* Social Icons */}
          <div className="social-icons">
            <a href="#facebook" className="social-btn" aria-label="Facebook">f</a>
            <a href="#instagram" className="social-btn instagram-gradient" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#twitter" className="social-btn" aria-label="Twitter">t</a>
          </div>

          {/* App Store Download Badges */}
          {/* <p className="app-tagline">Discover our app</p> */}
          <div className="app-buttons">
            {/* <a href="#googleplay" className="store-btn">
              <span className="store-icon">▶</span>
              <div className="store-text">
                <span className="store-sub">GET IT ON</span>
                <span className="store-title">GOOGLE PLAY</span>
              </div>
            </a> */}
            {/* <a href="#appstore" className="store-btn">
              <span className="store-icon">🍎</span>
              <div className="store-text">
                <span className="store-sub">Available on the</span>
                <span className="store-title">Apple Store</span>
              </div>
            </a> */}
          </div>
        </div>

      </div>

      {/* Bottom Copyright Text */}
      <div className="footer-bottom">
        <p>All rights reserved@jadoo.co</p>
      </div>
    </footer>
  );
};

export default Footer;