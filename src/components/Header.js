import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';
import logo from '../assets/images/logo-lrg-300x54-1.svg';

function HeaderNav() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    return (
        <nav className="navbar-container" role="navigation">
            <div className="navbar-wrapper">
                <div className="navbar-left">
                    <Link to="/home" className="navbar-logo">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </Link>
                </div>
                <div className="navbar-center">
                    <ul className="navbar-links">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="dropdown">
                            <button onClick={toggleDropdown} className="dropdown-button">Campsites</button>
                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/posts">All Posts</Link></li>
                                    <li><Link to="/post/75">Test</Link></li>
                                    <li><Link to="/post/14">Poudre River</Link></li>
                                    <li><Link to="/post/12">Yellowstone</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    {/* Add login functionality here */}
                </div>
            </div>
        </nav>
    );
}

export default HeaderNav;
