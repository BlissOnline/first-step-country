"use client"; // ✅ Allows interactivity
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question7.module.css";

export interface Q7Props {
    value: string;  // ✅ Make `value` optional
    onChange: (value: string) => void; // ✅ Make `onChange` optional
}

const Q7Client: React.FC<Q7Props> = ({ onChange = () => {} }) => {

    const handleButtonClick = (selectedValue: string) => {
        onChange(selectedValue); // ✅ Calls parent onChange function
    };

    return (
        <form className={styles.qSevenBody}>
            <div className={styles.qSevenContainer}>
                <label 
                        className='qSevenQuestion'
                        aria-label="High-quality and affordable medical tourism?"
                >
                    High-quality and affordable medical tourism?
                </label><br />
                <ImportantButtons 
                    name="medical" 
                    onChange={handleButtonClick} 
                    currentQuestion="q7" />
            </div>
        </form>
    );
};

export default Q7Client;
