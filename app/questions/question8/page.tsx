import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ImportantButtons from '../../../components/Buttons/ImportantButtons/ImportantButtons';
import Image from 'next/image';
import './question8.module.css';

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

//define props interface if your component will receive any props
interface Q8Props {
    value: string;
    onChange: (value: string) => void;
}

//define the Functional Component 
const Q8: React.FC<Q8Props> = ({ onChange }) => {

    return (
        <>
            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={8} />

            <form className='qEightBody' >

                <div className='qEightContainer' >
                    <label 
                        className='qEightQuestion'
                        aria-label="Should your country offer a digital nomad visa or remote work permits?"
                    >
                        Should your country offer a digital nomad visa or remote work permits?
                    </label><br />

                    <div className='qEightImgContainer' >
                        <Image 
                            src='/questionImages/nomad-visa-graphic.png'
                            alt="Smiling digital nomad working remotely on a laptop in a scenic location" 
                            width={500} 
                            height={300} 
                            className="qEightImg"
                        />
                    </div>

                    <div>
                        <ImportantButtons 
                            name="nomadVisa" 
                            // color1="var(--color-1)" 
                            // color2="var(--color-3)" 
                            onChange={onChange} 
                            currentQuestion="q8" 
                        />                   
                    </div>
                </div>
            </form>
        </>
    );
};

export default Q8;