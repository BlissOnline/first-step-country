"use client"; // ✅ Marks this component as fully client-side

import dynamic from "next/dynamic";

const Q4Client = dynamic(() => import("@/components/question-clients/Q4Client"), { ssr: false });

export default function Q4Wrapper() {
    return <Q4Client />;
}
