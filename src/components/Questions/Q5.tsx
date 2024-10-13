import React from 'react';
import imgUnsafe from '../../assets/images/safe-country-graphic.png';
import './Q5.css';
import ImportantButtons from '../Buttons/ImportantButtons';

interface Q5Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q5: React.FC<Q5Props> = ({ onChange, onNext }) => {

    return (
        <form className='qFiveBody' >

            <div className='qFiveContainer'>
                <label className='qFiveQuestion' >Do you want your country to be considered safe? </label><br />

                <div className='qFiveImgContainer'>
                    <img src={imgUnsafe} alt='riot control' className='qFiveImg' />
                </div>

                <div>
                    <ImportantButtons 
                        name="unsafe" 
                        color1="var(--color-1)" 
                        color2="var(--color-2)" 
                        onChange={onChange} 
                        onNext={onNext} 
                    />                   
                </div>  
            
            </div>
        </form>
    );
};

export default Q5;