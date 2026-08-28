import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["700"] });

export const metadata: Metadata = {
  title: "Arivazhagan Pandiyan | SRE Lead / Senior SRE",
  description:
    "Site Reliability Engineering professional with 11+ years of experience in cloud infrastructure, observability, and incident management.",
  openGraph: {
    type: "website",
    url: "https://www.arivu.site/",
    title: "Arivazhagan Pandiyan - SRE Lead / Senior SRE",
    description:
      "Site Reliability Engineering professional with 11+ years of experience in cloud infrastructure, observability, and incident management.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arivazhagan Pandiyan - SRE Lead / Senior SRE",
    description:
      "Site Reliability Engineering professional with 11+ years of experience in cloud infrastructure, observability, and incident management.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%232563eb'/><text x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-family='Inter,sans-serif' font-size='13' font-weight='700'>AP</text></svg>"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Arivazhagan Pandiyan",
          url: "https://www.arivu.site",
          jobTitle: "Site Reliability Engineering Lead / Senior SRE",
          email: "arivu.p@live.in",
          telephone: "+13465990347",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Houston",
            addressRegion: "TX",
            addressCountry: "US",
          },
          sameAs: ["https://www.linkedin.com/in/arivazhagan-pandiyan"],
        }) }} />
      </head>
      <body className="font-sans bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
