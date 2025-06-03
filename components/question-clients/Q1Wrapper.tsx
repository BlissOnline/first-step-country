"use client"; // ✅ Marks this component as fully client-side

import dynamic from "next/dynamic";

// ✅ Dynamically load `Q1Client.tsx`
const Q1Client = dynamic(() => import("@/components/question-clients/Q1Client"), { ssr: false });

export default function Q1Wrapper() {
    return <Q1Client />;
}
