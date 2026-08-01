import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUpRight,
  IconDownload,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import Image from "next/image";
import { EDUCATION } from "./constants/education";
import { PERSONAL_INFO } from "./constants/personal";
import {
  FREELANCE_PROJECTS,
  PERSONAL_PROJECTS,
} from "./constants/projects";
import { CORE_SKILLS, LIBRARIES_CATEGORIES } from "./constants/skills";
import { SOCIAL_LINKS } from "./constants/social";
import { WORK_EXPERIENCES } from "./constants/work";
import GitHubContributions from "./components/GitHubContributions";
import ProjectSwitchboard from "./components/ProjectSwitchboard";
import SiteNav from "./components/SiteNav";

const flagshipProject = PERSONAL_PROJECTS[0];

const PROOF_POINTS = [
  { value: "1M+", label: "product page views" },
  { value: "1,000+", label: "daily active users" },
  { value: "6-stage", label: "AI verification pipeline" },
  { value: "5 apps", label: "in one shared platform" },
];

export const dynamicParams = false;

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="portfolio-site">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteNav />

      <main id="main-content">
        <section className="hero-section" id="top">
          <div className="frame hero-grid">
            <div className="hero-status">
              <span className="availability-dot" aria-hidden="true" />
              <span>{PERSONAL_INFO.availability}</span>
              <span className="status-location">
                <IconMapPin aria-hidden="true" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            <div className="hero-copy">
              <h1>
                <span>I build systems</span>
                <span>that survive</span>
                <span className="hero-emphasis">the real world.</span>
              </h1>

              <div className="hero-support">
                <p>
                  Full-stack engineering for products where data, money, and
                  people have to move reliably.
                </p>
                <div className="hero-actions">
                  <a className="action action-primary" href="#work">
                    See the work
                    <IconArrowDown aria-hidden="true" />
                  </a>
                  <a
                    className="action action-secondary"
                    href={`mailto:${PERSONAL_INFO.email}`}
                  >
                    Email Abhishek
                    <IconMail aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <figure className="portrait-stage">
              <div className="portrait-backdrop" aria-hidden="true" />
              <div className="portrait-image">
                <Image
                  src="/me.png"
                  alt="Portrait of Abhishek Singh"
                  fill
                  priority
                  sizes="(max-width: 900px) 72vw, 30vw"
                />
              </div>
              <figcaption>
                <span>Full stack</span>
                <span>AI systems</span>
                <span>Product engineering</span>
              </figcaption>
              <div className="portrait-stamp" aria-hidden="true">
                BUILD
                <br />
                SHIP
                <br />
                LEARN
              </div>
            </figure>
          </div>

          <div className="signal-tape" aria-label="Engineering specialties">
            <div className="signal-tape-track">
              {[
                "Multi-tenant SaaS",
                "AI data pipelines",
                "Real-time systems",
                "Payments & wallets",
                "Mobile products",
                "Infrastructure",
                "Multi-tenant SaaS",
                "AI data pipelines",
                "Real-time systems",
                "Payments & wallets",
                "Mobile products",
                "Infrastructure",
              ].map((item, index) => (
                <span key={`${item}-${index}`}>
                  {item}
                  <i aria-hidden="true">◆</i>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title">
          <div className="frame">
            <div className="proof-intro">
              <h2 id="proof-title">
                From the first commit to traffic, money, and messy edge cases.
              </h2>
              <p>
                I work across the whole product surface—architecture, backend,
                interfaces, integrations, deployment, and the operational
                details that appear after launch.
              </p>
            </div>

            <div className="proof-points">
              {PROOF_POINTS.map((point) => (
                <div key={point.label}>
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flagship-section" id="work">
          <div className="frame">
            <div className="section-heading flagship-heading">
              <div>
                <p className="section-context">Flagship build · Youth AF</p>
                <h2>One product. Real users. No safety net.</h2>
              </div>
              <p>
                A learning platform built as both a student product and the
                operating system for a growing education business.
              </p>
            </div>

            <div className="flagship-visual">
              <div className="flagship-screen">
                <div className="browser-bar" aria-hidden="true">
                  <div>
                    <span />
                    <span />
                    <span />
                  </div>
                  <p>youth-af.com</p>
                </div>
                <div className="flagship-image">
                  <Image
                    src="/project-images/youth-af.png"
                    alt="Youth AF computer science learning platform"
                    fill
                    sizes="(max-width: 900px) 100vw, 75vw"
                  />
                </div>
              </div>

              <aside className="flagship-note">
                <p>Built for the full journey</p>
                <ul>
                  <li>Public resource discovery</li>
                  <li>Authenticated learning</li>
                  <li>Payments and access</li>
                  <li>Analytics and storage</li>
                </ul>
                <a
                  href={flagshipProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Youth AF
                  <IconArrowUpRight aria-hidden="true" />
                </a>
              </aside>
            </div>

            <div className="flagship-outcomes">
              <div className="outcome-copy">
                <h3>Computer science, minus the friction.</h3>
                <p>
                  Students can discover notes and PYQs, manage purchased
                  resources, complete their profile, and move between public
                  and authenticated workflows without losing momentum.
                </p>
              </div>
              {flagshipProject.stats?.map((stat) => (
                <div className="outcome-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="frame">
            <div className="section-heading experience-heading">
              <div>
                <p className="section-context">Production experience</p>
                <h2>Work that had consequences.</h2>
              </div>
              <p>
                Products with users, business logic, third-party systems, and
                real operational cost—not isolated demo features.
              </p>
            </div>

            <div className="experience-list">
              {WORK_EXPERIENCES.map((experience) => (
                <article className="experience-entry" key={experience.company}>
                  <div className="experience-meta">
                    <h3>{experience.company}</h3>
                    <p>{experience.role}</p>
                    <span>{experience.location}</span>
                  </div>

                  <div className="experience-body">
                    <h4>{experience.project}</h4>
                    <ul>
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="technology-line">
                      {experience.tech.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="frame">
            <div className="section-heading projects-heading">
              <div>
                <p className="section-context">Selected product routes</p>
                <h2>Different problems. One switchboard.</h2>
              </div>
              <p>
                Focus a route to inspect the product, the problem, and the
                tools used to move it forward.
              </p>
            </div>

            <ProjectSwitchboard />

            <div className="client-builds">
              <div className="client-builds-title">
                <h3>Client builds</h3>
                <p>
                  Focused engagements where the brief needed a complete,
                  dependable product—not just a polished front end.
                </p>
              </div>

              <div className="client-build-list">
                {FREELANCE_PROJECTS.map((project) => (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="client-build"
                    key={project.title}
                  >
                    <span>{project.title}</span>
                    <p>{project.description}</p>
                    <small>{project.tags.join(" / ")}</small>
                    <IconArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="toolkit-section" id="toolkit">
          <div className="frame">
            <div className="section-heading toolkit-heading">
              <div>
                <p className="section-context">Working toolkit</p>
                <h2>The stack is a means, not the pitch.</h2>
              </div>
              <p>
                I choose tools by the shape of the problem, then make the
                boundaries, failure modes, and handoffs explicit.
              </p>
            </div>

            <div className="daily-drivers">
              <p>Daily drivers</p>
              <div>
                {CORE_SKILLS.map((skill) => (
                  <span key={skill.text}>{skill.text}</span>
                ))}
              </div>
            </div>

            <div className="toolkit-map">
              {LIBRARIES_CATEGORIES.map((category) => (
                <div className="toolkit-row" key={category.title}>
                  <h3>{category.title}</h3>
                  <div>
                    {category.skills.map((skill) => (
                      <span key={skill.text}>{skill.text}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GitHubContributions />

        <section className="education-section" aria-labelledby="education-title">
          <div className="frame education-layout">
            <div className="education-intro">
              <p className="section-context">Formal learning</p>
              <h2 id="education-title">Still learning on purpose.</h2>
              <p>
                Product work keeps the questions practical. Formal study gives
                me room to push deeper into machine learning and generative AI.
              </p>
            </div>

            <div className="education-list">
              {EDUCATION.map((education) => (
                <article key={education.degree}>
                  <div>
                    <h3>{education.degree}</h3>
                    <p>{education.field}</p>
                    <span>{education.institution}</span>
                  </div>
                  <div>
                    <p>{education.period}</p>
                    <strong>{education.grade}</strong>
                    <span>{education.location}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="frame">
            <div className="contact-status">
              <span className="availability-dot" aria-hidden="true" />
              {PERSONAL_INFO.availability}
            </div>

            <div className="contact-main">
              <h2>Have a hard problem? Bring it.</h2>
              <div>
                <p>
                  I’m interested in ambitious product teams, deep engineering
                  problems, and work that has to hold up outside the demo.
                </p>
                <a
                  className="contact-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                >
                  Start a conversation
                  <IconArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="contact-links">
              <a href={PERSONAL_INFO.resumeLink} target="_blank" rel="noreferrer">
                <IconDownload aria-hidden="true" />
                Resume
              </a>
              {SOCIAL_LINKS.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    key={social.label}
                  >
                    <SocialIcon aria-hidden="true" />
                    {social.label}
                  </a>
                );
              })}
            </div>

            <footer className="site-footer">
              <p>© {currentYear} Abhishek Singh</p>
              <p>
                Designed and engineered in Delhi
                <span aria-hidden="true">↗</span>
              </p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
