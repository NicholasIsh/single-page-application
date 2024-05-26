import React from 'react';
import '../styles/BlogPage.css';  

function DesignPage({ designContent, wireframes }) {
    return (
        <div className="blog-page">
            <h1>Design</h1>
            {designContent.map((post, index) => (
                <div key={index} className="blog-post">
                    <h2>{post.title}</h2>
                    {post.content.split('\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            ))}
            <div className="wireframe-section">
                <h2>Wireframes</h2>
                <div className="wireframe-images">
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
