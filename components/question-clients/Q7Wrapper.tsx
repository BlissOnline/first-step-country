"use client"; 
import dynamic from "next/dynamic";

const Q7Client = dynamic(() => import("@/components/question-clients/Q7Client"), { ssr: false });

export default function Q7Wrapper() {
    return <Q7Client />;
}
