"use client"; // ✅ Allows interactivity
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question3.module.css";

export interface Q3Props {
    value: string;  // ✅ Make `value` optional
    onChange: (value: string) => void; // ✅ Make `onChange` optional
}

const Q3Client: React.FC<Q3Props> = ({ onChange = () => {} }) => {

    const handleButtonClick = (selectedValue: string) => {
        onChange(selectedValue); // ✅ Calls parent onChange function
    };

    return (
        <form className={styles.qThreeBody}>
            <div className={styles.qThreeContainer}>
                <label 
                        className='qThreeQuestion' 
                        aria-label="Do you want your country to have English speakers?"
                    >
                        Do you want your country to have English speakers?
                </label>
                <ImportantButtons 
                    name="english" 
                    onChange={handleButtonClick} 
                    currentQuestion="q3" 
                />
            </div>
        </form>
    );
};

export default Q3Client;
