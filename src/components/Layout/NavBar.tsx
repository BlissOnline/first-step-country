import React from 'react';
import { Link } from 'react-router-dom';
// import About from '../../../Pages/About';
import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <nav className='navBody'>
            <div className="logo" > 
                <Link to="/">First Step Country</Link>
            </div>  
            <ul className='nav-links'>
                {/* logger is link */}
                {/* <li><Link to="/">Home</Link></li> */}
                {/* <li><Link to="/blog">Blog</Link></li> */}
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li> */}
            </ul>
        </nav>
    );
};

export default NavBar;