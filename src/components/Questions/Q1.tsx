import React from 'react';
// import { useNavigate } from 'react-router-dom';
import imgSurf from '../../assets/images/surf-graphic.png';
import './Q1.css';
import ImportantButtons from '../Buttons/ImportantButtons';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../BreadcrumbSchema';

//define props interface if your component will receive any props
interface Q1Props {
    value: string;
    onChange: (value: string) => void;
    // onNext: () => void;
}

const Q1: React.FC<Q1Props> = ({ onChange }) => {
    return (
        <>
            <Helmet>
                <title>Best Countries for Ocean Access – Find Coastal Destinations</title>
                <meta 
                    name="description"
                    content="Explore the best countries with ocean access and find coastal destinations suited to your lifestyle. Compare regions, benefits, and top locations."
                />
            </Helmet>

            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={1} />

            <form className='qOneBody' >
                <div className='qOneContainer'>

                    <label className="qOneQuestion">Access to the ocean?</label><br />

                    <div className='qOneImgContainer'>
                        <img 
                            src={imgSurf} 
                            alt="Woman balancing on a surfboard having fun" 
                            className='qOneImg' 
                        />
                    </div>

                    <div>
                        <ImportantButtons 
                            name="ocean" 
                            color1="var(--color-1)" 
                            color2="var(--color-2)" 
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

