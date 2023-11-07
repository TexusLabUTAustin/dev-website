import React, { useEffect, useState } from 'react';
import './Bio.css'; // Import the CSS file

const Bio = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/resumeData.json'); // Replace with the actual path
        if (response.ok) {
          const data = await response.json();
          setResumeData(data);
        }
      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };

    fetchData();
  }, []);

  if (!resumeData) {
    return <div>Loading...</div>;
  }

  // Render your component with the fetched data
  return (
    <div className="bio">
      <div className="section" id="education">
        <div className='title'>
          <h2>EDUCATION</h2>
        </div>
        <div className="education">
          {resumeData.resume.education.map((education, index) => (
            <div key={index} className="education-item">
              <h3>{education.school}</h3>
              <p>{education.degree}</p>
              <p>Graduated: {education.graduated}</p>
              <p>{education.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section" id="work">
        <div className='title'>
          <h2>Work</h2>
        </div>
        <div className="work">
          {resumeData.resume.work.map((work, index) => (
            <div key={index} className="work-item">
              <h3>{work.company}</h3>
              <p>{work.title}</p>
              <p>{work.years}</p>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section" id="honors">
        <div className='title'>
          <h2>Honors</h2>
        </div>
        <div className="honors">
          {resumeData.resume.Honors.map((honor, index) => (
            <div key={index} className="honor-item">
              <p>{honor.name}</p>
              <p>{honor.dates}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section" id="publications">
        <div className='title'>
          <h2>Select Publications</h2>
        </div>
        <div className="publications">
          {resumeData.resume.publications.map((publication, index) => (
            <div key={index} className="publication-item">
              <p>{publication.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bio;
