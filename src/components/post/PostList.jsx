import React, { useState, useEffect } from 'react';

function LatestPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('https://example.com/wp-json/wp/v2/posts?per_page=4&_embed');
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Latest Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <a href={post.link}>{post.title.rendered}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LatestPosts;