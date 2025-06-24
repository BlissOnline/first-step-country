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
        onChange(selectedValue);
    };

    return (
        <form className={styles.qFourBody}>

            <ImportantButtons 
                name="dining" 
                onChange={handleButtonClick} 
                currentQuestion="q4" 
                buttonTheme={{ important: "var(--color-1)", notImportant: "var(--color-3)" }} 
            />

        </form>
    );
};

export default Q4Client;
