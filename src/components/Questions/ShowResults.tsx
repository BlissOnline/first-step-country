import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowResults.css';


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
    const navigate = useNavigate();

    const handleClick = () => {
        // const queryString = new URLSearchParams(formData).toString();
        // navigate("/countryIndex?" + Object.keys(formData).map((key) => `${key}=${formData[key]}`).join('&'));
        // navigate(`/countryIndex?${queryString}`); 
        // navigate("/countryIndex?" + new URLSearchParams(formData).toString());
        navigate(`/country-index?${new URLSearchParams(formData).toString()}`);


    };


    return (
        <div className='showResultsContainer'>
            <h1 className='showResultsHeader' >You're all done</h1>
            {/* <button className='showResultsButton' onClick={handleSubmit} >Show Results</button> */}
            <button className='showResultsButton' onClick={handleClick} >Show Results</button>
            {/* onClick={handleSubmit} remove for onClick for nav to work */}
        </div>
    );
};

export default ShowResults;