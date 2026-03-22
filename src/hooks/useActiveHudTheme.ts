import { useEffect, useState } from 'react'

export type HudTheme =
  | 'intro'
  | 'tail'
  | 'mars'
  | 'blackout'
  | 'dungeon'
  | 'pollen'
  | 'metricare'

function readTheme(el: Element): HudTheme {
  const v = el.getAttribute('data-hud-theme')
  if (
    v === 'intro' ||
    v === 'tail' ||
    v === 'mars' ||
    v === 'blackout' ||
    v === 'dungeon' ||
    v === 'pollen' ||
    v === 'metricare'
  ) {
    return v
  }
  return 'intro'
}

/** Slide that covers the largest area of the viewport wins (matches scroll-snap focus). */
function pickActiveTheme(): HudTheme {
  if (typeof document === 'undefined') return 'intro'
  const vh = window.innerHeight
  const vw = window.innerWidth
  let best: { area: number; theme: HudTheme } = { area: 0, theme: 'intro' }
  for (const el of document.querySelectorAll('[data-hud-theme]')) {
    const r = el.getBoundingClientRect()
    const w = Math.max(0, Math.min(r.right, vw) - Math.max(r.left, 0))
    const h = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0))
    const area = w * h
    if (area > best.area) {
      best = { area, theme: readTheme(el) }
    }
  }
  return best.area > 0 ? best.theme : 'intro'
}

export function useActiveHudTheme(): HudTheme {
  const [theme, setTheme] = useState<HudTheme>('intro')

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      setTheme(pickActiveTheme())
    }
    const schedule = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true, capture: true })
    window.addEventListener('resize', schedule, { passive: true })
    document.addEventListener('visibilitychange', update)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule, { capture: true })
      window.removeEventListener('resize', schedule)
      document.removeEventListener('visibilitychange', update)
    }
  }, [])

  return theme
}
