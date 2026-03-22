import { lazy, Suspense } from 'react'
import { useSlideActive } from '../../hooks/useSlideActive'
import type { FeaturedProject } from '../../data/portfolio'
import { ProjectSlideBody } from './ProjectSlideBody'

const MarsProjectCanvas = lazy(() =>
  import('./MarsProjectCanvas').then((m) => ({
    default: m.MarsProjectCanvas,
  })),
)

type Props = {
  project: FeaturedProject
  sectionHeading?: string
}

export function MarsSlide({ project, sectionHeading }: Props) {
  const { ref, active } = useSlideActive(0.28)

  return (
    <article
      ref={ref}
      className="project-slide project-slide--mars"
      aria-label={project.name}
      data-hud-theme="mars"
    >
      <div className="project-slide__bg project-slide__bg--mars" aria-hidden>
        <Suspense
          fallback={<div className="project-mars__fallback" aria-hidden />}
        >
          <MarsProjectCanvas
            active={active}
            className="project-mars__canvas"
          />
        </Suspense>
      </div>
      <div className="project-slide__glow project-slide__glow--mars" aria-hidden />
      <ProjectSlideBody
        project={project}
        active={active}
        sectionHeading={sectionHeading}
      />
    </article>
  )
}
