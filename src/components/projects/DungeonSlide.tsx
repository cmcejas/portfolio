import { useSlideActive } from '../../hooks/useSlideActive'
import type { FeaturedProject } from '../../data/portfolio'
import { ProjectSlideBody } from './ProjectSlideBody'

type Props = {
  project: FeaturedProject
  sectionHeading?: string
}

/** Visual language from Cillian-Cooke/hackathon `style.css` (dark panels, indigo + cyan accents). */
export function DungeonSlide({ project, sectionHeading }: Props) {
  const { ref, active } = useSlideActive()

  return (
    <article
      ref={ref}
      className="project-slide project-slide--dungeon"
      aria-label={project.name}
      data-hud-theme="dungeon"
    >
      <div className="dungeon-decor" aria-hidden>
        <div className="dungeon-fog" />
        <div className="dungeon-panel">
          <div className="dungeon-bubble dungeon-bubble--user">
            <span className="dungeon-bubble__role">Adventurer</span>
            I search the chamber for traps…
          </div>
          <div className="dungeon-bubble dungeon-bubble--dm">
            <span className="dungeon-bubble__role">Dungeon Master</span>
            The runes flicker; a chill runs down the stone walls.
          </div>
        </div>
        <div className="dungeon-dice" />
      </div>
      <ProjectSlideBody
        project={project}
        active={active}
        sectionHeading={sectionHeading}
      />
    </article>
  )
}
