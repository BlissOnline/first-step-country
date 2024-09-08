import React from 'react';


//define props interface if your component will receive any props
interface Q2Props {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q2: React.FC<Q2Props> = ({ value, onChange, onNext }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext();
    };


    return (
        
        <form onSubmit={handleSubmit}>
            <label>What is your max monthly budget for living expenses?</label><br />
            <label> 
                <input name='ppm' type='number' value={value} onChange={onChange}/>
            </label> <br /> <br />
            <button type='submit'> next step </button>
        </form>
    );
};

export default Q2;