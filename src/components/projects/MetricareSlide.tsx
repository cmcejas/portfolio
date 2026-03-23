import { lazy, Suspense } from 'react'
import { useSlideActive } from '../../hooks/useSlideActive'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import type { FeaturedProject } from '../../data/portfolio'
import { ProjectSlideBody } from './ProjectSlideBody'

const MetricarePillCanvas = lazy(() =>
  import('./MetricarePillCanvas').then((m) => ({
    default: m.MetricarePillCanvas,
  })),
)

type Props = {
  project: FeaturedProject
  sectionHeading?: string
}

export function MetricareSlide({ project, sectionHeading }: Props) {
  const { ref, active } = useSlideActive(0.28)
  const reducedMotion = usePrefersReducedMotion()

  return (
    <article
      ref={ref}
      className="project-slide project-slide--metricare"
      aria-label={project.name}
      data-hud-theme="metricare"
    >
      <div className="project-slide__bg project-slide__bg--metricare" aria-hidden>
        <Suspense
          fallback={<div className="project-metricare__fallback" aria-hidden />}
        >
          <MetricarePillCanvas
            slideActive={active}
            spin={active && !reducedMotion}
            className="project-metricare__canvas"
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
