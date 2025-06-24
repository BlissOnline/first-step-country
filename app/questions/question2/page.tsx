import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from "next/image";
import QuestionLogicForm from "@/components/question-components/QuestionLogicForm";
import styles from "../../../components/question-clients/question2.module.css";

export function generateMetadata(): Metadata {
  return {
    title: "Best Countries Based on Budget – Find Affordable Destinations",
    description: "Discover the best countries based on your monthly budget. Explore affordable destinations and find locations that match your financial needs.",
    openGraph: {
      title: "Best Countries Based on Budget – Find Affordable Destinations",
      description: "Discover affordable destinations based on your budget.",
      images: [{ url: "https://firststepcountry.com/images/ppm-graphic.png", width: 1200, height: 630 }],
      url: "https://firststepcountry.com/questions/question2",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Countries Based on Budget – Find Affordable Destinations",
      description: "Explore countries where your budget goes further.",
      images: ["https://firststepcountry.com/images/ppm-graphic.png"],
    },
  };
}

export default function Q2Page() {
    return (
      <div className={styles.qTwoPage}>
        <BreadcrumbSchema questionNumber={2} />

        <div className={styles.qTwoContainer}>

          <label 
            className={styles.qTwoQuestion} 
            aria-label="What is your max monthly budget for living expenses?"
          >
            What is your max monthly budget for living expenses?
          </label>
          
        </div>

        <div className={styles.qTwoImgContainer}>
          <Image 
              src="/questionImages/ppm-graphic.png"
              alt="Woman using a calculator to budget monthly expenses in an office setting." 
              width={500} 
              height={300} 
              className={styles.qTwoImg}
          />
        </div>

        <QuestionLogicForm questionId="q2" />
      </div>
    );
};

