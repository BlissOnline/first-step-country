"use client";
import dynamic from "next/dynamic";
import { Q1Props } from "@/components/question-clients/Q1Client";

const Q1Client = dynamic(() => import("@/components/question-clients/Q1Client"), { ssr: false });

const Q1Wrapper: React.FC<Q1Props> = (props) => {
    return <Q1Client {...props} />;
};

export default Q1Wrapper;

