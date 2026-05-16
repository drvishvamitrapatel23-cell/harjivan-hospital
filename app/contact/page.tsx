import ContactPage from "@/components/pages/contact-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact & Appointments - Book Consultation Today",
  description:
    "Contact Harjivan Hospital in Sector-26, Gandhinagar. Book an appointment with Dr. Vishvamitra Patel for Panchkarma, Ksharsutra, piles, fistula, or fissure treatment. 10AM to 2PM.",
  keywords: [
    "contact Harjivan Hospital",
    "book appointment Gandhinagar Ayurveda",
    "piles treatment appointment Gandhinagar",
    "Harjivan Hospital phone number",
    "Harjivan Hospital address Sector 26",
    "Dr Vishvamitra Patel appointment",
  ],
  alternates: {
    canonical: "https://www.harjivanhospital.com/contact",
  },
  openGraph: {
    title: "Contact Harjivan Hospital | Book Appointment in Gandhinagar",
    description:
      "Book a consultation at Harjivan Hospital, Sector-26 Gandhinagar. 10AM to 2PM. Piles, fistula, fissure & Panchkarma treatment.",
    url: "https://www.harjivanhospital.com/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Harjivan Hospital",
      },
    ],
  },
  twitter: {
    title: "Contact Harjivan Hospital | Gandhinagar",
    description:
      "Book an appointment. 10AM to 2PM. Panchkarma & Ksharsutra treatment.",
    images: ["/og-image.jpg"],
  },
}

export default function Contact() {
  return <ContactPage />
}
