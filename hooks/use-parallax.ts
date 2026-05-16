import { useEffect, useState } from "react"

/**
 * Returns the current vertical scroll offset (window.scrollY).
 * Safe for SSR - starts at 0 and updates on the client after mount.
 */
export function useParallax() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      setOffset(window.scrollY)
    }
    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(update)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  return offset
}
