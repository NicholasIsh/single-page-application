import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  
import logoImage from '../images/Logo.png';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"><img src={logoImage} alt="Renaissance Sculptures Logo"/></Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/design">Design</Link></li>
          <li><Link to="/theory">Theory</Link></li>
          <li><Link to="/netart">Net Art</Link></li>
        </ul>
      </nav>
    );
  }
  

export default Navbar;
