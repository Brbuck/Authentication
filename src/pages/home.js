import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className="content_home">
            <h1>Home</h1>
            <Link to='login'>Login</Link>
        </div>
    );
}

export default Home;