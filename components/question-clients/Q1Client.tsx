"use client"; // ✅ Allows interactivity
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question1.module.css";

export interface Q1Props {
    // value: string;
    value?: string;  // ✅ Make `value` optional
    onChange?: (value: string) => void; // ✅ Make `onChange` optional
    // onChange: (value: string) => void;
    
    // onNext: () => void;
}

const Q1Client: React.FC<Q1Props> = ({ value, onChange = () => {} }) => {
// const Q1Client: React.FC<Q1Props> = () => {  // ✅ Removed props

    const handleButtonClick = (selectedValue: string) => {
        console.log("Q1Client Button Clicked:", selectedValue); // ✅ Debug if event fires
        onChange(selectedValue);
    };    
    return (
        <form className={styles.qOneBody}>
            <div className={styles.qOneContainer}>
                <label className={styles.qOneQuestion}>
                    Access to the ocean?
                </label>
                <p>Current Selection: {value}</p> {/* ✅ Display the selected value */}
                <ImportantButtons 
                    name="ocean" 
                    // onChange={onChange} 
                    onChange={handleButtonClick} 
                    currentQuestion="q1" 
                />
            </div>
        </form>
    );
};

export default Q1Client;
