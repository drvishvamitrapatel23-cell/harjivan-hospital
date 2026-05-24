import {
  HeartPulse,
  Activity,
  Sparkles,
  Leaf,
  Zap,
  Wind,
  FlowerIcon,
  Stethoscope,
  Heart,
  Droplets,
  Sun,
  Scissors,
  Candy,
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
  | "chronic-constipation"
  | "allopathic-scope"
  | "eecp-therapy"
  | "padabhyanga"
  | "heart-reversal"
  | "skin-care"
  | "hair-removal"
  | "diabetes-management"
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
    image: "/services/laser-treatment.png",
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
            "Medicated enema therapy - the most powerful Panchkarma treatment - that directly addresses Vata dosha through the colon. Available as Anuvasan Basti (oil-based) and Asthapan Basti (decoction-based) for joint disorders, neurological conditions, and chronic constipation.",
        },
        {
          name: "Nasya",
          description:
            "Instillation of medicated oils or powders through the nasal passages to cleanse the head, neck, and sinuses. Effective for migraines, sinusitis, cervical spondylosis, hair loss, and disorders of the eyes, ears, nose, and throat.",
        },
        {
          name: "Shirodhara",
          description:
            "Continuous, gentle pouring of warm medicated oil or decoction over the forehead (third-eye region). Profoundly calming for the nervous system - used for insomnia, anxiety, depression, hypertension, and neurological disorders.",
        },
      ],
      otherTreatments: [
        "Janu Basti - Warm oil pooling on the knee joint for pain and stiffness",
        "Kati Basti - Warm oil pooling on the lumbar region for lower back pain",
        "Greeva Basti - Warm oil pooling on the cervical region for neck pain",
        "Hridaya Basti - Warm oil pooling over the heart region for cardiac wellness",
        "Takdhara - Continuous pouring of medicated buttermilk for skin and neurological conditions",
        "Malas ane Shek - Therapeutic massage and fomentation to relieve pain and stiffness",
        "Agnikarma - Thermal cauterisation with medicated rods for chronic joint and tendon pain",
        "Raktamokshan - Bloodletting therapy for skin disorders, gout, and inflammatory conditions",
        "Tarpan - Nourishing eye therapy using medicated ghee to improve vision and relieve eye strain",
        "Uttarbasti - Medicated enema administered through the urinary or reproductive tract",
        "Shashtishali Pind Sweda - Bolus massage with specially cooked rice to strengthen muscles and nerves",
        "Patrapind Potli Shek - Herbal leaf bolus massage for joint pain and musculoskeletal disorders",
      ],
    },
  },
  {
    slug: "chronic-constipation",
    title: "Chronic Constipation",
    tagline: "Jūni Kabjiyat - lasting relief",
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
    desc: "Harjivan Hospital offers a full range of allopathic and general surgical services alongside our Ayurvedic expertise, ensuring that every patient receives the right care - conventional, integrative, or combined.",
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
  // ─── Wellness & Specialty Services ───────────────────────────────────────────
  {
    slug: "eecp-therapy",
    title: "EECP Heart Therapy",
    tagline: "Non-invasive cardiac revitalisation",
    image: "/services/eecp-heart.png",
    icon: HeartPulse,
    desc: "Enhanced External Counterpulsation (EECP) is a non-invasive, FDA-cleared cardiac therapy that improves blood flow to the heart muscle by using pneumatic cuffs on the legs. It is a proven alternative for patients with angina, heart failure, or those not suitable for bypass surgery - sometimes called a 'natural bypass'.",
    symptoms: [
      "Chronic stable angina (chest pain)",
      "Shortness of breath on exertion",
      "Reduced exercise tolerance",
      "Heart failure with reduced ejection fraction",
      "Coronary artery disease not suitable for intervention",
      "Post-bypass or post-angioplasty persistent symptoms",
    ],
    approach:
      "During EECP, three sets of pneumatic cuffs are applied to the calves, thighs, and buttocks. Synchronised with the heartbeat via ECG, the cuffs inflate during diastole to increase coronary perfusion pressure and deflate rapidly before systole to reduce cardiac workload. Over 35 one-hour sessions (typically 5 days per week for 7 weeks), the therapy promotes collateral vessel formation and neovascularisation - creating a natural bypass effect. Treatment is completely non-invasive, painless, and can be performed on an outpatient basis.",
    benefits: [
      "Non-invasive - no surgery, no needles",
      "Reduces angina episodes significantly",
      "Improves exercise tolerance and stamina",
      "Enhances myocardial perfusion (blood flow to heart)",
      "FDA-cleared and internationally validated",
      "Suitable for elderly and high-surgical-risk patients",
      "Reduces dependence on anti-anginal medications",
    ],
    procedure: [
      "Comprehensive cardiac evaluation & ECG assessment",
      "Fitting of pneumatic cuffs on legs and buttocks",
      "ECG-synchronised inflation/deflation during 1-hour session",
      "35 total sessions over 7 weeks (5 sessions/week)",
      "Mid-therapy and post-therapy cardiac function review",
    ],
    recovery:
      "EECP is an outpatient therapy - patients walk in and out. Benefits accumulate progressively; most patients notice improvement in energy and angina relief within 2–3 weeks of starting the programme.",
  },
  {
    slug: "padabhyanga",
    title: "Padabhyanga (Foot Therapy)",
    tagline: "Ancient healing from the ground up",
    image: "/services/padabhyanga.png",
    icon: Droplets,
    desc: "Padabhyanga is the traditional Ayurvedic practice of medicated foot massage using warm herbal oils. Rooted in the principle that the feet contain vital nerve endings and marma (energy) points connected to every organ system, this deeply therapeutic practice improves circulation, calms the nervous system, and restores whole-body balance.",
    symptoms: [
      "Fatigue, restlessness, and poor sleep",
      "Cold feet and poor peripheral circulation",
      "Cracked heels and dry, rough skin",
      "Stress, anxiety, and nervous tension",
      "Diabetic neuropathy and foot numbness",
      "Varicose veins and leg heaviness",
      "Headaches and eye strain",
    ],
    approach:
      "Warm medicated sesame or herbal oil is selected based on your doshic constitution and health concerns. The therapist applies rhythmic, firm strokes to the soles, heels, ankles, and lower legs, systematically stimulating marma points - particularly Talahridaya (the heart of the foot) - which are energetically linked to the brain, heart, liver, and kidneys. Sessions typically last 30–45 minutes and can be combined with a warm foot soak in medicated decoctions for enhanced effect.",
    benefits: [
      "Relieves fatigue and promotes deep, restful sleep",
      "Improves peripheral blood and lymph circulation",
      "Nourishes and softens dry, cracked skin",
      "Calms the nervous system - reduces stress and anxiety",
      "Alleviates diabetic neuropathy symptoms",
      "Reduces leg heaviness and varicose discomfort",
      "Improves vision and relieves eye strain (via reflex points)",
    ],
    procedure: [
      "Doshic assessment & selection of medicated oil",
      "Warm foot soak in medicated herbal decoction (10 min)",
      "Rhythmic massage of soles, heels & lower legs (30–45 min)",
      "Marma point stimulation for systemic benefits",
      "Warm towel wrap & rest period",
    ],
    recovery:
      "Padabhyanga is deeply relaxing - most patients feel immediate relief. A course of 7–14 sessions is recommended for chronic conditions, with maintenance sessions monthly.",
  },
  // {
  //   slug: "heart-reversal",
  //   title: "Heart Reversal Programme",
  //   tagline: "Reverse heart disease, restore vitality",
  //   image: "/services/ulcerative-colitis.png",
  //   icon: Heart,
  //   desc: "The Heart Reversal Programme at Harjivan Hospital is a comprehensive, evidence-based integrative programme that combines Ayurvedic therapies, EECP, therapeutic yoga, dietary science, and lifestyle medicine to halt and actively reverse the progression of coronary artery disease. Inspired by the work of Dr. Dean Ornish and integrated with authentic Ayurvedic principles, this programme addresses the root cause of heart disease - not just the symptoms.",
  //   symptoms: [
  //     "Diagnosed coronary artery disease (CAD)",
  //     "Angina or chest discomfort on exertion",
  //     "Post-heart attack rehabilitation",
  //     "High cholesterol and triglycerides",
  //     "Hypertension (high blood pressure)",
  //     "Metabolic syndrome and central obesity",
  //     "Patients seeking alternatives to bypass or stenting",
  //   ],
  //   approach:
  //     "The programme is built on four pillars: (1) Nutrition - a whole-food, plant-rich diet that reduces plaque formation; (2) Movement - cardiac-safe aerobic exercise and therapeutic yoga tailored to each patient; (3) Stress Management - Ayurvedic stress-reduction techniques, Pranayama, and meditation proven to lower cortisol and blood pressure; and (4) Cardiac Therapies - EECP sessions, Hridaya Basti (warm medicated oil on the heart region), and Ayurvedic herbal cardiotonics (Arjuna, Ashwagandha, Pushkarmool). Monthly lipid profiles, blood pressure records, and echocardiography track objective reversal of disease.",
  //   benefits: [
  //     "Clinically documented reversal of coronary blockages",
  //     "Significant reduction in angina frequency and severity",
  //     "Lowers LDL cholesterol and triglycerides naturally",
  //     "Reduces blood pressure without increasing medication",
  //     "Improves cardiac ejection fraction and pump function",
  //     "Weight loss and improved metabolic markers",
  //     "Reduces risk of future heart attack by up to 50%",
  //   ],
  //   procedure: [
  //     "Full cardiac workup: ECG, Echo, Lipid profile, Stress test",
  //     "Personalised dietary and yoga plan design",
  //     "EECP therapy course (35 sessions over 7 weeks)",
  //     "Hridaya Basti & Ayurvedic herbal cardiotonic therapy",
  //     "Monthly monitoring: lipid profile, BP, echo, and weight",
  //   ],
  //   recovery:
  //     "The programme runs over 3–6 months. Most patients see measurable improvements in cholesterol, blood pressure, and exercise tolerance within the first 4–8 weeks.",
  // },
  {
    slug: "skin-care",
    title: "Skin Care Treatment",
    tagline: "Clear skin through root-cause healing",
    image: "/services/skin-care.png",
    icon: Sun,
    desc: "Harjivan Hospital's Ayurvedic Skin Care Programme addresses all types of chronic skin diseases at their root cause - internal doshic imbalances, impaired liver function, gut dysbiosis, and auto-immune triggers. Rather than suppressing symptoms, our integrated approach uses Panchkarma detoxification, herbal formulations, dietary science, and modern dermatological insights to deliver lasting clear skin.",
    symptoms: [
      "Acne vulgaris and cystic acne",
      "Eczema (atopic dermatitis) and chronic itching",
      "Psoriasis - plaques, scaling, and inflammation",
      "Vitiligo (de-pigmentation patches)",
      "Urticaria (hives) and allergic skin reactions",
      "Fungal infections and ringworm",
      "Rosacea, melasma, and pigmentation disorders",
      "Seborrheic dermatitis and dandruff",
    ],
    approach:
      "Each patient receives a thorough Ayurvedic Prakriti assessment alongside modern diagnostic blood tests (liver enzymes, thyroid, HbA1c, IgE allergy panel). The root imbalance - whether Pitta-excess (inflammatory), Kapha-excess (cystic, oily), or Vata-excess (dry, cracked) - guides the therapeutic plan. Raktamokshan (blood purification), Virechana (purgation), and targeted Lepam (herbal pastes) cleanse the skin at the cellular level. Ayurvedic blood-purifying herbs (Neem, Manjistha, Khadira, Sariva) are combined with external applications (Kumkumadi tailam, Eladi churna). A customised anti-inflammatory diet eliminates trigger foods and heals the gut-skin axis.",
    benefits: [
      "Addresses root cause - not just symptom suppression",
      "Effective for all major chronic skin diseases",
      "Raktamokshan & Virechana for deep blood purification",
      "Customised herbal therapy for each skin type",
      "Anti-inflammatory dietary and lifestyle guidance",
      "Safe for long-term use - no systemic steroids",
      "Improves skin texture, tone, and hydration",
    ],
    procedure: [
      "Dermatological consultation & Prakriti assessment",
      "Diagnostic blood tests (liver, thyroid, allergy, glucose)",
      "Virechana or Raktamokshan blood purification therapy",
      "Topical Lepam / herbal paste applications",
      "Internal herbal formulations & dietary plan",
    ],
    recovery:
      "Most patients see visible skin improvement within 4–6 weeks. Complete clearance for chronic conditions (psoriasis, eczema) typically takes 3–6 months of consistent treatment.",
  },
  {
    slug: "hair-removal",
    title: "Hair Removal Treatment",
    tagline: "Safe, lasting hair removal solutions",
    image: "/services/hair-removal.png",
    icon: Scissors,
    desc: "Harjivan Hospital offers medically supervised, safe, and effective hair removal solutions combining modern laser technology with Ayurvedic skin-protective care. Whether you seek permanent reduction of unwanted body or facial hair or treatment for conditions like hirsutism and folliculitis, our integrated approach delivers smooth, healthy skin with minimal discomfort.",
    symptoms: [
      "Unwanted facial hair (upper lip, chin, sideburns)",
      "Excessive body hair - legs, arms, back, underarms",
      "Hirsutism due to PCOS or hormonal imbalance",
      "Ingrown hairs and chronic folliculitis",
      "Pseudofolliculitis barbae (razor bumps)",
      "Pilonidal sinus hair regrowth prevention",
    ],
    approach:
      "Our hair removal programme begins with a skin and hair assessment to determine the underlying cause of excess hair (particularly if hormonal), choose the appropriate laser or light-based technology (Diode, Nd:YAG, or IPL depending on skin tone and hair type), and design a protective Ayurvedic skin care protocol. For hormonal causes (PCOS, thyroid disorders), we collaborate with endocrinologists and simultaneously address the root hormonal imbalance through Ayurvedic formulations. Post-treatment Ayurvedic soothing applications (Aloe vera, Kumkumadi, Chandanadi tailam) minimise redness and protect the skin barrier.",
    benefits: [
      "Permanent hair reduction (80–90% after full course)",
      "Safe for all skin tones with appropriate laser selection",
      "Treats hormonal excess hair (PCOS-related hirsutism)",
      "Eliminates ingrown hairs and folliculitis",
      "Ayurvedic post-treatment skin protection protocol",
      "Painless to minimal discomfort with cooling technology",
      "Medically supervised for safety",
    ],
    procedure: [
      "Skin and hair assessment - Fitzpatrick skin typing",
      "Hormonal screening if hirsutism is suspected",
      "Laser session (Diode/Nd:YAG/IPL) - 20–45 min per area",
      "Ayurvedic post-treatment soothing application",
      "6–8 sessions spaced 4–6 weeks apart for full clearance",
    ],
    recovery:
      "No downtime - patients resume normal activities immediately. Mild redness resolves within hours. Full results become visible after completing the full course of sessions.",
  },
  {
    slug: "diabetes-management",
    title: "Diabetes Management",
    tagline: "Control blood sugar, reclaim your life",
    image: "/services/diabetes.png",
    icon: Candy,
    desc: "The Diabetes Management Programme at Harjivan Hospital addresses both Type 2 diabetes and pre-diabetes through an integrative approach combining modern diabetology, Ayurvedic Prameha (diabetes) protocols, therapeutic nutrition, and lifestyle medicine. Our goal is not merely to control blood sugar with medication, but to reduce insulin resistance at the root level, protect vital organs from diabetic complications, and - in many cases - achieve drug-free remission.",
    symptoms: [
      "Elevated fasting or post-meal blood glucose (HbA1c > 6.5%)",
      "Excessive thirst and frequent urination",
      "Unexplained weight loss or gain",
      "Fatigue, brain fog, and poor concentration",
      "Slow wound healing and recurrent infections",
      "Diabetic neuropathy - tingling, numbness in feet/hands",
      "Diabetic retinopathy or early kidney changes",
    ],
    approach:
      "The programme integrates four evidence-based strategies: (1) Nutritional Therapy - a low-glycaemic, fibre-rich, anti-inflammatory diet plan designed by our clinical nutritionist, with specific Ayurvedic foods (bitter gourd, fenugreek, amla) proven to lower blood sugar; (2) Ayurvedic Herbal Therapy - classical formulations like Chandraprabha Vati, Nishamalaki, and Mamajjak Ghana are prescribed to improve insulin sensitivity and protect pancreatic beta cells; (3) Exercise Medicine - structured aerobic exercise and yoga sequences (Vajrasana, Ardha Matsyendrasana, Pranayama) that improve glucose uptake by muscles; and (4) Panchkarma Detox - Virechana and Basti therapies reduce systemic inflammation and improve metabolic efficiency. All modern medications are continued and adjusted in coordination with the patient's existing physician.",
    benefits: [
      "Reduces HbA1c by 1–2.5% within 3 months",
      "Improves insulin sensitivity without hypoglycaemia risk",
      "Protects kidneys, eyes, and nerves from complications",
      "Reduces or eliminates dependence on oral anti-diabetics",
      "Achieves drug-free remission in early Type 2 cases",
      "Structured meal planning for sustainable blood sugar control",
      "Panchkarma reduces systemic inflammation and metabolic load",
    ],
    procedure: [
      "Full metabolic workup: HbA1c, fasting glucose, lipid profile, kidney & liver function",
      "Personalised dietary plan with glycaemic index education",
      "Ayurvedic herbal prescription & Panchkarma detox therapy",
      "Structured exercise and yoga programme",
      "Monthly HbA1c monitoring and medication review",
    ],
    recovery:
      "Measurable improvement in HbA1c and fasting glucose typically seen within 8–12 weeks. The full programme runs 3–6 months, with long-term maintenance support available.",
  },
]

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug)
