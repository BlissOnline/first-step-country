import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap"
          rel="stylesheet"
        />
        {/* …other global head tags… */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>W
    </Html>
  )
}
