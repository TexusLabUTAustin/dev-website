import React, { useEffect, useState } from 'react';
import "./HeroSection.css"


const HeroSection = () => {
  const [data, setData] = useState({ name: '', occupation: '' });

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('/resumeData.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.main);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const backgroundImageUrl = 'your-background-image.jpg'; // Replace with the actual image URL

   return (
    <section className="hero-section" >
      <div className="overlay">

      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>{data.name}</h1>
          <p>{data.occupation}</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/texus" target="_blank">
              <i className="fab fa-linkedin custom-linkedin-icon"></i>
            </a>
            <a href="https://scholar.google.com/citations?hl=en&user=Ixl0-pAAAAAJ" target="_blank">
              <i className="fab fa-google custom-linkedin-icon"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + "/images/dev1.jpg"} alt="Your Image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;