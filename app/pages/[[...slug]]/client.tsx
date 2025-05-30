// 'use client'
 
// import React from 'react'
// import dynamic from 'next/dynamic'
 
// //const App = dynamic(() => import('../../App'), { ssr: false })
// const App = dynamic(() => import('../../src/App'), { ssr: false }) 

// export function ClientOnly() {
//   return <App />
// }

'use client';

import React from 'react';

export function ClientOnly({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
