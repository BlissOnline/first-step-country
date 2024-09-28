import React from 'react';
import imgEducation from '../../assets/images/hq-education-graphic.png';
import './Q6.css';
import ImportantButtons from '../Buttons/ImportantButtons';


//define props interface if your component will receive any props
interface Q6Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q6: React.FC<Q6Props> = ({ value, onChange, onNext }) => {

    return (
        <form className='qSixBody' >

            <div className='qSixContainer'>
                <label className='qSixQuestion' >High-quality education options for foreigners, at a great price?</label><br />

                <div className='qSixImgContainer'>
                    <img src={imgEducation} alt='school peers' className='qSixImg' />
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
    );
};

export default Q6;