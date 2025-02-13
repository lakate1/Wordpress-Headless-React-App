import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';

function HeaderNav() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    return (
        <nav className="utility-nav">
            <div className="utility-wrapper">
                <ul className="utility-links">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>

        <nav className="navbar-container" role="navigation">
            <div className="navbar-wrapper">
                <div className="navbar-center">
                    <ul className="navbar-links">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>

                        <li className="dropdown">
                            <button
                                className={`dropdown-button ${isDropdownOpen ? 'open' : ''}`}
                                onClick={toggleDropdown}
                                aria-haspopup="true"
                                aria-expanded={isDropdownOpen ? "true" : "false"}
                            >
                                Campsites
                            </button>

                            {/* Dropdown menu */}
                            <ul className="dropdown-menu">
                                <li><Link to="/posts">All Posts</Link></li>
                                <li><Link to="/post/75">Test</Link></li>
                                <li><Link to="/post/14">Poudre River</Link></li>
                                <li><Link to="/post/12">Yellowstone</Link></li>
                            </ul>
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
        </nav>

    );
}

export default HeaderNav;
