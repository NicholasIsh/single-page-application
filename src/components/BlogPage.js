import React from 'react';
import '../styles/BlogPage.css';  

/**
 * BlogPage component displays the blog posts.
 * It includes a title and sections for each blog post.
 */
function BlogPage({ blogPosts }) {
    return (
        <div className="blog-page">
            <h1>Blog</h1>
            
            {/* Loop through blogPosts to display each post and splits paragraphs using \n*/}
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

export default BlogPage;
