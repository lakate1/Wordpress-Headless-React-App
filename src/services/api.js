import axios from 'axios';

const API_URL = 'http://localhost:10022/wp-json/wp/v2';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};