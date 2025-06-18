import React from 'react';
import NavBar from './NavBar';

const Header: React.FC = () => {
    return (
        <header>
            <NavBar/>
            {/* additional header content if needed */}
        </header>
    );
};

export default Header;