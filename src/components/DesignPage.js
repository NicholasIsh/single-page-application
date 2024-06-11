import React from 'react';
import '../styles/BlogPage.css';  

/**
 * DesignPage component displays the design content and wireframes for the website.
 * It includes a title, design content sections, and a wireframe section.
 */
function DesignPage({ designContent, wireframes }) {
    return (
        <div className="blog-page">
            <h1>Design</h1>
            
            {/* Loop through designContent to display each post and splits paragraphs using \n*/}
            {designContent.map((post, index) => (
                <div key={index} className="blog-post">
                    <h2>{post.title}</h2>
                    {post.content.split('\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            ))}

            {/* Wireframe section using wireframe.js data*/}
            <div className="wireframe-section">
                <h2>Wireframes</h2>
                <div className="wireframe-images">
                    {/* Loop through wireframes to display each wireframe image with its title */}
                    {wireframes.map((wireframe, index) => (
                        <div key={index} className="wireframe-container">
                            <h3>{wireframe.title}</h3>
                            <img src={wireframe.image} alt={`Wireframe for ${wireframe.title}`} className="wireframe-image"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DesignPage;
