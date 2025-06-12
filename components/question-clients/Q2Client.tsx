"use client";

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Fix router import
import styles from "./question2.module.css";


//define props interface if your component will receive any props
export interface Q2Props {
    value?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//define the Functional Component 
const Q2Client: React.FC<Q2Props> = ({ value, onChange, }) => {
     const router = useRouter(); // ✅ Define router before using it
     //const navigate = useNavigate(); // ✅ Navigation hook

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/questions/question3'); // ✅ Manually navigate to Q3 after form submission
    };


    return (
        <form onSubmit={handleSubmit} className={styles.qTwoBody}>
            <div className={styles.qTwoContainer}>      
                <label 
                    className={styles.qTwoQuestion} 
                    aria-label="What is your max monthly budget for living expenses?"
                >
                    What is your max monthly budget for living expenses?
                </label>

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
            </div>
        </form>     
    );
};

export default Q2Client;