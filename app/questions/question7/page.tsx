import type { Metadata } from "next"; // ✅ Type imports first
import BreadcrumbSchema from "@/components/BreadcrumbSchema"; // ✅ Project-specific component (important for SEO)
import Image from "next/image"; // ✅ Built-in Next.js optimization (can sit here or above)
import QuestionLogicForm from "@/components/question-components/QuestionLogicForm";

export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for Affordable & High-Quality Medical Tourism",
    description: "Explore the best countries for affordable and high-quality medical tourism. Compare destinations offering world-class healthcare at budget-friendly prices.",
    openGraph: {
      title: "Best Countries for Affordable & High-Quality Medical Tourism",
      description: "Explore top destinations for medical tourism worldwide.",
      images: [{ url: "https://firststepcountry.com/questionImages/hq-medical-graphic.png", width: 1200, height: 630 }], // ✅ Ensure the correct file placement
      url: "https://firststepcountry.com/questions/question7",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Countries for Affordable & High-Quality Medical Tourism",
      description: "Discover the best budget-friendly countries with world-class healthcare.",
      images: ["https://firststepcountry.com/questionImages/hq-medical-graphic.png"], // ✅ Ensure correct reference
    },
  };
}
export default function Q7Page() { 
    return (
        <>

            <BreadcrumbSchema questionNumber={7} />
            <Image 
                src="/questionImages/hq-medical-graphic.png"
                alt="Group of doctors in professional attire offering a welcoming gesture" 
                width={500} 
                height={300} 
                className="qSevenImg"
            />
            <QuestionLogicForm questionId="q7" />
        </>        
    );
};