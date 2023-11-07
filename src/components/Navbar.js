import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setIsHidden(false); // Scroll down, hide the navbar
    } else {
      setIsHidden(false); // Scroll up, show the navbar
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
  console.log(`Scrolling to section with id: ${sectionId}`);
  const section = document.getElementById(sectionId);

  if (section) {
    // Calculate the offset position 100 pixels above the section
    const offsetPosition = section.offsetTop - 50;
    console.log(`Found section with id: ${sectionId}`);

    // Scroll to the offset position with smooth behavior
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

  return (
    <nav className={isHidden ? 'hidden' : ''}>
      <ul>
        <li>
          <button onClick={() => scrollToSection('home')}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('education')}>Education</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('work')}>Work</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('honors')}>Honors</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('publications')}>Publications</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
