// AboutMe.js

import React from 'react';
import './AboutMe.css'; // Import the CSS file for styling

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="image-container">
        {/* Add your image source */}
        <img src="images/joinus.jpg" alt="Profile" />
      </div>
      <div className="content-container">
        <h1>About Me</h1>
        <p>
          {/* Add your content here */}
          Research Group: The University of Texas Extreme weather and Urban Sustainability "TExUS" Lab. 
          Research seeks to significantly contribute to our understanding of the Earth system, particularly 
          the urban and agricultural landscapes, and the dynamic role of coupled land surface processes on 
          regional hydroclimatic extremes. Translate the scientific work undertaken into decision tools and 
          portals with a particular focus on sustainable climate-ready/resilient coastal, cities, and agricultural systems
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
