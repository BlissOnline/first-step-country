"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./ImportantButtons.module.css";

interface ImportantButtonsProps {
  name: string;
  onChange: (value: string) => void;
  currentQuestion: string;
}

const ImportantButtons: React.FC<ImportantButtonsProps> = ({ name, onChange, currentQuestion }) => {
  const router = useRouter();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange !== "function") {
      console.error("🚨 ImportantButtons.tsx received an undefined onChange! Check its parent component.");
      return;
    }
    onChange(e.target.value);

    // Calculate the next route. On the final question, append the query parameters built from localStorage.
    const nextQuestionNumber = Number(currentQuestion.replace('q', '')) + 1;

    // Retrieve formData from localStorage
    const storedDataStr = localStorage.getItem("formData");
    let queryString = "";
    if (storedDataStr) {
      try {
        const storedData = JSON.parse(storedDataStr);
        queryString = new URLSearchParams(storedData).toString();
      } catch (error) {
        console.error("Failed to parse formData from localStorage", error);
      }
    }

    const nextRoute = nextQuestionNumber <= 8
      ? `/questions/question${nextQuestionNumber}`
      : `/results?${queryString}`;

    router.push(nextRoute);
  };

  return (
    <div className={styles.buttonContainer}>
      <label className={`${styles.buttons} ${styles.important}`}>
        Important
        <input type="radio" name={name} value="important" onChange={handleRadioChange} />
      </label>
      <label className={`${styles.buttons} ${styles.notImportant}`}>
        Not Important
        <input type="radio" name={name} value="notImportant" onChange={handleRadioChange} />
      </label>
    </div>
  );
};

export default ImportantButtons;
