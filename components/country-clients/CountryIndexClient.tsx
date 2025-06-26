"use client";

// import React, { useEffect } from "react";
import React from "react";

import { useSearchParams } from "next/navigation"; 
import { Country } from "@/lib/types";
import goldObject from "@/lib/goldObject";
import CountryList from "@/components/CountryList";



const CountryIndexClient: React.FC = () => {
    const searchParams = useSearchParams(); 


     // ✅ Log search params inside useEffect to prevent issues with hooks
    // useEffect(() => {
    //     console.log("DEBUG: searchParams =>", searchParams.toString());
    //     console.log("DEBUG: ocean value =>", searchParams.get("ocean"));
    // }, [searchParams]);

    const filteredCountries = goldObject.filter((item: Country) => {

        // if (searchParams.get("ocean") === "important" && !item.coast) {
        //     console.log("EXCLUDED:", item.name);
        //     return false;
        // }

        // if (searchParams.get("ocean") === "important" && !item.coast) return false;

        // let ppm = +(searchParams.get("ppm") || 0);
        const ppm = +(searchParams.get("ppm") || 0);
        if (ppm && item.ppm > ppm) return false;

        if (searchParams.get("english") === "important" && !item.englishSpeaking) return false;
        if (searchParams.get("dining") === "important" && !item.affordableDining) return false;
        if (searchParams.get("unsafe") === "important" && item.unsafe) return false;
        if (searchParams.get("education") === "important" && !item.affordableEducation) return false;
        if (searchParams.get("medical") === "important" && !item.affordableHealthCare) return false;
        if (searchParams.get("nomadVisa") === "important" && !item.nomadVisa) return false;

        return true;
    });

    return (
        <div style={{ paddingTop: '48px' }}>
            <h1 
                className="titleIndex" 
                style={{
                    background: "var(--color-home)", 
                    width: "100%",
                    padding: "0.7rem",
                    fontFamily: "var(--font-question)",
                    textAlign: "start",
                    paddingLeft: "1.8em",
                    color: "var(--color-3)",
                    fontSize: "3.2em",
                    lineHeight: "59px",
                }} 
            >
                <span style={{ color: "var(--color-gold)", fontFamily: "var(--font-general)" }}>
                    {filteredCountries.length}
                </span> discovered matches
            </h1>
            <CountryList countries={filteredCountries} />
        </div>
    );
    
};

export default CountryIndexClient;
