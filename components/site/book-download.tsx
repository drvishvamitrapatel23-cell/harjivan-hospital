"use client"

import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"
import { motion } from "framer-motion"
import { BookOpen, Download, Sparkles } from "lucide-react"

export function BookDownload() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card"
      >
        {/* Decorative background */}
        <div className="bg-gradient-primary absolute inset-0 opacity-5" />
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <BookOpen className="h-3.5 w-3.5" /> Free Download
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Book by {SITE.doctor}
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Discover how{" "}
              <strong className="text-foreground">
                piles can be handled without admission and without operation
              </strong>
              . This comprehensive guide covers Ayurvedic approaches to
              anorectal conditions, written from decades of clinical experience.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                "Non-surgical approaches to piles treatment",
                "Authentic Panchkarma & Ksharsutra insights",
                "Preventive healthcare guidance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={SITE.bookPdf} download>
                  <Download className="h-4 w-4" /> Download Free PDF
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={SITE.bookPdf} target="_blank" rel="noopener">
                  Read Online
                </a>
              </Button>
            </div>
          </div>

          {/* Book visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-primary absolute -inset-3 rounded-2xl opacity-20 blur-2xl" />
              <div className="relative flex h-64 w-48 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent p-6 text-center text-primary-foreground shadow-2xl">
                <BookOpen className="mb-3 h-10 w-10 opacity-80" />
                <p className="text-xs font-medium tracking-wider uppercase opacity-70">
                  Free Book
                </p>
                <p className="mt-2 text-sm leading-tight font-bold">
                  Piles Treatment Without Surgery
                </p>
                <p className="mt-3 text-xs opacity-70">{SITE.doctor}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
