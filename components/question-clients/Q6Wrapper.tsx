"use client"; 
import dynamic from "next/dynamic";
import { Q6Props } from "@/components/question-clients/Q6Client";

const Q6Client = dynamic(() => import("@/components/question-clients/Q6Client"), { ssr: false });

const Q6Wrapper: React.FC<Q6Props> = (props) => {
    return <Q6Client {...props} />;
};

export default Q6Wrapper;