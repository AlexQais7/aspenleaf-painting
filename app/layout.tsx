import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "House Painters Calgary | AspenLeaf Painting",
  description: "Professional house painters Calgary for interior & exterior painting. Licensed, insured, 2-year warranty. Free estimates today!",
  alternates: { canonical: "https://www.aspenleafpainting.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2d6a4f" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NXMSFX5WT9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NXMSFX5WT9');
        `}
      </Script>
      <Script id="local-business-schema" type="application/ld+json" strategy="beforeInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Painter",
            "name": "AspenLeaf Painting",
            "image": "https://res.cloudinary.com/dile6kx4g/image/upload/w_1200,q_60,f_jpg/logo_transparent_i5re94.jpg",
            "url": "https://www.aspenleafpainting.com",
            "telephone": "+18252887557",
            "email": "alex@aspenleafpainting.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "94 Cougarstone Ct SW",
              "addressLocality": "Calgary",
              "addressRegion": "AB",
              "postalCode": "T3H 5R3",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 51.0447,
              "longitude": -114.1719
            },
            "areaServed": [
              { "@type": "City", "name": "Calgary" },
              { "@type": "Place", "name": "Cougar Ridge" },
              { "@type": "Place", "name": "Aspen Woods" },
              { "@type": "Place", "name": "West Springs" },
              { "@type": "Place", "name": "Springbank Hill" },
              { "@type": "Place", "name": "Signal Hill" },
              { "@type": "Place", "name": "Coach Hill" },
              { "@type": "Place", "name": "Glamorgan" },
              { "@type": "Place", "name": "Glenbrook" },
              { "@type": "Place", "name": "Lakeview" },
              { "@type": "Place", "name": "Nolan Hill" },
              { "@type": "Place", "name": "Tuscany" },
              { "@type": "Place", "name": "Evanston" },
              { "@type": "Place", "name": "Mahogany" },
              { "@type": "Place", "name": "Auburn Bay" },
              { "@type": "Place", "name": "Cranston" }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "16:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "12"
            }
          }
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
