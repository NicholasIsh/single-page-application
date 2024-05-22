import React from 'react';
import '../styles/SculptureDetail.css';

function SculptureDetail({ sculpture }) {
  return (
    <div className="sculpture-detail">
      <h2>{sculpture.name}</h2>
      <img src={sculpture.image} alt={sculpture.name} />
      <p>{sculpture.description}</p>
      // Add more detailed information here
    </div>
  );
}

export default SculptureDetail;
