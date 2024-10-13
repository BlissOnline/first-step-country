import React from 'react';
import imgSurf from '../../assets/images/surf-graphic.png';
import './Q1.css';
import ImportantButtons from '../Buttons/ImportantButtons';


//define props interface if your component will receive any props
interface Q1Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}


const Q1: React.FC<Q1Props> = ({ value, onChange, onNext }) => {

    return (
        <form className='qOneBody' >
            <div className='qOneContainer'>

                <label className="qOneQuestion">Access to the ocean?</label><br />

                <div className='qOneImgContainer'>
                    <img src={imgSurf} alt="surfing" className='qOneImg' />
                </div>

                <div>
                    <ImportantButtons 
                        name="ocean" 
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

export default Q1;

