"use client";
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question8.module.css";

export interface Q8Props {
    value: string; 
    onChange: (value: string) => void; 
}

const Q8Client: React.FC<Q8Props> = ({ onChange = () => {} }) => {

    const handleButtonClick = (selectedValue: string) => {
        onChange(selectedValue); 
    };

    return (
        <form className={styles.qEightBody}>

            <ImportantButtons 
                name="nomadVisa" 
                onChange={handleButtonClick} 
                currentQuestion="q8" 
                buttonTheme={{ important: "var(--color-1)", notImportant: "var(--color-3)" }}
            />

        </form>
    );
};

export default Q8Client;    
