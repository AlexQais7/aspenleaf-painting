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
      <body>{children}</body>
    </html>
  );
}
