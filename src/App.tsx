import './App.css'
import { KeyboardNavHud } from './components/KeyboardNavHud'
import { ScrollReveal, ScrollRevealPane } from './components/ScrollReveal'
import { ProjectShowcase } from './components/projects/ProjectShowcase'
import { useArrowSlideNavigation } from './hooks/useArrowSlideNavigation'
import {
  activities,
  education,
  experience,
  site,
  skills,
} from './data/portfolio'

const STAGGER = 0.09

function App() {
  useArrowSlideNavigation()

  const introHero = (
    <section className="hero">
      <p className="eyebrow hero-line hero-line--d0">Portfolio</p>
      <h1 className="hero-line hero-line--d1">{site.name}</h1>
      <p className="hero__title hero-line hero-line--d2">{site.title}</p>
      <p className="hero__lead hero-line hero-line--d3">{site.tagline}</p>
      <ul className="hero__meta hero-line hero-line--d4">
        <li>{site.location}</li>
        <li>{site.workAuth}</li>
      </ul>
      <div className="hero__actions hero-line hero-line--d5">
        <a className="btn" href={site.resumePath} download>
          Download resume
        </a>
        <a
          className="btn btn--ghost"
          href={site.links.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="btn btn--ghost"
          href={site.links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )

  const introWorkEducation = (
    <>
      <section
        className="section section--snap"
        id="work"
        aria-labelledby="work-heading"
      >
        <ScrollReveal>
          <h2 id="work-heading">Experience</h2>
        </ScrollReveal>
        <ul className="timeline">
          {experience.map((job, i) => (
            <ScrollReveal
              key={job.role + job.org}
              as="li"
              delay={i * STAGGER}
            >
              <article className="card">
                <div className="card__head">
                  <h3>{job.role}</h3>
                  <span className="card__range">{job.range}</span>
                </div>
                <p className="card__org">{job.org}</p>
                <ul className="bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </ul>
      </section>

      <section
        className="section section--snap"
        id="education"
        aria-labelledby="edu-heading"
      >
        <ScrollReveal>
          <h2 id="edu-heading">Education</h2>
        </ScrollReveal>
        <ul className="stack">
          {education.map((e, i) => (
            <ScrollReveal key={e.school} as="li" delay={i * STAGGER}>
              <article className="card card--compact">
                <div className="card__head">
                  <h3>{e.school}</h3>
                  <span className="card__range">{e.range}</span>
                </div>
                <p className="muted">{e.detail}</p>
              </article>
            </ScrollReveal>
          ))}
        </ul>
      </section>
    </>
  )

  return (
    <>
    <main id="top">
      <div
        className="site-slide site-slide--surface site-slide--intro-split"
        data-hud-theme="intro"
      >
        <div className="site-slide__intro-shell">
          <header className="header site-slide__intro-header">
            <a
              className="logo header-piece header-piece--d0"
              href="#top"
            >
              CM
            </a>
            <nav
              className="nav header-piece header-piece--d1"
              aria-label="Primary"
            >
              <a href="#work">Work</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
            <a
              className="btn btn--small header-piece header-piece--d2"
              href={site.resumePath}
              download
            >
              Resume
            </a>
          </header>

          <div className="site-slide__intro-split-body">
            <div className="site-slide__intro-columns">
              <div className="site-slide__intro-left">{introHero}</div>
              <ScrollRevealPane className="site-slide__intro-right">
                {introWorkEducation}
              </ScrollRevealPane>
            </div>
          </div>
        </div>
      </div>

      <ProjectShowcase />

      <div
        className="site-slide site-slide--surface site-slide--tail"
        data-hud-theme="tail"
      >
        <ScrollRevealPane className="site-slide__frame site-slide__frame--scroll">
          <section
            className="section section--snap"
            id="skills"
            aria-labelledby="skills-heading"
          >
            <ScrollReveal>
              <h2 id="skills-heading">Skills</h2>
            </ScrollReveal>
            <dl className="skills">
              <ScrollReveal
                as="div"
                className="skills__group"
                delay={0 * STAGGER}
              >
                <dt>Languages</dt>
                <dd>{skills.languages}</dd>
              </ScrollReveal>
              <ScrollReveal
                as="div"
                className="skills__group"
                delay={1 * STAGGER}
              >
                <dt>Frameworks & libraries</dt>
                <dd>{skills.frameworks}</dd>
              </ScrollReveal>
              <ScrollReveal
                as="div"
                className="skills__group"
                delay={2 * STAGGER}
              >
                <dt>Tools & platforms</dt>
                <dd>{skills.tools}</dd>
              </ScrollReveal>
              <ScrollReveal
                as="div"
                className="skills__group"
                delay={3 * STAGGER}
              >
                <dt>AI & APIs</dt>
                <dd>{skills.ai}</dd>
              </ScrollReveal>
              <ScrollReveal
                as="div"
                className="skills__group"
                delay={4 * STAGGER}
              >
                <dt>Spoken languages</dt>
                <dd>{skills.spoken}</dd>
              </ScrollReveal>
            </dl>
          </section>

          <section
            className="section section--snap"
            id="activities"
            aria-labelledby="act-heading"
          >
            <ScrollReveal>
              <h2 id="act-heading">Activities & achievements</h2>
            </ScrollReveal>
            <ul className="stack">
              {activities.map((a, i) => (
                <ScrollReveal key={a.label} as="li" delay={i * STAGGER}>
                  <article className="card card--compact">
                    <h3>{a.label}</h3>
                    <p className="muted">{a.items}</p>
                  </article>
                </ScrollReveal>
              ))}
            </ul>
          </section>

          <section
            className="section section--snap"
            id="contact"
            aria-labelledby="contact-heading"
          >
            <ScrollReveal>
              <h2 id="contact-heading">Contact</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <p className="contact__lead">
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <span className="dot" aria-hidden>
                  ·
                </span>
                <a href={`tel:${site.phone.replace(/\D/g, '')}`}>
                  {site.phone}
                </a>
              </p>
            </ScrollReveal>
          </section>

          <ScrollReveal
            as="footer"
            className="footer footer--snap"
            variant="subtle"
          >
            <span>© {new Date().getFullYear()} {site.shortName}</span>
            <span className="footer__links">
              <a href={site.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={site.resumePath} download>
                Resume
              </a>
            </span>
          </ScrollReveal>
        </ScrollRevealPane>
      </div>
    </main>
    <KeyboardNavHud />
    </>
  )
}

export default App
