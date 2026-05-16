import { SITE, CONSULTANTS, RMOS } from "@/lib/site"
import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import { DOCTOR, DOCTOR_APPROACH } from "@/lib/constant"
import {
  ShieldCheck,
  Stethoscope,
  GraduationCap,
  BadgeCheck,
} from "lucide-react"
import Image from "next/image"
import { BookDownload } from "@/components/site/book-download"

const DoctorPage = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="bg-gradient-primary absolute -inset-3 rounded-3xl opacity-20 blur-2xl" />
            <Image
              src="/doctor.jpeg"
              alt="Portrait of Dr. Vishvamitra Patel"
              width={1024}
              height={1024}
              className="shadow-elegant relative w-full rounded-3xl object-cover brightness-125"
            />
          </div>
          <div>
            <span className="text-sm font-medium tracking-wider text-primary uppercase">
              Specialist Profile
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {SITE.doctor}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {SITE.doctorQualifications} · Founder, Harjivan Hospital
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Registration No: {SITE.doctorRegistration}
            </p>
            <p className="mt-5 text-muted-foreground">
              Dr. Vishvamitra Patel is a respected Ayurvedic specialist serving
              Gandhinagar and the wider Gujarat region. With the centre running
              since {SITE.since}, he is known for his expertise in authentic
              Panchkarma & Ksharsutra treatment, providing effective care for
              anorectal conditions including piles - without the need for
              admission or operation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="hero">
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={SITE.phoneHref}>Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS GRID */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DOCTOR.map(
            ({
              icon: Icon,
              title,
              desc,
            }: {
              icon: React.ElementType
              title: string
              desc: string
            }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            A Patient-First Philosophy
          </h2>
          <p className="mt-4 text-muted-foreground">
            &quot;Ayurveda should be the first choice, not the last resort. We
            strive to create a comprehensive understanding of general health
            among society.&quot; - {SITE.doctor}
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {DOCTOR_APPROACH.map((p) => (
              <li key={p} className="flex gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONSULTANTS & RMOs */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Our Medical Team
        </h2>

        {/* Consultants */}
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

        {/* RMOs */}
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
      </section>

      {/* Book Download Section */}
      <BookDownload />
    </>
  )
}

export default DoctorPage
