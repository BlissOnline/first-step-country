import React from 'react';
import { useRouter } from "next/navigation"; // ✅ Correct import for Next.js navigation
import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Image from "next/image";
import './question2.module.css';

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

//define props interface if your component will receive any props
interface Q2Props {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // onNext: () => void;
}


//define the Functional Component 
const Q2: React.FC<Q2Props> = ({ value, onChange, }) => {
     const router = useRouter(); // ✅ Define router before using it
     //const navigate = useNavigate(); // ✅ Navigation hook

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/app/questions/question3'); // ✅ Manually navigate to Q3 after form submission
    };


    return (
        <>
            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={2} />

            <form onSubmit={handleSubmit} className='qTwoBody' >
                <div className='qTwoContainer'> 
                    {/* <label className='qTwoQuestion' >What is your max monthly budget for living expenses?</label> */}
                    <label 
                        className='qTwoQuestion' 
                        aria-label="What is your max monthly budget for living expenses?"
                    >
                        What is your max monthly budget for living expenses?
                    </label>

                    {/* <div style={{backgroundImage: imgPpm}} ></div> */}
                    <div className='qTwoImgContainer'>
                        <Image 
                            src="/questionImages/ppm-graphic.png"
                            alt="Woman using a calculator to budget monthly expenses in an office setting." 
                            width={500} 
                            height={300} 
                            className="qTwoImg"
                        />
                        {/* <img src={imgPpm} alt="Woman using a calculator to budget monthly expenses in an office setting." className='qTwoImg' /> */}
                    </div>

                    <label className='qTwoButtonContainer' > $
                        <input 
                            name='ppm' 
                            type='number' 
                            value={value} 
                            onChange={onChange} 
                            placeholder='based on US dollar... ' 
                            aria-label="Max monthly budget for living expenses"                  
                        />
                    </label> 
                    
                    <div className='qTwoSubButtonContainer'>
                        <button type='submit' className='qTwoButton'> submit number </button>
                    </div>
                </div>
            </form>     
        </>
    );
};

export default Q2;