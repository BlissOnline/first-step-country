import React from 'react';
import ContactForm from '../components/Forms/ContactForm';
import './Contact.css';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Get in Touch with First Step Country</title>
                <meta name="description" content="Help us improve! Share your thoughts and feedback on First Step Country. We'd love to hear from you!" />
                <link rel="canonical" href="https://firststepcountry.com/contact" />

                {/* Open Graph (Optional) */}
                <meta property="og:title" content="Contact First Step Country – Let's Connect!" />
                <meta property="og:description" content="Have suggestions to make First Step Country even better? Send us your feedback!" />
                <meta property="og:url" content="https://firststepcountry.com/contact" />
                <meta property="og:type" content="website" />

                {/* Twitter X (Optional) */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Contact First Step Country – Let's Connect!" />
                <meta name="twitter:description" content="Your input matters! Help us improve by sharing your thoughts and feedback." />
                <meta name="twitter:url" content="https://firststepcountry.com/contact" />
            </Helmet>

            <div className='contactBody'>
                {/* <h1>Reach Out to First Step</h1> */}
                <ContactForm />
            </div>
        </>

    )
};

export default Contact;