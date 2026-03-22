import { useEffect, useRef, useState } from 'react'

/** True when the slide fills enough of the viewport (for 3D / motion). */
export function useSlideActive(threshold = 0.32) {
  const ref = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e) return
        setActive(e.isIntersecting && e.intersectionRatio >= threshold)
      },
      { threshold: [0, 0.12, threshold, 0.5, 0.7] },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, active }
}
