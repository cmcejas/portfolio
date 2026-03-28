import "./App.css";
import { KeyboardNavHud } from "./components/KeyboardNavHud";
import { ScrollReveal, ScrollRevealPane } from "./components/ScrollReveal";
import { ProjectShowcase } from "./components/projects/ProjectShowcase";
import { useArrowSlideNavigation } from "./hooks/useArrowSlideNavigation";
import {
  activities,
  education,
  experience,
  favoriteAlbum,
  favoritePaintings,
  favoriteTracks,
  personalBeyond,
  site,
  skills,
} from "./data/portfolio";

const STAGGER = 0.09;

function App() {
  useArrowSlideNavigation();

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
  );

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
            <ScrollReveal key={job.role + job.org} as="li" delay={i * STAGGER}>
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
  );

  return (
    <>
      <main id="top">
        <div
          className="site-slide site-slide--surface site-slide--intro-split"
          data-hud-theme="intro"
        >
          <div className="site-slide__intro-shell">
            <header className="header site-slide__intro-header">
              <nav
                className="nav header-piece header-piece--d1"
                aria-label="Primary"
              >
                <a href="#work">Work</a>
                <a href="#beyond">Beyond</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </nav>
              <a
                className="btn btn--small header-piece header-piece--d2"
                href={site.resumePath}
                target="_blank"
                rel="noreferrer"
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

        <div
          className="site-slide site-slide--surface site-slide--personal"
          data-hud-theme="tail"
        >
          <ScrollRevealPane className="site-slide__frame site-slide__frame--scroll site-slide__frame--personal">
            <section
              className="section section--snap personal-slide"
              id="beyond"
              aria-labelledby="beyond-heading"
            >
              <ScrollReveal>
                <p className="eyebrow personal-slide__eyebrow">Off the clock</p>
                <h2 id="beyond-heading" className="personal-slide__title">
                  Beyond the code
                </h2>
                <p className="personal-slide__lead muted">
                  A few things I return to: music, paintings, a novel, and the
                  teams I cheer for.
                </p>
              </ScrollReveal>

              <div className="personal-tracks" role="list">
                {favoriteTracks.map((t, i) => (
                  <ScrollReveal key={t.href} as="div" delay={i * STAGGER}>
                    <a
                      className="personal-track"
                      href={t.href}
                      target="_blank"
                      rel="noreferrer"
                      role="listitem"
                    >
                      <span className="personal-track__art">
                        <img
                          src={t.coverUrl}
                          alt={`Cover art: ${t.title}`}
                          width={300}
                          height={300}
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                      <span className="personal-track__meta">
                        <span className="personal-track__title">{t.title}</span>
                        <span className="personal-track__artists muted">
                          {t.artists}
                        </span>
                        <span className="personal-track__genres">
                          {t.genres}
                        </span>
                        <span className="personal-track__cta">
                          Open in Spotify
                        </span>
                      </span>
                    </a>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.12}>
                <a
                  className="personal-album"
                  href={favoriteAlbum.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="personal-album__art">
                    <img
                      src={favoriteAlbum.coverUrl}
                      alt={`Cover art: ${favoriteAlbum.title}`}
                      width={320}
                      height={320}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="personal-album__body">
                    <span className="personal-album__label">
                      Album on repeat
                    </span>
                    <span className="personal-album__title">
                      {favoriteAlbum.title}
                    </span>
                    <span className="personal-album__artist muted">
                      {favoriteAlbum.artist}
                    </span>
                    <span className="personal-album__cta">
                      Listen on Spotify
                    </span>
                  </span>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <h3
                  className="personal-subheading"
                  id="beyond-paintings-heading"
                >
                  Paintings
                </h3>
                <p className="personal-slide__art-note muted">
                  {personalBeyond.artVisitNote}
                </p>
              </ScrollReveal>

              <div
                className="personal-paintings"
                role="list"
                aria-labelledby="beyond-paintings-heading"
              >
                {favoritePaintings.map((p, i) => (
                  <ScrollReveal
                    key={p.href}
                    as="div"
                    delay={0.16 + i * STAGGER}
                  >
                    <a
                      className="personal-painting"
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      role="listitem"
                    >
                      {p.imageUrl.trim() ? (
                        <span className="personal-painting__art">
                          <img
                            src={p.imageUrl.trim()}
                            alt={p.catalogTitle}
                            width={640}
                            height={640}
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                      ) : (
                        <span
                          className="personal-painting__placeholder"
                          aria-hidden
                        >
                          <span className="personal-painting__placeholder-inner">
                            <span className="personal-painting__placeholder-title">
                              {p.displayTitle}
                            </span>
                            <span className="personal-painting__placeholder-artist">
                              {p.artist} · {p.year}
                            </span>
                          </span>
                        </span>
                      )}
                      <span className="personal-painting__body">
                        <span className="personal-painting__label">
                          {p.linkLabel}
                        </span>
                        <span className="personal-painting__title">
                          {p.displayTitle}
                        </span>
                        <span className="personal-painting__meta muted">
                          {p.artist} · {p.year} · {p.medium}
                        </span>
                        <span className="personal-painting__cta">
                          View work
                        </span>
                      </span>
                    </a>
                  </ScrollReveal>
                ))}
              </div>

              <div className="personal-notes">
                <ScrollReveal
                  as="div"
                  className="personal-note personal-note--reading"
                  delay={0.32}
                  role="article"
                >
                  <div className="personal-note__cover">
                    <img
                      src={personalBeyond.book.coverPath}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="personal-note__reading-body">
                    <h3 className="personal-note__heading">Current favorite</h3>
                    <p className="personal-note__text">
                      <cite className="personal-note__cite">
                        {personalBeyond.book.title}
                      </cite>
                      <span className="muted">
                        {" "}
                        — {personalBeyond.book.author}
                      </span>
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal
                  as="div"
                  className="personal-note personal-note--sports"
                  delay={0.38}
                  role="article"
                >
                  <h3 className="personal-note__heading">Rooting for</h3>
                  <div className="personal-sports">
                    <div className="personal-sport">
                      <a
                        className="personal-sport__photo"
                        href={personalBeyond.sports.footballImageLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Camp Nou photo — source on Wikimedia Commons (opens in new tab)"
                      >
                        <img
                          src={personalBeyond.sports.footballImagePath}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                      <p className="personal-sport__caption">
                        {personalBeyond.sports.footballLabel} —{" "}
                        {personalBeyond.sports.footballClub}
                      </p>
                    </div>
                    <div className="personal-sport">
                      <a
                        className="personal-sport__photo personal-sport__photo--align-top"
                        href={personalBeyond.sports.formula1ImageLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Carlos Sainz photo — source image (opens in new tab)"
                      >
                        <img
                          src={personalBeyond.sports.formula1ImagePath}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                      <p className="personal-sport__caption muted">
                        Formula 1 — {personalBeyond.sports.formula1}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          </ScrollRevealPane>
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
                  <a href={`tel:${site.phone.replace(/\D/g, "")}`}>
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
              <span>
                © {new Date().getFullYear()} {site.shortName}
              </span>
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
  );
}

export default App;
