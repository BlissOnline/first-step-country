import React from 'react';
// import { Country } from '../types';
import goldObjectWithFlags from '../utilities/goldObjectWithFlags';
import CountryList from '../Pages/CountryList'; // Ensure this path is correct

const CountryIndex: React.FC = () => {
    return (
        <div>
            <h1>Country Index</h1>
            <CountryList countries={goldObjectWithFlags} />
        </div>
    );
};

export default CountryIndex;