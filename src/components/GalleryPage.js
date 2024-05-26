import React, { useState, useRef } from 'react';
import '../styles/GalleryPage.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'; 

function GalleryPage({ sculptures }) {
    const [index, setIndex] = useState(1);
    const [fade, setFade] = useState(false);
    const detailsRef = useRef(null);  

    const changeImage = (newIndex) => {
        setFade(true);
        setTimeout(() => {
            setIndex(newIndex);
            setFade(false);
        }, 500);
    };

    const nextImage = () => changeImage((index + 1) % sculptures.length);
    const prevImage = () => changeImage((index - 1 + sculptures.length) % sculptures.length);

    const scrollToDetails = () => {
        detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const currentSculpture = sculptures[index];
    const descriptionParagraphs = currentSculpture.description.split('\n');

    return (
        <div className="gallery-container">
            <div className="gallery-header">
                <h1 className="gallery-title">Gallery</h1>
            </div>
            <div className="gallery">
                <button onClick={prevImage} className="button-icon"><SlArrowLeft /></button>
                <div className={`sculpture-item small ${fade ? 'fading' : ''}`}>
                    <img src={sculptures[(index - 1 + sculptures.length) % sculptures.length].image} alt={sculptures[(index - 1 + sculptures.length) % sculptures.length].name} />
                </div>
                <div className={`sculpture-item large ${fade ? 'fading' : ''}`} onClick={scrollToDetails}>
                    <img src={sculptures[index].image} alt={sculptures[index].name} />
                    <h3>{sculptures[index].name}</h3>
                </div>
                <div className={`sculpture-item small ${fade ? 'fading' : ''}`}>
                    <img src={sculptures[(index + 1) % sculptures.length].image} alt={sculptures[(index + 1) % sculptures.length].name} />
                </div>
                <button onClick={nextImage} className="button-icon"><SlArrowRight /></button>
            </div>
            <div className="sculpture-details" ref={detailsRef}>
                <div className="sculpture-info">
                    <h2>{currentSculpture.name}</h2>
                    {descriptionParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <p><strong>Artist:</strong> {currentSculpture.artist}</p>
                    <p><strong>Year:</strong> {currentSculpture.year}</p>
                </div>
                <img src={currentSculpture.image} alt={currentSculpture.name} className="full-size-image" />
            </div>
        </div>
    );
}

export default GalleryPage;
