import React from 'react';
import imgEnglish from '../../assets/images/english-graphic.png';
import './Q3.css';
import ImportantButtons from '../Buttons/ImportantButtons';


//define props interface if your component will receive any props
interface Q3Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}

//define the Functional Component 
const Q3: React.FC<Q3Props> = ({ onChange, onNext }) => {

    return (
        <form className='qThreeBody' >
            <div className='qThreeContainer'>

                <label className='qThreeQuestion' >Do you want your country to have English speakers?</label><br />

                <div className='qThreeImgContainer'>
                    <img src={imgEnglish} alt="different languages" className='qThreeImg' />
                </div>

                <div>
                        <ImportantButtons 
                            name="english" 
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

export default Q3;