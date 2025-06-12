"use client"; // ✅ Marks this component as fully client-side

import dynamic from "next/dynamic";
import { Q4Props } from "@/components/question-clients/Q4Client";


const Q4Client = dynamic(() => import("@/components/question-clients/Q4Client"), { ssr: false });

const Q4Wrapper: React.FC<Q4Props> = (props) => {
    console.log("DEBUG: Q4Wrapper received props =>", props); 
    return <Q4Client {...props} />;
};

export default Q4Wrapper;