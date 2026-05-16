import LandingPage from "@/components/pages/landing-page"
import type { Metadata } from "next"
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/site/json-ld"

export const metadata: Metadata = {
  title:
    "Harjivan Hospital - First NABH Certified AYUSH Hospital in Gandhinagar | Piles Without Surgery",
  description:
    "Harjivan Hospital, Gandhinagar - India's trusted NABH certified AYUSH hospital since 1994. Expert piles, fistula, and fissure treatment without surgery. Authentic Panchkarma & Ksharsutra. Dr. Vishvamitra Patel (B.A.M.S, D.A.K, P.G.D.I.P).",
  keywords: [
    "Harjivan Hospital Gandhinagar",
    "piles treatment without surgery Gandhinagar",
    "First NABH hospital Gandhinagar",
    "AYUSH hospital Gandhinagar",
    "Panchkarma treatment Gandhinagar",
    "Ksharsutra treatment Gandhinagar",
    "piles hospital Gandhinagar",
    "fistula treatment Gandhinagar",
    "fissure treatment Gandhinagar",
    "Dr Vishvamitra Patel",
    "best hospital Gandhinagar",
    "Sector 26 Gandhinagar hospital",
    "30 bed hospital Gandhinagar",
  ],
  alternates: {
    canonical: "https://www.harjivanhospital.com",
  },
  openGraph: {
    title:
      "Harjivan Hospital - Piles Without Surgery | NABH Certified, Gandhinagar",
    description:
      "NABH certified AYUSH hospital since 1994. Expert piles, fistula & fissure treatment without surgery. Authentic Panchkarma & Ksharsutra.",
    url: "https://www.harjivanhospital.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harjivan Hospital - First NABH Certified AYUSH Hospital in Gandhinagar",
      },
    ],
  },
  twitter: {
    title: "Harjivan Hospital | Piles Without Surgery, Gandhinagar",
    description:
      "NABH certified AYUSH hospital since 1994. Piles, Fistula & Panchkarma without major surgery.",
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Home", url: "https://www.harjivanhospital.com" }]}
      />
      <FaqJsonLd />
      <LandingPage />
    </>
  )
}
