import { featuredProjects } from '../../data/portfolio'
import type { FeaturedProject } from '../../data/portfolio'
import { MarsSlide } from './MarsSlide'
import { LockupSlide } from './LockupSlide'
import { DungeonSlide } from './DungeonSlide'
import { PollenSlide } from './PollenSlide'
import { MetricareSlide } from './MetricareSlide'
import './projectSlides.css'

function assertUnreachable(x: never): never {
  throw new Error(`Unhandled slide theme: ${x}`)
}

function SlideForProject({
  project,
  sectionHeading,
}: {
  project: FeaturedProject
  sectionHeading?: string
}) {
  const { slideTheme } = project
  switch (slideTheme) {
    case 'mars':
      return <MarsSlide project={project} sectionHeading={sectionHeading} />
    case 'lockup':
      return <LockupSlide project={project} sectionHeading={sectionHeading} />
    case 'dungeon':
      return <DungeonSlide project={project} sectionHeading={sectionHeading} />
    case 'pollen':
      return <PollenSlide project={project} sectionHeading={sectionHeading} />
    case 'metricare':
      return <MetricareSlide project={project} sectionHeading={sectionHeading} />
    default:
      return assertUnreachable(slideTheme)
  }
}

export function ProjectShowcase() {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="proj-heading"
    >
      <div className="projects-showcase">
        {featuredProjects.map((p, i) => (
          <SlideForProject
            key={p.name}
            project={p}
            sectionHeading={i === 0 ? 'Selected projects' : undefined}
          />
        ))}
      </div>
    </section>
  )
}
