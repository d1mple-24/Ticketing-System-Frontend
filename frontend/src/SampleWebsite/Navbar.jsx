import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
         <a href="/" className="logo">
        <img src="image2.png" className="logo-img" />
                 Division Office of Imus City</a>
      <button className="hamburger" onClick={toggleMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
      </button>
    </div>
  </nav>
  );
};

export default Navbar; 