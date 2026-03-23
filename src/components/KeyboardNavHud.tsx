import { useEffect, useState } from 'react'
import { useActiveHudTheme, type HudTheme } from '../hooks/useActiveHudTheme'
import { isTypingTarget } from '../utils/dom'
import './keyboardNavHud.css'

const STORAGE_KEY = 'portfolio-keyboard-nav-hud-dismissed'

const KEY_TO_DIR: Record<string, 'up' | 'down' | 'left' | 'right'> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
}

function hudThemeClass(theme: HudTheme): string {
  if (theme === 'tail') return 'keyboard-nav-hud--tail'
  return `keyboard-nav-hud--${theme}`
}

const emptyPressed = {
  up: false,
  down: false,
  left: false,
  right: false,
} as const

export function KeyboardNavHud() {
  const activeTheme = useActiveHudTheme()
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })
  const [pressed, setPressed] = useState(emptyPressed)

  useEffect(() => {
    setShow(true)
  }, [])

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      if (isTypingTarget(e.target)) return
      const dir = KEY_TO_DIR[e.key]
      if (!dir) return
      setPressed((p) => ({ ...p, [dir]: true }))
    }
    const onUp = (e: KeyboardEvent) => {
      const dir = KEY_TO_DIR[e.key]
      if (!dir) return
      setPressed((p) => ({ ...p, [dir]: false }))
    }
    const clear = () => setPressed({ ...emptyPressed })

    window.addEventListener('keydown', onDown, { passive: true })
    window.addEventListener('keyup', onUp, { passive: true })
    window.addEventListener('blur', clear)

    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
      window.removeEventListener('blur', clear)
    }
  }, [])

  const anyArrow =
    pressed.up || pressed.down || pressed.left || pressed.right

  const dismiss = () => {
    setDismissed(true)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  if (!show || dismissed) return null

  return (
    <div
      className={`keyboard-nav-hud ${hudThemeClass(activeTheme)}`}
      role="status"
      aria-live="polite"
      aria-label="You can use arrow keys to move between sections and scroll panels."
    >
      <button
        type="button"
        className="keyboard-nav-hud__dismiss"
        onClick={dismiss}
        aria-label="Dismiss keyboard hint"
      >
        ×
      </button>
      <div className="keyboard-nav-hud__label">Navigate</div>
      <div className="keyboard-nav-hud__cross" aria-hidden>
        <div className="keyboard-nav-hud__row">
          <kbd
            className={`keyboard-nav-hud__kbd keyboard-nav-hud__kbd--d0${pressed.up ? ' keyboard-nav-hud__kbd--pressed' : ''}`}
          >
            ↑
          </kbd>
        </div>
        <div className="keyboard-nav-hud__row keyboard-nav-hud__row--mid">
          <kbd
            className={`keyboard-nav-hud__kbd keyboard-nav-hud__kbd--d1${pressed.left ? ' keyboard-nav-hud__kbd--pressed' : ''}`}
          >
            ←
          </kbd>
          <span
            className={`keyboard-nav-hud__hub${anyArrow ? ' keyboard-nav-hud__hub--pulse' : ''}`}
          />
          <kbd
            className={`keyboard-nav-hud__kbd keyboard-nav-hud__kbd--d2${pressed.right ? ' keyboard-nav-hud__kbd--pressed' : ''}`}
          >
            →
          </kbd>
        </div>
        <div className="keyboard-nav-hud__row">
          <kbd
            className={`keyboard-nav-hud__kbd keyboard-nav-hud__kbd--d3${pressed.down ? ' keyboard-nav-hud__kbd--pressed' : ''}`}
          >
            ↓
          </kbd>
        </div>
      </div>
      <p className="keyboard-nav-hud__hint">
        Arrow keys · slides & scroll panels
      </p>
    </div>
  )
}
