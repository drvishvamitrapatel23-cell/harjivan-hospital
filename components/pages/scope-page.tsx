"use client"

import { SCOPE_CATEGORIES, NON_SCOPE_SERVICES } from "@/lib/constant"
import { SITE } from "@/lib/site"
import { motion } from "framer-motion"
import {
  CheckCircle2,
  Bed,
  Building2,
  Stethoscope,
  Award,
  XCircle,
  Leaf,
  Sparkles,
  Heart,
  Droplets,
  Hand,
  Brain,
  Sun,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const categoryIcons = [
  Sparkles,
  Leaf,
  Heart,
  Activity,
  Hand,
  Droplets,
  Brain,
  Leaf,
  Sun,
  Activity,
  Heart,
]

const ScopePage = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            What We Offer
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Scope of Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Comprehensive Ayurvedic healthcare services including authentic
            Panchkarma, Ksharsutra, naturopathy, physiotherapy, and a fully
            equipped 30-bed inpatient facility.
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
              NABH Certified Hospital
            </span>
          </div>
        </div>
      </section>

      {/* FACILITY OVERVIEW BAR */}
      <section className="border-y border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            {
              icon: Bed,
              title: `${SITE.beds} Beds`,
              desc: "Fully operational IPD",
            },
            {
              icon: Building2,
              title: "6,000 sq ft",
              desc: "Covered facility area",
            },
            {
              icon: Stethoscope,
              title: `${SITE.therapyRooms} Therapy Rooms`,
              desc: "Dedicated Panchkarma",
            },
            {
              icon: Award,
              title: "Since 1994",
              desc: "NABH certified",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ALL SERVICES BY CATEGORY */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Available Services
          </h2>
          <p className="mt-3 text-muted-foreground">
            Our hospital offers a wide range of traditional Ayurvedic,
            naturopathy, and wellness therapies.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SCOPE_CATEGORIES.map((cat, i) => {
            const Icon = categoryIcons[i % categoryIcons.length]
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-primary flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-bold tracking-tight text-foreground">
                    {cat.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {cat.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* NON-SCOPE */}
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Non Scope of Services
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            The following services are not provided at our facility.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {NON_SCOPE_SERVICES.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-card"
              >
                <XCircle className="h-4 w-4 shrink-0 text-destructive/60" />
                <span className="text-sm text-muted-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="bg-gradient-primary shadow-elegant mx-auto max-w-5xl rounded-3xl px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight">
            Need a Consultation?
          </h2>
          <p className="mx-auto mt-2 max-w-xl opacity-90">
            Our specialists will recommend the best treatment plan tailored to
            your needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

export default ScopePage
