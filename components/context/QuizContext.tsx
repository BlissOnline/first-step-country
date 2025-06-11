"use client";
import { createContext, useContext, useState, ReactNode } from "react";

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

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormDataState] = useState<FormDataType>({
    ocean: '',
    ppm: 0,
    english: '',
    dining: '',
    unsafe: '',
    education: '',
    medical: '',
    nomadVisa: ''
  });

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
