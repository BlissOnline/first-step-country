import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from 'next/image';
import QuestionLogicForm from "@/components/question-components/QuestionLogicForm";
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

export default function Q1Page() {
    return (
      <div className={styles.qOnePage}>
        <BreadcrumbSchema questionNumber={1} />

        <div className={styles.qOneContainer}>
          
          <label className={styles.qOneQuestion}>
              Access to the ocean?
          </label>
        </div>

        <div className={styles.qOneImgContainer}>
          <Image 
              src="/questionImages/surf-graphic.png" 
              alt="Surfing graphic" 
              width={400} 
              height={400} 
              className={styles.qOneImg}
          />
        </div>
        <QuestionLogicForm questionId="q1" />
      </div>
    );
};


