// pages/_app.tsx
// import '../styles/global.css'
// import type { AppProps } from 'next/app'
// import Layout from '@/components/Layout/Layout'

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }

// pages/_app.tsx
import '../styles/global.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* copy everything you need from pages/_document.tsx here: */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?
            family=Merriweather:wght@300;400;700;900&
            family=Noto+Sans:wght@100..900&
            family=Playpen+Sans:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="https://www.googletagmanager.com/gtag/js?id=G-Y2JDHJHYSN"
          as="script"
        />
        <link rel="icon" href="/lamp 40px no spark.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "WebSite", name: "First Step Country", url: "https://firststepcountry.com/" },
              /* …other schema entries… */
            ],
          })}
        </script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

