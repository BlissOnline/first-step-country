import React from 'react';
import imgEnglish from '../../assets/images/english-graphic.png';


//define props interface if your component will receive any props
interface Q3Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}

//define the Functional Component 
const Q3: React.FC<Q3Props> = ({ value, onChange, onNext }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Do you want your country to have English speakers?</label><br />
            <img src={imgEnglish} alt="different languages" />
            <label> Important
                <input type='radio' name="english" value="important" checked={value === 'important'} onChange={onChange} />
            </label>
            <label> Not Important
                <input type='radio' name="english" value="notImportant" checked={value === 'notImportant'} onChange={onChange} />
            </label>
            <button type='submit'>Next Question</button>
        </form>
    );
};

export default Q3;