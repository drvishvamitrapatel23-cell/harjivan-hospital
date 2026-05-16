"use client"

import { useState } from "react"
import { Ambulance, Phone } from "lucide-react"
import { SITE } from "@/lib/site"

export function AmbulanceFab() {
  const [showConfirm, setShowConfirm] = useState(false)

  const handleClick = () => {
    setShowConfirm(true)
  }

  const handleConfirm = () => {
    setShowConfirm(false)
    window.location.href = SITE.ambulanceHref
  }

  const handleCancel = () => {
    setShowConfirm(false)
  }

  return (
    <>
      {/* Floating Ambulance Button */}
      <button
        onClick={handleClick}
        aria-label="Call Ambulance"
        className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-700 hover:shadow-xl active:scale-95 sm:h-16 sm:w-16"
      >
        <Ambulance className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleCancel}
        >
          <div
            className="mx-4 w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-5 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Ambulance className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Call Ambulance</h3>
                  <p className="text-sm opacity-90">Emergency Service</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground">
                You are about to call the ambulance service at{" "}
                <strong className="text-foreground">{SITE.ambulance}</strong>.
                Do you want to proceed?
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleCancel}
                  className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-muted"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
