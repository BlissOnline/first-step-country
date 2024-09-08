import React from 'react';


//define props interface if your component will receive any props
interface Q5Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q5: React.FC<Q5Props> = ({ value, onChange, onNext }) => {

    //handle submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext();
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>Do you want your country to be considered safe? (a level 2 risk or higher, will be excluded from your country list)</label><br />
            <img src='/assets/images/surf-graphic.png'/>
            <label> Important
                <input type='radio' name="unsafe" value="important" checked={value === 'important'} onChange={onChange}/>
            </label>
            <label> Not Important
                <input type='radio' name="unsafe" value="notImportant" checked={value === 'notImportant'} onChange={onChange}/>
            </label>
            <button type='submit'>Next Question</button>
        </form>
    );
};

export default Q5;