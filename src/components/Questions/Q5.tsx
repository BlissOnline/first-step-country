import React from 'react';
import imgUnsafe from '../../assets/images/safe-country-graphic.png';
import './Q5.css';

//define props interface if your component will receive any props
interface Q5Props {
    value: string;
    //onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q5: React.FC<Q5Props> = ({ value, onChange, onNext }) => {

    //handle submission
    const handleRadioChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext();
    };


    return (
        <form className='qFiveBody' >
            <label className='qFiveQuestion' >Do you want your country to be considered safe? (a level 2 risk or higher, will be excluded from your country list)</label><br />
            <img src={imgUnsafe} alt='riot control' className='qFiveImg' />

            <div className='qFiveButtonContainer' >
                <label className='qFiveButtonI' id='buttons' > Important
                    <input type='radio' name="unsafe" value="important" onChange={handleRadioChange}/>
                </label>
                <label className='qFiveButtonN' id='buttons' > Not Important
                    <input type='radio' name="unsafe" value="notImportant" onChange={handleRadioChange}/>
                </label>
                {/* <button type='submit'>Next Question</button> */}
            </div>
        </form>
    );
};

export default Q5;