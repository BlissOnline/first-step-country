import React from 'react';

import DiscoverButton from '../components/Buttons/DiscoverButton/DiscoverButton';
import styles from './home.module.css'; //local 

const Home: React.FC = () => {
// export default function Home() {
    return (
        <>
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