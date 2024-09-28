import React from 'react';
import imgMedical from '../../assets/images/hq-medical-graphic.png';
import './Q7.css';
import ImportantButtons from '../Buttons/ImportantButtons';

//define props interface if your component will receive any props
interface Q7Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q7: React.FC<Q7Props> = ({ value, onChange, onNext }) => {

    return (
        <form className='qSevenBody' >

            <div className='qSevenContainer' >
                <label className='qSevenQuestion' >High-quality and affordable medical tourism?</label><br />

                <div className='qSevenImgContainer' >
                    <img src={imgMedical} alt='doctors' className='qSevenImg' />
                </div>

                <div>
                    <ImportantButtons 
                        name="medical" 
                        color1="var(--color-3)" 
                        color2="var(--color-2)" 
                        onChange={onChange} 
                        onNext={onNext} 
                    />                   
                </div> 
            </div>
        </form>
    );
};

export default Q7;