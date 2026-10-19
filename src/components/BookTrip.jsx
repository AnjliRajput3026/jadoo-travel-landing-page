import React from 'react';
import './BookTrip.css';

const stepsData = [
  {
    id: 1,
    bgColor: '#F1A501',
    title: 'Choose Destination',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    id: 2,
    bgColor: '#DF6951',
    title: 'Make Payment',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    id: 3,
    bgColor: '#006380',
    title: 'Reach Airport on Selected Date',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="#FFFFFF"/>
      </svg>
    )
  }
];

const BookTrip = () => {
  return (
    <section id="book-trip" className="book-trip-section">
      <div className="book-trip-container">
        
        {/* Left Side: Steps List */}
        <div className="book-trip-left">
          <span className="section-subtitle">Easy and Fast</span>
          <h2 className="section-title">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h2>

          <div className="steps-list">
            {stepsData.map((step) => (
              <div key={step.id} className="step-item">
                <div 
                  className="step-icon-box" 
                  style={{ backgroundColor: step.bgColor }}
                >
                  {step.icon}
                </div>
                <div className="step-text">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Trip Cards Display */}
        <div className="book-trip-right">
          {/* Background Glow */}
          <div className="blue-glow"></div>

          {/* Main Card */}
          <div className="trip-card">
            <div className="trip-img-box">
              <img 
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop" 
                alt="Trip To Greece" 
              />
            </div>

            <h3 className="trip-card-title">Trip To Greece</h3>
            <p className="trip-card-details">14-29 June | by Robbin joseph</p>

            {/* Action Icons */}
            <div className="trip-card-icons">
              <span className="action-icon">🌿</span>
              <span className="action-icon">🗺️</span>
              <span className="action-icon">✈️</span>
            </div>

            <div className="trip-card-footer">
              <span className="people-count">🏛️ 24 people going</span>
              <button className="heart-btn" aria-label="Favorite">
                ♡
              </button>
            </div>

            {/* Floating Ongoing Card Overlay */}
            <div className="ongoing-card">
              <img 
                src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=100&auto=format&fit=crop" 
                alt="Trip to Rome" 
                className="ongoing-img"
              />
              <div className="ongoing-details">
                <span className="ongoing-status">Ongoing</span>
                <h4 className="ongoing-title">Trip to Rome</h4>
                <div className="progress-info">
                  <span className="progress-text"><span className="percent">40%</span> completed</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BookTrip;