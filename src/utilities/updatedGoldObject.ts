//types
import { Country } from '../../src/types';
//import { CountryCodesList } from '../../src/types';


//arrays
import countryCodesList from './CountryCodesList';
import goldObject from "../goldObject";

//why is country not Country?
function addCountryCodes(goldObject: Country[], countryCodesListJH: countryCodesList[]): Country[] {
    const countryCodeMap = new Map(countryCodesListJH.map(country => [country.name, country.countryCode]));

    return goldObject.map(country => ({
        ...country,
        countryCode: countryCodeMap.get(country.name)
    }));
}

const updatedGoldObject = addCountryCodes(goldObject, countryCodesList);
//const updatedGoldObject: Country[] = addCountryCodes(goldObject, countryCodesList);

// console.log(updatedGoldObject);

export default updatedGoldObject;