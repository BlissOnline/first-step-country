import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from 'next/image';
import QuestionLogicForm from "@/components/question-components/QuestionLogicForm";
import styles from "@/components/question-clients/question3.module.css";

export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for English Speakers – Where English is Widely Spoken",
    description: "Discover the best countries where English is widely spoken. Explore top destinations based on English prominence and ease of communication.",
    openGraph: {
      title: "Best Countries for English Speakers – Where English is Widely Spoken",
      description: "Discover top destinations for English speakers.",
      images: [{ url: "https://firststepcountry.com/questionImages/english-graphic.png", width: 1200, height: 630 }],
      url: "https://firststepcountry.com/questions/question3",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Countries for English Speakers – Where English is Widely Spoken",
      description: "Find the best destinations where English is commonly spoken.",
      images: ["https://firststepcountry.com/questionImages/english-graphic.png"],
    },
  };
}

export default function Q3Page() { 
    return (
      <div className={styles.qThreePage}>
        <BreadcrumbSchema questionNumber={3} />

        <div className={styles.qThreeContainer}>
          <label 
            className={styles.qThreeQuestion} 
            aria-label="Do you want your country to have English speakers?"
          >
            Do you want your country to have English speakers?
          </label>
        </div>
        
        <div className={styles.qThreeImgContainer}>
          <Image
              src="/questionImages/english-graphic.png"
              alt="Person signaling active listening with multilingual dialogue captions including 'hello' in three languages"
              width={500}
              height={300}
              className={styles.qThreeImg}
          />
        </div>

        <QuestionLogicForm questionId="q3" />
        
      </div>
    );
};