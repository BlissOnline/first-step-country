"use client"; 
import dynamic from "next/dynamic";
import { Q5Props } from "@/components/question-clients/Q5Client";


const Q5Client = dynamic(() => import("@/components/question-clients/Q5Client"), { ssr: false });

const Q5Wrapper: React.FC<Q5Props> = (props) => {
    return <Q5Client {...props} />;
};

export default Q5Wrapper;
