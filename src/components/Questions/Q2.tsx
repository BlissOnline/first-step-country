import React from 'react';


//define props interface if your component will receive any props
interface Q2Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q2: React.FC<Q2Props> = ({ value, onChange, onNext }) => {
    return (
        
        <form>
            <label>What is your max monthly budget for living expenses?</label><br />
            <label> 
                <input name='ppm' type='number' value={value} onChange={onChange}/>
            </label> <br /> <br />
            <button type='button' onClick={onNext}> next step </button>
        </form>
    );
};

export default Q2;