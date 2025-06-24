"use client"; 
// import React from "react";
import React, { useState, useEffect } from "react";
import ImportantButtons from "@/components/Buttons/ImportantButtons/ImportantButtons";
import styles from "./question1.module.css";
export interface Q1Props {
    value?: string;  // ✅ Make `value` optional
    onChange?: (value: string) => void; // ✅ Make `onChange` optional
}

const Q1Client: React.FC<Q1Props> = ({ onChange = () => {} }) => {

    // just so local server doesn't rerender q1 twice
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null; // ⛔ Prevent rendering until after hydration

    const handleButtonClick = (selectedValue: string) => {
        onChange(selectedValue); // ✅ Calls parent onChange function
    };

    return (
        <form className={styles.qOneBody}>

            <ImportantButtons 
                name="ocean" 
                onChange={handleButtonClick} 
                currentQuestion="q1"
                buttonTheme={{ important: "var(--color-1)", notImportant: "var(--color-2)" }} 
            />

        </form>
    );
};

export default Q1Client;
