import type { Metadata } from "next";
import "../src/styles/global.css";

export const metadata: Metadata = {
  title: "First Step Country",
  description: "Fun short questionnaire to find countries based on needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "name": "First Step Country",
                "url": "https://firststepcountry.com/",
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does the quiz help me find a travel destination?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text":
                        "The quiz analyzes your travel preferences to suggest the best country for your next adventure.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Is the quiz free to use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes! The quiz is completely free to use.",
                    },
                  },
                ],
              },
            ],
          })}
        </script>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y2JDHJHYSN"></script>
        <script
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
  );
}
