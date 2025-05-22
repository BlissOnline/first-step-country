// import "../../src/styles/global.css";
// import "../../src/"
import { ClientOnly } from "./client"; // ✅ Corrected import

export function generateStaticParams() {
  return [{ slug: [""] }]; // ✅ Works for dynamic routes
}

export default function Page() {
  return (
    <ClientOnly>
      <div>Page content goes here!</div> {/* ✅ Fix: Add children */}
    </ClientOnly>
  );
}


// import '../../index.css'
 
// export function generateStaticParams() {
//   return [{ slug: [''] }]
// }
 
// export default function Page() {
//   return '...' // We'll update this
// }