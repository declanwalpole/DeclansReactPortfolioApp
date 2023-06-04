import React, { useState } from "react";
import headshot from "./images/headshot.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#hero">
          <img src={headshot} alt="Headshot" className="logo-image" />
        </a>
        <span className="brand-name">Declan Walpole</span>
      </div>

      <div className={`header-container`}>
        <ul className="nav-links">
          <li>
            <a href="#resume">About</a>
          </li>
          <li>
            <a href="#resume">Work History</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <div
        className={`hamburger-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
      </div>
      <div className={`menu-container ${menuOpen ? "open" : ""}`}>
        <ul className="sm-nav-links">
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
