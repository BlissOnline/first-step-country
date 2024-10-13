import React from 'react';
import imgNomad from '../../assets/images/nomad-visa-graphic.png';
import './Q8.css';
import ImportantButtons from '../Buttons/ImportantButtons';

//define props interface if your component will receive any props
interface Q8Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q8: React.FC<Q8Props> = ({ onChange, onNext }) => {

    return (
        <form className='qEightBody' >

            <div className='qEightContainer' >
                <label className='qEightQuestion' >Should your country offer a digital nomad visa or remote work permits?</label><br />

                <div className='qEightImgContainer' >
                    <img src={imgNomad} alt='digital nomad' className='qEightImg'  />
                </div>

                <div>
                    <ImportantButtons 
                        name="nomadVisa" 
                        color1="var(--color-1)" 
                        color2="var(--color-3)" 
                        onChange={onChange} 
                        onNext={onNext} 
                    />                   
                </div>
            </div>
        </form>
    );
};

export default Q8;