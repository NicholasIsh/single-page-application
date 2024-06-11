import React from 'react';
import '../styles/NetArtPage.css';  
import netArtImage from '../images/netART2.png';

//NetArtPage component displays my net art with a title and my name.

function NetArtPage() {
    return (
        <div className="netart-page">
            <h1>Autosarcophagy of Ego</h1>
            <p>Nicholas Isherwood</p>
            <img src={netArtImage} alt="Net Art" className="netart-image" />
        </div>
    )
}

export default NetArtPage;
