import React from 'react';
//import { useNavigate } from 'react-router-dom'; // import useNavigate 
import DiscoverButton from '../components/Buttons/DiscoverButton';
import { Helmet } from 'react-helmet-async';

//styles
//import './Home.css';  //global
import styles from './Home.module.css'; //local 

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Find Your Ideal Travel Destination | Personalized Quiz</title>
                <meta name="description" content="Discover the best country for your next adventure with our fun, personalized quiz!" />


                <meta property="og:title" content="Find Your Ideal Travel Destination – Take the Quiz!" />
                <meta property="og:description" content="Answer a few questions and uncover the perfect country for your next adventure. Start exploring now!" />
                {/* <meta property="og:image" content="../assets/images/ppm-graphic.png" /> */}
                <meta property="og:image" content="/ppm-graphic.png" />
                <meta property="og:url" content="https://firststepcountry.com/"  />
                <meta property="og:type" content="quiz"  />
                <link rel="canonical" href="https://firststepcountry.com/" />

                {/* twitter x */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Find Your Ideal Travel Destination – Take the Quiz!" />
                <meta name="twitter:description" content="Answer a few questions and uncover the perfect country for your next adventure. Start exploring now!" />
                {/* <meta name="twitter:image" content="../assets/images/ppm-graphic.png" /> */}
                <meta name="twitter:image" content="/ppm-graphic.png" />
                <meta name="twitter:url" content="https://firststepcountry.com/" />

            </Helmet>
            <div className={styles.homeContainer}>
                {/* <img src='' alt='Logo' className='logo'/> */}
                {/* <h1 className='homeHeader'>"Let's discover countries based on your needs"</h1> */}
                <h1 className={styles.homeHeader}>"Let's discover countries based on your needs"</h1>
                {/* <button className='discover-button' onClick={handleDiscoverClick}>Discover</button> */}
                <DiscoverButton label="Discover" />
            </div>
        </>
    );
};

export default Home;