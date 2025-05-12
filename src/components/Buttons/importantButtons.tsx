import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './ImportantButtons.css';

interface ImportantButtonsProps {
    name: string;
    color1: string;
    color2: string;
    onChange: (value: string) => void;
    // onNext: () => void;
    currentQuestion: string; // ✅ New prop to determine the next route
}

const ImportantButtons: React.FC<ImportantButtonsProps> = ({ name, color1, color2, onChange, currentQuestion }) => {
    const navigate = useNavigate(); // ✅ Hook for navigation

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        // onNext();

        // ✅ Determine next question based on current question
        const nextQuestionNumber = Number(currentQuestion.replace('q', '')) + 1;
        const nextRoute = nextQuestionNumber <= 8 ? `/questions/q${nextQuestionNumber}` : `/questions/results`;

        navigate(nextRoute); // ✅ Navigate to the next question or results page
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