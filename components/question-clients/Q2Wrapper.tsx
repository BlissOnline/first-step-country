"use client"; 
import dynamic from "next/dynamic";
import { Q2Props } from "@/components/question-clients/Q2Client";

// ✅ Dynamically load `Q2Client.tsx`
const Q2Client = dynamic(() => import("@/components/question-clients/Q2Client"), { ssr: false });

const Q2Wrapper: React.FC<Q2Props> = (props) => {
    return <Q2Client {...props} />;
};

export default Q2Wrapper;
