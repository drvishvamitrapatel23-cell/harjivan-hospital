"use client"
import { useParallax } from "@/hooks/use-parallax"
import { getService, Service, SERVICES } from "@/lib/services-data"
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  Clock,
  Droplets,
  Sparkles,
  Stethoscope,
  Wind,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { SITE } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const ServiceDetailPage = ({ slug }: { slug: string }) => {
  const offset = useParallax()
  const service = getService(slug)
  if (!service) {
    return notFound()
  }
  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translate3d(0, ${offset * 0.4}px, 0) scale(1.15)`,
          }}
        >
          <Image
            src={service.image}
            alt={`${service.title} - Harjivan Hospital`}
            width={1280}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/70" />
        <div
          className="relative mx-auto flex h-full max-w-5xl flex-col justify-end px-4 pb-20 sm:px-6 lg:px-8"
          style={{ transform: `translate3d(0, ${offset * -0.15}px, 0)` }}
        >
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur transition hover:bg-background"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 flex items-center gap-3"
          >
            <span className="bg-gradient-primary shadow-elegant flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground">
              <service.icon className="h-5 w-5" />
            </span>
            <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
              {service.tagline}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-2xl text-base text-background/85 sm:text-lg"
          >
            {service.desc}
          </motion.p>
        </div>
      </section>

      {/* OVERVIEW + PARALLAX FLOATING CARD */}
      <section className="relative mx-auto -mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="shadow-elegant grid gap-6 rounded-3xl border border-border bg-card p-6 sm:grid-cols-3 sm:p-8"
        >
          {[
            { icon: Stethoscope, label: "Specialist", value: SITE.doctor },
            { icon: Clock, label: "Recovery", value: service.recovery },
            { icon: Sparkles, label: "Approach", value: "Modern + Ayurvedic" },
          ].map(({ icon: I, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <I className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs tracking-wider text-muted-foreground uppercase">
                  {label}
                </p>
                <p className="mt-0.5 text-sm font-semibold">{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* DETAILS */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold tracking-tight">
              Treatment Approach
            </h2>
            <p className="mt-3 text-muted-foreground">{service.approach}</p>

            <h3 className="mt-10 text-lg font-semibold">What to Expect</h3>
            <ol className="mt-4 space-y-3">
              {service.procedure.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-card"
                >
                  <span className="bg-gradient-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-sm text-foreground/90">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Common Symptoms</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {service.symptoms.map((sym) => (
                  <li key={sym} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-soft rounded-2xl border border-border p-6 shadow-card">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Key Benefits</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild variant="hero" size="lg" className="w-full">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </aside>
        </div>
      </section>

      {/* PANCHKARMA DETAILS - only for panchkarma service */}
      {service.panchkarmaDetails && (
        <>
          {/* 5 Core Therapies */}
          <section className="bg-gradient-soft border-y border-border/60">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                  <Droplets className="h-3.5 w-3.5" />
                  The Five Pillars of Panchkarma
                </span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  Core Panchkarma Therapies
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Each of the five therapies targets a specific dosha and
                  channel system, working synergistically for complete
                  detoxification.
                </p>
              </div>

              {/* Panchkarma chart image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-border shadow-2xl"
              >
                <Image
                  src="/services/panchkarma-chart.png"
                  alt="Panchkarma therapy chart showing Vamana, Virechana, Basti, Nasya and Shirodhara"
                  width={500}
                  height={500}
                  className="w-full object-contain"
                  loading="lazy"
                />
              </motion.div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {service.panchkarmaDetails.coreTherapies.map((therapy, i) => (
                  <motion.div
                    key={therapy.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="rounded-2xl border border-border bg-card p-6 shadow-card"
                  >
                    <div className="flex items-center gap-3">
                      <span className="bg-gradient-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight">
                        {therapy.name}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {therapy.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Other Panchkarma Treatments */}
          <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Wind className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Other Panchkarma Treatments
              </h2>
            </div>
            <p className="mt-3 text-muted-foreground">
              Beyond the five main therapies, Harjivan Hospital offers a
              comprehensive range of supplementary Panchkarma procedures.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.panchkarmaDetails.otherTreatments.map((treatment) => (
                <motion.div
                  key={treatment}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/90">
                    {treatment}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* RELATED */}
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Other Treatments
            </h2>
            <Link
              href="/services"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.filter((other) => other.slug !== service.slug)
              .slice(0, 3)
              ?.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group hover:shadow-elegant overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={other.image}
                      alt={other.title}
                      loading="lazy"
                      width={1280}
                      height={1024}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold">{other.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {other.tagline}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetailPage
