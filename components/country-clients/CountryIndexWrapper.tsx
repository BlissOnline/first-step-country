"use client";

import React from "react";
//import CountryIndexClient from "./CountryIndexClient"; // ✅ Correct import
import CountryIndexClient from "./CountryIndexClient"; 
// import dynamic from "next/dynamic";

//const CountryIndexClient = dynamic(() => import("./CountryIndexClient"), { ssr: false });

//const CountryIndexClient = dynamic(() => import("./CountryIndexClient").then(m => m.default), { ssr: false });


// const CountryIndexWrapper: React.FC = () => {
//     return <CountryIndexClient />;
// };

const CountryIndexWrapper: React.FC = () => {
    return <CountryIndexClient />;
};

// const CountryIndexWrapper: React.FC = () => {
//     return <div>CountryIndexWrapper Loaded Successfully</div>; // ✅ Basic test
// };

//export default CountryIndexWrapper; // ✅ Ensure it's a default export

// export default function CountryIndexWrapper() {
//     return <CountryIndexClient />;
// }
// export default CountryIndexWrapper; // ✅ Must be a default export

//export { CountryIndexWrapper }; // ✅ Named export fix
export default CountryIndexWrapper; // ✅ Default export fix