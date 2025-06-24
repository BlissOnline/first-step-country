import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from 'next/image';
import QuestionLogicForm from "@/components/question-components/QuestionLogicForm";
import styles from "@/components/question-clients/question4.module.css"

export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for Affordable Food – Find Budget-Friendly Cuisine",
    description: "Discover the best countries with affordable food options. Explore budget-friendly cuisines and destinations that offer great meals at low prices.",
    openGraph: {
      title: "Best Countries for Affordable Food – Find Budget-Friendly Cuisine",
      description: "Explore affordable dining destinations worldwide.",
      images: [{ url: "https://firststepcountry.com/questionImages/dining-graphic.png", width: 1200, height: 630 }], // ✅ Corrected image path
      url: "https://firststepcountry.com/questions/question4",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Countries for Affordable Food – Find Budget-Friendly Cuisine",
      description: "Find the best destinations with affordable food prices.",
      images: ["https://firststepcountry.com/questionImages/dining-graphic.png"], // ✅ Corrected image path
    },
  };
}

export default function Q4Page() { 
    return (

      <div className={styles.qFourPage}>
        <BreadcrumbSchema questionNumber={4} />

        <div className={styles.qFourContainer}>
          <label 
            className={styles.qFourQuestion} 
            aria-label="Do you want your country to have affordable dining options?"
          >
            Do you want your country to have affordable dining options?
          </label>
        </div>

        <div className={styles.qFourImgContainer}>
          <Image
              src="/questionImages/affordable-dining-graphic.png"
              alt="Street-side taco food stand with a sign displaying 'Tacos'"
              width={500}
              height={300}
              className={styles.qFourImg}
          />
        </div>

        <QuestionLogicForm questionId="q4" />
      </div>
    );
};
