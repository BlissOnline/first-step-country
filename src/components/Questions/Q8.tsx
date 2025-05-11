import React from 'react';
import imgNomad from '../../assets/images/nomad-visa-graphic.png';
import './Q8.css';
import ImportantButtons from '../Buttons/ImportantButtons';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../BreadcrumbSchema';

//define props interface if your component will receive any props
interface Q8Props {
    value: string;
    onChange: (value: string) => void;
    onNext: () => void;
}


//define the Functional Component 
const Q8: React.FC<Q8Props> = ({ onChange, onNext }) => {

    return (
        <>
            <Helmet>
                <title>Best Countries for Digital Nomads – Top Destinations with Remote Work Visas</title>
                <meta 
                    name="description"
                    content="Discover the best countries for digital nomads, offering remote work visas and work-friendly environments. Explore top destinations for working and living abroad."
                />
            </Helmet>

            {/* ✅ Added BreadcrumbSchema inside JSX */}
            <BreadcrumbSchema questionNumber={8} />

            <form className='qEightBody' >

                <div className='qEightContainer' >
                    <label className='qEightQuestion' >Should your country offer a digital nomad visa or remote work permits?</label><br />

                    <div className='qEightImgContainer' >
                        <img src={imgNomad} alt='Smiling digital nomad working remotely on a laptop in a scenic location' className='qEightImg'  />
                    </div>

                    <div>
                        <ImportantButtons 
                            name="nomadVisa" 
                            color1="var(--color-1)" 
                            color2="var(--color-3)" 
                            onChange={onChange} 
                            onNext={onNext} 
                        />                   
                    </div>
                </div>
            </form>
        </>
    );
};

export default Q8;