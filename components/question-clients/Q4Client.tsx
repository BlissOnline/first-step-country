"use client"; // ✅ Allows interactivity
import React from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question4.module.css";

interface Q4Props {
    value?: string;  // ✅ Make `value` optional
    onChange?: (value: string) => void; // ✅ Make `onChange` optional
}

const Q4Client: React.FC<Q4Props> = ({ value, onChange = () => {} }) => {
    return (
        <form className={styles.qFourBody}>
            <div className={styles.qFourContainer}>
                <label 
                    className="qFourQuestion" 
                    aria-label="Do you want your country to have affordable dining options?"
                >
                    Do you want your country to have affordable dining options?
                </label>
                <p>Current Selection: {value}</p> {/* ✅ Display the selected value */}
                <ImportantButtons name="dining" onChange={onChange} currentQuestion="q4" />
            </div>
        </form>
    );
};

export default Q4Client;
