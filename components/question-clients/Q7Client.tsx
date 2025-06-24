"use client"; 
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question7.module.css";

export interface Q7Props {
    value: string;
    onChange: (value: string) => void; 
}

const Q7Client: React.FC<Q7Props> = ({ onChange = () => {} }) => {

    const handleButtonClick = (selectedValue: string) => {
        onChange(selectedValue); 
    };

    return (
        <form className={styles.qSevenBody}>

            <ImportantButtons 
                name="medical" 
                onChange={handleButtonClick} 
                currentQuestion="q7" 
                buttonTheme={{ important: "var(--color-3)", notImportant: "var(--color-2)" }}
            />

        </form>
    );
};

export default Q7Client;
