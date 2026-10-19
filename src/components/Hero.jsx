import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero.png'; // Yahan se image import hogi

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Decorative Blob/Shape */}
      <div className="hero-bg-decore"></div>

      <div className="hero-container">
        {/* Left Content Side */}
        <div className="hero-content">
          <span className="hero-subtitle">
            BEST DESTINATIONS AROUND THE WORLD
          </span>

          <h1 className="hero-title">
            Travel, <span className="highlight-enjoy">enjoy</span> and live a new and full life
          </h1>

          <p className="hero-description">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate
            sell they west hard for the.
          </p>

          <div className="hero-buttons">
            <button className="cta-btn">Find out more</button>
            <div className="play-demo-wrapper">
              <button className="play-btn" aria-label="Play Demo">
                <span className="play-icon">▶</span>
              </button>
              <span className="play-text">Play Demo</span>
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="hero-image-wrapper">
          {/* Imported Local Image */}
          <img
            src={heroImg}
            alt="Traveler girl sitting on suitcase"
            className="traveler-img"
          />

          {/* Animated Planes */}
          <div className="plane plane-left">✈</div>
          <div className="plane plane-right">✈</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;