import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';
import logo from '../assets/images/logo-lrg-300x54-1.svg';

function HeaderNav() {
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
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            </div>
            <div className="navbar-right">
                {/* add login functionality  here */}
            </div>
            </div>
        </nav>
    );
}

export default HeaderNav;