// import "../../src/styles/global.css";
// import "../../src/"
import "../../styles/global.css"

import { ClientOnly } from "./client"; // ✅ Corrected import

export function generateStaticParams() {
  return [{ slug: [""] }]; // ✅ Works for dynamic routes
}

export default function Page() {
  return (
    <ClientOnly>
      <div>Page content goes here! yoyo</div> {/* ✅ Fix: Add children */}
    </ClientOnly>
  );
}
