import ScopePage from "@/components/pages/scope-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Scope of Services - Panchkarma, Ksharsutra & 60+ Therapies",
  description:
    "Harjivan Hospital offers 60+ Ayurvedic services including Kshar Sutra, Panchkarma, Shirodhara, Kati Basti, Naturopathy, Yoga, Physiotherapy, and more. NABH certified AYUSH hospital in Gandhinagar.",
  keywords: [
    "Panchkarma treatment list",
    "Ksharsutra therapy",
    "Shirodhara Gandhinagar",
    "Kati Basti therapy",
    "Naturopathy hospital Gandhinagar",
    "Yoga therapy Gandhinagar",
    "Ayurveda therapies list",
    "AYUSH hospital services",
    "Harjivan Hospital services",
  ],
  alternates: {
    canonical: "https://www.harjivanhospital.com/scope-of-services",
  },
  openGraph: {
    title: "Scope of Services | 60+ Ayurvedic Therapies at Harjivan Hospital",
    description:
      "Complete list of Ayurvedic services at Harjivan Hospital: Panchkarma, Ksharsutra, Shirodhara, Physiotherapy, Yoga & more. NABH certified.",
    url: "https://www.harjivanhospital.com/scope-of-services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scope of Services at Harjivan Hospital",
      },
    ],
  },
  twitter: {
    title: "Scope of Services | 60+ Therapies at Harjivan Hospital",
    description:
      "Panchkarma, Ksharsutra, Shirodhara, Physiotherapy, Yoga & more.",
    images: ["/og-image.jpg"],
  },
}

export default function ScopeOfServices() {
  return <ScopePage />
}
