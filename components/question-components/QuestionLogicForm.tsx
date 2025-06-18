"use client";
// import { useRouter } from "next/navigation";
import { useQuiz, FormDataType } from "@/components/context/QuizContext"; // ✅ Import global state and type

import ShowResults from "@/app/questions/results/page";

import Q1Wrapper from "@/components/question-clients/Q1Wrapper";
import Q2Wrapper from "@/components/question-clients/Q2Wrapper";
import Q3Wrapper from "@/components/question-clients/Q3Wrapper";
import Q4Wrapper from "@/components/question-clients/Q4Wrapper";
import Q5Wrapper from "@/components/question-clients/Q5Wrapper";
import Q6Wrapper from "@/components/question-clients/Q6Wrapper";
import Q7Wrapper from "@/components/question-clients/Q7Wrapper";
import Q8Wrapper from "@/components/question-clients/Q8Wrapper";

import styles from "@/components/question-clients/question1.module.css";

interface QuestionLogicFormProps {
  questionId: string;
}

const QuestionLogicForm: React.FC<QuestionLogicFormProps> = ({ questionId }) => {
  // const router = useRouter();
  const { formData, setFormData } = useQuiz(); // ✅ Use global state
  // console.log(" DEBUG: Loaded formData from Context =>", formData);

  // ✅ Function to handle input changes  
  const handleChange = (name: keyof FormDataType, value: string | number) => {
    setFormData({ [name]: value }); 
  };

  // Render the appropriate question component based on questionId 
  const renderQuestion = () => {
    switch (questionId) {
      case 'q1':
        return <Q1Wrapper value={formData.ocean} onChange={(value) => handleChange('ocean', value)} />;
      case 'q2':
        return <Q2Wrapper value={formData.ppm} onChange={(e) => handleChange('ppm', Number(e.target.value))} />;
      case 'q3':
        return <Q3Wrapper value={formData.english} onChange={(value) => handleChange('english', value)} />;
      case 'q4':
        return <Q4Wrapper value={formData.dining} onChange={(value) => handleChange('dining', value)} />;
      case 'q5':
        return <Q5Wrapper value={formData.unsafe} onChange={(value) => handleChange('unsafe', value)} />;
      case 'q6':
        return <Q6Wrapper value={formData.education} onChange={(value) => handleChange('education', value)} />;
      case 'q7':
        return <Q7Wrapper value={formData.medical} onChange={(value) => handleChange('medical', value)} />;
      case 'q8':
        return <Q8Wrapper value={formData.nomadVisa} onChange={(value) => handleChange('nomadVisa', value)} />;
      case 'results':
        // return <ShowResults formData={formData} />;
        return <ShowResults />;
      default:
        return <p>Question not found.</p>;
    }
  };

  return (
    <div className={styles.qOneContainer}>
      {renderQuestion()}
      {/* <button onClick={handleNext}>Next</button> */}
    </div>
  );
};

export default QuestionLogicForm;
