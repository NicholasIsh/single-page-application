import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';  
import logoImage from '../images/Logo.png';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"><img src={logoImage} alt="Renaissance Sculptures Logo"/></Link>
        </div>
        <ul className="navbar-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
          <li><NavLink to="/gallery" className={({ isActive }) => isActive ? 'active-link' : ''}>Gallery</NavLink></li>
          <li><NavLink to="/design" className={({ isActive }) => isActive ? 'active-link' : ''}>Design</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active-link' : ''}>Blog</NavLink></li>
          <li><NavLink to="/theory" className={({ isActive }) => isActive ? 'active-link' : ''}>Theory</NavLink></li>
          <li><NavLink to="/netart" className={({ isActive }) => isActive ? 'active-link' : ''}>Net Art</NavLink></li>
        </ul>
      </nav>
    );
  }
  

export default Navbar;
