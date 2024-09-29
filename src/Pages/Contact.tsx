import React from 'react';
import ContactForm from '../components/Forms/ContactForm';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <div className='contactBody'>
            {/* <h1>Reach Out to First Step</h1> */}
            <ContactForm />
        </div>
    )
};

export default Contact;