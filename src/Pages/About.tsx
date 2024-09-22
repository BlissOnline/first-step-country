import React from 'react';
import './About.css';
import DiscoverButton from '../components/Buttons/DiscoverButton';

const About: React.FC = () => {
    return(
        <div className='aboutBody'>
            <p className='aboutText' >
                UUGGHHH!!! Finding a country aligning to your needs can be challenging. We have to consider things like budget, language barrier, safety, visa policy, and much much more. If only we had a list of countries that matched all our needs...      
            </p>
            <p className='aboutText'>
                Well, nice to meet you, here at <span className='boldText'>First Step Country</span>, we set out to do just that! 
            </p>
            <p className='aboutText'>
                Do a short and fun questionnaire, and discover every country that matches your needs!
            </p>
            {/* <p className='aboutText'>
                Click discover to find Countries according to your needs
            </p> */}

            <DiscoverButton label='Begin' id='beginButton' />
        </div>
    );
};

export default About;