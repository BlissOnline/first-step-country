// "use client"; 
// import dynamic from "next/dynamic";

// const Q1Client = dynamic(() => import("@/components/question-clients/Q1Client"), { ssr: false });

// export default function Q1Wrapper() {
//     return <Q1Client />;
// }

// Q1Wrapper.tsx



// "use client";
// import dynamic from "next/dynamic";
// import { Q1Props } from "@/components/question-clients/Q1Client";  // if you export the interface

// const Q1Client = dynamic(() => import("@/components/question-clients/Q1Client"), { ssr: false });

// interface Q1WrapperProps extends Q1Props {}

// export default function Q1Wrapper(props: Q1WrapperProps) {
//     return <Q1Client {...props} />;
// }

// "use client";
// import dynamic from "next/dynamic";
// import { Q1Props } from "@/components/question-clients/Q1Client";  // ✅ Correct TypeScript Import

// const Q1Client = dynamic(() => import("@/components/question-clients/Q1Client"), { ssr: false });

// const Q1Wrapper: React.FC<Q1Props> = (props) => {
//     return <Q1Client {...props} />;
// };

// export default Q1Wrapper;


"use client";
import dynamic from "next/dynamic";
import { Q1Props } from "@/components/question-clients/Q1Client";

const Q1Client = dynamic(() => import("@/components/question-clients/Q1Client"), { ssr: false });

const Q1Wrapper: React.FC<Q1Props> = (props) => {
    console.log("DEBUG: Q1Wrapper received props =>", props); // ✅ Log received props
    return <Q1Client {...props} />;
};

export default Q1Wrapper;

