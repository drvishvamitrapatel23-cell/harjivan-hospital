"use client"
import Link from "next/link"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { SITE } from "@/lib/site"
import { LINKS } from "@/lib/constant"
import { BrandLogo } from "@/components/site/brand-logo"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-soft border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <BrandLogo size="md" />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A 30-bedded AYUSH Hospital offering authentic Panchkarma &
            Ksharsutra treatment since 1994. Serving Gandhinagar and surrounding
            19 lakh population.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-background px-4 py-2 shadow-sm">
              <Image
                src="/nabh-logo.jpeg"
                alt="NABH Accreditation Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-foreground">
                  NABH Certified Hospital
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link href={l.to} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {SITE.address}
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href={SITE.phoneHref} className="hover:text-primary">
                {SITE.phone}
              </a>
            </li>
            {/* <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              {SITE.email}
            </li> */}
            <li className="flex gap-2">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              {SITE.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Caring hands. Trusted treatment.</p>
        </div>
      </div>
    </footer>
  )
}
