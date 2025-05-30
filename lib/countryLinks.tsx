// import countryLinks from '../src/assets/data/countryLinks.json';

// // ✅ Convert arrays to single strings
// export const formattedLinks = Object.fromEntries(
//     Object.entries(countryLinks).map(([country, data]) => [
//         country,
//         {
//             flights: data.flights?.[0] || null,
//             hotels: data.hotels?.[0] || null,
//             attractions: data.attractions?.[0] || null
//         }
//     ])
// );

// // ✅ Log or save formatted JSON
// console.log(JSON.stringify(formattedLinks, null, 4));

import { CountryLinks } from "@/lib/types";

export async function getCountryLinks(): Promise<CountryLinks> {
  const res = await fetch("/data/countryLinks.json");
  if (!res.ok) throw new Error("Failed to fetch country links");
  return res.json() as Promise<CountryLinks>;
}

export async function getFormattedLinks(): Promise<CountryLinks> {
  const links = await getCountryLinks(); // ✅ Rename to "links" to avoid shadowing

  return Object.fromEntries(
    Object.entries(links).map(([country, data]) => [
      country,
      {
        flights: data.flights || null,
        hotels: data.hotels || null,
        attractions: data.attractions || null,
      },
    ])
  ) as CountryLinks;
}

