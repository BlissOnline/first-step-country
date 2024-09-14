import React from 'react';
import imgEducation from '../../assets/images/hq-education-graphic.png';
import './Q6.css';


//define props interface if your component will receive any props
interface Q6Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q6: React.FC<Q6Props> = ({ value, onChange, onNext }) => {

    //handle submission
    const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
        // e.preventDefault();
        onChange(e.target.value)
        onNext();
    };


    return (
        <form className='qSixBody' >
            <label className='qSixQuestion' >High-quality education options for foreigners, at a great price?</label><br />
            <img src={imgEducation} alt='school peers' className='qSixImg' />

            <div className='qSixButtonContainer' >
                <label className='qSixButtonI' id='buttons' > Important
                    <input type='radio' name="education" value="important" onChange={handleRadioChange}/>
                </label>
                <label className='qSixButtonN' id='buttons' > Not Important
                    <input type='radio' name="education" value="notImportant" onChange={handleRadioChange}/>
                </label>
            </div>
        </form>
    );
};

export default Q6;