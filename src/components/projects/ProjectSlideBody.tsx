import type { FeaturedProject } from '../../data/portfolio'

type Props = {
  project: FeaturedProject
  active: boolean
  className?: string
  /** First slide only: visible section title (id=proj-heading for in-page nav). */
  sectionHeading?: string
}

export function ProjectSlideBody({
  project,
  active,
  className = '',
  sectionHeading,
}: Props) {
  return (
    <div
      className={`project-slide__inner${active ? ' project-slide__inner--visible' : ''}${className ? ` ${className}` : ''}`.trim()}
    >
      {sectionHeading ? (
        <h2 id="proj-heading" className="project-slide__chapter">
          {sectionHeading}
        </h2>
      ) : null}
      <p className="project-slide__eyebrow">{project.context}</p>
      <h3 className="project-slide__title">{project.name}</h3>
      <p className="project-slide__desc">{project.description}</p>
      <p className="project-slide__tech">{project.tech}</p>
      <div className="project-slide__links">
        {project.links.repo ? (
          <a href={project.links.repo} target="_blank" rel="noreferrer">
            Repository
          </a>
        ) : null}
        {project.links.live ? (
          <a href={project.links.live} target="_blank" rel="noreferrer">
            {'liveLabel' in project.links && project.links.liveLabel
              ? project.links.liveLabel
              : 'Live demo'}
          </a>
        ) : null}
        {project.links.more ? (
          <a href={project.links.more.href} target="_blank" rel="noreferrer">
            {project.links.more.label}
          </a>
        ) : null}
      </div>
    </div>
  )
}
