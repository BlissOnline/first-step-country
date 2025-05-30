"use client";  // ✅ Ensures this runs only on the client
import React from 'react';
import { useRouter } from "next/navigation"; // ✅ Use Next.js routing instead of react-router-dom
// import { useNavigate } from 'react-router-dom'; 

//styles
// import './DiscoverButton.module.css'; 
import styles from "./DiscoverButton.module.css";  

interface DiscoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const DiscoverButton: React.FC<DiscoverButtonProps> = ({ label, ...props }) => {

        //define hook for navigating to questions
        // const navigate = useNavigate();
        const router = useRouter(); // ✅ Replace useNavigate with useRouter
    
        //event handler for clicking discover
        const handleDiscoverClick = () => {
            router.push('/questions/question1');  // ✅ Correct path
        };

    return (
        <button {...props} className={styles.discoverButton} onClick={handleDiscoverClick} >
            {label} 
        </button>
    );
};

export default DiscoverButton;