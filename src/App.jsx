import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import BookTrip from './components/BookTrip';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer'; // <-- Import Footer
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Subscribe />
      <Footer /> {/* <-- Render Footer */}
    </div>
  );
}

export default App;