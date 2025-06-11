"use client";
import { useRouter } from "next/navigation";
import { useQuiz, FormDataType } from "@/components/context/QuizContext"; // ✅ Import global state and type

import ShowResults from "@/app/results/page";

import Q1Wrapper from "@/components/question-clients/Q1Wrapper";
import Q2Client from "@/components/question-clients/Q2Client";
import Q3Client from "@/components/question-clients/Q3Client";
import Q4Client from "@/components/question-clients/Q4Client";
import Q5Client from "@/components/question-clients/Q5Client";
import Q6Client from "@/components/question-clients/Q6Client";
import Q7Client from "@/components/question-clients/Q7Client";
import Q8Client from "@/components/question-clients/Q8Client";

interface QuestionLogicFormProps {
  questionId: string;
}

const QuestionLogicForm: React.FC<QuestionLogicFormProps> = ({ questionId }) => {
  const router = useRouter();
  const { formData, setFormData } = useQuiz(); // ✅ Use global state
  console.log("🔥 DEBUG: Loaded formData from Context =>", formData);

  // ✅ Function to handle input changes  
  const handleChange = (name: keyof FormDataType, value: string | number) => {
    console.log(`DEBUG: handleChange called for ${name} = ${value}`);

    // Updates global state with the new field value.
    setFormData({ [name]: value }); 

    // setFormData((prevFormData) => {
    //   // Cast name as string so that TS does not complain about symbol-to-string conversion
    //   const updatedFormData = { ...prevFormData, [name as string]: value };
    //   console.log("DEBUG: Updated global formData =>", updatedFormData);
    //   return updatedFormData;
    // });
  };

  // Render the question based on the passed prop  
  const renderQuestion = () => {
    console.log("DEBUG: Rendering questionId =>", questionId);
    console.log("DEBUG: Current formData =>", formData);

    switch (questionId) {
      case 'q1':
        console.log("DEBUG: Passing to Q1Wrapper =>", {
          value: formData.ocean,
          onChange: handleChange,
        });
        return <Q1Wrapper value={formData.ocean} onChange={(value) => handleChange('ocean', value)} />;
      case 'q2':
        return <Q2Client value={formData.ppm} onChange={(e) => handleChange('ppm', Number(e.target.value))} />;
      case 'q3':
        return <Q3Client value={formData.english} onChange={(value) => handleChange('english', value)} />;
      case 'q4':
        return <Q4Client value={formData.dining} onChange={(value) => handleChange('dining', value)} />;
      case 'q5':
        return <Q5Client value={formData.unsafe} onChange={(value) => handleChange('unsafe', value)} />;
      case 'q6':
        return <Q6Client value={formData.education} onChange={(value) => handleChange('education', value)} />;
      case 'q7':
        return <Q7Client value={formData.medical} onChange={(value) => handleChange('medical', value)} />;
      case 'q8':
        return <Q8Client value={formData.nomadVisa} onChange={(value) => handleChange('nomadVisa', value)} />;
      case 'results':
        return <ShowResults formData={formData} />;
      default:
        return <p>Question not found.</p>;
    }
  };

  // ✅ Handle navigation  
  const handleNext = () => {
    // const safeQuestionId = Array.isArray(questionId) ? questionId[0] : questionId ?? "q1";
    const nextQuestionNumber = parseInt(questionId.replace("q", ""), 10) + 1;
    
    if (nextQuestionNumber <= 8) {
      router.push(`/questions/question${nextQuestionNumber}`);
    } else {
      const queryString = new URLSearchParams(
        Object.fromEntries(
          Object.entries(formData).map(([key, value]) => [key, String(value)])
        )
      ).toString();

      console.log("DEBUG: Navigating to results with query =>", queryString);
      router.push(`/results?${queryString}`);
    }
  };

  return (
    <div className="question-page-container">
      {renderQuestion()}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default QuestionLogicForm;
