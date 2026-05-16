/**
 * JSON-LD Structured Data for Harjivan Hospital
 *
 * Implements:
 * - LocalBusiness / MedicalOrganization
 * - Physician (Dr. Vishvamitra Patel)
 * - BreadcrumbList (per page)
 * - FAQPage (for home)
 *
 * Usage:
 *   import { HospitalJsonLd, PhysicianJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/site/json-ld"
 *   <HospitalJsonLd />  - in layout or home page
 *   <BreadcrumbJsonLd items={[...]} />  - in each page
 */

const BASE_URL = "https://www.harjivanhospital.com"

export function HospitalJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalOrganization", "LocalBusiness"],
        "@id": `${BASE_URL}/#hospital`,
        name: "Harjivan Hospital",
        alternateName: "Harjivan AYUSH Hospital",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/android-chrome-512x512.png`,
          width: 512,
          height: 512,
        },
        image: `${BASE_URL}/og-image.jpg`,
        description:
          "Harjivan Hospital is NABH certified AYUSH hospital in Sector-26, Gandhinagar offering authentic Panchkarma & Ksharsutra treatment since 1994.",
        foundingDate: "1994",
        medicalSpecialty: [
          "Ayurveda",
          "Panchkarma",
          "Ksharsutra",
          "Naturopathy",
          "Yoga",
        ],
        numberOfBeds: 30,
        accreditation: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "accreditation",
          name: "NABH Accreditation",
          recognizedBy: {
            "@type": "Organization",
            name: "National Accreditation Board for Hospitals & Healthcare Providers (NABH)",
          },
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "3rd Floor, Sharan Business, Nr. D-Mart, Sector-26",
          addressLocality: "Gandhinagar",
          addressRegion: "Gujarat",
          postalCode: "382028",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.256086,
          longitude: 72.6391735,
        },
        hasMap: "https://maps.app.goo.gl/example",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+91-96240-44999",
            availableLanguage: ["English", "Gujarati", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            contactType: "emergency",
            telephone: "+91-96240-44999",
            availableLanguage: ["English", "Gujarati", "Hindi"],
          },
        ],
        sameAs: [
          // Add social profile URLs when available
        ],
        areaServed: {
          "@type": "City",
          name: "Gandhinagar",
        },
        priceRange: "₹",
        currenciesAccepted: "INR",
        paymentAccepted: ["Cash", "Credit Card", "Debit Card", "UPI"],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function PhysicianJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${BASE_URL}/doctor#physician`,
    name: "Dr. Vishvamitra Patel",
    jobTitle: "Ayurvedic Specialist",
    description:
      "Dr. Vishvamitra Patel (B.A.M.S, D.A.K, P.G.D.I.P) is an expert in Panchkarma and Ksharsutra therapy with 30+ years of experience. Registration No. GBI-11609.",
    image: `${BASE_URL}/doctor.jpeg`,
    url: `${BASE_URL}/doctor`,
    medicalSpecialty: "Ayurveda",
    knowsAbout: [
      "Panchkarma",
      "Ksharsutra",
      "Piles Treatment",
      "Fistula Treatment",
      "Fissure Treatment",
      "Kshara Sutra",
    ],
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "B.A.M.S" },
      { "@type": "EducationalOccupationalCredential", name: "D.A.K" },
      { "@type": "EducationalOccupationalCredential", name: "P.G.D.I.P" },
    ],
    worksFor: {
      "@id": `${BASE_URL}/#hospital`,
      name: "Harjivan Hospital",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, Sharan Business, Nr. D-Mart, Sector-26",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      postalCode: "382028",
      addressCountry: "IN",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can piles be treated without surgery at Harjivan Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. At Harjivan Hospital, piles are treated using authentic Ksharsutra therapy - a proven Ayurvedic method that eliminates the need for conventional surgery or hospital admission.",
        },
      },
      {
        "@type": "Question",
        name: "Is Harjivan Hospital NABH certified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Harjivan Hospital is a NABH certified AYUSH hospital in Gandhinagar, Gujarat - ensuring internationally recognised standards of patient care.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the doctor at Harjivan Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Vishvamitra Patel (B.A.M.S, D.A.K, P.G.D.I.P, Reg. No. GBI-11609) is the founder and lead specialist at Harjivan Hospital, with 30+ years of experience in Panchkarma and Ksharsutra treatment.",
        },
      },
      {
        "@type": "Question",
        name: "What treatments are available at Harjivan Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Harjivan Hospital offers 60+ services including Panchkarma, Ksharsutra, Shirodhara, Kati Basti, Naturopathy, Physiotherapy, Yoga, piles treatment, fistula treatment, and fissure treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Is Harjivan Hospital open on sunday?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Harjivan Hospital is open 10AM to 2PM every day. Emergency and ambulance services are also available.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Harjivan Hospital located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Harjivan Hospital is located at 3rd Floor, Sharan Business, Nr. D-Mart, Sector-26, Gandhinagar, Gujarat - 382028.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    provider: {
      "@id": `${BASE_URL}/#hospital`,
      name: "Harjivan Hospital",
    },
    bodyLocation: "Anorectal region",
    howPerformed:
      "Authentic Ayurvedic protocols using Ksharsutra or Panchkarma methods.",
    preparation: "Consultation and grading by Dr. Vishvamitra Patel.",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
