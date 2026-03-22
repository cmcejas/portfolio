import { useSlideActive } from '../../hooks/useSlideActive'
import type { FeaturedProject } from '../../data/portfolio'
import { ProjectSlideBody } from './ProjectSlideBody'

/** Same asset as Expo `icon` in cmcejas/Blackout — vendored at public/branding/blackout-icon.png */
const BLACKOUT_LOGO_SRC = '/branding/blackout-icon.png'

type Props = {
  project: FeaturedProject
  sectionHeading?: string
}

/**
 * Visual language mirrors blackout/constants/theme.ts (BlackoutColors):
 * black UI, cyan + magenta neon — logo from the shipped app icon.
 */
export function BlackoutSlide({ project, sectionHeading }: Props) {
  const { ref, active } = useSlideActive(0.28)

  return (
    <article
      ref={ref}
      className="project-slide project-slide--blackout"
      aria-label={project.name}
      data-hud-theme="blackout"
    >
      <div className="blackout-decor" aria-hidden>
        <div className="blackout-neon-grid" />
        <div className="blackout-glow blackout-glow--cyan" />
        <div className="blackout-glow blackout-glow--magenta" />
        <div className="blackout-logo-wrap">
          <img
            className="blackout-logo"
            src={BLACKOUT_LOGO_SRC}
            alt=""
            width={1024}
            height={1024}
            decoding="async"
          />
        </div>
        <div className="blackout-vignette" />
        <div className="blackout-scanlines" />
      </div>
      <ProjectSlideBody
        project={project}
        active={active}
        sectionHeading={sectionHeading}
      />
    </article>
  )
}
