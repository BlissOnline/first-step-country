"use client"; // ✅ Allows interactivity
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question6.module.css";

export interface Q6Props {
    value: string;  // ✅ Make `value` optional
    onChange: (value: string) => void; // ✅ Make `onChange` optional
}

const Q6Client: React.FC<Q6Props> = ({ onChange = () => {} }) => {


    const handleButtonClick = (selectedValue: string) => {
        onChange(selectedValue); // ✅ Calls parent onChange function
    };


    return (
        <form className={styles.qSixBody}>
            <div className={styles.qSixContainer}>
                <label 
                    className='qSixQuestion' 
                    aria-label="High-quality education options for foreigners, at a great price?"
                >
                    High-quality education options for foreigners, at a great price?
                </label>
                <ImportantButtons 
                    name="education" 
                    onChange={handleButtonClick} 
                    currentQuestion="q6" 
                />
            </div>
        </form>
    );
};

export default Q6Client;
