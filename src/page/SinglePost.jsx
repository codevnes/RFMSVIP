import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './Post.scss'

const SinglePost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [category, setCategory] = useState(null);
    const [featuredMedia, setFeaturedMedia] = useState(null);
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await axios.get(`https://rfm-soft.com/wp-json/wp/v2/posts?slug=${slug}`);
                if (data.length > 0) {
                    const postData = data[0];
                    setPost(postData);

                    // Lấy thông tin danh mục bài viết
                    const { data: categoryData } = await axios.get(
                        `https://rfm-soft.com/wp-json/wp/v2/categories/${postData.categories[0]}`
                    );
                    setCategory(categoryData);

                    // Lấy thông tin ảnh đại diện
                    const { data: featuredMediaData } = await axios.get(
                        `https://rfm-soft.com/wp-json/wp/v2/media/${postData.featured_media}`
                    );
                    setFeaturedMedia(featuredMediaData);

                    // Lấy thông tin tác giả
                    const { data: authorData } = await axios.get(
                        `https://rfm-soft.com/wp-json/wp/v2/users/${postData.author}`
                    );
                    setAuthor(authorData);
                } else {
                    console.log(`Không tìm thấy bài viết với slug: ${slug}`);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchPost();
    }, [slug]);

    if (!post || !category || !featuredMedia || !author) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container py-8 post-single">
            <div className='flex'>
                <div className='basis-9/12'>
                    <div className='entry-header'>
                        <h1>{post.title.rendered}</h1>
                        <div className="post-meta">
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <span> | </span>
                            <span>{category.name}</span>
                            <span> | </span>
                            <span>{author.name}</span>
                        </div>

                    </div>


                    <div className="featured-image">
                        <img src={featuredMedia.source_url} alt={featuredMedia.alt_text} />
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
