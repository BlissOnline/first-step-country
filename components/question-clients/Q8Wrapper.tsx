"use client"; 
import dynamic from "next/dynamic";

const Q8Client = dynamic(() => import("@/components/question-clients/Q8Client"), { ssr: false });

export default function Q8Wrapper() {
    return <Q8Client />;
}
