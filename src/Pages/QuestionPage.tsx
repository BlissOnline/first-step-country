import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Q1 from '../components/Questions/Q1';
import Q2 from '../components/Questions/Q2';
import Q3 from '../components/Questions/Q3';
import Q4 from '../components/Questions/Q4';
import Q5 from '../components/Questions/Q5';
import Q6 from '../components/Questions/Q6';
import Q7 from '../components/Questions/Q7';
import Q8 from '../components/Questions/Q8';
import ShowResults from '../components/Questions/ShowResults';

const QuestionPage: React.FC = () => {
    const { questionId } = useParams(); // Get the question number from the URL
    //const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        ocean: '',
        ppm: 0,
        english: '',
        dining: '',
        unsafe: '',
        education: '',
        medical: '',
        nomadVisa: ''
    });

    const handleChange = (name: string, value: string | number) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const showNextPage = () => {
    //     const nextQuestion = Number(questionId?.replace('q', '')) + 1;
    //     if (nextQuestion <= 8) {
    //         navigate(`/questions/q${nextQuestion}`);
    //     } else {
    //         navigate('/questions/results');
    //     }
    // };
    // const showNextPage = () => {
    //     const nextQuestion = Number(questionId?.replace('q', '')) + 1;
    //     if (nextQuestion <= 8) {
    //         navigate(`/questions/q${nextQuestion}`);
    //     } else {
    //         navigate('/questions/results');
    //     }
    // };

    const renderQuestion = () => {
        switch (questionId) {
            case 'q1': return <Q1 value={formData.ocean} onChange={(value) => handleChange('ocean', value)} />;
            case 'q2': return <Q2 value={formData.ppm} onChange={(e) => handleChange('ppm', e.target.value)} />;
            case 'q3': return <Q3 value={formData.english} onChange={(value) => handleChange('english', value)} />;
            case 'q4': return <Q4 value={formData.dining} onChange={(value) => handleChange('dining', value)} />;
            case 'q5': return <Q5 value={formData.unsafe} onChange={(value) => handleChange('unsafe', value)} />;
            case 'q6': return <Q6 value={formData.education} onChange={(value) => handleChange('education', value)}/>;
            case 'q7': return <Q7 value={formData.medical} onChange={(value) => handleChange('medical', value)} />;
            case 'q8': return <Q8 value={formData.nomadVisa} onChange={(value) => handleChange('nomadVisa', value)} />;
            case 'results': return <ShowResults formData={formData} />;
            default: return <p>Question not found.</p>;
        }
    };

    return (
        <div className="question-page-container">
            {renderQuestion()}
        </div>
    );
};

export default QuestionPage;
