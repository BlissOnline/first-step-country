import React from 'react';
import Image from 'next/image';
import imgMedical from '../../assets/images/hq-medical-graphic.png';
import './Q7.css';
import ImportantButtons from '../Buttons/ImportantButtons';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../BreadcrumbSchema';

//define props interface if your component will receive any props
interface Q7Props {
    value: string;
    onChange: (value: string) => void;
}

//define the Functional Component 
const Q7: React.FC<Q7Props> = ({ onChange }) => {

    return (
        <>
            <Helmet>
                <title>Best Countries for Affordable & High-Quality Medical Tourism</title>
                <meta 
                    name="description"
                    content="Explore the best countries for affordable and high-quality medical tourism. Compare destinations offering world-class healthcare at budget-friendly prices."
                />
            </Helmet>

            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={7} />

            <form className='qSevenBody' >

                <div className='qSevenContainer' >
                    <label 
                        className='qSevenQuestion'
                        aria-label="High-quality and affordable medical tourism?"
                    >
                        High-quality and affordable medical tourism?
                    </label><br />

                    <div className='qSevenImgContainer' >
                         <Image 
                            src={imgMedical} 
                            alt="Group of doctors in professional attire offering a welcoming gesture" 
                            width={500} 
                            height={300} 
                            className="qSevenImg"
                        />
                        {/* <img src={imgMedical} alt='Group of doctors in professional attire offering a welcoming gesture' className='qSevenImg' /> */}
                    </div>

                    <div>
                        <ImportantButtons 
                            name="medical" 
                            color1="var(--color-3)" 
                            color2="var(--color-2)" 
                            onChange={onChange} 
                            currentQuestion="q7"
                        />                   
                    </div> 
                </div>
            </form>
        </>        
    );
};

export default Q7;