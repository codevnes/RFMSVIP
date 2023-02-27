import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostSection() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://rfm-soft.com/wp-json/wp/v2/posts', {
            params: {
                per_page: 5,
                _embed: true // Chỉ định trả về các thông tin bổ sung, bao gồm ảnh đại diện
            }
        })
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <section className='post_section'>
            <div className='container'>
                <div className='flex justify-center text-center w-full'>
                    <div>
                        <span class="en-title">Share</span><p></p>
                        <h2 class="title">Kinh nghiệm, kiến thức, chia sẻ</h2>
                    </div>
                </div>
                <ul className='post_grid'>
                    {posts.map(post => (
                        <li className='' key={post.id}>
                            <div className='post_grid_item'>
                                <Link to={`/post/${post.slug}`}>
                                    <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} />
                                    <div className='post_info'>
                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                        <h4>{post.title.rendered}</h4>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default PostSection;
