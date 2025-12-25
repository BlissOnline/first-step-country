import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from 'next/image';
import QuestionLogicForm from "@/components/question-components/QuestionLogicForm";
import styles from "@/components/question-clients/question5.module.css"

export function generateMetadata(): Metadata {
  return {
    title: "Safest Countries to Live In – Top Destinations for Security & Stability",
    description: "Explore the safest countries to live in, ranked by security and stability. Find destinations that prioritize safety, low crime rates, and peaceful environments.",
    openGraph: {
      title: "Safest Countries to Live In – Top Destinations for Security & Stability",
      description: "Explore the safest countries for security and low crime rates.",
      images: [{ url: "https://firststepcountry.com/questionImages/safe-family.png", width: 1200, height: 630 }], // ✅ Corrected image path
      url: "https://firststepcountry.com/questions/question5",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Safest Countries to Live In – Top Destinations for Security & Stability",
      description: "Find safe destinations with low crime and stable environments.",
      images: ["https://firststepcountry.com/questionImages/safe-family.png"], // ✅ Corrected image path
    },
  };
}

export default function Q5Page() { 
    return (

      <div className={styles.qFivePage}>
        <BreadcrumbSchema questionNumber={5} />

        <div className={styles.qFiveContainer}>
          <label 
            className={styles.qFiveQuestion} 
            aria-label="Do you want your country to be considered safe?"
          >
            Do you want your country to be considered safe? 
          </label>
        </div>
        
        <div className={styles.qFiveImgContainer}>
          <Image
            src="/questionImages/safe-family.png"
            alt='happy family with parents hold kids dearly in arms'
            width={500}
            height={300}
            className={styles.qFiveImg}
          />
        </div>

        <QuestionLogicForm questionId="q5" />
      </div>  
    );
};
