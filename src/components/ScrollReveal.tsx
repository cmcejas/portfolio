import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

type Tag = 'div' | 'section' | 'footer' | 'header' | 'li' | 'span'

/** When set, `ScrollReveal` intersects against this scroll container instead of the viewport. */
const ScrollRevealIoRootContext = createContext<HTMLElement | null>(null)

type PaneProps = { className?: string; children: ReactNode }

/**
 * Wrap overflow scroll regions that contain `ScrollReveal` children so reveal uses the
 * panel’s scrollport (viewport root would never see clipped content below the fold).
 */
export function ScrollRevealPane({ className = '', children }: PaneProps) {
  const [root, setRoot] = useState<HTMLElement | null>(null)
  return (
    <ScrollRevealIoRootContext.Provider value={root}>
      <div ref={setRoot} className={className}>
        {children}
      </div>
    </ScrollRevealIoRootContext.Provider>
  )
}

type Props = {
  children: ReactNode
  as?: Tag
  className?: string
  style?: CSSProperties
  /** Delay before transition runs when element enters view (seconds) */
  delay?: number
  /** If false, can re-trigger when scrolling away and back */
  once?: boolean
  variant?: 'default' | 'subtle'
} & Omit<HTMLAttributes<HTMLElement>, 'style' | 'className' | 'children'>

export function ScrollReveal({
  as: Tag = 'div',
  className = '',
  style,
  delay = 0,
  once = true,
  variant = 'default',
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const ioRoot = useContext(ScrollRevealIoRootContext)
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) obs.disconnect()
          } else if (!once) {
            setVisible(false)
          }
        }
      },
      {
        root: ioRoot,
        rootMargin: ioRoot ? '0px 0px -6% 0px' : '0px 0px -10% 0px',
        threshold: 0.06,
      },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [once, visible, ioRoot])

  const variantClass =
    variant === 'subtle' ? 'scroll-reveal scroll-reveal--subtle' : 'scroll-reveal'

  return (
    <Tag
      ref={(node) => {
        ref.current = node
      }}
      className={`${variantClass}${visible ? ' scroll-reveal--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{
        ...style,
        transitionDelay: visible ? `${delay}s` : '0s',
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
