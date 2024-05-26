import React from 'react';
import '../styles/BlogPage.css';  


function DesignPage({ blogPosts }) {
    return (
        <div className="blog-page">
            <h1>Blog</h1>
            {blogPosts.map((post, index) => (
                <div key={index} className="blog-post">
                    <h2>{post.title}</h2>
                    {post.content.split('\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            ))}
        </div>
    )

}

export default DesignPage;