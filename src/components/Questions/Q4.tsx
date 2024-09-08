import React from 'react';


//define props interface if your component will receive any props
interface Q4Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q4: React.FC<Q4Props> = ({ value, onChange, onNext }) => {

    //handle submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext();
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>Do you want your country to have affordable dining options?</label><br />
            <img src='/assets/images/surf-graphic.png'/>
            <label> Important
                <input type='radio' name="dining" value="important" checked={value === 'important'} onChange={onChange}/>
            </label>
            <label> Not Important
                <input type='radio' name="dining" value="notImportant" checked={value === 'notImportant'} onChange={onChange}/>
            </label>
            <button type='submit'>Next Question</button>
        </form>
    );
};

export default Q4;