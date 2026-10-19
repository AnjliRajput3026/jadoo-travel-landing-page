import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    quote: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    author: "Mike taylor",
    location: "Lahore, Pakistan",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "Choice is yours to explore the world with absolute confidence. Exceptional service and breathtaking destinations throughout our trip.",
    author: "Chris Thomas",
    location: "CEO of Red Button",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "An unforgettable experience! Everything was seamlessly organized, from flights to hotels. Highly recommend Jadoo for everyone.",
    author: "Emily Watson",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  }
];

const partnersData = [
  { name: 'Axon', logo: 'axon' },
  { name: 'Jetstar', logo: 'Jetstar' },
  { name: 'Expedia', logo: 'Expedia' },
  { name: 'Qantas', logo: 'QANTAS' },
  { name: 'Alitalia', logo: 'Alitalia' }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];
  const nextTestimonial = testimonialsData[(currentIndex + 1) % testimonialsData.length];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Left Side: Header & Pagination Dots */}
        <div className="testimonials-left">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">What People Say About Us.</h2>

          {/* Pagination Indicators */}
          <div className="pagination-dots">
            {testimonialsData.map((_, idx) => (
              <button 
                key={idx}
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Stacked Testimonial Cards */}
        <div className="testimonials-right">
          
          {/* Active Main Card */}
          <div className="testimonial-card active-card">
            <img 
              src={currentTestimonial.image} 
              alt={currentTestimonial.author} 
              className="author-avatar"
            />
            <p className="testimonial-quote">"{currentTestimonial.quote}"</p>
            <h4 className="author-name">{currentTestimonial.author}</h4>
            <span className="author-location">{currentTestimonial.location}</span>
          </div>

          {/* Background Stacked Card (Preview) */}
          <div className="testimonial-card background-card">
            <h4 className="author-name">{nextTestimonial.author}</h4>
            <span className="author-location">{nextTestimonial.location}</span>
          </div>

          {/* Up & Down Arrows */}
          <div className="slider-controls">
            <button className="slider-arrow" onClick={handlePrev} aria-label="Previous Testimonial">
              ▲
            </button>
            <button className="slider-arrow" onClick={handleNext} aria-label="Next Testimonial">
              ▼
            </button>
          </div>

        </div>

      </div>

      {/* Partner Logos Brand Bar */}
      <div className="partners-container">
        {partnersData.map((partner, index) => (
          <div key={index} className="partner-logo">
            <span>{partner.logo}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;