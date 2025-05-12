import React from 'react';
import imgEnglish from '../../assets/images/english-graphic.png';
import './Q3.css';
import ImportantButtons from '../Buttons/importantButtons';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../BreadcrumbSchema';

//define props interface if your component will receive any props
interface Q3Props {
    value: string;
    onChange: (value: string) => void;
}

//define the Functional Component 
const Q3: React.FC<Q3Props> = ({ onChange }) => {

    return (
        <>
            <Helmet>
                <title>Best Countries for English Speakers – Where English is Widely Spoken</title>
                <meta 
                    name="description"
                    content="Discover the best countries where English is widely spoken. Explore top destinations based on English prominence and ease of communication."
                />
            </Helmet>

            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={3} />

            <form className='qThreeBody' >
                <div className='qThreeContainer'>

                    <label className='qThreeQuestion' >Do you want your country to have English speakers?</label><br />

                    <div className='qThreeImgContainer'>
                        <img src={imgEnglish} alt="Person signaling active listening with multilingual dialogue captions including 'hello' in three languages" className='qThreeImg' />
                    </div>

                    <div>
                            <ImportantButtons 
                                name="english" 
                                color1="var(--color-3)" 
                                color2="var(--color-2)" 
                                onChange={onChange} 
                                currentQuestion="q3" 
                            />                   
                    </div>   
                </div>
            
            </form>
        </> 
    );
};

export default Q3;