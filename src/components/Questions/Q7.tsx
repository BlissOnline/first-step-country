import React from 'react';
import imgMedical from '../../assets/images/hq-medical-graphic.png';


//define props interface if your component will receive any props
interface Q7Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q7: React.FC<Q7Props> = ({ value, onChange, onNext }) => {

    //handle submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext();
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>Do you want your country to have high-quality and affordable medical tourism?</label><br />
            <img src={imgMedical} alt='doctors' />
            <label> Important
                <input type='radio' name="medical" value="important" checked={value === 'important'} onChange={onChange}/>
            </label>
            <label> Not Important
                <input type='radio' name="medical" value="notImportant" checked={value === 'notImportant'} onChange={onChange}/>
            </label>
            <button type='submit'>Next Question</button>
        </form>
    );
};

export default Q7;