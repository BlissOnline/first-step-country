import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from 'next/image';
import QuestionLogicForm from "@/components/question-components/QuestionLogicForm";
// import Q1Wrapper from "@/components/question-clients/Q1Wrapper";
// import dynamic from 'next/dynamic'; // ✅ Allows dynamic client-side loading

// ✅ Dynamically import `Q1Client.tsx`
// const Q1Client = dynamic(() => import("@/components/question-clients/Q1Client"), { ssr: false });
// import Q1Client from "@/components/question-clients/Q1Client"

export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for Ocean Access – Find Coastal Destinations",
    description: "Explore the best countries with ocean access and find coastal destinations suited to your lifestyle. Compare regions, benefits, and top locations.",
    openGraph: {
      title: "Best Countries for Ocean Access – Find Coastal Destinations",
      description: "Find coastal destinations suited to your lifestyle.",
      images: [{ url: "https://firststepcountry.com/questionImages/surf-graphic.png", width: 1200, height: 630 }],
      url: "https://firststepcountry.com/questions/q1",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Countries for Ocean Access – Find Coastal Destinations",
      description: "Explore the best coastal countries for your lifestyle.",
      images: ["https://firststepcountry.com/questionImages/surf-graphic.png"],
    },
  };
}

// const Q1: React.FC<Q1Props> = ({ onChange }) => { //value here?
export default function Q1Page() { // ✅ Remove unnecessary props
    return (
        <>
            <BreadcrumbSchema questionNumber={1} />
            <Image 
                src="/questionImages/surf-graphic.png" // ✅ No need for import statements
                // src='../../../public/questionImages/surf-graphic.png'
                alt="Surfing graphic" 
                width={500} 
                height={300} 
                // priority // ✅ Marks this image as high-priority
            />
            {/* Pass "q1" explicitly */}
            <QuestionLogicForm questionId="q1" />
            {/* <Q1Wrapper value={""} onChange={(val) => console.log("onChange called with:", val)}/> {/* ✅ Now dynamically loads the client-side component safely */} 
        </>
    );
};

// export default Q1;

