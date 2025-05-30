// import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";  // ✅ Correct Next.js import
import React, { useState } from "react"; // ✅ Make sure useState is imported


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Q1 from '../../app/questions/question1/page';
import Q1 from "@/app/questions/question1/page";
import Q2 from "@/app/questions/question2/page";
import Q3 from "@/app/questions/question3/page";
import Q4 from "@/app/questions/question4/page";
import Q5 from "@/app/questions/question5/page";
import Q6 from "@/app/questions/question6/page";
import Q7 from "@/app/questions/question7/page";
import Q8 from "@/app/questions/question8/page";
import ShowResults from "@/app/results/page";

// import Q1 from "@/app/questions/question1/page";
// import Q2 from '../../app/questions/question2/page';
// import Q3 from '../../app/questions/question3/page';
// import Q4 from '../../app/questions/question4/page';
// import Q5 from '../../app/questions/question5/page';
// import Q6 from '../../app/questions/question6/page';
// import Q7 from '../../app/questions/question7/page';
// import Q8 from '../../app/questions/question8/page';
// import ShowResults from '../../app/results/page';

const QuestionPage: React.FC = () => {
    // const router = useRouter();
    const { questionId } = useParams();  // ✅ Get the question ID from the URL

    // const questionId = router.query?.questionId as string; // ✅ Correct way in Next.js

    //const { questionId } = useParams(); // Get the question number from the URL
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
