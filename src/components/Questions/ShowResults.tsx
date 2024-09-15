import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowResults.css';



interface ShowResultsProps {
    handleSubmit: () => void;
}

// const ShowResults: React.FC<ShowResultsProps> = ({ handleSubmit }) => {
const ShowResults: React.FC<ShowResultsProps> = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // handleSubmit();
        navigate("/country-index");
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