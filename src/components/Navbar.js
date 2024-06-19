import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsActive(!isActive);
    document.body.classList.toggle('noscroll', !isActive);
  };

  return (
    <header id="site-header" className={isNavFixed ? 'nav-fixed' : ''}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button  className="navbar-brand">Brand</button>
        <button
          className={`navbar-toggler ${isActive ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isActive ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link">Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">About</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Services</button>
            </li>
            <li className="nav-item">
              <button  className="nav-link">Contact</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
