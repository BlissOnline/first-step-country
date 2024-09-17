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
} 

export interface CountryCodesListInt {
    name: string;
    countryCode: string;
} 

