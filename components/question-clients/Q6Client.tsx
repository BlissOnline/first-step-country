"use client"; 
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question6.module.css";

export interface Q6Props {
    value: string;  
    onChange: (value: string) => void; 
}

const Q6Client: React.FC<Q6Props> = ({ onChange = () => {} }) => {


    const handleButtonClick = (selectedValue: string) => {
        onChange(selectedValue); 
    };

    return (
        <form className={styles.qSixBody}>

            <ImportantButtons 
                name="education" 
                onChange={handleButtonClick} 
                currentQuestion="q6" 
                buttonTheme={{ important: "var(--color-1)", notImportant: "var(--color-2)" }}
            />

        </form>
    );
};

export default Q6Client;
