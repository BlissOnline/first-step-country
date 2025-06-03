"use client"; 

import dynamic from "next/dynamic";

const Q3Client = dynamic(() => import("@/components/question-clients/Q3Client"), { ssr: false });

export default function Q3Wrapper() {
    return <Q3Client />;
}
