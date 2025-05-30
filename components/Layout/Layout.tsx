import React from 'react';
import Header from'./Header';
import './Layout.css';
// import Footer from './Footer';

//Define the props for the Layout component
interface LayoutProps {
    // children: React.ReactNode;
    //not using the children props above 
}

//use layout in router
//Layout component
// const Layout: React.FC<LayoutProps> = ({ children }) => {
//above we arn't using  { children }
const Layout: React.FC<LayoutProps> = ({}) => {
    return (
        <div>
            <Header />
            {/* <main>{children}</main> */}
            {/* having the children element is throwing an error, we don't need it for now */}
            <main></main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
