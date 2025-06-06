//file was ShowResults.tsx before next.js
"use client";
import React from 'react';
import { useRouter } from "next/navigation"; // ✅ Correct Next.js routing
import styles from "./results.module.css";


//anyName
//
interface ShowResultsProps {
    // formData: any;
    formData: Record<string, any>; // ✅ Better type definition
}

// will be object with form data key
// const ShowResults: React.FC<ShowResultsProps> = ({ handleSubmit }) => {
// we dessembled props to form data
const ShowResults: React.FC<ShowResultsProps> = ({ formData }) => {
    // const navigate = useNavigate();
    const router = useRouter();

    const handleClick = () => {
        // console.log("DEBUG: Form Data =>", formData); // ✅ See if form data contains expected values
        // console.log("DEBUG: Query String =>", new URLSearchParams(formData).toString()); // ✅ See generated query string
        // const queryString = new URLSearchParams(formData).toString();
        // navigate("/countryIndex?" + Object.keys(formData).map((key) => `${key}=${formData[key]}`).join('&'));
        // navigate(`/countryIndex?${queryString}`); 
        // navigate("/countryIndex?" + new URLSearchParams(formData).toString());
        // navigate(`/country-index?${new URLSearchParams(formData).toString()}`);
        // router.push(`/country-index?${new URLSearchParams(formData).toString()}`); // ✅ Fix navigation
        // router.push("/results");
        console.log("DEBUG: Form Data before navigation =>", formData);
        const queryString = new URLSearchParams(formData).toString();
        console.log("DEBUG: Generated Query String =>", queryString);

        router.push(`/country-index?${queryString}`);


        // router.push(`/country-index?${new URLSearchParams(formData).toString()}`);

    };


    return (
        <div className={styles.showResultsContainer}>
            <h1 className={styles.showResultsHeader}>You're all done</h1>
            {/* <button className='showResultsButton' onClick={handleSubmit} >Show Results</button> */}
            <button className={styles.showResultsButton} onClick={handleClick} >Show Results</button>
            {/* onClick={handleSubmit} remove for onClick for nav to work */}
        </div>
    );
};

export default ShowResults;