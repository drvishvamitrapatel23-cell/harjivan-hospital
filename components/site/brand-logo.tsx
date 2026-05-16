import Image from "next/image"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeMap = {
  sm: { icon: 28, text: "text-lg" },
  md: { icon: 36, text: "text-xl" },
  lg: { icon: 48, text: "text-2xl" },
}

export function BrandLogo({ size = "md", className }: BrandLogoProps) {
  const { icon, text } = sizeMap[size]

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/favicon-32x32.png"
        alt="Harjivan Hospital"
        width={icon}
        height={icon}
        className="shrink-0 rounded"
        priority
      />
      <span
        className={cn(
          "font-brand font-medium tracking-wide whitespace-nowrap text-red-600 uppercase",
          text
        )}
      >
        Harjivan Hospital
      </span>
    </span>
  )
}
