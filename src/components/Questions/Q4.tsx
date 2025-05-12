import React from 'react';
import imgDining from '../../assets/images/affordable-dining-graphic.png';
import './Q4.css';
import ImportantButtons from '../Buttons/ImportantButtons';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../BreadcrumbSchema';

//define props interface if your component will receive any props
interface Q4Props {
    value: string;
    onChange: (value: string) => void;
}

//define the Functional Component 
const Q4: React.FC<Q4Props> = ({ onChange }) => {

    return (
        <>
            <Helmet>
                <title>Best Countries for Affordable Food – Find Budget-Friendly Cuisine</title>
                <meta 
                    name="description"
                    content="Discover the best countries with affordable food options. Explore budget-friendly cuisines and destinations that offer great meals at low prices."
                />
            </Helmet>

            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={4} />


            <form className={'qFourBody'} >
                <div className="qFourContainer">

                    <label className='qFourQuestion' >Do you want your country to have affordable dining options?</label><br />

                    <div className='qFourImgContainer'>
                        <img src={imgDining} alt="Street-side taco food stand with a sign displaying 'Tacos'" className='qFourImg' />
                    </div>

                    <div>
                        <ImportantButtons 
                            name="dining" 
                            color1="var(--color-1)" 
                            color2="var(--color-3)" 
                            onChange={onChange} 
                             currentQuestion="q4"
                        />                   
                    </div>  
                </div>
            </form>
        </>
    );
};

export default Q4;