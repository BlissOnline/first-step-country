import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import Image from 'next/image';
import imgPpm from '../../assets/images/ppm-graphic.png';
import './Q2.css';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../BreadcrumbSchema';

//define props interface if your component will receive any props
interface Q2Props {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // onNext: () => void;
}


//define the Functional Component 
const Q2: React.FC<Q2Props> = ({ value, onChange, }) => {
     const navigate = useNavigate(); // ✅ Navigation hook

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/questions/q3'); // ✅ Manually navigate to Q3 after form submission
    };


    return (
        <>
            <Helmet>
                <title>Best Countries Based on Budget – Find Affordable Destinations</title>
                <meta 
                    name="description"
                    content="Discover the best countries based on your monthly budget. Explore affordable destinations and find locations that match your financial needs."
                />
            </Helmet>

            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={2} />

            <form onSubmit={handleSubmit} className='qTwoBody' >
                <div className='qTwoContainer'> 
                    {/* <label className='qTwoQuestion' >What is your max monthly budget for living expenses?</label> */}
                    <label 
                        className='qTwoQuestion' 
                        aria-label="What is your max monthly budget for living expenses?"
                    >
                        What is your max monthly budget for living expenses?
                    </label>

                    {/* <div style={{backgroundImage: imgPpm}} ></div> */}
                    <div className='qTwoImgContainer'>
                        <Image 
                            src={imgPpm} 
                            alt="Woman using a calculator to budget monthly expenses in an office setting." 
                            width={500} 
                            height={300} 
                            className="qTwoImg"
                        />
                        {/* <img src={imgPpm} alt="Woman using a calculator to budget monthly expenses in an office setting." className='qTwoImg' /> */}
                    </div>

                    <label className='qTwoButtonContainer' > $
                        <input 
                            name='ppm' 
                            type='number' 
                            value={value} 
                            onChange={onChange} 
                            placeholder='based on US dollar... ' 
                            aria-label="Max monthly budget for living expenses"                  
                        />
                    </label> 
                    
                    <div className='qTwoSubButtonContainer'>
                        <button type='submit' className='qTwoButton'> submit number </button>
                    </div>
                </div>
            </form>     
        </>
    );
};

export default Q2;