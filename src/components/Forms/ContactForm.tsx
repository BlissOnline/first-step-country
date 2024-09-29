import React, { useState } from 'react';
import './ContactForm.css';


const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, subject, message });
    };

    return (
        <div className='contactFormContainer'>
            <form 
                className='contactFormClass'
                onSubmit={handleSubmit}
            //     style={{ 
            //         backgroundColor: '#f5f5dc', 
            //         padding: '20px',
            //         borderRadius: '5px'      
            // }}
            >

                <label className='contactLabel-1' >
                    <input 
                        className='contactFormInput'
                        type="text" 
                        value={name} onChange={(e) => 
                        setName(e.target.value)} 
                        placeholder='- YOUR NAME'
                    />
                </label>

                <label className='contactLabel-2' >
                    <input 
                        className='contactFormInput'
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder='- YOUR EMAIL'
                    />
                </label>

                <label className='contactLabel-3'>
                    <input 
                        className='contactFormInput'
                        type="text" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        placeholder='- SUBJECT'    
                    />
                </label>

                <label className='contactLabel-4'>
                    <input 
                        className='contactFormInput message'
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder='- YOUR MESSAGE'
                    />
                </label>

                <label>           
                    <button type='submit'>Send</button>
                </label> 

            </form>
        </div>
    )

};

export default ContactForm;