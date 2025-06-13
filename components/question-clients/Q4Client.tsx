"use client"; // ✅ Allows interactivity
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question4.module.css";

export interface Q4Props {
    value: string; 
    onChange: (value: string) => void; 
}

const Q4Client: React.FC<Q4Props> = ({ onChange = () => {} }) => {

    const handleButtonClick = (selectedValue: string) => {
        onChange(selectedValue); // ✅ Calls parent onChange function
    };

    return (
        <form className={styles.qFourBody}>
            <div className={styles.qFourContainer}>
                <label 
                    className="qFourQuestion" 
                    aria-label="Do you want your country to have affordable dining options?"
                >
                    Do you want your country to have affordable dining options?
                </label>
                <ImportantButtons 
                    name="dining" 
                    onChange={handleButtonClick} 
                    currentQuestion="q4" 
                />
            </div>
        </form>
    );
};

export default Q4Client;
