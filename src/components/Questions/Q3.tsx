import React from 'react';


//define props interface if your component will receive any props
interface Q3Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q3: React.FC<Q3Props> = ({ value, onChange, onNext }) => {
    return (
        <div /*className={`question-page page-0 ${currentPage === 0 ? 'active' : ''}`}*/>
            <label>Do you want your country to have English speakers?</label><br />
            <img src='/assets/images/surf-graphic.png'/>
            <label> Important
                <input type='radio' name="english" value="important" checked={value === 'important'} onChange={onChange} onClick={onNext}/>
            </label>
            <label> Not Important
                <input type='radio' name="english" value="notImportant" checked={value === 'notImportant'} onChange={onChange} onClick={onNext}/>
            </label>
        </div>
    );
};

export default Q3;