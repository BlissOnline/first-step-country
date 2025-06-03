//import { useRouter } from "next/navigation"; // ✅ Correct import for Next.js navigation
import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from "next/image";
import Q2Wrapper from "@/components/question-clients/Q2Wrapper";

export function generateMetadata(): Metadata {
  return {
    title: "Best Countries Based on Budget – Find Affordable Destinations",
    description: "Discover the best countries based on your monthly budget. Explore affordable destinations and find locations that match your financial needs.",
    openGraph: {
      title: "Best Countries Based on Budget – Find Affordable Destinations",
      description: "Discover affordable destinations based on your budget.",
      images: [{ url: "https://firststepcountry.com/images/ppm-graphic.png", width: 1200, height: 630 }],
      url: "https://firststepcountry.com/questions/q2",
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
        <>
          <BreadcrumbSchema questionNumber={2} />
          <Image 
              src="/questionImages/ppm-graphic.png"
              alt="Woman using a calculator to budget monthly expenses in an office setting." 
              width={500} 
              height={300} 
              // className="qTwoImg"
          />
          <Q2Wrapper /> {/* ✅ Dynamically loads the interactive component */}
        </>
    );
};