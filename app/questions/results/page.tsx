"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";  
import styles from "./results.module.css";
import type { QuizData } from "../../../lib/types"; 


const ShowResults: React.FC = () => {
    const router = useRouter();
    // const [savedData, setSavedData] = useState<Record<string, any> | null>(null);
    const [savedData, setSavedData] = useState<QuizData | null>(null);


    useEffect(() => {
        if (typeof window !== "undefined") {
            const localData = localStorage.getItem("quizData"); // ✅ Ensure key matches QuizContext.tsx
            setSavedData(localData ? JSON.parse(localData) : null);
            // console.log("🔥 DEBUG: Restored formData from localStorage =>", localData);
        }
    }, []); // ✅ Run once on mount

    const handleClick = () => {
        if (!savedData || Object.keys(savedData).length === 0) {
            console.log("🚨 ERROR: No form data—cannot navigate!");
            return;
        }

        //dumb thing you have to do to please typescript, we are turning the form data values to string
        const queryString = new URLSearchParams(
            Object.fromEntries(
                Object.entries(savedData).map(([key, value]) => [key, String(value)])
            )
        ).toString();

        // const queryString = new URLSearchParams(savedData).toString();
        // console.log("DEBUG: Generated Query String =>", queryString);

        router.push(`/country-index?${queryString}`);
    };

    return (
        <div className={styles.showResultsContainer}>
            <h1 className={styles.showResultsHeader}>You're all done</h1>

            <button 
                className={styles.showResultsButton} 
                onClick={handleClick} 
                disabled={!savedData || Object.keys(savedData).length === 0} // ✅ Prevents clicking with empty data
            >
                Show Results
            </button>
        </div>
    );
};

export default ShowResults;
