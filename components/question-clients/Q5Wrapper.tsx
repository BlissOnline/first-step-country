"use client"; 
import dynamic from "next/dynamic";

const Q5Client = dynamic(() => import("@/components/question-clients/Q5Client"), { ssr: false });

export default function Q5Wrapper() {
    return <Q5Client />;
}
