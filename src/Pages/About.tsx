import React from 'react';
import './About.css';
import DiscoverButton from '../components/Buttons/DiscoverButton';
import { Helmet } from 'react-helmet-async';


const About: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Learn More About First Step Country</title>
                <meta name="description" content="Learn about First Step Country's mission, our passion for travel, and how we help explorers like you find their next adventure." />
                <link rel="canonical" href="https://firststepcountry.com/about" />

                <meta property="og:title" content="About First Step Country – Our Mission & Story" />
                <meta property="og:description" content="Get to know how First Step Country helps travelers explore the world with personalized recommendations." />
                <meta property="og:url" content="https://firststepcountry.com/about" />
                <meta property="og:type" content="profile"  />


                {/* twitter x */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="About First Step Country – Our Mission & Story" />
                <meta name="twitter:description" content="Learn more about our vision and how we help travelers find their perfect destinations." />
                <meta name="twitter:url" content="https://firststepcountry.com/about" />
            </Helmet>

            <div className='aboutBody'>
                <div className='aboutMainContainer' >
                    <p className='aboutText' >
                        UUGGHHH!!! Finding a country that matches your needs can be challenging. We have to consider things like budget, language barrier, safety, visa policy, and much much more. If only we had a list of countries that matched all our needs...      
                    </p>
                    <p className='aboutText'>
                        Well, nice to meet you, at <span className='boldText'>First Step Country</span>, we set out to do just that! 
                    </p>
                    <p className='aboutText'>
                        Do a short and fun questionnaire, and discover every country that matches your needs!
                    </p>
                </div>

                <DiscoverButton label='Begin' id='beginButton' />

            </div>
        </>
    );
};

export default About;