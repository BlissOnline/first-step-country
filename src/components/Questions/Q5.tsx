import React from 'react';
import imgUnsafe from '../../assets/images/safe-country-graphic.png';
import './Q5.css';
import ImportantButtons from '../Buttons/ImportantButtons';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../BreadcrumbSchema';

interface Q5Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q5: React.FC<Q5Props> = ({ onChange, onNext }) => {

    return (
        <>
            <Helmet>
                <title>Safest Countries to Live In – Top Destinations for Security & Stability</title>
                <meta 
                    name="description"
                    content="Explore the safest countries to live in, ranked by security and stability. Find destinations that prioritize safety, low crime rates, and peaceful environments."
                />
            </Helmet>

            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={5} />

            <form className='qFiveBody' >
                <div className='qFiveContainer'>
                    <label className='qFiveQuestion' >Do you want your country to be considered safe? </label><br />

                    <div className='qFiveImgContainer'>
                        <img src={imgUnsafe} alt='Riot police in protective gear facing a large protest' className='qFiveImg' />
                    </div>

                    <div>
                        <ImportantButtons 
                            name="unsafe" 
                            color1="var(--color-1)" 
                            color2="var(--color-2)" 
                            onChange={onChange} 
                            onNext={onNext} 
                        />                   
                    </div>  
                </div>
            </form>
        </>        
    );
};

export default Q5;