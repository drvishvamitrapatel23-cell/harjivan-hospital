import AboutPage from "@/components/pages/about-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - First NABH Certified AYUSH Hospital Since 1994",
  description:
    "Learn about Harjivan Hospital - NABH certified AYUSH hospital in Sector-26, Gandhinagar run by Dr. Vishvamitra Patel since 1994. Serving 19 lakh+ population with authentic Panchkarma & Ksharsutra treatment.",
  keywords: [
    "about Harjivan Hospital",
    "First NABH certified hospital Gandhinagar",
    "Dr Vishvamitra Patel B.A.M.S",
    "AYUSH hospital since 1994",
    "Panchkarma hospital Gandhinagar",
    "Sector 26 Gandhinagar",
  ],
  alternates: {
    canonical: "https://www.harjivanhospital.com/about",
  },
  openGraph: {
    title:
      "About Harjivan Hospital | First NABH Certified, Gandhinagar since 1994",
    description:
      "NABH certified AYUSH hospital in Gandhinagar run by Dr. Vishvamitra Patel since 1994. Authentic Panchkarma & Ksharsutra treatment.",
    url: "https://www.harjivanhospital.com/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Harjivan Hospital",
      },
    ],
  },
  twitter: {
    title: "About Harjivan Hospital | First NABH Certified since 1994",
    description:
      "NABH certified AYUSH hospital. Authentic Panchkarma since 1994.",
    images: ["/og-image.jpg"],
  },
}

export default function About() {
  return <AboutPage />
}
