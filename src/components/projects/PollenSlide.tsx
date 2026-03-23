import { lazy, Suspense } from 'react'
import { useSlideActive } from '../../hooks/useSlideActive'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import type { FeaturedProject } from '../../data/portfolio'
import { ProjectSlideBody } from './ProjectSlideBody'

const PollenProjectCanvas = lazy(() =>
  import('./PollenProjectCanvas').then((m) => ({
    default: m.PollenProjectCanvas,
  })),
)

type Props = {
  project: FeaturedProject
  sectionHeading?: string
}

/**
 * Matches PollenCast (cmcejas/hackeurope) theme: dark #1C1C1E, amber #F5A623,
 * Space Grotesk. Three.js layer = drifting golden pollen in depth.
 */
export function PollenSlide({ project, sectionHeading }: Props) {
  const { ref, active } = useSlideActive(0.28)
  const reducedMotion = usePrefersReducedMotion()
  const canvasActive = active && !reducedMotion

  return (
    <article
      ref={ref}
      className="project-slide project-slide--pollen"
      aria-label={project.name}
      data-hud-theme="pollen"
    >
      <div className="project-slide__bg project-slide__bg--pollen" aria-hidden>
        <div className="pollen-ambient" />
        <Suspense
          fallback={<div className="project-pollen__fallback" aria-hidden />}
        >
          <PollenProjectCanvas
            active={canvasActive}
            className="project-pollen__canvas"
          />
        </Suspense>
      </div>
      <ProjectSlideBody
        project={project}
        active={active}
        sectionHeading={sectionHeading}
      />
    </article>
  )
}
