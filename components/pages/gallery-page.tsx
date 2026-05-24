"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const GALLERY_IMAGES = [
  {
    src: "/gallery/harjivan-hospital.png",
    alt: "Hospital Outside - Harjivan Hospital",
    caption: "Harjivan Hospital",
  },
  {
    src: "/gallery/doctor.jpeg",
    alt: "Dr. Vishvamitra Patel - Harjivan Hospital",
    caption: "Dr. Vishvamitra Patel",
  },
  {
    src: "/gallery/guruji.jpg",
    alt: "Guruji",
    caption: "Guruji",
  },
  {
    src: "/gallery/hospital-inside.jpeg",
    alt: "Enterance Gate - Harjivan Hospital",
    caption: "Enterance Gate",
  },
  {
    src: "/gallery/reception.jpeg",
    alt: "Reception - Harjivan Hospital",
    caption: "Reception",
  },
  {
    src: "/gallery/waiting-area.jpeg",
    alt: "Waiting Area - Harjivan Hospital",
    caption: "Waiting Area",
  },
  {
    src: "/gallery/doctor-consultation-room.jpeg",
    alt: "Doctor Consultation Room - Harjivan Hospital",
    caption: "Doctor Consultation Room",
  },
  {
    src: "/gallery/examination-room.jpeg",
    alt: "Examination Room - Harjivan Hospital",
    caption: "Examination Room",
  },
  {
    src: "/gallery/scrub-room.jpg",
    alt: "Scrub Station - Harjivan Hospital",
    caption: "Scrub Station",
  },
  {
    src: "/gallery/operation-theater.jpeg",
    alt: "Operation Theater - Harjivan Hospital",
    caption: "Operation Theater",
  },
  {
    src: "/gallery/pre-operative-room.jpeg",
    alt: "Pre Operative Room - Harjivan Hospital",
    caption: "Pre-Operative Room",
  },
  {
    src: "/gallery/recovery-area.jpeg",
    alt: "Recovery Area - Harjivan Hospital",
    caption: "Recovery Area",
  },
  {
    src: "/gallery/therapy-room.jpeg",
    alt: "Therapy Room - Harjivan Hospital",
    caption: "Therapy Room",
  },
  {
    src: "/gallery/male-therapy-room.png",
    alt: "Male Therapy Room - Harjivan Hospital",
    caption: "Male Therapy Room",
  },
  {
    src: "/gallery/female-therapy-room.jpeg",
    alt: "Female Therapy Room - Harjivan Hospital",
    caption: "Female Therapy Room",
  },
  {
    src: "/gallery/autoclave-room.jpeg",
    alt: "Autoclave Room - Harjivan Hospital",
    caption: "Autoclave Room",
  },
  {
    src: "/gallery/changing-room.jpeg",
    alt: "Changing Room - Harjivan Hospital",
    caption: "Changing Room",
  },
  {
    src: "/gallery/bmw-segregation.jpg",
    alt: "BMW Segregation - Harjivan Hospital",
    caption: "BMW Segregation",
  },
  {
    src: "/gallery/hazardous-material.jpg",
    alt: "Hazardous Material - Harjivan Hospital",
    caption: "Hazardous Material",
  },
  {
    src: "/gallery/medical-records-department.jpeg",
    alt: "Medical Records Department - Harjivan Hospital",
    caption: "Medical Records Department",
  },
  {
    src: "/gallery/fire-layout.jpeg",
    alt: "Fire Layout - Harjivan Hospital",
    caption: "Fire Layout",
  },
  {
    src: "/gallery/pharmacy.jpeg",
    alt: "Pharmacy - Harjivan Hospital",
    caption: "Pharmacy",
  },
  {
    src: "/gallery/pharmacy-2.jpeg",
    alt: "Pharmacy 2 - Harjivan Hospital",
    caption: "Pharmacy",
  },
  {
    src: "/gallery/medicine-preparation-room.jpeg",
    alt: "Medicine Preparation Room - Harjivan Hospital",
    caption: "Medicine Preparation Room",
  },
  {
    src: "/gallery/ipd-area.jpeg",
    alt: "IPD Area - Harjivan Hospital",
    caption: "IPD Area",
  },
  {
    src: "/gallery/general-ward.jpeg",
    alt: "General Ward - Harjivan Hospital",
    caption: "General Ward",
  },
  {
    src: "/gallery/super-delux-room.jpeg",
    alt: "Super Delux Room - Harjivan Hospital",
    caption: "Super Delux Room",
  },
  {
    src: "/gallery/delux-room.jpeg",
    alt: "Delux Room - Harjivan Hospital",
    caption: "Delux Room",
  },
  {
    src: "/gallery/semi-private-room.jpeg",
    alt: "Semi Private Room - Harjivan Hospital",
    caption: "Semi-Private Room",
  },
  {
    src: "/gallery/ambulance.jpeg",
    alt: "Ambulance - Harjivan Hospital",
    caption: "Ambulance",
  },
  {
    src: "/gallery/mission-vision.jpeg",
    alt: "Mission Vision - Harjivan Hospital",
    caption: "Mission & Vision",
  },
  {
    src: "/gallery/organization-chart.jpeg",
    alt: "Organization Chart - Harjivan Hospital",
    caption: "Organization Chart",
  },
  {
    src: "/gallery/scope-services.jpeg",
    alt: "Scope Of Services - Harjivan Hospital",
    caption: "Scope of Services",
  },
  {
    src: "/gallery/responsibilities.jpeg",
    alt: "Responsibilities - Harjivan Hospital",
    caption: "Responsibilities",
  },
  {
    src: "/gallery/rights.jpeg",
    alt: "Rights - Harjivan Hospital",
    caption: "Patient Rights & Responsibilities",
  },
]

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof GALLERY_IMAGES
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    window.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [onClose, onPrev, onNext])

  const img = images[index]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative max-h-[85vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={1280}
          height={1024}
          preload
          className="max-h-[85vh] w-auto rounded-2xl object-contain"
        />
        <div className="absolute right-0 bottom-0 left-0 rounded-b-2xl bg-linear-to-t from-black/70 via-black/30 to-transparent px-6 pt-10 pb-5 text-center text-white">
          <p className="text-lg font-semibold">{img.caption}</p>
          <p className="mt-1 text-sm opacity-70">
            {index + 1} / {images.length}
          </p>
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </motion.div>
  )
}

const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        : null
    )
  }, [])

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
    )
  }, [])

  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            Gallery
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Harjivan Hospital
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            A glimpse into our facilities, treatments, and the care we provide
            every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              onClick={() => setLightboxIndex(i)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border shadow-card"
              aria-label={`View ${img.caption}`}
            >
              <div className="aspect-4/3 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/30">
                <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </div>
              <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-foreground/60 to-transparent px-4 pt-8 pb-4">
                <p className="text-sm font-semibold text-white">
                  {img.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={GALLERY_IMAGES}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default GalleryPage
