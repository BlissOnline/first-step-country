"use client"; 
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question3.module.css";

export interface Q3Props {
    value: string;  // ✅ Make `value` optional
    onChange: (value: string) => void; // ✅ Make `onChange` optional
}

const Q3Client: React.FC<Q3Props> = ({ onChange = () => {} }) => {

    const handleButtonClick = (selectedValue: string) => {
        onChange(selectedValue); 
    };

    return (
        <form className={styles.qThreeBody}>

            <ImportantButtons 
                name="english" 
                onChange={handleButtonClick} 
                currentQuestion="q3" 
                buttonTheme={{ important: "var(--color-3)", notImportant: "var(--color-2)" }} 
            />
            
        </form>
    );
};

export default Q3Client;
