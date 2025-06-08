"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";  
import styles from "./results.module.css";

interface ShowResultsProps {  
    formData?: Record<string, any>;  // ✅ Explicitly define props type to fix TypeScript error
}

const ShowResults: React.FC<ShowResultsProps> = ({ formData }) => {
    const router = useRouter();
    const [savedData, setSavedData] = useState<Record<string, any> | null>(null);

    // ✅ Restore `formData` when reaching `/results`
    useEffect(() => {
        if (!formData || Object.keys(formData).length === 0) {
            console.log("🚨 WARNING: formData is empty—loading from localStorage!");
            const localData = localStorage.getItem("formData");
            setSavedData(localData ? JSON.parse(localData) : null);
        } else {
            setSavedData(formData);
        }
    }, [formData]);

    const handleClick = () => {
        if (!savedData || Object.keys(savedData).length === 0) {
            console.log("🚨 ERROR: No form data—cannot navigate!");
            return;
        }

        const queryString = new URLSearchParams(savedData).toString();
        console.log("DEBUG: Generated Query String =>", queryString);

        router.push(`/country-index?${queryString}`);
    };

    return (
        <div className={styles.showResultsContainer}>
            <h1 className={styles.showResultsHeader}>You're all done</h1>
            <button className={styles.showResultsButton} onClick={handleClick}>
                Show Results
            </button>
        </div>
    );
};

export default ShowResults;
