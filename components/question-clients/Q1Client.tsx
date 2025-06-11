"use client"; // ✅ Enables client-side interactivity
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question1.module.css";

export interface Q1Props {
    value: string;  // ✅ Make `value` optional
    onChange: (value: string) => void; // ✅ Make `onChange` optional
}

const Q1Client: React.FC<Q1Props> = ({ value, onChange = () => {} }) => {
    console.log("DEBUG: Q1Client received props =>", { value, onChange }); // ✅ Logs received props

    const handleButtonClick = (selectedValue: string) => {
        console.log("Q1Client Button Clicked:", selectedValue); // ✅ Debug if event fires
        onChange(selectedValue); // ✅ Calls parent onChange function
    };

    return (
        <form className={styles.qOneBody}>
            <div className={styles.qOneContainer}>
                <label className={styles.qOneQuestion}>
                    Access to the ocean?
                </label>
                <p>Current Selection: {value || "None selected"} </p> {/* ✅ Prevents empty display */}
                <ImportantButtons 
                    name="ocean" 
                    onChange={handleButtonClick} // ✅ Handles selection changes
                    currentQuestion="q1" 
                />
            </div>
        </form>
    );
};

export default Q1Client;
