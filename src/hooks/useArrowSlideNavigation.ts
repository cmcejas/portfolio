import { useEffect } from 'react'
import { isTypingTarget } from '../utils/dom'

const KEYS_NEXT = new Set(['ArrowDown', 'ArrowRight'])
const KEYS_PREV = new Set(['ArrowUp', 'ArrowLeft'])

/** Nearest ancestor that scrolls on the y axis (not the document root). */
function getScrollablePane(el: Element | null): HTMLElement | null {
  let node: HTMLElement | null = el instanceof HTMLElement ? el : null
  while (node && node !== document.documentElement) {
    const st = window.getComputedStyle(node)
    const oy = st.overflowY
    if (
      (oy === 'auto' || oy === 'scroll' || oy === 'overlay') &&
      node.scrollHeight > node.clientHeight + 1
    ) {
      return node
    }
    node = node.parentElement
  }
  return null
}

function motionScrollBehavior(): ScrollBehavior {
  if (typeof window === 'undefined') return 'auto'
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth'
}

/**
 * Arrow keys: scroll nested panels first, then advance by one viewport on the
 * document (matches scroll-snap slides).
 */
export function useArrowSlideNavigation() {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return
      if (e.ctrlKey || e.metaKey || e.altKey) return
      if (!KEYS_NEXT.has(e.key) && !KEYS_PREV.has(e.key)) return
      if (isTypingTarget(e.target)) return

      const dir = KEYS_NEXT.has(e.key) ? 1 : -1

      const focusEl =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null
      const targetEl = e.target instanceof Element ? e.target : null
      const pane = getScrollablePane(focusEl) ?? getScrollablePane(targetEl)
      const behavior = motionScrollBehavior()

      if (pane) {
        const maxTop = pane.scrollHeight - pane.clientHeight
        if (dir > 0 && pane.scrollTop < maxTop - 2) {
          e.preventDefault()
          const step = Math.min(
            pane.clientHeight * 0.92,
            maxTop - pane.scrollTop,
          )
          pane.scrollBy({ top: step, behavior })
          return
        }
        if (dir < 0 && pane.scrollTop > 2) {
          e.preventDefault()
          const step = Math.min(pane.clientHeight * 0.92, pane.scrollTop)
          pane.scrollBy({ top: -step, behavior })
          return
        }
      }

      e.preventDefault()
      const vh = window.visualViewport?.height ?? window.innerHeight
      window.scrollBy({ top: dir * vh * 0.98, behavior })
    }

    window.addEventListener('keydown', onKeyDown, { passive: false })
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])
}
