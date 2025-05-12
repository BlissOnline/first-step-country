import React from 'react';
import { useSearchParams } from "react-router-dom";
import { Country } from '../types';
import goldObject from '../goldObject';
import CountryList from '../Pages/CountryList'; // Ensure this path is correct
import { Helmet } from 'react-helmet-async';



//have to define props interface to fix errors
// interface CountryIndexProps {
//     countries: Country[];
// }

const CountryIndex: React.FC = () => {
    let [searchParams] = useSearchParams();

    const filteredCountries = goldObject.filter((item: Country) => {
        if (searchParams.get('ocean') === 'important' && !item.coast) return false;

        let ppm = +(searchParams.get('ppm') || 0);
        // if (ppm && ppm <= item.ppm) return false;
        if (ppm && item.ppm > ppm) return false;

        if (searchParams.get('english') === 'important' && !item.englishSpeaking) return false;
       
        if (searchParams.get('dining') === 'important' && !item.affordableDining) return false;
      
        if (searchParams.get('unsafe') === 'important' && item.unsafe) return false;
       
        if (searchParams.get('education') === 'important' && !item.affordableEducation) return false;

        if (searchParams.get('medical') === 'important' && !item.affordableHealthCare) return false;
        
        if (searchParams.get('nomadVisa') === 'important' && !item.nomadVisa) return false;
        // if (data.nomadVisa === 'notImportant' && item.coast) return false;

        return true;
    });

    return (
        <>
            <Helmet>
                <title>Find Your Perfect Destination – Countries Matching Your Preferences!</title>
                <meta 
                    name="description"
                    content="Discover the best countries tailored to your preferences! See personalized quiz results and find flights, hotels, and tours for your next adventure."
                />
            </Helmet>
            <div>
                <h1 
                    className='titleIndex' 
                    style={{
                        background: 'var(--color-home)', 
                        display: 'block', 
                        width: '100%',
                        padding: '0.7rem',
                        fontFamily: 'var(--font-question)',
                        textAlign: 'start',
                        paddingLeft: '1.8em',
                        color: 'var(--color-3)',
                        //textDecoration: 'underline',
                    }} >
                    <span 
                        style={{
                            color: 'var(--color-gold)',
                            // textDecoration: 'underline',
                            fontFamily: 'var(--font-general)'
                        }}>
                        {filteredCountries.length}
                    </span> discovered matches
                </h1>
                <CountryList countries={filteredCountries} />
            </div>
            
        </>
        
    );
};

export default CountryIndex;