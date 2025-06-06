import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from 'next/image';
import Q8Wrapper from "@/components/question-clients/Q8Wrapper";

export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for Digital Nomads – Top Destinations with Remote Work Visas",
    description: "Discover the best countries for digital nomads, offering remote work visas and work-friendly environments. Explore top destinations for working and living abroad.",
    openGraph: {
      title: "Best Countries for Digital Nomads – Top Destinations with Remote Work Visas",
      description: "Explore top destinations for remote work worldwide.",
      images: [{ url: "https://firststepcountry.com/questionImages/nomad-visa-graphic.png", width: 1200, height: 630 }], // ✅ Ensure the correct file placement
      url: "https://firststepcountry.com/questions/q8",
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
        <>
            <BreadcrumbSchema questionNumber={8} />
            <Image 
                src='/questionImages/nomad-visa-graphic.png'
                alt="Smiling digital nomad working remotely on a laptop in a scenic location" 
                width={500} 
                height={300} 
                className="qEightImg"
            />
            <Q8Wrapper />
        </>
    );
};