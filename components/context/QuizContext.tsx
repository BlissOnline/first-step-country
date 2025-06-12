// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";

// export interface FormDataType {
//   ocean: string;
//   ppm: number;
//   english: string;
//   dining: string;
//   unsafe: string;
//   education: string;
//   medical: string;
//   nomadVisa: string;
// }

// interface QuizContextType {
//   formData: FormDataType;
//   setFormData: (updatedData: Partial<FormDataType>) => void;
// }

// const QuizContext = createContext<QuizContextType | undefined>(undefined);

// export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [formData, setFormDataState] = useState<FormDataType>({
//     ocean: '',
//     ppm: 0,
//     english: '',
//     dining: '',
//     unsafe: '',
//     education: '',
//     medical: '',
//     nomadVisa: ''
//   });

//   const setFormData = (updatedData: Partial<FormDataType>) => {
//     setFormDataState((prevData) => ({ ...prevData, ...updatedData }));
//     console.log("Updated global formData =>", { ...formData, ...updatedData });
//   };

//   return (
//     <QuizContext.Provider value={{ formData, setFormData }}>
//       {children}
//     </QuizContext.Provider>
//   );
// };

// export const useQuiz = () => {
//   const context = useContext(QuizContext);
//   if (!context) throw new Error("useQuiz must be used within a QuizProvider");
//   return context;
// };

"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface FormDataType {
  ocean: string;
  ppm: number;
  english: string;
  dining: string;
  unsafe: string;
  education: string;
  medical: string;
  nomadVisa: string;
}

interface QuizContextType {
  formData: FormDataType;
  setFormData: (updatedData: Partial<FormDataType>) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);
const LOCAL_STORAGE_KEY = "quizData";

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage, if available
  const [formData, setFormDataState] = useState<FormDataType>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored) as FormDataType;
        } catch (error) {
          console.error("Failed to parse stored quiz data", error);
        }
      }
    }
    // Default state if nothing is stored
    return {
      ocean: "",
      ppm: 0,
      english: "",
      dining: "",
      unsafe: "",
      education: "",
      medical: "",
      nomadVisa: ""
    };
  });

  // Whenever formData changes, update localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData]);

  const setFormData = (updatedData: Partial<FormDataType>) => {
    setFormDataState((prevData) => ({ ...prevData, ...updatedData }));
    console.log("Updated global formData =>", { ...formData, ...updatedData });
  };

  return (
    <QuizContext.Provider value={{ formData, setFormData }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within a QuizProvider");
  return context;
};

