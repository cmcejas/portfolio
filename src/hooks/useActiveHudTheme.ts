import { useEffect, useState } from 'react'

export type HudTheme =
  | 'intro'
  | 'tail'
  | 'mars'
  | 'lockup'
  | 'dungeon'
  | 'pollen'
  | 'metricare'

function readTheme(el: Element): HudTheme {
  const v = el.getAttribute('data-hud-theme')
  if (
    v === 'intro' ||
    v === 'tail' ||
    v === 'mars' ||
    v === 'lockup' ||
    v === 'dungeon' ||
    v === 'pollen' ||
    v === 'metricare'
  ) {
    return v
  }
  return 'intro'
}

export function useActiveHudTheme(): HudTheme {
  const [theme, setTheme] = useState<HudTheme>('intro')

  useEffect(() => {
    if (typeof document === 'undefined') return

    const els = Array.from(document.querySelectorAll('[data-hud-theme]'))
    if (els.length === 0) return

    const ratios = new Map<Element, number>()
    const themes = new Map<Element, HudTheme>()

    for (const el of els) {
      themes.set(el, readTheme(el))
      ratios.set(el, 0)
    }

    const pick = () => {
      let bestTheme: HudTheme = 'intro'
      let bestRatio = 0
      for (const [el, ratio] of ratios) {
        if (ratio > bestRatio) {
          bestRatio = ratio
          bestTheme = themes.get(el) ?? 'intro'
        }
      }
      setTheme(bestTheme)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          )
        }
        pick()
      },
      {
        threshold: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
      },
    )

    for (const el of els) observer.observe(el)
    pick()

    return () => {
      observer.disconnect()
    }
  }, [])

  return theme
}
