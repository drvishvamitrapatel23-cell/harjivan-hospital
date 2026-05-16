"use client"

import { SITE } from "@/lib/site"
import { Clock, Mail, MapPin, Phone, CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: "", phone: "", message: "" })
  }
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            Contact Us
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            We&apos;re here, around the clock
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Reach out for a confidential consultation. 10AM to 2PM, every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Address", value: SITE.address },
              {
                icon: Phone,
                title: "Phone",
                value: SITE.phone,
                href: SITE.phoneHref,
              },
              // {
              //   icon: Mail,
              //   title: "Email",
              //   value: SITE.email,
              //   href: `mailto:${SITE.email}`,
              // },
              { icon: Clock, title: "Working Hours", value: SITE.hours },
            ].map(({ icon: Icon, title, value, href }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}
            <Button asChild variant="hero" size="lg" className="w-full">
              <a href={SITE.phoneHref}>
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>

          {/* Form */}
          {/* <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Book an Appointment
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We&apos;ll get back to you within an hour.
            </p>
            {submitted ? (
              <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-secondary p-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-primary" />
                <p className="font-semibold">
                  Thank you! We&apos;ve received your request.
                </p>
                <p className="text-sm text-muted-foreground">
                  Our team will call you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="mt-1.5"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="mt-1.5"
                    placeholder="+91 ..."
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="mt-1.5"
                    placeholder="Briefly describe your concern..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <Send className="h-4 w-4" /> Send Request
                </Button>
              </form>
            )}
          </div> */}
        </div>
      </section>

      {/* Google Maps with exact pin */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border shadow-card">
          <iframe
            title="Harjivan Hospital location map"
            src={SITE.googleMapEmbed}
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
            allowFullScreen
          />
        </div>
      </section>
    </>
  )
}

export default ContactPage
