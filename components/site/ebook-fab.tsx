"use client"

import { useState } from "react"
import { BookOpen, Download, X } from "lucide-react"
import { SITE } from "@/lib/site"

export function EbookFab() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Free E-Book"
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 sm:h-16 sm:w-16"
      >
        <BookOpen className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-4 w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-primary px-6 py-5 text-primary-foreground">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Free E-Book</h3>
                    <p className="text-sm opacity-90">Book by {SITE.doctor}</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="rounded-lg p-2 transition hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-muted-foreground">
                Get the free PDF guide on piles treatment without admission and
                without operation.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href={SITE.bookPdf}
                  download
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-95"
                >
                  <Download className="h-4 w-4" /> Download PDF
                </a>
                <a
                  href={SITE.bookPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg border border-border px-4 py-2.5 text-center text-sm font-medium text-muted-foreground transition hover:bg-muted"
                >
                  Read Online
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
