import React from 'react';
import imgMedical from '../../assets/images/hq-medical-graphic.png';
import './Q7.css';

//define props interface if your component will receive any props
interface Q7Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q7: React.FC<Q7Props> = ({ value, onChange, onNext }) => {

    //handle submission
    const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange(e.target.value)
        onNext();
    };


    return (
        <form className='qSevenBody' >
            <label className='qSevenQuestion' >Do you want your country to have high-quality and affordable medical tourism?</label><br />
            <img src={imgMedical} alt='doctors' className='qSevenImg' />

            <div className='qSevenButtonContainer' >
                <label className='qSevenButtonI' id='buttons' > Important
                    <input type='radio' name="medical" value="important" onChange={handleRadioChange}/>
                </label>
                <label className='qSevenButtonN' id='buttons' > Not Important
                    <input type='radio' name="medical" value="notImportant" onChange={handleRadioChange}/>
                </label>
            </div>
        </form>
    );
};

export default Q7;