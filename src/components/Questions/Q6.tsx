import React from 'react';
import imgEducation from '../../assets/images/hq-education-graphic.png';
import './Q6.css';
import ImportantButtons from '../Buttons/ImportantButtons';
import { Helmet } from 'react-helmet-async';

//define props interface if your component will receive any props
interface Q6Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}

//define the Functional Component 
const Q6: React.FC<Q6Props> = ({ onChange, onNext }) => {

    return (
        <>
            <Helmet>
                <title>Best Countries for Affordable, High-Quality Education for Foreigners</title>
                <meta 
                    name="description"
                    content="Find the best countries offering high-quality education at an affordable price. Explore top destinations for international students seeking excellent learning opportunities."
                />
            </Helmet>
            <form className='qSixBody' >

                <div className='qSixContainer'>
                    <label className='qSixQuestion' >High-quality education options for foreigners, at a great price?</label><br />

                    <div className='qSixImgContainer'>
                        <img src={imgEducation} alt='Group of students celebrating academic success with a selfie' className='qSixImg' />
                    </div>

                    <div>
                        <ImportantButtons 
                            name="education" 
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

export default Q6;