import React from 'react';
import imgNomad from '../../assets/images/nomad-visa-graphic.png';
import './Q8.css';

//define props interface if your component will receive any props
interface Q8Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q8: React.FC<Q8Props> = ({ value, onChange, onNext }) => {

    //handle submission
    const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange(e.target.value)
        onNext();
    };


    return (
        <form className='qEightBody' >
            <label className='qEightQuestion' >Do you want your country to offer an official digital nomad visa or special permits for remote workers?</label><br />
            <img src={imgNomad} alt='digital nomad' className='qEightImg'  />

            <div className='qEightButtonContainer' >
                <label className='qEightButtonI' id='buttons' > Important
                    <input type='radio' name="nomadVisa" value="important"  onChange={handleRadioChange}/>
                </label>
                <label className='qEightButtonN' id='buttons' > Not Important
                    <input type='radio' name="nomadVisa" value="notImportant" onChange={handleRadioChange}/>
                </label>
            </div>
        </form>
    );
};

export default Q8;