import countryLinks from '../data/countryLinks.json';

// ✅ Convert arrays to single strings
export const formattedLinks = Object.fromEntries(
    Object.entries(countryLinks).map(([country, data]) => [
        country,
        {
            flights: data.flights?.[0] || null,
            hotels: data.hotels?.[0] || null,
            attractions: data.attractions?.[0] || null
        }
    ])
);

// ✅ Log or save formatted JSON
console.log(JSON.stringify(formattedLinks, null, 4));
