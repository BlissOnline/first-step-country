import updatedGoldObject from "./updatedGoldObject";

const baseUrl = "/public/flags";

const goldObjectWithFlags = updatedGoldObject.map(country => {
    return {
        //country.flagUrl = `${baseUrl}${country.countryCode}.png`;
        ...country,
        flagUrl: `${baseUrl}${country.countryCode}.png`
    };
    
});

export default goldObjectWithFlags;