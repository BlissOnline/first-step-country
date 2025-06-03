import { useState } from "react";
// import { useRouter } from "next/navigation";
import { useParams } from "next/navigation"; // ✅ Correct Next.js import

// import { useParams } from 'react-router-dom';
// import Q1 from '../../app/questions/question1/page';

// import Q1 from "@/app/questions/question1/page";

import Q1Client from "@/components/question-clients/Q1Client";
import Q2Client from "@/components/question-clients/Q2Client";
import Q3Client from "@/components/question-clients/Q3Client";
import Q4Client from "@/components/question-clients/Q4Client";
import Q5Client from "@/components/question-clients/Q5Client";
import Q6Client from "@/components/question-clients/Q6Client";
import Q7Client from "@/components/question-clients/Q7Client";
import Q8Client from "@/components/question-clients/Q8Client";

// import Q2 from "@/app/questions/question2/page";
// import Q3 from "@/app/questions/question3/page";
// import Q4 from "@/app/questions/question4/page";
// import Q5 from "@/app/questions/question5/page";
// import Q6 from "@/app/questions/question6/page";
// import Q7 from "@/app/questions/question7/page";
// import Q8 from "@/app/questions/question8/page";
import ShowResults from "@/app/results/page";

//defining Component with useState hook being an object
const QuestionLogicForm: React.FC = () => {
    // const router = useRouter();
    const { questionId } = useParams(); // ✅ Get questionId from the URL
    // const questionId = router.query?.questionId as string; // ✅ Correct Next.js way

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
            // case 'q1': return <Q1 value={formData.ocean} onChange={(value) => handleChange('ocean', value)} />;
            case 'q1': return <Q1Client value={formData.ocean} onChange={(value) => handleChange('ocean', value)} />; // ✅ Fixed!

            // case 'q2': return <Q2 value={formData.ppm} onChange={(e) => handleChange('ppm', e.target.value)} />;
            case 'q2': return <Q2Client value={formData.ppm} onChange={(e) => handleChange('ppm', e.target.value)} />;

            case 'q3': return <Q3Client value={formData.english} onChange={(value) => handleChange('english', value)} />;
            case 'q4': return <Q4Client value={formData.dining} onChange={(value) => handleChange('dining', value)} />;
            case 'q5': return <Q5Client value={formData.unsafe} onChange={(value) => handleChange('unsafe', value)} />;
            case 'q6': return <Q6Client value={formData.education} onChange={(value) => handleChange('education', value)} />;
            case 'q7': return <Q7Client value={formData.medical} onChange={(value) => handleChange('medical', value)} />;
            case 'q8': return <Q8Client value={formData.nomadVisa} onChange={(value) => handleChange('nomadVisa', value)} />;


            // case 'q3': return <Q3 value={formData.english} onChange={(value) => handleChange('english', value)} />;
            // case 'q4': return <Q4 value={formData.dining} onChange={(value) => handleChange('dining', value)} />;
            // case 'q5': return <Q5 value={formData.unsafe} onChange={(value) => handleChange('unsafe', value)} />;
            // case 'q6': return <Q6 value={formData.education} onChange={(value) => handleChange('education', value)} />;
            // case 'q7': return <Q7 value={formData.medical} onChange={(value) => handleChange('medical', value)} />;
            // case 'q8': return <Q8 value={formData.nomadVisa} onChange={(value) => handleChange('nomadVisa', value)} />;
            case 'results': return <ShowResults formData={formData} />;
            default: return <p>Question not found.</p>;
        }
    };
    
    
    return <div className="question-page-container">{renderQuestion()}</div>;;
};

export default QuestionLogicForm; 