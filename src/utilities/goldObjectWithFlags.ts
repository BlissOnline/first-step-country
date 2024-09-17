//okay countries = updatedGoldObject
//country? maybe a JH
//import { Country } from "../types";

import updatedGoldObject from "./updatedGoldObject";



const baseUrl = "/public/flags";

// updatedGoldObject.forEach(country => {
//     country.flagUrl = `${baseUrl}${country.countryCode}.png`;
// });

// const goldObjectWithFlags = updatedGoldObject.forEach(country => {
//     country.flagUrl = `${baseUrl}${country.countryCode}.png`;
// });

const goldObjectWithFlags = updatedGoldObject.map(country => {
    return {
        //country.flagUrl = `${baseUrl}${country.countryCode}.png`;
        ...country,
        flagUrl: `${baseUrl}${country.countryCode}.png`
    };
    
});

export default goldObjectWithFlags;