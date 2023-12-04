import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false); // Start with the Navbar hidden
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    setIsMobileMenuOpen(false); // Close the mobile menu after clicking a link
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openNewsLink = () => {
    window.open('https://texuslab.org/news', '_blank');
  };

  return (
    <nav className={isHidden ? 'hidden' : ''}>
      <button
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle Mobile Menu"
      >
        ☰
      </button>
      <ul className={`nav-list ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
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
