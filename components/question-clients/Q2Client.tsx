"use client";

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Fix router import
import styles from "./question2.module.css";

//define props interface if your component will receive any props
export interface Q2Props {
    value?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const Q2Client: React.FC<Q2Props> = ({ value, onChange, }) => {
     const router = useRouter(); // ✅ Define router before using it

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/questions/question3'); // ✅ Manually navigate to Q3 after form submission
    };


    return (
        <form onSubmit={handleSubmit} className={styles.qTwoBody}>    
                
            <label className={styles.qTwoButtonContainer}> $
                <input 
                    name='ppm' 
                    type='number' 
                    value={value} 
                    onChange={onChange} 
                    placeholder='based on US dollar... ' 
                    aria-label="Max monthly budget for living expenses"                  
                />
            </label> 
            
            <div className={styles.qTwoSubButtonContainer}>
                <button type='submit' className={styles.qTwoButton}> submit number </button>
            </div>
            
        </form>     
    );
};

export default Q2Client;