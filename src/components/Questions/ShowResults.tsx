import React from 'react';
import './ShowResults.css';

// interface ShowResultsPageProps {
//     formData: {
//         ppm: number;
//         english: string;
//         dining: string;
//         unsafe: string;
//         education: string;
//         medical: string;
//         nomadVisa: string;
//     };
// }


// const ShowResultsPage: React.FC<ShowResultsPageProps> = ({ formData }) => {
//     return (
//         <div>
//             <h1>Results</h1>
//             <p>PPM: {formData.ppm}</p>
//             <p>English: {formData.english}</p>
//             <p>Dining: {formData.dining}</p>
//             <p>Unsafe: {formData.unsafe}</p>
//             <p>Education: {formData.education}</p>
//             <p>Medical: {formData.medical}</p>
//             <p>Nomad Visa: {formData.nomadVisa}</p>
//             {/* Add more fields as needed */}    
//         </div>
//     );
// };


interface ShowResultsProps {
    handleSubmit: () => void;
}

const ShowResults: React.FC<ShowResultsProps> = ({ handleSubmit }) => {
    return (
        <div className='showResultsContainer'>
            <h1 className='showResultsHeader' >You're all done</h1>
            <button className='showResultsButton' onClick={handleSubmit} >Show Results</button>
        </div>
    );
};

export default ShowResults;