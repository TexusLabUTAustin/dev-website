// Home.js
import React from 'react';
import Navbar from './components/Navbar';
import './Home.css'; // You may need to adjust the CSS file path
import HeroSection from './components/HeroSection';
import Bio from './components/Bio';

const Home = () => {
  return (
    <div>
      
      <HeroSection />
      <Bio />
      {/* Other sections of your Home */}
    </div>
  );
};

export default Home;