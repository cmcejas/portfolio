import { useSlideActive } from '../../hooks/useSlideActive'
import type { FeaturedProject } from '../../data/portfolio'
import { ProjectSlideBody } from './ProjectSlideBody'

/** App icon — vendored at public/branding/lockup-icon.png */
const LOCKUP_LOGO_SRC = '/branding/lockup-icon.png'

type Props = {
  project: FeaturedProject
  sectionHeading?: string
}

/**
 * Black UI, cyan + magenta neon — logo from the shipped app icon
 * (visual language matches the mobile product).
 */
export function LockupSlide({ project, sectionHeading }: Props) {
  const { ref, active } = useSlideActive(0.28)

  return (
    <article
      ref={ref}
      className="project-slide project-slide--lockup"
      aria-label={project.name}
      data-hud-theme="lockup"
    >
      <div className="lockup-decor" aria-hidden>
        <div className="lockup-neon-grid" />
        <div className="lockup-glow lockup-glow--cyan" />
        <div className="lockup-glow lockup-glow--magenta" />
        <div className="lockup-logo-wrap">
          <img
            className="lockup-logo"
            src={LOCKUP_LOGO_SRC}
            alt=""
            width={1024}
            height={1024}
            decoding="async"
          />
        </div>
        <div className="lockup-vignette" />
        <div className="lockup-scanlines" />
      </div>
      <ProjectSlideBody
        project={project}
        active={active}
        sectionHeading={sectionHeading}
      />
    </article>
  )
}
