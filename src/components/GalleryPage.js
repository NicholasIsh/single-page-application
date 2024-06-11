import React, { useState, useRef } from 'react';
import '../styles/GalleryPage.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'; 


/**
 * GalleryPage component displays a gallery of sculptures with navigation controls
 * It includes a header, a gallery section with images, and a details section with more information
 * sculptures - Array of sculpture objects to be displayed in the gallery
 * Each sculpture object has id, name, image, description, artist, and year properties
 */
function GalleryPage({ sculptures }) {
    // Variables to track the current index of the displayed sculpture and manage the fading effect for smooth transitions
    const [index, setIndex] = useState(1);
    const [fade, setFade] = useState(false);
    const detailsRef = useRef(null);  // Reference to the details section for smooth scrolling

    /**
     * Changes the current displayed sculpture by updating the index
     * Triggers a fade-out effect before updating the index and a fade-in effect after
     * newIndex - The new sculpture to be displayed
     */
    const changeImage = (newIndex) => {
        setFade(true);
        setTimeout(() => {
            setIndex(newIndex);
            setFade(false);
        }, 500);
    };

    
    const nextImage = () => changeImage((index + 1) % sculptures.length); // Moves to show the next sculpture in the array
    const prevImage = () => changeImage((index - 1 + sculptures.length) % sculptures.length); // Moves to show the previous sculpture in the array

    // Smoothly scrolls to the details section when the main image is clicked
    const scrollToDetails = () => {
        detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const currentSculpture = sculptures[index]; // Gets the current sculpture to be displayed 
    const descriptionParagraphs = currentSculpture.description.split('\n'); // Splits the sculpture description into paragraphs

    return (
        <div className="gallery-container">
            <div className="gallery-header">
                <h1 className="gallery-title">Gallery</h1>
            </div>
            <div className="gallery">
                {/* Button to navigate to the previous sculpture */}
                <button onClick={prevImage} className="button-icon"><SlArrowLeft /></button>
                {/* Display the previous sculpture image */}
                <div className={`sculpture-item small ${fade ? 'fading' : ''}`}>
                    <img src={sculptures[(index - 1 + sculptures.length) % sculptures.length].image} alt={sculptures[(index - 1 + sculptures.length) % sculptures.length].name} />
                </div>
                {/* Display the current sculpture image, and if clicked it scrolls to the details below*/}
                <div className={`sculpture-item large ${fade ? 'fading' : ''}`} onClick={scrollToDetails}>
                    <img src={sculptures[index].image} alt={sculptures[index].name} />
                    <h3>{sculptures[index].name}</h3>
                </div>
                {/* Display the next sculpture image */}
                <div className={`sculpture-item small ${fade ? 'fading' : ''}`}>
                    <img src={sculptures[(index + 1) % sculptures.length].image} alt={sculptures[(index + 1) % sculptures.length].name} />
                </div>
                {/* Button to navigate to the next sculpture */}
                <button onClick={nextImage} className="button-icon"><SlArrowRight /></button>
            </div>
            {/* Details section for the currently displayed sculpture containing paragraphs and a larger image*/}
            <div className="sculpture-details" ref={detailsRef}>
                <div className="sculpture-info">
                    <h2>{currentSculpture.name}</h2>
                    {/* Display the description paragraphs */}
                    {descriptionParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <p><strong>Artist:</strong> {currentSculpture.artist}</p>
                    <p><strong>Year:</strong> {currentSculpture.year}</p>
                </div>
                {/* Display the full-size image of the current sculpture */}
                <img src={currentSculpture.image} alt={currentSculpture.name} className="full-size-image" />
            </div>
        </div>
    );
}

export default GalleryPage;
