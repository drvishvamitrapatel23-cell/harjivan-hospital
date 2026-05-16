"use client"

import {
  SITE,
  CONSULTANTS,
  RMOS,
  ORG_CHART,
  GENERAL_SURGEONS,
} from "@/lib/site"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WHY_CHOOSE_US } from "@/lib/constant"
// import { OrgChart } from "@/components/site/org-chart"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Building2,
  Bed,
  Maximize2,
  Stethoscope,
  Theater,
  MapPin,
  Eye,
  Target,
  Users,
  Award,
  Quote,
  GraduationCap,
  BadgeCheck,
} from "lucide-react"

const HOSPITAL_STATS = [
  { icon: Bed, label: "Sanctioned Beds", value: `${SITE.beds}` },
  { icon: Bed, label: "Operational Beds", value: `${SITE.operationalBeds}` },
  // {
  //   icon: Building2,
  //   label: "Covered Area",
  //   value: `${SITE.coveredArea.toLocaleString()} sq ft`,
  // },
  // { icon: Maximize2, label: "Area per Bed", value: `${SITE.areaPerBed} sq ft` },
  { icon: Stethoscope, label: "Therapy Rooms", value: `${SITE.therapyRooms}` },
  {
    icon: Theater,
    label: "Operation Theater",
    value: `${SITE.operationTheaters}`,
  },
]

const AboutPage = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            About Us
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            About Harjivan Hospital
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            A 30-bedded AYUSH Hospital situated at Sector-26, Gandhinagar,
            surrounded by 19 lakh population approximately. We are running this
            centre since 1994, dealing with authentic Panchkarma & Ksharsutra
            treatment to serve society.
          </p>
          {/* NABH Badge */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-background/70 px-5 py-2 backdrop-blur">
            <Image
              src="/nabh-logo.jpeg"
              alt="NABH Certified"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="text-sm font-semibold text-foreground">
              NABH Certified Hospital in Gandhinagar
            </span>
          </div>
        </div>
      </section>

      {/* HOSPITAL INFO + STATS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info cards */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Hospital</h2>
            <p className="mt-4 text-muted-foreground">
              Harjivan Hospital is a dedicated AYUSH healthcare facility
              providing authentic Ayurvedic treatments and Panchkarma therapies
              to the people of Gandhinagar and beyond. Under the leadership of{" "}
              {SITE.doctor}, we have been serving the community since{" "}
              {SITE.since}.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  desc: `${SITE.address}\n${SITE.city}, ${SITE.state} - ${SITE.pinCode}`,
                },
                {
                  icon: Award,
                  title: "Registration",
                  desc: `Registered with ${SITE.registrationAuthority}`,
                },
                {
                  icon: Users,
                  title: "Serving Since",
                  desc: `Established in ${SITE.since} - over ${new Date().getFullYear() - SITE.since} years of trusted care`,
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4 shadow-card"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="whitespace-pre-line text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid - fixed 3-column alignment */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Hospital at a Glance
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {HOSPITAL_STATS.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-center shadow-card sm:p-5"
                >
                  <span className="bg-gradient-primary flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-xl font-bold text-foreground sm:text-2xl">
                    {value}
                  </p>
                  <p className="text-[11px] leading-tight text-muted-foreground sm:text-xs">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION - Quoted, attractive */}
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <div className="absolute -top-4 -left-2 text-primary/10">
                <Quote className="h-24 w-24" />
              </div>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-primary flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground">
                    <Eye className="h-6 w-6" />
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Our Vision
                  </h2>
                </div>
                <blockquote className="mt-6 border-l-4 border-primary/30 pl-5 text-[15px] leading-relaxed text-muted-foreground italic">
                  &ldquo;{SITE.vision}&rdquo;
                </blockquote>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <div className="absolute -top-4 -left-2 text-primary/10">
                <Quote className="h-24 w-24" />
              </div>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-primary flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground">
                    <Target className="h-6 w-6" />
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Our Mission
                  </h2>
                </div>
                <blockquote className="mt-6 border-l-4 border-primary/30 pl-5 text-[15px] leading-relaxed text-muted-foreground italic">
                  &ldquo;{SITE.mission}&rdquo;
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Why Patients Choose Us
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {WHY_CHOOSE_US.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <span className="bg-gradient-primary flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONSULTANTS & RMOs - Card-based attractive UI */}
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Our Medical Team
          </h2>

          {/* Consultants - Cards */}
          <div className="mt-10">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <BadgeCheck className="h-5 w-5 text-primary" />
              Consultants
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CONSULTANTS.map((c) => (
                <div
                  key={c.name}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card"
                >
                  <div className="bg-gradient-primary absolute top-0 left-0 h-1 w-full" />
                  <div className="flex items-start gap-4">
                    <span className="bg-gradient-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-primary-foreground">
                      <Stethoscope className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-bold text-foreground">
                        {c.name}
                      </p>
                      <p className="mt-1 text-sm text-primary">
                        {c.qualification}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Specialization: {c.specialization}
                      </p>
                      <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-primary">
                        Reg. No: {c.registrationNo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Surgeons - Cards */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <GraduationCap className="h-5 w-5 text-primary" />
              General Surgeons
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GENERAL_SURGEONS.map((r) => (
                <div
                  key={r.name}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card"
                >
                  <div className="bg-gradient-primary absolute top-0 left-0 h-1 w-full opacity-60" />
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-bold text-foreground">
                        {r.name}
                      </p>
                      <p className="mt-1 text-sm text-primary">
                        {r.qualification}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {r.specialization}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RMOs - Cards */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <GraduationCap className="h-5 w-5 text-primary" />
              Resident Medical Officers (RMO)
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {RMOS.map((r) => (
                <div
                  key={r.name}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card"
                >
                  <div className="bg-gradient-primary absolute top-0 left-0 h-1 w-full opacity-60" />
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-base font-bold text-foreground">
                        {r.name}
                      </p>
                      <p className="mt-1 text-sm text-primary">
                        {r.qualification}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {r.specialization}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ORGANIZATION CHART */}
      {/* <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Organization Structure
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Our hospital hierarchy ensures clear accountability and efficient
          patient care delivery.
        </p>
        <div className="mt-10">
          <OrgChart data={ORG_CHART} />
        </div>
      </section> */}

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="bg-gradient-primary shadow-elegant mx-auto max-w-5xl rounded-3xl px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight">
            Experience the Harjivan Difference
          </h2>
          <p className="mx-auto mt-2 max-w-xl opacity-90">
            Book a consultation and discover why thousands trust us for their
            Ayurvedic healthcare needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

export default AboutPage
