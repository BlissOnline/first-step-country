import React from 'react';
import imgSurf from '../../assets/images/surf-graphic.png';
import './Q1.css';
import ImportantButtons from '../Buttons/ImportantButtons';


//define props interface if your component will receive any props
interface Q1Props {
    value: string;
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange: (value: string) => void;
    onNext: () => void;
}

//wrap in form instead of div
//onSubmit in each form

//handle submit

//we made adapter from handler to form
//better to work with values 
  //than we know our name in question logic form

//rewrite, better to not pass events 
//dont want to work with events on other side of components
//simple value 

//define the Functional Component 
const Q1: React.FC<Q1Props> = ({ value, onChange, onNext }) => {

    //handle submit ,close function
    //same time issue onNext is looking at intial state and not the new update onChange state
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();  
    //     onChange(e.target[0].value);
    //     onNext();

    // const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //         onChange(e.target.value);
    //         onNext();
    //     };

    

        //const formData = new FormData(event.currentTarget);
        //useEffect hook 

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

                {/* <div className='qOneButtonContainer'>
                    <label className="qOneButtonI" id='buttons'> Important
                        <input type='radio' name="ocean" value="important" onChange={handleRadioChange}/>
                    </label>
                    <label className="qOneButtonN" id='buttons'> Not Important
                        <input type='radio' name="ocean" value="notImportant" onChange={handleRadioChange}/>
                    </label>
                </div> */}
            </div>
            {/* <button type='submit'>Next Question</button> */}
        </form>
    );
};

export default Q1;

