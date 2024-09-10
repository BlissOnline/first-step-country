import React from 'react';
import { Link } from 'react-router-dom';
// import About from '../../../Pages/About';

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="logo" > <Link to="/">LOGO</Link></div>  
            <ul>
                {/* logger is link */}
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/blog">Blog</Link></li> */}
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li> */}
            </ul>
        </nav>
    );
};

export default NavBar;