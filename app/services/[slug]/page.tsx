import ServiceDetailPage from "@/components/pages/service-detail-page"
import { getService, SERVICES } from "@/lib/services-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/site/json-ld"

const BASE_URL = "https://www.harjivanhospital.com"

// Maps slugs to extra keywords for richer SEO
const SERVICE_KEYWORDS: Record<string, string[]> = {
  piles: [
    "piles treatment Gandhinagar",
    "haemorrhoids treatment Ayurveda",
    "piles without operation Gandhinagar",
    "Ksharsutra piles",
    "day-care piles treatment",
    "laser piles treatment Gandhinagar",
  ],
  fissure: [
    "anal fissure treatment Gandhinagar",
    "fissure treatment Ayurveda",
    "chronic fissure cure Gandhinagar",
    "fissure without surgery",
  ],
  fistula: [
    "fistula treatment Gandhinagar",
    "anal fistula Ayurveda treatment",
    "Kshara Sutra fistula Gandhinagar",
    "fistula without surgery Gujarat",
  ],
  "kshara-sutra": [
    "Kshara Sutra therapy Gandhinagar",
    "Kshar Sutra treatment Gujarat",
    "Ayurvedic surgery Gandhinagar",
    "Ksharsutra specialist Gujarat",
  ],
  "pilonidal-sinus": [
    "pilonidal sinus treatment Gandhinagar",
    "pilonidal cyst surgery Gujarat",
    "pilonidal sinus Ayurveda",
    "sinus treatment without surgery",
  ],
  "ulcerative-colitis": [
    "ulcerative colitis Ayurveda treatment Gandhinagar",
    "IBD treatment Gujarat",
    "colitis Panchkarma therapy",
    "Basti therapy colitis",
  ],
  "laser-therapy": [
    "laser piles treatment Gandhinagar",
    "laser fistula surgery Gujarat",
    "advance laser therapy anorectal",
    "laser fissure treatment",
  ],
  panchkarma: [
    "Panchkarma therapy Gandhinagar",
    "Panchkarma centre Gujarat",
    "Vamana Virechana Basti Nasya Shirodhara",
    "Ayurvedic detox Gandhinagar",
    "Panchakarma treatment near me",
  ],
  "chronic-constipation": [
    "chronic constipation Ayurveda treatment Gandhinagar",
    "Juni Kabjiyat treatment",
    "constipation Panchkarma",
    "Basti therapy constipation Gujarat",
  ],
  "allopathic-scope": [
    "general surgery Gandhinagar",
    "hernia surgery Gandhinagar",
    "surgical care Gujarat",
    "NABH hospital Gandhinagar general surgery",
  ],
  "eecp-therapy": [
    "EECP therapy Gandhinagar",
    "Enhanced External Counterpulsation Gujarat",
    "non-invasive heart treatment Gandhinagar",
    "natural bypass therapy Gujarat",
    "cardiac EECP near me",
    "angina treatment without surgery Gandhinagar",
  ],
  padabhyanga: [
    "Padabhyanga Gandhinagar",
    "Ayurvedic foot massage Gujarat",
    "medicated foot therapy Ayurveda",
    "marma foot massage Gandhinagar",
    "diabetic neuropathy foot therapy",
  ],
  "heart-reversal": [
    "heart reversal programme Gandhinagar",
    "coronary artery disease reversal Ayurveda",
    "heart disease natural treatment Gujarat",
    "bypass alternative Gandhinagar",
    "Hridaya Basti cardiac therapy",
    "Ornish heart reversal India",
  ],
  "skin-care": [
    "skin disease treatment Ayurveda Gandhinagar",
    "psoriasis Ayurveda treatment Gujarat",
    "eczema treatment Gandhinagar",
    "acne Ayurvedic treatment Gujarat",
    "vitiligo treatment Gandhinagar",
    "Raktamokshan skin care",
    "Virechana skin purification",
  ],
  "hair-removal": [
    "laser hair removal Gandhinagar",
    "permanent hair removal Gujarat",
    "PCOS hirsutism treatment Gandhinagar",
    "Diode laser hair removal Gujarat",
    "ingrown hair treatment Gandhinagar",
    "hair removal clinic near me",
  ],
  "diabetes-management": [
    "diabetes management Ayurveda Gandhinagar",
    "Type 2 diabetes reversal Gujarat",
    "HbA1c reduction Ayurveda",
    "diabetes Panchkarma therapy",
    "blood sugar control Gandhinagar",
    "pre-diabetes treatment Ayurveda",
    "Chandraprabha Vati diabetes",
  ],
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  const canonical = `${BASE_URL}/services/${slug}`
  const extraKeywords = SERVICE_KEYWORDS[slug] ?? []

  return {
    title: `${service.title} in Gandhinagar - ${service.tagline}`,
    description: `${service.desc} Expert ${service.title.toLowerCase()} at Harjivan Hospital, Sector-26, Gandhinagar. NABH certified AYUSH hospital. ${service.recovery}`,
    keywords: [
      service.title,
      ...extraKeywords,
      "Dr Vishvamitra Patel",
      "Harjivan Hospital",
      "NABH certified",
    ],
    alternates: { canonical },
    openGraph: {
      title: `${service.title} in Gandhinagar | Harjivan Hospital`,
      description: service.desc,
      url: canonical,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      title: `${service.title} | Harjivan Hospital Gandhinagar`,
      description: service.desc,
      images: [service.image],
    },
  }
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) {
    return notFound()
  }
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.harjivanhospital.com" },
          {
            name: "Services",
            url: "https://www.harjivanhospital.com/services",
          },
          {
            name: service.title,
            url: `https://www.harjivanhospital.com/services/${slug}`,
          },
        ]}
      />
      <ServiceJsonLd
        name={service.title}
        description={service.desc}
        url={`https://www.harjivanhospital.com/services/${slug}`}
      />
      <ServiceDetailPage slug={slug} />
    </>
  )
}
