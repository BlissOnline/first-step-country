import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowResults.css';


//anyName
//
interface ShowResultsProps {
    formData: any;
}

// will be object with form data key
// const ShowResults: React.FC<ShowResultsProps> = ({ handleSubmit }) => {
// we dessembled props to form data
const ShowResults: React.FC<ShowResultsProps> = ({ formData }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // handleSubmit();

        //? means we are adding
        navigate("/country-index?" + Object.keys(formData).map((key) => `${key}=${formData[key]}`).join('&'));

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