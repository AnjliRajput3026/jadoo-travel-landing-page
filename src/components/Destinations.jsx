import React from 'react';
import './Destinations.css';

const destinationsData = [
  {
    id: 1,
    title: 'Rome, Italy',
    price: '$5,42k',
    duration: '10 Days Trip',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'London, UK',
    price: '$4.2k',
    duration: '12 Days Trip',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Full Europe',
    price: '$15k',
    duration: '28 Days Trip',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600&auto=format&fit=crop',
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="destinations-section">
      <div className="destinations-container">
        {/* Section Header */}
        <div className="destinations-header">
          <span className="destinations-subtitle">Top Selling</span>
          <h2 className="destinations-title">Top Destinations</h2>
        </div>

        {/* Cards Grid */}
        <div className="destinations-grid">
          {destinationsData.map((item) => (
            <div key={item.id} className="destination-card">
              <div className="destination-img-wrapper">
                <img src={item.image} alt={item.title} className="destination-img" />
              </div>
              <div className="destination-content">
                <div className="destination-info-row">
                  <h3 className="destination-name">{item.title}</h3>
                  <span className="destination-price">{item.price}</span>
                </div>
                <div className="destination-trip-row">
                  <span className="trip-icon"> ➤ </span>
                  <span className="trip-duration">{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;