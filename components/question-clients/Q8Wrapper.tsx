"use client"; 
import dynamic from "next/dynamic";
import { Q8Props } from "@/components/question-clients/Q8Client";


const Q8Client = dynamic(() => import("@/components/question-clients/Q8Client"), { ssr: false });

const Q8Wrapper: React.FC<Q8Props> = (props) => {
    return <Q8Client {...props} />;
};

export default Q8Wrapper;