//possible that this should be .tsx file instead if im including JSX
//Country doens't exist
export interface Country {
    name: string;
    countryIndexNumber: number;
    countryCode?: string; //addition
    ppm: number;
    coast: boolean;
    englishSpeaking: boolean;
    affordableDining: boolean;
    unsafe: boolean;
    affordableEducation: boolean;
    affordableHealthCare: boolean;
    nomadVisa: boolean;        
    flagUrl?: string; //addition
    affiliateLinks?: { // Addition for affiliate links
        flights: string;
        hotels: string;
        attractions: string;
    };
} 

export interface CountryCodesListInt {
    name: string;
    countryCode: string;
} 

// ✅ Define the type of countryLinks to allow indexing with a string
export type CountryLinks = {
    [key: string]: {
      flights?: string | null;
      hotels?: string | null;
      attractions?: string | null;
    };
  };
  
// ✅ Import JSON file and apply type assertion
import countryLinksRaw from './assets/data/countryLinks.json';

export const countryLinks: CountryLinks = countryLinksRaw as CountryLinks;

//   const typedCountryLinks: CountryLinks = countryLinks;
