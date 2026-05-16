import {
  Activity,
  Award,
  BookOpen,
  Eye,
  FlowerIcon,
  GraduationCap,
  Heart,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Users,
  Wind,
  Zap,
} from "lucide-react"

export const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/scope-of-services", label: "Scope" },
  { to: "/doctor", label: "Doctor" },
  { to: "/gallery", label: "Gallery" },
  // { to: "/contact", label: "Contact" },
] as const

export const SERVICES = [
  {
    icon: HeartPulse,
    title: "Piles Treatment",
    slug: "piles",
    desc: "Painless, day-care procedures with rapid recovery.",
  },
  {
    icon: Activity,
    title: "Fissure Treatment",
    slug: "fissure",
    desc: "Lasting relief through targeted modern protocols.",
  },
  {
    icon: Sparkles,
    title: "Fistula Treatment",
    slug: "fistula",
    desc: "Minimally invasive surgical & Kshara Sutra options.",
  },
  {
    icon: Activity,
    title: "Pilonidal Sinus",
    slug: "pilonidal-sinus",
    desc: "Minimally invasive, recurrence-free sinus treatment.",
  },
  {
    icon: Wind,
    title: "Ulcerative Colitis",
    slug: "ulcerative-colitis",
    desc: "Integrated Ayurvedic care for sustained remission.",
  },
  {
    icon: Zap,
    title: "Advance Laser Therapy",
    slug: "laser-therapy",
    desc: "Precision laser for piles, fistula & fissure.",
  },
  {
    icon: Leaf,
    title: "Panchkarma Therapy",
    slug: "panchkarma",
    desc: "Five-fold Ayurvedic detox & rejuvenation programme.",
  },
  {
    icon: Leaf,
    title: "Kshar Sutra Therapy",
    slug: "kshara-sutra",
    desc: "WHO-recognised medicated thread therapy.",
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    slug: "wellness-programs",
    desc: "Heart, skin, hair & diabetes care programmes.",
  },
  {
    icon: FlowerIcon,
    title: "Chronic Constipation",
    slug: "chronic-constipation",
    desc: "Root-cause Ayurvedic cure for Jūni Kabjiyat.",
  },
  {
    icon: Stethoscope,
    title: "Allopathic & General Surgery",
    slug: "allopathic-scope",
    desc: "Modern medicine and surgical care alongside Ayurveda.",
  },
]

export const TESTIMONIALS = [
  {
    name: "Lalo Patel",
    text: "I was suffering for fistula and met dr visvamitra. After lesser surgery i get relief in pain.... Doctor treatment and surgery is very excellent. All staff nature is very politely and caring nature",
  },
  {
    name: "VIPUL Raval",
    text: "I got diagnosed with fistula and piles 1 month ago , I visited and treated with good care at harjivan hospital and got relieved within 3 weeks from anal fistula, I recommend harjivan hospital for piles and fistula patients to dr vishvamitra h patel",
  },
  {
    name: "Ambreesh Shukla",
    text: "Great treatment for piles fissure and fistula , without any kind of surgery. I got relieved from 7 inch deep level 2 fistula in just 1.5 months . All thanks to dr vishvamitra h. Patel and their great and professional staff",
  },
]

export const STORIES = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "Deliver compassionate, world-class Ayurvedic & Panchkarma care to every patient at affordable costs.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "Make Ayurveda the first choice solution rather than a last remedy.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Empathy, transparency, and clinical excellence since 1994.",
  },
  {
    icon: Sparkles,
    title: "Our Approach",
    desc: "Authentic Panchkarma & Ksharsutra treatment to serve society.",
  },
] as const

export const WHY_CHOOSE_US = [
  {
    icon: ShieldCheck,
    title: "NABH Certified",
    desc: "First NABH certified hospital in Gandhinagar - quality you can trust.",
  },
  {
    icon: Sparkles,
    title: "Proven Techniques",
    desc: "Authentic Panchkarma & Ksharsutra treatment since 1994.",
  },
  {
    icon: Users,
    title: "Patient-Centric",
    desc: "Honest counselling, transparent pricing, and continuous follow-up.",
  },
] as const

export const DOCTOR = [
  {
    icon: GraduationCap,
    title: "Qualifications",
    desc: "B.A.M.S, D.A.K, P.G.D.I.P - Ayurvedic Medicine & Surgery.",
  },
  {
    icon: Award,
    title: "Experience",
    desc: "Running this centre since 1994, serving 19 lakh+ population.",
  },
  {
    icon: BookOpen,
    title: "Registration",
    desc: "Gujarat Council Registration No. GBI-11609.",
  },
  {
    icon: Heart,
    title: "Approach",
    desc: "Patient-first, evidence-based, holistic Ayurvedic care.",
  },
] as const

export const DOCTOR_APPROACH = [
  "Honest, transparent counselling - no unnecessary procedures.",
  "Authentic Panchkarma & Ksharsutra treatment for lasting results.",
  "Long-term follow-up to ensure lasting results.",
  "Strict privacy and dignity throughout treatment.",
] as const

/* ─── SCOPE OF SERVICES (from hospital board) ─── */

export const SCOPE_CATEGORIES = [
  {
    title: "Kshar Sutra / Agni Karma",
    services: ["Kshar Sutra / Agni Karma", "Kshar Karma", "Panch Karma"],
  },
  {
    title: "Poorva Karma (Pre-procedures)",
    services: ["Deepan Pachan", "Snehapan", "Snehan & Swedan"],
  },
  {
    title: "Pradhan Karma (Main Procedures)",
    services: [
      "Vamana / Emesis",
      "Virechana / Purgation",
      "Anuvasan and Asthapan Basti",
      "Nasya",
      "Raktamokshana",
    ],
  },
  {
    title: "Paschat Karma (Post-procedures)",
    services: ["Samsarjana Karma", "Rasayan Chikitsa / Rejuvenation"],
  },
  {
    title: "Abhyanga & Swedan Therapies",
    services: [
      "Sarvang Abhyanga",
      "Sarvang Swedan",
      "Ekanga Abhyanga",
      "Ela Kizhi / Podi Kizhi",
      "Navara Kizhi",
      "Pizhichil / Oil Bath",
      "Nadi Sweda",
      "Udhvarthan",
    ],
  },
  {
    title: "Shirodhara & Head Therapies",
    services: [
      "Shirodhara",
      "Takradhara",
      "Ksheerdhara",
      "Shiro Pichu",
      "Shiro Basti",
    ],
  },
  {
    title: "Basti Therapies",
    services: [
      "Sthanic Pichu",
      "Kati Basti",
      "Greeva Basti",
      "Prishth Basti",
      "Hridaya Basti",
      "Janu Basti",
      "Matra Basti",
    ],
  },
  {
    title: "Other Ayurvedic Procedures",
    services: [
      "Lepam",
      "Upnaha",
      "Netra Tarpan",
      "Karna Pooran",
      "Dhoompaan",
      "Yoni Prakshalan",
      "Yoni Dhoopan",
    ],
  },
  {
    title: "Naturopathy & Massage",
    services: [
      "Naturopathy Massage",
      "Vibration Massage",
      "Magneto Therapy",
      "Colour Therapy",
      "Naturopathy Enema",
      "SMT",
      "Acupressure",
      "Acupuncture",
      "Colon Hydro Therapy",
    ],
  },
  {
    title: "Physiotherapy & Reflex Therapies",
    services: [
      "Physio Therapy",
      "Foot Reflex Therapy",
      "Face Reflex Therapy",
      "Dorn Therapy",
      "Neuro Mascular Therapy",
      "Neuro Mascular Cooling Therapy",
    ],
  },
  {
    title: "Wellness & Lifestyle Therapies",
    services: [
      "Cupping Therapy",
      "Herbal Oil Pack",
      "Neumatik Compression Therapy",
      "Vision Therapy",
      "Diet Therapy",
      "Yoga",
      "Mud Therapy",
      "Sun Bath",
      "Sitz Bath",
      "Fasting Therapy",
    ],
  },
]

export const NON_SCOPE_SERVICES = [
  "Emergency Services",
  "ICU",
  "Blood Test And Blood Bank",
  "X-Ray, C.T. Scan and MRI",
  "Lab",
]
