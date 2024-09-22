import React from 'react';
import { Country } from '../types';
//import goldObjectWithFlags from '../utilities/goldObjectWithFlags';
import goldObject from '../goldObject';
//import { Country } from './types';
import CountryList from '../Pages/CountryList'; // Ensure this path is correct
//import { filteredCountries } from '../QuestionLogicForm';

import { useSearchParams } from "react-router-dom";


interface CountryIndexProps {
    filteredCountries: Country[];
}
// import QuestionLogicForm from '../QuestionLogicForm';





const CountryIndex: React.FC = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    //what search parms we want to read
    console.log(searchParams.get(''));
    // console.log("test 12354");

    const filteredCountries = goldObject.filter((item: Country) => {
        if (searchParams.get('ocean') === 'important' && !item.coast) return false;
        //probably don't have to define anything..
        //if (data.ocean === 'notImportant' && item.coast) return false;
        //if (+data.ppm && +data.ppm <= item.ppm) return false;
        //typeof
        let ppm = +(searchParams.get('ppm') || 0);
        if (ppm && ppm <= item.ppm) return false;
        //console.log(ppm, item.ppm);


        if (searchParams.get('english') === 'important' && !item.englishSpeaking) return false;
        // if (data.english === 'notImportant' && item.coast) return false;
        if (searchParams.get('dining') === 'important' && !item.affordableDining) return false;
        //if (data.dining === 'notImportant' && item.coast) return false;
        if (searchParams.get('unsafe') === 'important' && item.unsafe) return false;
        // if (data.unsafe === 'notImportant' && item.coast) return false;
        if (searchParams.get('education') === 'important' && !item.affordableDining) return false;
        // if (data.education === 'notImportant' && item.coast) return false;
        if (searchParams.get('medical') === 'important' && !item.affordableHealthCare) return false;
        // if (data.medical === 'notImportant' && item.coast) return false;
        if (searchParams.get('nomadVisa') === 'important' && !item.nomadVisa) return false;
        // if (data.nomadVisa === 'notImportant' && item.coast) return false;

        return true;
    });

    return (
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
    );
};

// const CountryIndex: React.FC<CountryIndexProps> = ({ filteredCountries }) => {
//     return (
//         <div>
//             <h1>Country Index</h1>
//             {/* <CountryList countries={goldObjectWithFlags} /> */}
//             {/* <CountryList countries={filteredCountries} /> */}
//             <CountryList countries={goldObject} />
//         </div>
//     );
// };

export default CountryIndex;