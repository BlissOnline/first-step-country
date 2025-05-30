"use client"; // ✅ Ensures this runs only on the client

import React from 'react';
// import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import { useRouter } from "next/navigation"; // ✅ Use Next.js routing instead of react-router-dom
import styles from "./ImportantButtons.module.css"; // ✅ Use CSS Modules
// import './ImportantButtons.css';

interface ImportantButtonsProps {
    name: string;
    onChange: (value: string) => void;
    // onNext: () => void;
    currentQuestion: string; // ✅ New prop to determine the next route
}

const ImportantButtons: React.FC<ImportantButtonsProps> = ({ name, onChange, currentQuestion }) => {
    // const navigate = useNavigate(); // ✅ Hook for navigation
    const router = useRouter(); // ✅ Replace useNavigate with Next.js' useRouter

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        // onNext();

        // ✅ Determine next question based on current question
        const nextQuestionNumber = Number(currentQuestion.replace('q', '')) + 1;
        const nextRoute = nextQuestionNumber <= 8 ? `/questions/q${nextQuestionNumber}` : `/questions/results`;

        router.push(nextRoute); // ✅ Navigate using Next.js
        // navigate(nextRoute); // ✅ Navigate to the next question or results page
    };

    return (
      // <div className='ButtonContainer'>
      <div className={styles.buttonContainer}> {/* ✅ Scoped styles */}
        <label className={`${styles.buttons} ${styles.important}`}> Important
          <input type='radio' name={name} value="important" onChange={handleRadioChange} />
        </label>
        <label className={`${styles.buttons} ${styles.notImportant}`}> Not Important
          <input type='radio' name={name} value="notImportant" onChange={handleRadioChange} />
        </label>
      </div> 
    );
};

export default ImportantButtons