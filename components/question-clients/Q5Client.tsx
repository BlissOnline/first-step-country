"use client"; // ✅ Allows interactivity
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question5.module.css";

export interface Q5Props {
    value?: string;  // ✅ Make `value` optional
    onChange?: (value: string) => void; // ✅ Make `onChange` optional
}

const Q5Client: React.FC<Q5Props> = ({ value, onChange = () => {} }) => {

    console.log("DEBUG: Q5Client received props =>", { value, onChange }); 

    const handleButtonClick = (selectedValue: string) => {
        console.log("Q5Client Button Clicked:", selectedValue); // ✅ Debug if event fires
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
                <p>Current Selection: {value}</p> {/* ✅ Display the selected value */}
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
