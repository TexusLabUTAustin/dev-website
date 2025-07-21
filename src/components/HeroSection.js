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

   return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h2>{data.name}</h2>
          {data.occupation && data.occupation.split('\n').map((line, index) => {
            if (line.includes('Affiliate Faculty:')) {
              return <p key={index} className="affiliate-faculty">{line}</p>;
            } else {
              return <p key={index}>{line}</p>;
            }
          })}
        </div>
        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + "/images/Dev1.jpg"} alt="Dev Niyogi" />
        </div>
      </div>
      
      <div className="logos-section">
        <div className="social-icons">
          <a href="https://www.jsg.utexas.edu/news/2025/06/ut-austin-named-unesco-chair-in-open-data-ai-and-water-for-cities/" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/images/unesco_logo.svg"} alt="UNESCO Chair" className="unesco-icon" />
          </a>
          <a href="https://www.jsg.utexas.edu/" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/images/jsg_white_digital.png"} alt="Jackson School of Geosciences" className="jsg-icon" />
          </a>
        </div>
        <div className="social-icons-secondary">
          <a href="https://www.linkedin.com/in/texus" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin custom-linkedin-icon"></i>
          </a>
          <a href="https://scholar.google.com/citations?hl=en&user=Ixl0-pAAAAAJ" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google custom-linkedin-icon"></i>
          </a>
          <a href="https://www.texuslab.org/" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/images/newLogo.svg"} alt="TExUS Lab" className="new-logo-icon" />
          </a>
          <a href="https://utcitycolab.org/" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/images/colab_logo.png"} alt="UT-City CoLab" className="colab-icon" />
          </a>
        </div>
        <div className="ut-logo-container">
          <a href="https://www.utexas.edu/" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/images/RGB_university_primary.png"} alt="The University of Texas at Austin" className="ut-logo-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;