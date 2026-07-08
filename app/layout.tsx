import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
// import { AmbulanceFab } from "@/components/site/ambulance-fab"
import { EbookFab } from "@/components/site/ebook-fab"
import { HospitalJsonLd } from "@/components/site/json-ld"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
const algeriaFonts = localFont({
  src: "algerian-regular.ttf",
  variable: "--font-algerian",
})
const BASE_URL = "https://www.harjivanhospital.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Harjivan Hospital - First NABH Certified AYUSH Hospital in Gandhinagar",
    template: "%s | Harjivan Hospital, Gandhinagar",
  },
  description:
    "Harjivan Hospital is a 30-bedded NABH certified AYUSH hospital in Sector-26, Gandhinagar. Authentic Panchkarma & Ksharsutra treatment since 1994. Piles, Fistula, Fissure treated without admission or surgery. Dr. Vishvamitra Patel.",
  keywords: [
    "Harjivan Hospital",
    "First NABH certified hospital Gandhinagar",
    "AYUSH hospital Gandhinagar",
    "Panchkarma treatment Gandhinagar",
    "Ksharsutra treatment",
    "piles treatment without operation Gandhinagar",
    "fistula treatment Ayurveda",
    "fissure treatment",
    "Dr Vishvamitra Patel",
    "Ayurveda hospital Gandhinagar",
    "piles treatment Gandhinagar",
    "Kshara Sutra therapy",
    "30 bed hospital Gandhinagar",
    "Sector 26 Gandhinagar hospital",
  ],
  authors: [{ name: "Dr. Vishvamitra Patel", url: BASE_URL }],
  creator: "Harjivan Hospital",
  publisher: "Harjivan Hospital",
  applicationName: "Harjivan Hospital",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.ico",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Harjivan Hospital",
    title:
      "Harjivan Hospital - First NABH Certified AYUSH Hospital in Gandhinagar",
    description:
      "30-bedded NABH certified AYUSH hospital. Authentic Panchkarma & Ksharsutra treatment since 1994. Piles treated without surgery in Gandhinagar.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harjivan Hospital - First NABH Certified AYUSH Hospital in Gandhinagar",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Harjivan Hospital - First NABH Certified AYUSH Hospital in Gandhinagar",
    description:
      "30-bedded NABH certified AYUSH hospital. Panchkarma & Ksharsutra treatment since 1994. Piles without surgery.",
    images: ["/og-image.jpg"],
    creator: "@harjivanhospital",
    site: "@harjivanhospital",
  },
  verification: {
    // Add Google / Bing site verification tokens here when ready
    // google: "your-google-verification-code",
    // other: { "msvalidate.01": "your-bing-verification-code" },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-IN": BASE_URL,
    },
  },
  category: "health",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        algeriaFonts.variable,
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className="font-sans">
        <ThemeProvider>
          <HospitalJsonLd />
          <Navbar />
          {children}
          <Footer />
          <EbookFab />
          {/* <AmbulanceFab /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
