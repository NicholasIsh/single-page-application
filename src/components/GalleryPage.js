import React from 'react';
import '../styles/GalleryPage.css';
import { Link } from 'react-router-dom';

function GalleryPage({ sculptures }) {
  return (
    <div className="gallery">
      {sculptures.map(sculpture => (
        <div key={sculpture.id} className="sculpture-item">
          <Link to={`/sculpture/${sculpture.id}`}>
            <img src={sculpture.image} alt={sculpture.name} />
            <h3>{sculpture.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default GalleryPage;
