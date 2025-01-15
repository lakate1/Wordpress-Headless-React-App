import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import About from './components/About';

import './App.css';
import bannerImage from './assets/images/Banner-image.jpg';

const App = () => {
  const [pages, setPages] = useState([]);
  const [homeContent, setHomeContent] = useState(null);

  // Fetch all WordPress pages
  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch('http://localhost:10022/wp-json/wp/v2/pages');
        const data = await response.json();
        setPages(data);  // Store all pages in state
      } catch (error) {
        console.error('Error fetching pages:', error);
      }
    };

    fetchPages();
  }, []);

  // Fetch home page content separately if needed (or remove this if home is part of the pages)
  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const response = await fetch('http://localhost:10022/wp-json/wp/v2/pages/47');
        const data = await response.json();
        setHomeContent(data);
      } catch (error) {
        console.error('Error fetching the Home page content:', error);
      }
    };

    fetchHomePage();
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Nav />

        {/* Main Content Area */}
        <div className="cover-image-wrapper">
          <img src={bannerImage} alt="Banner" className="cover-image" />
        </div>

        <main className="main-content">
          <Routes>
            {/* Route for Home page */}
            <Route
              path="/home"
              element={<div dangerouslySetInnerHTML={{ __html: homeContent?.content.rendered }} />}
            />

            {/* Posts List Page */}
            <Route path="/posts" element={<PostList />} />

            {/* About  Page */}
            <Route path="/about" element={<About />} />

            {/* Post Detail Page */}
            <Route path="/post/:id" element={<PostDetail />} />

            {/* Dynamically Render Pages */}
            {pages.map((page) => (
              <Route
                key={page.id}
                path={`/${page.slug}`}
                element={<div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />}
              />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
