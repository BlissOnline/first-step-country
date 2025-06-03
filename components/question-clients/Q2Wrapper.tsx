"use client"; // ✅ Marks this as a Client Component

import dynamic from "next/dynamic";

// ✅ Dynamically load `Q2Client.tsx`
const Q2Client = dynamic(() => import("@/components/question-clients/Q2Client"), { ssr: false });

export default function Q2Wrapper() {
    return <Q2Client />;
}
