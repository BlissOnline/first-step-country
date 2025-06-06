import React from "react";
import CountryIndexWrapper from "@/components/country-clients/CountryIndexWrapper"; // ✅ Absolute path



//console.log("DEBUG: CountryIndexWrapper Type =>", CountryIndexWrapper); // ✅ Debugging line

console.log("DEBUG: typeof CountryIndexWrapper =>", typeof CountryIndexWrapper); // ✅ Check type
console.log("DEBUG: Full CountryIndexWrapper =>", CountryIndexWrapper); // ✅ Deep inspection
console.log("DEBUG: CountryIndexWrapper keys =>", Object.keys(CountryIndexWrapper)); // ✅ What properties exist?
export const metadata = {
    title: "Find Your Perfect Destination – Countries Matching Your Preferences!",
    description: "Discover the best countries tailored to your preferences! See personalized quiz results and find flights, hotels, and tours for your next adventure."
};

export default function CountryIndexPage() {
    return <CountryIndexWrapper />;
}