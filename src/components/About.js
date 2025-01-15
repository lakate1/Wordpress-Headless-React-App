import React, { useEffect, useState } from 'react';

const About = () => {
    const [aboutContent, setAboutContent] = useState(null);

    // Fetch About page content
    useEffect(() => {
        const fetchAboutPage = async () => {
            try {
                const response = await fetch('http://localhost:10022/wp-json/wp/v2/pages?slug=about');
                const data = await response.json();

                if (data && data.length > 0) {
                    setAboutContent(data[0]); //
                } else {
                    console.error('About page not found');
                }
            } catch (error) {
                console.error('Error fetching About page content:', error);
            }
        };
        fetchAboutPage();
    }, []);

    if (!aboutContent) {
        return <div>Loading...</div>; // You can customize this loading message
    }

    return (
        <div>
            <h1>{aboutContent.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: aboutContent.content.rendered }} />
        </div>
    );
};

export default About;
