import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Q1 from './components/Questions/Q1.tsx';
import Q2 from './components/Questions/Q2.tsx';
import Q3 from './components/Questions/Q3.tsx';
import Q4 from './components/Questions/Q4.tsx';
import Q5 from './components/Questions/Q5.tsx';
import Q6 from './components/Questions/Q6.tsx';
import Q7 from './components/Questions/Q7.tsx';
import Q8 from './components/Questions/Q8.tsx';
import ShowResults from './components/Questions/ShowResults.tsx';

//defining Component with useState hook being an object
const QuestionLogicForm: React.FC = () => {
    // const [currentPage, setCurrentPage] = useState(0);
    const { questionId } = useParams(); // ✅ Get question from URL

    const [formData, setFormData] = useState({
        ocean: '',
        ppm: 0, //initialize ppm as a number
        english: '',
        dining: '',
        unsafe: '', //probably should do something here
        education: '',
        medical: '',
        nomadVisa: '' 
    });

    //defining handleChange function
    // ✅ Function to handle input changes
    const handleChange = (name: string, value: string | number) => {
        setFormData({ ...formData, [name]: value });
    };

    // ✅ Dynamically render the correct question based on the URL
    const renderQuestion = () => {
        switch (questionId) {
            case 'q1': return <Q1 value={formData.ocean} onChange={(value) => handleChange('ocean', value)} />;
            case 'q2': return <Q2 value={formData.ppm} onChange={(e) => handleChange('ppm', e.target.value)} />;
            case 'q3': return <Q3 value={formData.english} onChange={(value) => handleChange('english', value)} />;
            case 'q4': return <Q4 value={formData.dining} onChange={(value) => handleChange('dining', value)} />;
            case 'q5': return <Q5 value={formData.unsafe} onChange={(value) => handleChange('unsafe', value)} />;
            case 'q6': return <Q6 value={formData.education} onChange={(value) => handleChange('education', value)} />;
            case 'q7': return <Q7 value={formData.medical} onChange={(value) => handleChange('medical', value)} />;
            case 'q8': return <Q8 value={formData.nomadVisa} onChange={(value) => handleChange('nomadVisa', value)} />;
            case 'results': return <ShowResults formData={formData} />;
            default: return <p>Question not found.</p>;
        }
    };
    
    
    return <div className="question-page-container">{renderQuestion()}</div>;;
};

export default QuestionLogicForm; 