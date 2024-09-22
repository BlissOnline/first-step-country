import React from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate 

//styles
import './DiscoverButton.css'; 

interface DiscoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const DiscoverButton: React.FC<DiscoverButtonProps> = ({ label, ...props }) => {

        //define hook for navigating to questions
        const navigate = useNavigate();
    
        //event handler for clicking discover
        const handleDiscoverClick = () => {
            navigate('/questions');  //navigate to the question page
        };

    return (
        <button {...props} className='discover-button' onClick={handleDiscoverClick} >
            {label} 
        </button>
    );
};

export default DiscoverButton;




// const Home: React.FC = () => {

//     //define hook for navigating to questions
//     const navigate = useNavigate();
    
//     //event handler for clicking discover
//     const handleDiscoverClick = () => {
//         navigate('/questions');  //navigate to the question page
//     };



//     return (
//         <div className="home-container">
//             {/* <img src='' alt='Logo' className='logo'/> */}
//             <h1 className='homeHeader'>"Let's discover countries based on your needs"</h1>
//             <button className='discover-button' onClick={handleDiscoverClick}>Discover</button>
//         </div>
//     );
// };

// export default Home;