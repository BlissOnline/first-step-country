// app/layout.tsx

import "../styles/global.css"
import Layout from "@/components/Layout/Layout"
import { QuizProvider } from "@/components/context/QuizContext"
import Script from "next/script"

// ➊ Import your client-only MDX wrapper
// import MDXClientProvider from "@/components/blog-components/MDXClientProvider"

export const viewport = {
  themeColor: "#f0e0d5",
}

export const metadata = {
  title: "Find Your Ideal Travel Destination | Personalized Quiz",
  description:
    "Discover the best country for your next adventure with our fun, personalized quiz!",
  icons: {
    icon: "/lamp 40px no spark.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Find Your Ideal Travel Destination – Take the Quiz!",
    description:
      "Answer a few questions and uncover the perfect country for your next adventure.",
    images: [
      {
        url: "https://firststepcountry.com/ppm-graphic.png",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://firststepcountry.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Ideal Travel Destination – Take the Quiz!",
    description:
      "Answer a few questions and uncover the perfect country for your next adventure.",
    images: ["https://firststepcountry.com/ppm-graphic.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts Optimized via next/font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Noto+Sans:wght@100..900&family=Playpen+Sans:wght@100..800&display=swap"
          rel="stylesheet"
        />

        {/* Preload Google Tag Manager */}
        <link
          rel="preload"
          href="https://www.googletagmanager.com/gtag/js?id=G-Y2JDHJHYSN"
          as="script"
        />

        {/* Favicon */}
        <link rel="icon" href="/lamp 40px no spark.svg" />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "First Step Country",
                url: "https://firststepcountry.com/",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How does the quiz help me find a travel destination?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "The quiz analyzes your travel preferences to suggest the best countries for your next adventure.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is the quiz free to use?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes! The quiz is completely free to use and has no sign-up.",
                    },
                  },
                ],
              },
            ],
          })}
        </script>
      </head>

      <body className="global-body">
        <QuizProvider>
          <Layout>{children}</Layout>
          {/* ➌ Wrap your app in the client-side MDX provider */}
          {/* <MDXClientProvider>
            <Layout>{children}</Layout>
          </MDXClientProvider> */}
        </QuizProvider>

        {/* Google Analytics via next/script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y2JDHJHYSN"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y2JDHJHYSN');
            `,
          }}
        />
      </body>
    </html>
)
}
