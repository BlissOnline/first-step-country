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
            navigate('/questions/q1');  // ✅ Start quiz at the first question
        };

    return (
        <button {...props} className='discover-button' onClick={handleDiscoverClick} >
            {label} 
        </button>
    );
};

export default DiscoverButton;