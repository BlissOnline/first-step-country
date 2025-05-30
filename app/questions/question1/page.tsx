import type { Metadata } from "next";
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ImportantButtons from '../../../components/Buttons/ImportantButtons/ImportantButtons';
import Image from 'next/image';
import styles from './question1.module.css'

// import './question1.module.css';

export function generateMetadata(): Metadata {
  return {
    title: "Best Countries for Ocean Access – Find Coastal Destinations",
    description: "Explore the best countries with ocean access and find coastal destinations suited to your lifestyle. Compare regions, benefits, and top locations.",
    openGraph: {
      title: "Best Countries for Ocean Access – Find Coastal Destinations",
      description: "Find coastal destinations suited to your lifestyle.",
      images: [{ url: "https://firststepcountry.com/questionImages/surf-graphic.png", width: 1200, height: 630 }],
      url: "https://firststepcountry.com/questions/q1",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Countries for Ocean Access – Find Coastal Destinations",
      description: "Explore the best coastal countries for your lifestyle.",
      images: ["https://firststepcountry.com/questionImages/surf-graphic.png"],
    },
  };
}

interface Q1Props {
    value: string;
    onChange: (value: string) => void;
    // onNext: () => void;
}

const Q1: React.FC<Q1Props> = ({ onChange }) => {
    return (
        <>
            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={1} />

            <form className={styles.qOneBody}>
                <div className={styles.qOneContainer}>

                    {/* <label className="qOneQuestion">Access to the ocean?</label><br /> */}
                    <label 
                        className={styles.qOneQuestion} 
                        aria-label="Do you want access to the ocean?"
                    >
                        Access to the ocean?
                    </label><br />


                    <div className={styles.qOneImgContainer}>
                        <Image 
                            src="/questionImages/surf-graphic.png" // ✅ No need for import statements
                            // src='../../../public/questionImages/surf-graphic.png'
                            alt="Surfing graphic" 
                            width={500} 
                            height={300} 
                            className={styles.qOneImg}
                            priority // ✅ Marks this image as high-priority
                        />
                        {/* <img 
                            src={imgSurf} 
                            alt="Woman balancing on a surfboard having fun" 
                            className='qOneImg' 
                        /> */}
                    </div>

                    <div>
                        <ImportantButtons 
                            name="ocean" 
                            // color1="var(--color-1)" 
                            // color2="var(--color-2)" 
                            onChange={onChange} 
                            currentQuestion="q1" //✅ Pass the current question identifier
                        />
                    </div>

                </div>
            </form>
        </>
  
    );
};

export default Q1;

