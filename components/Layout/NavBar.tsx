import React from 'react';
import Link from 'next/link';
// import About from '../../../Pages/About';
import './NavBar.css';
import Image from 'next/image';

const NavBar: React.FC = () => {
    return (
        <nav className='navBody'>
            <div className="logo" > 
                <Link href="/">
                    {/* Next.js Link automatically wraps its child so no need for an extra anchor in most cases */}
                    <Image src="/lamp 60 sparkle.svg" alt="Brand Logo" width={60} height={60} className='logo'/>
                </Link>
                 
            </div>  
            <ul className='nav-links'>
                {/* logger is link */}
                {/* <li><Link to="/">Home</Link></li> */}
                <li><Link href="/blog" className="nav-link">Blog</Link></li>
                <li><Link href="/about" className="nav-link">About</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li> */}
            </ul>
        </nav>
    );
};

export default NavBar;