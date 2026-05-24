"use client"
import { Button } from "@/components/ui/button"
import { SERVICES, TESTIMONIALS } from "@/lib/constant"
import { SITE } from "@/lib/site"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Clock,
  Stethoscope,
  ArrowRight,
  Star,
  Leaf,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BookDownload } from "@/components/site/book-download"
import { Video } from "@/components/ui/video"

const LandingPage = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <Image
                alt="nabh"
                src="/nabh-logo.jpeg"
                className="size-7"
                width="28"
                height="28"
              />
              NABH certified Hospital
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Piles, Fissure, Fistula Treatment{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Without Operation
              </span>{" "}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Trusted Ayurvedic care combining authentic Panchkarma & Ksharsutra
              treatment - led by {SITE.doctor}. No admission. No operation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link href="/contact">
                  Book Appointment <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            {/* <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-6 text-sm">
              <div>
                <dt className="text-muted-foreground">Since</dt>
                <dd className="text-xl font-semibold text-foreground">
                  {SITE.since}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Beds</dt>
                <dd className="text-xl font-semibold text-foreground">
                  {SITE.beds}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Available</dt>
                <dd className="text-xl font-semibold text-foreground">
                  24 / 7
                </dd>
              </div>
            </dl> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-gradient-primary absolute -inset-4 rounded-[2rem] opacity-20 blur-2xl" />
            <Image
              src="/gallery/harjivan-hospital.png"
              alt="Modern clinical environment at Harjivan Hospital combining Ayurveda and modern medicine"
              width={1536}
              height={1024}
              loading="eager"
              className="shadow-elegant relative w-full rounded-[2rem] object-cover brightness-125"
            />
          </motion.div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            {
              icon: Clock,
              title: "24 / 7 Available",
              desc: "Emergency & consultation any time.",
            },
            {
              icon: Stethoscope,
              title: "Since 1994",
              desc: `Led by ${SITE.doctor}.`,
            },
            {
              icon: Leaf,
              title: "Panchkarma & Ksharsutra",
              desc: "Authentic Ayurvedic treatment for lasting results.",
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

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Specialized Treatments
          </h2>
          <p className="mt-3 text-muted-foreground">
            Focused expertise in Ayurvedic &amp; anorectal care - gentle,
            effective and personal.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES?.slice(0, 6)?.map(({ icon: Icon, title, desc, slug }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="group hover:shadow-elegant rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1"
            >
              <span className="bg-gradient-primary flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <Link
                href={slug ? `/services/${slug}` : "/services"}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-primary absolute -inset-3 rounded-3xl opacity-15 blur-2xl" />
            <Image
              src="/doctor.jpeg"
              alt="Dr. Vishvamitra Patel, Ayurvedic specialist at Harjivan Hospital"
              loading="lazy"
              width={1024}
              height={1024}
              className="shadow-elegant relative w-full max-w-md rounded-3xl object-cover brightness-125"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-medium tracking-wider text-primary uppercase">
              Meet your specialist
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {SITE.doctor}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {SITE.doctorQualifications} · Reg. No: {SITE.doctorRegistration}
            </p>
            <p className="mt-4 text-muted-foreground">
              A trusted Ayurvedic specialist running Harjivan Hospital since{" "}
              {SITE.since}. Dr. Patel specializes in authentic Panchkarma &
              Ksharsutra treatment - providing effective piles care without
              admission or operation.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                `${SITE.doctorQualifications}`,
                "Expert in Panchkarma & Ksharsutra Therapy",
                "Serving 19 lakh+ population since 1994",
                "Patient-first, evidence-based approach",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8" variant="hero">
              <Link href="/doctor">View Profile</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* VIDEO TOUR */}
      <section className="bg-gradient-soft overflow-hidden border-y border-border/60">
        <Video />
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Patient Stories
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real experiences from people we&apos;ve cared for.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-foreground/90">
                &quot;{t.text}&quot;
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-muted-foreground">
                - {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://www.google.com/search?kgmid=/g/11cn9j3061&hl=en-IN&q=Harjivan+Hospital,+Dr+Vishwamitra+Patel,+First+NABH+certified+hospital+in+Gandhinagar,+Piles+and+Fistula+Hospital&shem=rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=2db271425ddd0f2a&utm_source=rimspwouoe,sh/x/loc/osrp/m5/1#lrd=0x395c2b8abd6dd0ed:0x987bfa3a17c99e9,1,,,,"
            >
              View All Reviews <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* BOOK DOWNLOAD */}
      <BookDownload />

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="bg-gradient-primary shadow-elegant mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-14 text-center text-primary-foreground sm:px-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Take the first step toward relief
          </h2>
          <p className="mx-auto mt-3 max-w-2xl opacity-90">
            Book a confidential consultation with {SITE.doctor}. Open 24/7 in
            Sector 26, Gandhinagar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              <a href={SITE.phoneHref}>Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
