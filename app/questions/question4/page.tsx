import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from 'next/image';
import ImportantButtons from '../../../components/Buttons/ImportantButtons/ImportantButtons';
import './question4.module.css';


export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for Affordable Food – Find Budget-Friendly Cuisine",
    description: "Discover the best countries with affordable food options. Explore budget-friendly cuisines and destinations that offer great meals at low prices.",
    openGraph: {
      title: "Best Countries for Affordable Food – Find Budget-Friendly Cuisine",
      description: "Explore affordable dining destinations worldwide.",
      images: [{ url: "https://firststepcountry.com/questionImages/dining-graphic.png", width: 1200, height: 630 }], // ✅ Corrected image path
      url: "https://firststepcountry.com/questions/q4",
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
//define props interface if your component will receive any props
interface Q4Props {
    value: string;
    onChange: (value: string) => void;
}

//nn
  //export default function Q4({ onChange }: { onChange: (value: string) => void }) {

//define the Functional Component 
const Q4: React.FC<Q4Props> = ({ onChange }) => {
    return (
        <>
            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={4} />

            <form className={'qFourBody'} >
                <div className="qFourContainer">

                    {/* <label className='qFourQuestion' >Do you want your country to have affordable dining options?</label><br /> */}
                    <label 
                        className="qFourQuestion" 
                        aria-label="Do you want your country to have affordable dining options?"
                    >
                        Do you want your country to have affordable dining options?
                    </label><br />

                    <div className='qFourImgContainer'>
                        <Image 
                            src="/questionImages/affordable-dining-graphic.png" 
                            alt="Street-side taco food stand with a sign displaying 'Tacos'" 
                            width={500} 
                            height={300} 
                            className="qFourImg"
                        />
                        {/* <img src={imgDining} alt="Street-side taco food stand with a sign displaying 'Tacos'" className='qFourImg' /> */}
                    </div>

                    <div>
                        <ImportantButtons 
                            name="dining" 
                            // color1="var(--color-1)" 
                            // color2="var(--color-3)" 
                            onChange={onChange} 
                            currentQuestion="q4"
                        />                   
                    </div>  
                </div>
            </form>
        </>
    );
};

export default Q4;