import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To extract the post ID from the URL

const PostDetail = () => {
    const { id } = useParams(); // Get the post ID from the URL params
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch the post data when the component is mounted or the ID changes
    useEffect(() => {
        const fetchPostData = async () => {
            try {
                // Fetch the post by ID directly from the WordPress REST API
                const response = await fetch(`http://localhost:10022/wp-json/wp/v2/posts/${id}`);

                if (!response.ok) {
                    throw new Error('Post not found');
                }

                const postData = await response.json();
                setPost(postData); // Set the post state to the fetched post
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Error fetching the post data');
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchPostData(); // Call the function when the component mounts or ID changes
    }, [id]); // Re-run the effect if the post ID changes

    // Display loading state, error, or post details
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (!post) return <div>No post found</div>; // If no post is found

    return (
        <div>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> {/* Display the full content */}
        </div>
    );
};

export default PostDetail;
