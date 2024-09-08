import React from 'react';


//define props interface if your component will receive any props
interface Q6Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q6: React.FC<Q6Props> = ({ value, onChange, onNext }) => {

    //handle submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext();
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>High-quality education options for foreigners, at a great price?</label><br />
            <img src='/assets/images/surf-graphic.png'/>
            <label> Important
                <input type='radio' name="education" value="important" checked={value === 'important'} onChange={onChange}/>
            </label>
            <label> Not Important
                <input type='radio' name="education" value="notImportant" checked={value === 'notImportant'} onChange={onChange}/>
            </label>
            <button type='submit'>Next Question</button>
        </form>
    );
};

export default Q6;