import ServicesPage from "@/components/pages/services-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Treatments - Piles, Fissure, Fistula & Kshara Sutra",
  description:
    "Harjivan Hospital specializes in piles, fissure, fistula, and Kshara Sutra treatments in Gandhinagar. Day-care procedures, no major surgery, authentic Ayurvedic protocols. Book today.",
  keywords: [
    "piles treatment Gandhinagar",
    "fistula treatment Ayurveda",
    "fissure treatment Gandhinagar",
    "Kshara Sutra treatment Gujarat",
    "ano-rectal treatment Gandhinagar",
    "day-care piles surgery Gandhinagar",
    "AYUSH hospital treatments",
  ],
  alternates: {
    canonical: "https://www.harjivanhospital.com/services",
  },
  openGraph: {
    title:
      "Treatments | Piles, Fissure, Fistula & Kshara Sutra - Harjivan Hospital",
    description:
      "Day-care Ayurvedic treatments for piles, fissure, fistula & Kshara Sutra. No major surgery. Gandhinagar.",
    url: "https://www.harjivanhospital.com/services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Treatments at Harjivan Hospital",
      },
    ],
  },
  twitter: {
    title: "Treatments | Piles, Fissure, Fistula & Kshara Sutra",
    description: "Day-care Ayurvedic treatments. No major surgery.",
    images: ["/og-image.jpg"],
  },
}

export default function Services() {
  return <ServicesPage />
}
