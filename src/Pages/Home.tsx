import React from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate 

//styles
import './Home.css'; //seems we don't need to define from 

const Home: React.FC = () => {

    //define hook for navigating to questions
    const navigate = useNavigate();
    
    //event handler for clicking discover
    const handleDiscoverClick = () => {
        navigate('/questions');  //navigate to the question page
    };



    return (
        <div className="home-container">
            {/* <img src='' alt='Logo' className='logo'/> */}
            <h1 className='homeHeader'>"Let's discover countries based on your needs"</h1>
            <button className='discover-button' onClick={handleDiscoverClick}>Discover</button>
        </div>
    );
};

export default Home;