"use client"; 

import dynamic from "next/dynamic";
import { Q3Props } from "@/components/question-clients/Q3Client";

const Q3Client = dynamic(() => import("@/components/question-clients/Q3Client"), { ssr: false });

const Q3Wrapper: React.FC<Q3Props> = (props) => {
    return <Q3Client {...props} />;
};

export default Q3Wrapper;
