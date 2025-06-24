import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from 'next/image';
import QuestionLogicForm from "@/components/question-components/QuestionLogicForm";
import styles from "@/components/question-clients/question8.module.css"


export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for Digital Nomads – Top Destinations with Remote Work Visas",
    description: "Discover the best countries for digital nomads, offering remote work visas and work-friendly environments. Explore top destinations for working and living abroad.",
    openGraph: {
      title: "Best Countries for Digital Nomads – Top Destinations with Remote Work Visas",
      description: "Explore top destinations for remote work worldwide.",
      images: [{ url: "https://firststepcountry.com/questionImages/nomad-visa-graphic.png", width: 1200, height: 630 }], // ✅ Ensure the correct file placement
      url: "https://firststepcountry.com/questions/question8",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Countries for Digital Nomads – Top Destinations with Remote Work Visas",
      description: "Find the best countries offering digital nomad visas and remote work opportunities.",
      images: ["https://firststepcountry.com/questionImages/nomad-visa-graphic.png"], // ✅ Ensure correct reference
    },
  };
}

export default function Q8Page() { 
    return (
      <div className={styles.qEightPage}>

        <BreadcrumbSchema questionNumber={8} />

        <div className={styles.qEightContainer}>
          <label 
            className={styles.qEightQuestion}
            aria-label="Should your country offer a digital nomad visa or remote work permits?"
          >
            Should your country offer a digital nomad visa or remote work permits?
          </label>
        </div>

        <div className={styles.qEightImgContainer}>
          <Image
            src='/questionImages/nomad-visa-graphic.png'
            alt="Smiling digital nomad working remotely on a laptop in a scenic location"
            width={500}
            height={300}
            className={styles.qEightImg}
          />
        </div>

        <QuestionLogicForm questionId="q8" />

      </div>
    );
};