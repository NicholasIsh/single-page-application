import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';  
import logoImage from '../images/Logo.png';

/**
 * Navbar component provides navigation links to different sections of the site
 * It includes the logo and links to the Home, Gallery, Design, Blog, Theory, and Net Art pages
 * The navbar position is adjusted to be fixed at the top when on the Net Art page
 */
function Navbar() {
  const location = useLocation();
  const isNetArtPage = location.pathname === '/netart';

  return (
    <nav className={`navbar ${isNetArtPage ? 'navbar-fixed' : ''}`}>
      <div className="navbar-logo">
        <Link to="/single-page-application"><img src={logoImage} alt="Renaissance Sculptures Logo"/></Link>
      </div>
      <ul className="navbar-links">
        {/* Navigation links where the active link is underlined */}
        <li><NavLink to="/single-page-application" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
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
