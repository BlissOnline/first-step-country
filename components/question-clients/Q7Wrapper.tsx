"use client"; 
import dynamic from "next/dynamic";
import { Q7Props } from "@/components/question-clients/Q7Client";


const Q7Client = dynamic(() => import("@/components/question-clients/Q7Client"), { ssr: false });

const Q7Wrapper: React.FC<Q7Props> = (props) => {
    return <Q7Client {...props} />;
};

export default Q7Wrapper;