import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ImportantButtons from '../../../components/Buttons/ImportantButtons/ImportantButtons';
import Image from 'next/image';
import './question3.module.css';


export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for English Speakers – Where English is Widely Spoken",
    description: "Discover the best countries where English is widely spoken. Explore top destinations based on English prominence and ease of communication.",
    openGraph: {
      title: "Best Countries for English Speakers – Where English is Widely Spoken",
      description: "Discover top destinations for English speakers.",
      images: [{ url: "https://firststepcountry.com/questionImages/english-graphic.png", width: 1200, height: 630 }],
      url: "https://firststepcountry.com/questions/q3",
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

//define props interface if your component will receive any props
interface Q3Props {
    value: string;
    onChange: (value: string) => void;
}

//define the Functional Component 
const Q3: React.FC<Q3Props> = ({ onChange }) => {



    return (
        <>
            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={3} />

            <form className='qThreeBody' >
                <div className='qThreeContainer'>

                    {/* <label className='qThreeQuestion' >Do you want your country to have English speakers?</label><br /> */}
                    <label 
                        className='qThreeQuestion' 
                        aria-label="Do you want your country to have English speakers?"
                    >
                        Do you want your country to have English speakers?
                    </label><br />

                    <div className='qThreeImgContainer'>
                        <Image 
                            src="/questionImages/english-graphic.png" 
                            alt="Person signaling active listening with multilingual dialogue captions including 'hello' in three languages" 
                            width={500} 
                            height={300} 
                            className="qThreeImg"
                        />
                        {/* <img src={imgEnglish} alt="Person signaling active listening with multilingual dialogue captions including 'hello' in three languages" className='qThreeImg' /> */}
                    </div>

                    <div>
                            <ImportantButtons 
                                name="english" 
                                // color1="var(--color-3)" 
                                // color2="var(--color-2)" 
                                onChange={onChange} 
                                currentQuestion="q3" 
                            />                   
                    </div>   
                </div>
            
            </form>
        </> 
    );
};

export default Q3;