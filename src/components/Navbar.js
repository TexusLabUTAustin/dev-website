import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false); // Start with the Navbar hidden

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      console.log(currentScrollPos, prevScrollPos)
      setIsHidden(currentScrollPos > prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    const handleMouseEnter = () => {
      setIsHidden(false); // Show the Navbar when the mouse enters the top area
    };

    const handleMouseLeave = () => {
      setIsHidden(true); // Hide the Navbar when the mouse leaves the top area
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offsetPosition = section.offsetTop;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const openNewsLink = () => {
    window.open('https://texuslab.org/news', '_blank');
  };

  return (
    <nav className={isHidden ? 'hidden' : ''}>
      <ul>
        <li>
          <button onClick={() => scrollToSection('top')}>Home</button>
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
        <li>
          <button onClick={openNewsLink}>News</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
