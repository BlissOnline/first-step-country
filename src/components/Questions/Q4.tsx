import React from 'react';
import imgDining from '../../assets/images/affordable-dining-graphic.png';
import './Q4.css';
import ImportantButtons from '../Buttons/ImportantButtons';


//define props interface if your component will receive any props
interface Q4Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q4: React.FC<Q4Props> = ({ onChange, onNext }) => {

    return (
        <form className={'qFourBody'} >

            <div className="qFourContainer">

                <label className='qFourQuestion' >Do you want your country to have affordable dining options?</label><br />

                <div className='qFourImgContainer'>
                    <img src={imgDining} alt="taco stand" className='qFourImg' />
                </div>

                <div>
                    <ImportantButtons 
                        name="dining" 
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

export default Q4;