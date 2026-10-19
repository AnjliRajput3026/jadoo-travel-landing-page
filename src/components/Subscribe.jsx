import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <section id="subscribe" className="subscribe-section">
      <div className="subscribe-container">
        
        {/* Main Background Card */}
        <div className="subscribe-card">
          
          {/* Circular Send Icon Badge */}
          <div className="send-icon-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#FFFFFF"/>
            </svg>
          </div>

          {/* Background Decorative Rings (Left & Right) */}
          <div className="decore-ring left-ring"></div>
          <div className="decore-ring right-ring"></div>

          {/* Heading Content */}
          <h2 className="subscribe-title">
            Subscribe to get information, latest news and other interesting offers about Jadoo
          </h2>

          {/* Subscription Form */}
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <span className="email-icon">✉️</span>
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
            </div>
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>

          {/* Decorative Grid Dots at Bottom Right */}
          <div className="grid-dots">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Subscribe;