import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from 'next/image';
import Q5Wrapper from "@/components/question-clients/Q5Wrapper";

export function generateMetadata(): Metadata {
  return {
    title: "Safest Countries to Live In – Top Destinations for Security & Stability",
    description: "Explore the safest countries to live in, ranked by security and stability. Find destinations that prioritize safety, low crime rates, and peaceful environments.",
    openGraph: {
      title: "Safest Countries to Live In – Top Destinations for Security & Stability",
      description: "Explore the safest countries for security and low crime rates.",
      images: [{ url: "https://firststepcountry.com/questionImages/unsafe-graphic.png", width: 1200, height: 630 }], // ✅ Corrected image path
      url: "https://firststepcountry.com/questions/q5",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Safest Countries to Live In – Top Destinations for Security & Stability",
      description: "Find safe destinations with low crime and stable environments.",
      images: ["https://firststepcountry.com/questionImages/unsafe-graphic.png"], // ✅ Corrected image path
    },
  };
}

export default function Q5Page() { 
    return (
        <>
            <BreadcrumbSchema questionNumber={5} />

            
            <Image 
                src="/questionImages/safe-country-graphic.png"
                alt='Riot police in protective gear facing a large protest' 
                width={500} 
                height={300} 
                // className="qFiveImg"
            />
            <Q5Wrapper />
        </>        
    );
};
