import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="24" width="28" height="28" rx="10" fill="#FFF1DA" />
        <path d="M22 42C28 42 34 36 34 28" stroke="#8A99AD" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 46C28 46 38 36 38 24" stroke="#8A99AD" strokeWidth="3" strokeLinecap="round" />
        <path d="M14 26L26 38" stroke="#212832" strokeWidth="4" strokeLinecap="round" />
        <circle cx="14" cy="26" r="4" fill="#F1A501" />
        <path d="M24 36L30 46H16L24 36Z" fill="#212832" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
    active: true,
    icon: (
      <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="28" height="28" rx="10" fill="#FFF1DA" />
        <path
          d="M20 44L26 40L38 46L44 42L34 30L44 20C45.5 18.5 45.5 16 44 14.5C42.5 13 40 13 38.5 14.5L28.5 24.5L16.5 14.5L12.5 20.5L18.5 32.5L12 38.5L8 36.5L4 40.5L12 44.5L16 52.5L20 48.5L18 44.5L20 44Z"
          fill="#00A3FF"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="10" width="28" height="28" rx="10" fill="#FFF1DA" />
        <rect x="22" y="16" width="12" height="22" rx="6" fill="#212832" />
        <path d="M16 28C16 35 21 40 28 40C35 40 40 35 40 28" stroke="#212832" strokeWidth="3" strokeLinecap="round" />
        <path d="M28 40V48" stroke="#212832" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 48H36" stroke="#212832" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Customization',
    description: 'We deliver outsourced aviation services for military customers.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="24" width="28" height="28" rx="10" fill="#FFF1DA" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 16C26.9 16 26 16.9 26 18V19.2C24.7 19.7 23.5 20.4 22.4 21.3L21.3 20.5C20.4 19.8 19.1 19.9 18.4 20.8L16.8 22.8C16.1 23.7 16.2 25 17.1 25.7L18.1 26.5C17.5 27.7 17.1 29 16.9 30.3H15.6C14.5 30.3 13.6 31.2 13.6 32.3V34.9C13.6 36 14.5 36.9 15.6 36.9H16.9C17.1 38.2 17.5 39.5 18.1 40.7L17.1 41.5C16.2 42.2 16.1 43.5 16.8 44.4L18.4 46.4C19.1 47.3 20.4 47.4 21.3 46.7L22.4 45.9C23.5 46.8 24.7 47.5 26 48V49.2C26 50.3 26.9 51.2 28 51.2H30.6C31.7 51.2 32.6 50.3 32.6 49.2V48C33.9 47.5 35.1 46.8 36.2 45.9L37.3 46.7C38.2 47.4 39.5 47.3 40.2 46.4L41.8 44.4C42.5 43.5 42.4 42.2 41.5 41.5L40.5 40.7C41.1 39.5 41.5 38.2 41.7 36.9H43C44.1 36.9 45 36 45 34.9V32.3C45 31.2 44.1 30.3 43 30.3H41.7C41.5 29 41.1 27.7 40.5 26.5L41.5 25.7C42.4 25 42.5 23.7 41.8 22.8L40.2 20.8C39.5 19.9 38.2 19.8 37.3 20.5L36.2 21.3C35.1 20.4 33.9 19.7 32.6 19.2V18C32.6 16.9 31.7 16 30.6 16H28ZM29.3 38.6C32 38.6 34.2 36.4 34.2 33.7C34.2 31 32 28.8 29.3 28.8C26.6 28.8 24.4 31 24.4 33.7C24.4 36.4 26.6 38.6 29.3 38.6Z"
          fill="#8A99AD"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <div id="services" className="services-header">
          <span className="services-subtitle">CATEGORY</span>
          <h2 className="services-title">We Offer Best Services</h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            if (service.active) {
              return (
                <div key={service.id} className="service-card-wrapper">
                  <div className="card-decore-blob"></div>
                  <div className="service-card active">
                    <div className="service-icon-box">{service.icon}</div>
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.description}</p>
                  </div>
                </div>
              );
            }

            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-box">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;