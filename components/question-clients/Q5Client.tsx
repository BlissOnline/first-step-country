"use client"; // ✅ Allows interactivity
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question5.module.css";

export interface Q5Props {
    value: string; 
    onChange: (value: string) => void;
}

const Q5Client: React.FC<Q5Props> = ({ onChange = () => {} }) => {

    const handleButtonClick = (selectedValue: string) => {
        onChange(selectedValue); // ✅ Calls parent onChange function
    };

    return (
        <form className={styles.qFiveBody}>
            <div className={styles.qFiveContainer}>
                <label 
                    className='qFiveQuestion' 
                    aria-label="Do you want your country to be considered safe?"
                >
                    Do you want your country to be considered safe? 
                </label>
                <ImportantButtons 
                    name="unsafe" 
                    onChange={handleButtonClick} 
                    currentQuestion="q5" 
                />
            </div>
        </form>
    );
};

export default Q5Client;
