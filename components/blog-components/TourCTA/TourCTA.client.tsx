"use client"

// components/TourCTA/TourCTA.client.tsx
import dynamic from 'next/dynamic'

// 1) Log when the dynamic wrapper is evaluated
// console.log('🔧 [TourCTA.client] wrapper module loaded')

// Dynamically import your index.tsx TourCTA component, SSR disabled
export default dynamic(() => import('./index'), {
  ssr: false,
  loading: () => <div>Loading…</div>,
})
