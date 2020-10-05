import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from './Header.js';

const HomePage = () => {
    return (
        <div className="container">
            <Header></Header>
            <h1>Welcome!</h1>
            <h2>Get started here:</h2>
            <Link to="/todo">To Do</Link>
            <Link to="/manager">Manager</Link>
        </div>
    );
};

export default HomePage;
