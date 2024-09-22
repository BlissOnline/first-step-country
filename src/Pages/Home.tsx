import React from 'react';
//import { useNavigate } from 'react-router-dom'; // import useNavigate 
import DiscoverButton from '../components/Buttons/DiscoverButton';

//styles
import './Home.css'; //seems we don't need to define from 

const Home: React.FC = () => {





    return (
        <div className="home-container">
            {/* <img src='' alt='Logo' className='logo'/> */}
            <h1 className='homeHeader'>"Let's discover countries based on your needs"</h1>
            {/* <button className='discover-button' onClick={handleDiscoverClick}>Discover</button> */}
            <DiscoverButton label="Discover" />
        </div>
    );
};

export default Home;