"use client"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BrandLogo } from "@/components/site/brand-logo"
import { LINKS } from "@/lib/constant"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BrandLogo size="sm" />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition hover:bg-muted hover:text-foreground",
                isActive(l.to)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-3">
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground",
                  isActive(l.to)
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
