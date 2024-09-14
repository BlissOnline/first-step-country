import React from 'react';
import imgDining from '../../assets/images/affordable-dining-graphic.png';
import './Q4.css';


//define props interface if your component will receive any props
interface Q4Props {
    value: string;
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q4: React.FC<Q4Props> = ({ value, onChange, onNext }) => {

    //handle submission
    const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        onNext();
    };

    // onSubmit={handleSubmit} put in form
    return (
        <form className={'qFourBody'} >
            <label className='qFourQuestion' >Do you want your country to have affordable dining options?</label><br />
            <img src={imgDining} alt="taco stand" className='qFourImg' />

            <div className='qFourButtonContainer' >
                <label className='qFourButtonI' id='buttons' > Important
                    <input type='radio' name="dining" value="important" onChange={handleRadioChange} />
                </label>
                <label className='qFourButtonN' id='buttons' > Not Important
                    <input type='radio' name="dining" value="notImportant" onChange={handleRadioChange} />
                </label>
                {/* <button type='submit'>Next Question</button> */}    
            </div> 
            
        </form>
    );
};

export default Q4;