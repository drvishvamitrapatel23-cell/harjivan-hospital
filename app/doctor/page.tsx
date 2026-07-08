import DoctorPage from "@/components/pages/doctor-page"
import type { Metadata } from "next"
import { PhysicianJsonLd, BreadcrumbJsonLd } from "@/components/site/json-ld"

export const metadata: Metadata = {
  title:
    "Dr. Vishvamitra Patel - B.A.M.S, D.A.K, P.G.D.I.P | Ayurvedic Specialist",
  description:
    "Meet Dr. Vishvamitra Patel (B.A.M.S, D.A.K, P.G.D.I.P), founder of Harjivan Hospital, Gandhinagar. An expert in Panchkarma & Ksharsutra therapy with 30+ years experience. Reg. No. GBI-11609.",
  keywords: [
    "Dr Vishvamitra Patel",
    "Ayurvedic doctor Gandhinagar",
    "B.A.M.S doctor Gandhinagar",
    "Ksharsutra specialist Gujarat",
    "Panchkarma expert Gandhinagar",
    "piles specialist Gandhinagar",
    "fistula doctor Gandhinagar",
    "GBI-11609 registration",
  ],
  alternates: {
    canonical: "https://www.harjivanhospital.com/doctor",
  },
  openGraph: {
    title: "Dr. Vishvamitra Patel | Ayurvedic Specialist at Harjivan Hospital",
    description:
      "B.A.M.S, D.A.K, P.G.D.I.P specialist. 30+ years of Panchkarma & Ksharsutra treatment. Founder of Harjivan Hospital, Gandhinagar.",
    url: "https://www.harjivanhospital.com/doctor",
    images: [
      {
        url: "/doctor.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Vishvamitra Patel - Ayurvedic Specialist",
      },
    ],
  },
  twitter: {
    title: "Dr. Vishvamitra Patel | Ayurvedic Specialist",
    description:
      "B.A.M.S, D.A.K, P.G.D.I.P. 30+ years of Panchkarma & Ksharsutra treatment.",
    images: ["/doctor.jpeg"],
  },
}

export default function Doctor() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.harjivanhospital.com" },
          { name: "Doctor", url: "https://www.harjivanhospital.com/doctor" },
        ]}
      />
      <PhysicianJsonLd />
      <DoctorPage />
    </>
  )
}
