import { Country } from '../types';


//need to define type for the items in countryCodesList
interface CountryCode {
    name: string;
    countryCode: string;
}

//arrays
import countryCodesList from '../CountryCodesList';
import goldObject from "../goldObject";

//why is country not Country?
// function addCountryCodes(goldObject: Country[], countryCodesListJH: countryCodesList[]): Country[] {
//had to slightly change syntax to avoid errors
function addCountryCodes(goldObject: Country[], countryCodesListJH: CountryCode[]): Country[] {
    const countryCodeMap = new Map(countryCodesListJH.map(country => [country.name, country.countryCode]));

    return goldObject.map(country => ({
        ...country,
        countryCode: countryCodeMap.get(country.name)
    }));
}

const updatedGoldObject = addCountryCodes(goldObject, countryCodesList);

export default updatedGoldObject;