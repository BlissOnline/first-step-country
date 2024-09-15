import React from 'react';
import { Country } from '../types';

// interface Country {
//     name: string;
//     flagUrl: string;
// }

const CountryList: React.FC<{ countries: Country[] }> = ({ countries }) => {
    return (
        <div>
            {countries.map((country, index) => (
                <div  
                    key={index} 
                    style={{ 
                        backgroundColor: index % 2 === 0 ? '#f5d7b2' : '#f7e3c6', 
                        padding: '10px', 
                        display: 'flex', 
                        alignItems: 'center'
                }}>
                    <img 
                        // src={country.flagUrl} 
                        alt={`${country.name} flag`} 
                        style={{ width: '50px', marginRight: '10px' }}  
                    />
                    <span>{country.name}</span>

                </div>
            ))}
        </div>
    );
};

export default CountryList;