import React from 'react';
import '../styles/HomePage.css';
import backgroundImage from '../images/Homepage.jpg';

function HomePage () {
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Welcome to the Renaissance Sculpture Gallery</h1>
      <p>Explore the beauty of Renaissance sculptures and learn about their historical significance.</p>
      
    </div>
  );
}

export default HomePage;
