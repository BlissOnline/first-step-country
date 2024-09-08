import React from 'react';


//define props interface if your component will receive any props
interface Q8Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q8: React.FC<Q8Props> = ({ value, onChange, onNext }) => {

    //handle submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext();
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>Do you want your country to offer an official digital nomad visa or special permits for remote workers?</label><br />
            <img src='/assets/images/surf-graphic.png'/>
            <label> Important
                <input type='radio' name="nomadVisa" value="important" checked={value === 'important'} onChange={onChange}/>
            </label>
            <label> Not Important
                <input type='radio' name="nomadVisa" value="notImportant" checked={value === 'notImportant'} onChange={onChange}/>
            </label>
            <button type='submit'>Next Question</button>
        </form>
    );
};

export default Q8;