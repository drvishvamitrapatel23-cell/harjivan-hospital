import {
  HeartPulse,
  Activity,
  Sparkles,
  Leaf,
  Zap,
  Wind,
  Heart,
  FlowerIcon,
  Stethoscope,
  type LucideIcon,
} from "lucide-react"

export type PanchkarmaTherapy = {
  name: string
  description: string
}

export type Service = {
  slug:
  | "piles"
  | "fissure"
  | "fistula"
  | "kshara-sutra"
  | "pilonidal-sinus"
  | "ulcerative-colitis"
  | "laser-therapy"
  | "panchkarma"
  | "wellness-programs"
  | "chronic-constipation"
  | "allopathic-scope"
  title: string
  tagline: string
  image: string
  icon: LucideIcon
  desc: string
  symptoms: string[]
  approach: string
  benefits: string[]
  procedure: string[]
  recovery: string
  /** Only present for the Panchkarma service */
  panchkarmaDetails?: {
    coreTherapies: PanchkarmaTherapy[]
    otherTreatments: string[]
  }
}

export const SERVICES: Service[] = [
  {
    slug: "kshara-sutra",
    title: "Kshar Sutra Therapy",
    tagline: "Ancient wisdom, modern precision",
    image: "/services/service-kshara.jpg",
    icon: Leaf,
    desc: "An Ayurvedic medicated thread therapy - recognised by the WHO and ICMR for its efficacy in fistula and selected piles cases. Gentle, ambulatory, and remarkably effective.",
    symptoms: [
      "Recurring fistula tracts",
      "Patients seeking non-major-surgery options",
      "Failed prior surgical attempts",
      "Complex or high anal fistula",
    ],
    approach:
      "A specially prepared medicated thread is gently placed through the fistula tract. The thread simultaneously cuts and heals as it works, replaced weekly under local anaesthesia until the tract is fully resolved.",
    benefits: [
      "No major surgery or general anaesthesia",
      "Outpatient - walk in, walk out",
      "Minimal downtime",
      "Excellent long-term cure rates",
      "Sphincter function fully preserved",
    ],
    procedure: [
      "Initial assessment & tract mapping",
      "Thread insertion under local anaesthesia",
      "Weekly thread changes (5–10 min visits)",
      "Continuous progress monitoring",
      "Discharge once tract is healed",
    ],
    recovery:
      "You return to normal daily activity within hours of each session.",
  },
  {
    slug: "piles",
    title: "Piles Treatment",
    tagline: "Painless, day-care relief",
    image: "/services/service-piles.jpg",
    icon: HeartPulse,
    desc: "Painless, day-care procedures for internal and external piles using laser and minimally invasive techniques. Most patients return to normal routine within 24–48 hours.",
    symptoms: [
      "Bleeding while passing stool",
      "Itching or discomfort around the anus",
      "A lump near the anus",
      "Pain during bowel movement",
      "Mucus discharge after stools",
    ],
    approach:
      "We start with a detailed evaluation to grade the piles and rule out other conditions. Early grades are managed conservatively with diet, fibre and topical medication. Advanced grades are treated with laser haemorrhoidoplasty or MIPH - both done as day-care procedures under short anaesthesia.",
    benefits: [
      "Same-day discharge",
      "Minimal pain & no major cuts",
      "Quick return to work (24–48 hrs)",
      "Very low recurrence rates",
      "Suitable for all grades",
    ],
    procedure: [
      "Confidential consultation & grading",
      "Pre-operative blood work",
      "Day-care laser/MIPH procedure (~30 min)",
      "Same-day discharge with medications",
      "Follow-up after 7 days",
    ],
    recovery:
      "Most patients resume desk work in 1–2 days and full activity in a week.",
  },
  {
    slug: "fissure",
    title: "Fissure Treatment",
    tagline: "End the cycle of pain",
    image: "/services/service-fissure.jpg",
    icon: Activity,
    desc: "Targeted protocols to heal acute and chronic anal fissures and break the painful cycle of spasm and tearing. We focus on lasting relief, not just symptom control.",
    symptoms: [
      "Sharp pain during and after stools",
      "Bright red bleeding",
      "Persistent spasm or burning",
      "A visible tear or skin tag",
      "Constipation due to fear of pain",
    ],
    approach:
      "Acute fissures often heal with sitz baths, fibre, and topical relaxants. Chronic or recurrent fissures benefit from lateral internal sphincterotomy or Ayurvedic Kshara application - chosen based on your case for the gentlest lasting fix.",
    benefits: [
      "Lasting pain relief",
      "Heals chronic, stubborn cases",
      "Restores normal bowel comfort",
      "Outpatient procedure",
      "No major lifestyle disruption",
    ],
    procedure: [
      "Examination & history review",
      "Conservative trial (if early)",
      "Day-care sphincterotomy or Kshara application",
      "Pain management & dietary plan",
      "Follow-up at 1 & 4 weeks",
    ],
    recovery: "Pain typically subsides within days; full healing in 2–4 weeks.",
  },
  {
    slug: "fistula",
    title: "Fistula Treatment",
    tagline: "The gold-standard cure",
    image: "/services/service-fistula.jpg",
    icon: Sparkles,
    desc: "Definitive cure for anal fistula using modern surgery and Ayurvedic Kshara Sutra - internationally recognised as a gold-standard option for complex fistulae with very low recurrence.",
    symptoms: [
      "Recurrent peri-anal abscess",
      "Persistent discharge near the anus",
      "Skin irritation or itching",
      "Throbbing pain that worsens with sitting",
      "Visible external opening",
    ],
    approach:
      "We map the tract with clinical exam and MRI fistulogram when needed. Simple fistulae are treated with fistulectomy or LIFT. Complex, recurrent, or high tracts are best managed with Kshara Sutra, which preserves sphincter function and minimises recurrence.",
    benefits: [
      "Sphincter preservation",
      "Very low recurrence",
      "Suitable for complex fistulae",
      "Proven Ayurvedic option",
      "Outpatient sessions for Kshara Sutra",
    ],
    procedure: [
      "Detailed exam & MRI mapping",
      "Choice of surgery or Kshara Sutra",
      "Weekly thread changes (Kshara Sutra)",
      "Continuous wound care guidance",
      "Long-term follow-up to confirm cure",
    ],
    recovery:
      "Surgical: 2–3 weeks. Kshara Sutra: 4–8 weeks of weekly visits with normal daily life.",
  },
  // ─── New Services ────────────────────────────────────────────────────────────
  {
    slug: "pilonidal-sinus",
    title: "Pilonidal Sinus",
    tagline: "Minimally invasive, lasting cure",
    image: "/services/sinus.jpeg",
    icon: Activity,
    desc: "A pilonidal sinus is a small tunnel under the skin at the top of the buttocks cleft that can become infected. We offer both surgical and Ayurvedic options for a lasting, recurrence-free cure.",
    symptoms: [
      "Pain or swelling near the tailbone",
      "Pus or blood discharge from a pit near the tailbone",
      "A foul-smelling odour from the area",
      "Redness and tenderness around the coccyx",
      "Recurring abscess or boil in the area",
    ],
    approach:
      "After clinical examination and any required imaging, mild cases may be managed with meticulous hygiene and Kshara application. Recurrent or complex sinuses are treated with minimally invasive sinusectomy or Kshara Sutra, dramatically reducing the recurrence rate compared to wide excision.",
    benefits: [
      "Minimally invasive options available",
      "Very low recurrence with proper technique",
      "Ayurvedic & surgical options",
      "Outpatient or short-stay procedure",
      "Minimal scarring",
    ],
    procedure: [
      "Detailed examination & tract assessment",
      "Selection of Kshara Sutra or surgical excision",
      "Day-care or short-stay procedure",
      "Wound care instructions & follow-up",
      "Long-term surveillance to confirm healing",
    ],
    recovery: "Most patients resume normal activity within 1–2 weeks.",
  },
  {
    slug: "ulcerative-colitis",
    title: "Ulcerative Colitis",
    tagline: "Holistic care for lasting remission",
    image: "/services/ulcerative-colitis.png",
    icon: Wind,
    desc: "Ulcerative colitis is a chronic inflammatory bowel disease affecting the colon. Our integrated Ayurvedic and modern approach aims to reduce flares, heal the gut lining, and achieve sustained remission.",
    symptoms: [
      "Frequent, urgent diarrhoea with blood or mucus",
      "Abdominal cramps and pain",
      "Fatigue and unintended weight loss",
      "Fever during flares",
      "Anaemia due to chronic blood loss",
    ],
    approach:
      "Treatment is guided by disease severity and extent. Mild-to-moderate disease is managed with anti-inflammatory medicines, dietary counselling, and Panchkarma therapies such as Basti (medicated enemas) to directly heal the colonic mucosa. Severe or refractory cases are referred appropriately.",
    benefits: [
      "Reduce frequency of flares",
      "Heal colonic mucosa with Ayurvedic Basti",
      "Improve quality of life",
      "Drug-sparing approach where possible",
      "Holistic diet & lifestyle guidance",
    ],
    procedure: [
      "Comprehensive consultation & dietary assessment",
      "Colonoscopy referral if needed",
      "Medicated Basti therapy course",
      "Dietary & lifestyle modification plan",
      "Regular monitoring & maintenance therapy",
    ],
    recovery:
      "Remission is the goal; most patients see significant improvement within 4–8 weeks of treatment.",
  },
  {
    slug: "laser-therapy",
    title: "Advance Laser Therapy",
    tagline: "Precision, speed, less pain",
    image: "/services/service-piles.jpg",
    icon: Zap,
    desc: "State-of-the-art laser technology for the treatment of piles, fissures, fistulas, and pilonidal sinus. Laser therapy offers pinpoint precision, minimal blood loss, and dramatically faster recovery.",
    symptoms: [
      "Piles (haemorrhoids) of grade 2 and above",
      "Chronic anal fissure",
      "Anal fistula (simple and selected complex)",
      "Pilonidal sinus",
      "Patients preferring minimal downtime",
    ],
    approach:
      "Using a focused laser beam, diseased tissue is precisely ablated or sealed with minimal collateral damage. The procedure is performed under short general or spinal anaesthesia in a day-care setting, with patients typically going home within hours.",
    benefits: [
      "Virtually bloodless procedure",
      "Minimal post-operative pain",
      "Same-day discharge",
      "Very low risk of incontinence",
      "Suitable for all ages",
    ],
    procedure: [
      "Pre-operative assessment & anaesthesia planning",
      "Laser procedure under anaesthesia (~20–40 min)",
      "Recovery room observation (1–2 hours)",
      "Same-day discharge with pain medications",
      "Follow-up at 1 week and 1 month",
    ],
    recovery: "Return to desk work in 1–3 days; full activity within a week.",
  },
  {
    slug: "panchkarma",
    title: "Panchkarma Therapy",
    tagline: "Deep detox, total renewal",
    image: "/services/panchkarma.png",
    icon: Leaf,
    desc: "Panchkarma is Ayurveda's premier five-fold detoxification and rejuvenation programme. Under the expert guidance of Dr. Vishvamitra Patel, personalised Panchkarma protocols cleanse the body at the deepest cellular level, restore doshic balance, and revitalise overall health.",
    symptoms: [
      "Chronic digestive disorders",
      "Stress, anxiety, and fatigue",
      "Skin conditions and allergies",
      "Joint pain and stiffness",
      "Lifestyle diseases (diabetes, hypertension)",
      "Desire for holistic detoxification and rejuvenation",
    ],
    approach:
      "Panchkarma begins with Poorva Karma (preparatory procedures - Snehana oil therapy and Swedana fomentation) to loosen toxins, followed by the main Pradhan Karma therapies tailored to the individual constitution (Prakriti) and imbalance (Vikriti). Post-treatment Paschat Karma ensures the body is nourished and rejuvenated.",
    benefits: [
      "Deep cellular detoxification",
      "Restores natural doshic balance",
      "Improves digestion and metabolism",
      "Relieves chronic pain and stiffness",
      "Enhances immunity and vitality",
      "Mental clarity and stress relief",
    ],
    procedure: [
      "Detailed Ayurvedic consultation & Prakriti assessment",
      "Poorva Karma: Snehana (internal & external oleation) + Swedana (herbal steam)",
      "Pradhan Karma: personalised main therapy (Vamana / Virechana / Basti / Nasya / Shirodhara)",
      "Daily monitoring and diet guidance throughout",
      "Paschat Karma: rejuvenation diet, Rasayana therapy, and follow-up",
    ],
    recovery:
      "Most programmes run 7–21 days. Patients typically feel lighter and more energetic within the first few days.",
    panchkarmaDetails: {
      coreTherapies: [
        {
          name: "Vamana",
          description:
            "Therapeutic emesis (controlled vomiting) that eliminates excess Kapha dosha from the upper GI tract, lungs, and sinuses. Ideal for conditions like asthma, chronic bronchitis, skin disorders, and obesity.",
        },
        {
          name: "Virechana",
          description:
            "Medicated purgation that expels Pitta dosha and accumulated toxins from the liver, gallbladder, and small intestine. Effective for skin diseases, jaundice, inflammatory conditions, and digestive disorders.",
        },
        {
          name: "Basti",
          description:
            "Medicated enema therapy — the most powerful Panchkarma treatment — that directly addresses Vata dosha through the colon. Available as Anuvasan Basti (oil-based) and Asthapan Basti (decoction-based) for joint disorders, neurological conditions, and chronic constipation.",
        },
        {
          name: "Nasya",
          description:
            "Instillation of medicated oils or powders through the nasal passages to cleanse the head, neck, and sinuses. Effective for migraines, sinusitis, cervical spondylosis, hair loss, and disorders of the eyes, ears, nose, and throat.",
        },
        {
          name: "Shirodhara",
          description:
            "Continuous, gentle pouring of warm medicated oil or decoction over the forehead (third-eye region). Profoundly calming for the nervous system — used for insomnia, anxiety, depression, hypertension, and neurological disorders.",
        },
      ],
      otherTreatments: [
        "Janu Basti — Warm oil pooling on the knee joint for pain and stiffness",
        "Kati Basti — Warm oil pooling on the lumbar region for lower back pain",
        "Greeva Basti — Warm oil pooling on the cervical region for neck pain",
        "Hridaya Basti — Warm oil pooling over the heart region for cardiac wellness",
        "Takdhara — Continuous pouring of medicated buttermilk for skin and neurological conditions",
        "Malas ane Shek — Therapeutic massage and fomentation to relieve pain and stiffness",
        "Agnikarma — Thermal cauterisation with medicated rods for chronic joint and tendon pain",
        "Raktamokshan — Bloodletting therapy for skin disorders, gout, and inflammatory conditions",
        "Tarpan — Nourishing eye therapy using medicated ghee to improve vision and relieve eye strain",
        "Uttarbasti — Medicated enema administered through the urinary or reproductive tract",
        "Shashtishali Pind Sweda — Bolus massage with specially cooked rice to strengthen muscles and nerves",
        "Patrapind Potli Shek — Herbal leaf bolus massage for joint pain and musculoskeletal disorders",
      ],
    },
  },
  {
    slug: "wellness-programs",
    title: "Wellness & Lifestyle Programs",
    tagline: "Heart, skin, hair & diabetes care",
    image: "/services/wellness-and-lifestyle.png",
    icon: Heart,
    desc: "Comprehensive Ayurvedic wellness programmes for Heart Reversal, Skin Care, Hair Care, and Diabetes Management — addressing root causes through personalised diet, lifestyle, herbal therapy, and Panchkarma.",
    symptoms: [
      "Elevated blood sugar or pre-diabetes",
      "Hair thinning, alopecia, or premature greying",
      "Acne, eczema, psoriasis, or dull skin",
      "High cholesterol, blood pressure, or cardiac risk",
      "Fatigue, weight gain, and metabolic syndrome",
    ],
    approach:
      "Each programme begins with a detailed Ayurvedic and modern clinical assessment. Personalised plans combine herbal formulations, specific Panchkarma therapies, therapeutic yoga, and dietary guidance to address the root imbalance and deliver lasting results.",
    benefits: [
      "Addresses root cause, not just symptoms",
      "Drug-minimising approach for lifestyle diseases",
      "Clinically monitored progress",
      "Personalised diet and yoga plans",
      "Improved energy, weight, and overall vitality",
    ],
    procedure: [
      "Initial consultation & modern diagnostics",
      "Personalised Ayurvedic programme design",
      "Herbal medication & Panchkarma therapies",
      "Dietary & yoga integration",
      "Monthly monitoring and programme adjustment",
    ],
    recovery:
      "Measurable improvements typically seen within 4–8 weeks; full programme duration is 3–6 months.",
  },
  {
    slug: "chronic-constipation",
    title: "Chronic Constipation",
    tagline: "Jūni Kabjiyat — lasting relief",
    image: "/services/chronic-constipation.jpg",
    icon: FlowerIcon,
    desc: "Chronic constipation (Jūni Kabjiyat) is deeply distressing and often resistant to simple laxatives. Our Ayurvedic approach corrects the underlying Vata imbalance in the colon, restoring natural bowel rhythm.",
    symptoms: [
      "Fewer than 3 bowel movements per week",
      "Hard, dry, or lumpy stools",
      "Straining or feeling of incomplete evacuation",
      "Abdominal bloating and discomfort",
      "Dependence on laxatives",
    ],
    approach:
      "After ruling out secondary causes, treatment focuses on correcting Vata dosha through customised Basti (medicated enemas), Virechana (purgation), dietary fibre and fluid protocols, herbal formulations, and specific yoga asanas. The aim is lasting restoration of bowel habit without laxative dependence.",
    benefits: [
      "Restores natural bowel rhythm",
      "Reduces laxative dependence",
      "Relieves bloating and discomfort",
      "Corrects root-cause Vata imbalance",
      "Improves overall gut health",
    ],
    procedure: [
      "Detailed history & dietary assessment",
      "Ruling out secondary causes",
      "Basti therapy (medicated enemas) course",
      "Herbal medication & fibre protocol",
      "Dietary, yoga & lifestyle modification plan",
    ],
    recovery:
      "Most patients see significant improvement within 2–4 weeks of starting treatment.",
  },
  {
    slug: "allopathic-scope",
    title: "Allopathic & General Surgery",
    tagline: "Modern medicine at your side",
    image: "/services/alopathic.png",
    icon: Stethoscope,
    desc: "Harjivan Hospital offers a full range of allopathic and general surgical services alongside our Ayurvedic expertise, ensuring that every patient receives the right care — conventional, integrative, or combined.",
    symptoms: [
      "Acute abdominal conditions",
      "Hernia, appendicitis, and gallbladder disease",
      "Wound care and minor surgical procedures",
      "Emergency medical conditions",
      "Pre- and post-operative care for referred patients",
    ],
    approach:
      "Our qualified general surgeons work in close collaboration with our Ayurvedic specialists to provide integrated care. Modern diagnostics, evidence-based surgical protocols, and compassionate post-operative support ensure the best outcomes.",
    benefits: [
      "NABH-certified quality care",
      "Experienced general surgeons on-site",
      "Integrated Ayurvedic post-operative support",
      "24/7 emergency availability",
      "Affordable, transparent pricing",
    ],
    procedure: [
      "Consultation with general surgeon",
      "Required investigations and imaging",
      "Surgical procedure under appropriate anaesthesia",
      "Post-operative monitoring and care",
      "Follow-up and integrative recovery support",
    ],
    recovery: "Varies by procedure; all patients receive personalised recovery guidance.",
  },
]

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug)
