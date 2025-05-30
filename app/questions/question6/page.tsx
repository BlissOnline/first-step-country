import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ImportantButtons from '../../../components/Buttons/ImportantButtons/ImportantButtons';
import Image from 'next/image';
import './question6.module.css';


export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for Affordable, High-Quality Education for Foreigners",
    description: "Find the best countries offering high-quality education at an affordable price. Explore top destinations for international students seeking excellent learning opportunities.",
    openGraph: {
      title: "Best Countries for Affordable, High-Quality Education for Foreigners",
      description: "Explore top destinations for international students.",
      images: [{ url: "https://firststepcountry.com/questionImages/hq-education-graphic.png", width: 1200, height: 630 }], // ✅ Corrected image path
      url: "https://firststepcountry.com/questions/q6",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Countries for Affordable, High-Quality Education for Foreigners",
      description: "Discover budget-friendly countries offering top-notch education.",
      images: ["https://firststepcountry.com/questionImages/hq-education-graphic.png"], // ✅ Corrected image path
    },
  };
}

//define props interface if your component will receive any props
interface Q6Props {
    value: string;
    onChange: (value: string) => void;
}

//define the Functional Component 
const Q6: React.FC<Q6Props> = ({ onChange }) => {

    return (
        <>
            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={6} />

            <form className='qSixBody' >

                <div className='qSixContainer'>
                    {/* <label className='qSixQuestion' >High-quality education options for foreigners, at a great price?</label><br /> */}
                    <label 
                        className='qSixQuestion' 
                        aria-label="High-quality education options for foreigners, at a great price?"
                    >
                        High-quality education options for foreigners, at a great price?
                    </label><br />

                    <div className='qSixImgContainer'>
                        <Image 
                            src="/questionImages/hq-education-graphic.png"
                            alt="Group of students celebrating academic success with a selfie" 
                            width={500} 
                            height={300} 
                            className="qSixImg"
                        />
                        {/* <img src={imgEducation} alt='Group of students celebrating academic success with a selfie' className='qSixImg' /> */}
                    </div>

                    <div>
                        <ImportantButtons 
                            name="education" 
                            // color1="var(--color-1)" 
                            // color2="var(--color-2)" 
                            onChange={onChange} 
                             currentQuestion="q6"
                        />                   
                    </div>    

                </div>
            </form>
        </>        
    );
};

export default Q6;