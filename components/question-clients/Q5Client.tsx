"use client"; 
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question5.module.css";

export interface Q5Props {
    value: string; 
    onChange: (value: string) => void;
}

const Q5Client: React.FC<Q5Props> = ({ onChange = () => {} }) => {

    const handleButtonClick = (selectedValue: string) => {
        onChange(selectedValue); 
    };

    return (
        <form className={styles.qFiveBody}>

            <ImportantButtons 
                name="unsafe" 
                onChange={handleButtonClick} 
                currentQuestion="q5" 
                buttonTheme={{ important: "var(--color-1)", notImportant: "var(--color-2)" }}
            />
            
        </form>
    );
};

export default Q5Client;
