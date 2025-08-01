// pages/_app.tsx
import '../styles/global.css'    // your CSS variables, colors, and manual @import for fonts
import Head from 'next/head'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* If you still need to preload fonts or other head tags for pages */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
          rel="stylesheet"
        />
        {/* Noto Sans Georgian */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@300;400;700&display=swap"
          rel="stylesheet"
        />

      </Head>
      <Component {...pageProps} />
    </>
  )
}
