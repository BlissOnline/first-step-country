"use client"; // ✅ Allows interactivity
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question8.module.css";

export interface Q8Props {
    value: string;  // ✅ Make `value` optional
    onChange: (value: string) => void; // ✅ Make `onChange` optional
}

const Q8Client: React.FC<Q8Props> = ({ value, onChange = () => {} }) => {
    
    console.log("DEBUG: Q8Client received props =>", { value, onChange }); 

    const handleButtonClick = (selectedValue: string) => {
        console.log("Q8Client Button Clicked:", selectedValue); // ✅ Debug if event fires
        onChange(selectedValue); // ✅ Calls parent onChange function
    };

    return (
        <form className={styles.qEightBody}>
            <div className={styles.qEightContainer}>
                <label 
                    className='qEightQuestion'
                    aria-label="Should your country offer a digital nomad visa or remote work permits?"
                >
                    Should your country offer a digital nomad visa or remote work permits?
                </label>{/* //br here? */}
                <p>Current Selection: {value}</p> {/* ✅ Display the selected value */}
                <ImportantButtons 
                    name="nomadVisa" 
                    onChange={handleButtonClick} 
                    currentQuestion="q8" />
            </div>
        </form>
    );
};

export default Q8Client;
