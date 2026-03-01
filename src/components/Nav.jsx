import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link> {" | "}
            <Link to="/about">About</Link> {" | "}
            <Link to="/counter">Counter</Link> {" | "}
            <Link to="/map-filter">Map & Filter</Link> {" | "}
            <Link to="/use-effect">Use Effect</Link> {" | "}
            <Link to="/fetch-data">Fetch Data</Link> {" | "}
            <Link to="/form">Form</Link> {" | "}
            <Link to="/post">Posts</Link> {" | "}
            <Link to="/redux-counter">Redux Counter</Link>
            <hr />
        </nav>
    );
};

export default Nav;