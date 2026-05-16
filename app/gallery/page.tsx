import GalleryPage from "@/components/pages/gallery-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery - Inside Harjivan Hospital, Gandhinagar",
  description:
    "Explore the facilities, therapy rooms, and treatment areas at Harjivan Hospital, Gandhinagar. A 30-bedded NABH certified AYUSH hospital with modern Panchkarma infrastructure.",
  keywords: [
    "Harjivan Hospital gallery",
    "Panchkarma therapy room Gandhinagar",
    "Ayurveda hospital photos Gandhinagar",
    "Harjivan Hospital facility",
  ],
  alternates: {
    canonical: "https://www.harjivanhospital.com/gallery",
  },
  openGraph: {
    title: "Gallery | Harjivan Hospital Gandhinagar",
    description:
      "Photos of facilities and treatment areas at Harjivan Hospital, Gandhinagar.",
    url: "https://www.harjivanhospital.com/gallery",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harjivan Hospital Gallery",
      },
    ],
  },
  twitter: {
    title: "Gallery | Harjivan Hospital Gandhinagar",
    description: "Photos of our facilities and treatment areas.",
    images: ["/og-image.jpg"],
  },
}

export default function Gallery() {
  return <GalleryPage />
}
