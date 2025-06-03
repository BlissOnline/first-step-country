"use client"; 
import dynamic from "next/dynamic";

const Q6Client = dynamic(() => import("@/components/question-clients/Q6Client"), { ssr: false });

export default function Q6Wrapper() {
    return <Q6Client />;
}
