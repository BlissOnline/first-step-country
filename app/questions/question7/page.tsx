import type { Metadata } from "next"; // ✅ Type imports first
import BreadcrumbSchema from "@/components/BreadcrumbSchema"; // ✅ Project-specific component (important for SEO)
import ImportantButtons from "../../../components/Buttons/ImportantButtons/ImportantButtons"; // ✅ Another project-specific component
import Image from "next/image"; // ✅ Built-in Next.js optimization (can sit here or above)
import "./question7.module.css"; // ✅ CSS styles last

export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for Affordable & High-Quality Medical Tourism",
    description: "Explore the best countries for affordable and high-quality medical tourism. Compare destinations offering world-class healthcare at budget-friendly prices.",
    openGraph: {
      title: "Best Countries for Affordable & High-Quality Medical Tourism",
      description: "Explore top destinations for medical tourism worldwide.",
      images: [{ url: "https://firststepcountry.com/questionImages/hq-medical-graphic.png", width: 1200, height: 630 }], // ✅ Ensure the correct file placement
      url: "https://firststepcountry.com/questions/q7",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Countries for Affordable & High-Quality Medical Tourism",
      description: "Discover the best budget-friendly countries with world-class healthcare.",
      images: ["https://firststepcountry.com/questionImages/hq-medical-graphic.png"], // ✅ Ensure correct reference
    },
  };
}

//define props interface if your component will receive any props
interface Q7Props {
    value: string;
    onChange: (value: string) => void;
}

//define the Functional Component 
const Q7: React.FC<Q7Props> = ({ onChange }) => {

    return (
        <>
            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={7} />

            <form className='qSevenBody' >

                <div className='qSevenContainer' >
                    <label 
                        className='qSevenQuestion'
                        aria-label="High-quality and affordable medical tourism?"
                    >
                        High-quality and affordable medical tourism?
                    </label><br />

                    <div className='qSevenImgContainer' >
                         <Image 
                            src="/questionImages/hq-medical-graphic.png"
                            alt="Group of doctors in professional attire offering a welcoming gesture" 
                            width={500} 
                            height={300} 
                            className="qSevenImg"
                        />
                    </div>

                    <div>
                        <ImportantButtons 
                            name="medical" 
                            // color1="var(--color-3)" 
                            // color2="var(--color-2)" 
                            onChange={onChange} 
                            currentQuestion="q7"
                        />                   
                    </div> 
                </div>
            </form>
        </>        
    );
};

export default Q7;