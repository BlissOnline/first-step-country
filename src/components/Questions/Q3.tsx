import React from 'react';
import imgEnglish from '../../assets/images/english-graphic.png';
import './Q3.css';


//define props interface if your component will receive any props
interface Q3Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}

//define the Functional Component 
const Q3: React.FC<Q3Props> = ({ value, onChange, onNext }) => {

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
            onNext();
    };

    return (
        <form className='qThreeBody' >
            <label className='qThreeQuestion' >Do you want your country to have English speakers?</label><br />
            <img src={imgEnglish} alt="different languages" className='qThreeImg' />

            <div className='qThreeButtonContainer'>
                <label className="qThreeButtonI" id='buttons'> Important
                    <input type='radio' name="english" value="important" onChange={handleRadioChange} />
                </label>
                <label  className="qThreeButtonN" id='buttons' > Not Important
                    <input type='radio' name="english" value="notImportant" onChange={handleRadioChange} />
                </label>
                {/* <button type='submit'>Next Question</button> */}
            </div>
           
        </form>
    );
};

export default Q3;