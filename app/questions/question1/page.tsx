import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from 'next/image';
import QuestionLogicForm from "@/components/question-components/QuestionLogicForm";
// import Q1Client from "@/components/question-clients/Q1Client"; // or QuestionLogicForm if that's what you're using
// import Q1Wrapper from "@/components/question-clients/Q1Wrapper";
import styles from "../../../components/question-clients/question1.module.css"

export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for Ocean Access – Find Coastal Destinations",
    description: "Explore the best countries with ocean access and find coastal destinations suited to your lifestyle. Compare regions, benefits, and top locations.",
    openGraph: {
      title: "Best Countries for Ocean Access – Find Coastal Destinations",
      description: "Find coastal destinations suited to your lifestyle.",
      images: [{ url: "https://firststepcountry.com/questionImages/surf-graphic.png", width: 1200, height: 630 }],
      url: "https://firststepcountry.com/questions/question1",
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
      <div className={styles.qOnePage}>
        <BreadcrumbSchema questionNumber={1} />
        <div className={styles.qOneImgContainer}>
          <Image 
              src="/questionImages/surf-graphic.png" // ✅ No need for import statements
              // src='../../../public/questionImages/surf-graphic.png'
              alt="Surfing graphic" 
              width={400} 
              height={400} 
              className={styles.qOneImg}
              // priority // ✅ Marks this image as high-priority
          />
        </div>
        {/* Pass "q1" explicitly */}
        {/* <Q1Wrapper /> */}
        <QuestionLogicForm questionId="q1" />
      </div>
    );
};

// export default Q1;

