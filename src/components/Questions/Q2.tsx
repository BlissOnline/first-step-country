import React from 'react';
import imgPpm from '../../assets/images/ppm-graphic.png';
import './Q2.css';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../BreadcrumbSchema';

//define props interface if your component will receive any props
interface Q2Props {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q2: React.FC<Q2Props> = ({ value, onChange, onNext }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext();
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
                    <label className='qTwoQuestion' >What is your max monthly budget for living expenses?</label>

                    {/* <div style={{backgroundImage: imgPpm}} ></div> */}
                    <div className='qTwoImgContainer'>
                        <img src={imgPpm} alt="Woman using a calculator to budget monthly expenses in an office setting." className='qTwoImg' />
                    </div>

                    <label className='qTwoButtonContainer' > $
                        <input name='ppm' type='number' value={value} onChange={onChange} placeholder='based on US dollar... ' />
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