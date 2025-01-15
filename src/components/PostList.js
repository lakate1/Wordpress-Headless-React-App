import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../services/api';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const postsData = await fetchPosts();
            setPosts(postsData);
        };
        getPosts();
    }, []);

    return (
        <div>
            <h1>Campsites</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>
                            <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
                        </h2>
                        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        <button class="default-button">Read More</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
