import { SITE } from "@/lib/site"
import { YouTubeEmbed } from "@next/third-parties/google"
import { motion } from "framer-motion"

interface VideoProps {
  videoid?: string
  playlabel?: string
}

export function Video({
  videoid = "72ERqKMDU-M",
  playlabel = "Play Harjivan Hospital Introduction",
}: VideoProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Virtual Tour & Insights
        </h2>
        <p className="mt-3 text-muted-foreground">
          See our facilities and learn about our specialized Ayurvedic approach
          to patient care from {SITE.doctor}.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-12 max-w-[700px]"
      >
        <div className="relative w-full overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-border/50">
          <YouTubeEmbed
            videoid={videoid}
            playlabel={playlabel}
            params="controls=1&rel=0&modestbranding=1"
          />
        </div>
      </motion.div>
    </div>
  )
}
