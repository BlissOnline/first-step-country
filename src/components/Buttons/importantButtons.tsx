import React from 'react';
import './ImportantButtons.css';

interface ImportantButtonsProps {
    name: string;
    color1: string;
    color2: string;
    onChange: (value: string) => void;
    onNext: () => void;
}

const ImportantButtons: React.FC<ImportantButtonsProps> = ({ name, color1, color2, onChange, onNext }) => {
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        onNext();
    };

    return (
      <div className='ButtonContainer'>
        <label className='buttons' style={{ backgroundColor: color1 }}> Important
          <input type='radio' name={name} value="important" onChange={handleRadioChange} />
        </label>
        <label className='buttons' style={{ backgroundColor: color2 }}> Not Important
          <input type='radio' name={name} value="notImportant" onChange={handleRadioChange} />
        </label>
      </div> 
    );
};

export default ImportantButtons