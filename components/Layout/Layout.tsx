import React from 'react';
import Header from'./Header';
import './Layout.css';
// import Footer from './Footer';

//Define the props for the Layout component
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            {/* <main>{children}</main> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
