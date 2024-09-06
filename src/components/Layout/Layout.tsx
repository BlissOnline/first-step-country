import React from 'react';
// import Header from'./Header';
// import Footer from './Footer';

//Define the props for the Layout component
interface LayoutProps {
    children: React.ReactNode;
}

//Layout component
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            {/* <Header /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
