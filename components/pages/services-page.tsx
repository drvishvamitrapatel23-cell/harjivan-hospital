"use client"

import { SERVICES } from "@/lib/services-data"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const ServicesPage = () => {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            Our Services
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Specialised Ano-Rectal Treatments
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Choose a treatment to learn more about the procedure, benefits, and
            what to expect.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, ...s }, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group hover:shadow-elegant block h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.title} at Harjivan Hospital`}
                    loading="lazy"
                    width={1280}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/0 to-foreground/0" />
                  <span className="shadow-soft absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-background/90 text-primary backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                    {s.tagline}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                    {s.benefits.slice(0, 4).map((b) => (
                      <li key={b} className="flex items-start gap-1.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="bg-gradient-primary shadow-elegant mx-auto max-w-5xl rounded-3xl px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-2 max-w-xl opacity-90">
            A confidential consultation with our specialist will guide you to
            the right treatment.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-6">
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
