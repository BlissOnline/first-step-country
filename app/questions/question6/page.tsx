import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from 'next/image';
import QuestionLogicForm from "@/components/question-components/QuestionLogicForm";

export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for Affordable, High-Quality Education for Foreigners",
    description: "Find the best countries offering high-quality education at an affordable price. Explore top destinations for international students seeking excellent learning opportunities.",
    openGraph: {
      title: "Best Countries for Affordable, High-Quality Education for Foreigners",
      description: "Explore top destinations for international students.",
      images: [{ url: "https://firststepcountry.com/questionImages/hq-education-graphic.png", width: 1200, height: 630 }], // ✅ Corrected image path
      url: "https://firststepcountry.com/questions/question6",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Countries for Affordable, High-Quality Education for Foreigners",
      description: "Discover budget-friendly countries offering top-notch education.",
      images: ["https://firststepcountry.com/questionImages/hq-education-graphic.png"], // ✅ Corrected image path
    },
  };
}

export default function Q6Page() { 
    return (
        <>
            <BreadcrumbSchema questionNumber={6} />
            <Image 
                src="/questionImages/hq-education-graphic.png"
                alt="Group of students celebrating academic success with a selfie" 
                width={500} 
                height={300} 
                className="qSixImg"
            />
            <QuestionLogicForm questionId="q6" />
        </>        
    );
};