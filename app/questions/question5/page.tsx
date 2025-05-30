import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ImportantButtons from '../../../components/Buttons/ImportantButtons/ImportantButtons';
import Image from 'next/image';
import './question5.module.css';



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

interface Q5Props {
    value: string;
    onChange: (value: string) => void;
}


//define the Functional Component 
const Q5: React.FC<Q5Props> = ({ onChange }) => {

    return (
        <>
            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={5} />

            <form className='qFiveBody' >
                <div className='qFiveContainer'>
                    {/* <label className='qFiveQuestion' >Do you want your country to be considered safe? </label><br /> */}
                    <label 
                        className='qFiveQuestion' 
                        aria-label="Do you want your country to be considered safe?"
                    >
                        Do you want your country to be considered safe? 
                    </label><br />

                    <div className='qFiveImgContainer'>
                        <Image 
                            src="/questionImages/safe-country-graphic.png"
                            alt='Riot police in protective gear facing a large protest' 
                            width={500} 
                            height={300} 
                            className="qFiveImg"
                        />
                        {/* <img src={imgUnsafe} alt='Riot police in protective gear facing a large protest' className='qFiveImg' /> */}
                    </div>

                    <div>
                        <ImportantButtons 
                            name="unsafe" 
                            // color1="var(--color-1)" 
                            // color2="var(--color-2)" 
                            onChange={onChange} 
                            currentQuestion="q5"
                        />                   
                    </div>  
                </div>
            </form>
        </>        
    );
};

export default Q5;