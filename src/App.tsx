import { useEffect, useState } from 'react'
import './App.css'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const SKILL_GROUPS = [
  {
    title: 'Programming',
    items: ['Java', 'Python', 'C', 'C++'],
  },
  {
    title: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB', 'Oracle'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git / GitHub', 'VS Code', 'Eclipse', 'Postman', 'Tableau'],
  },
  {
    title: 'Core Concepts',
    items: ['Data Structures & Algorithms', 'OOPs', 'DBMS', 'Operating Systems', 'Computer Networks', 'OpenCV'],
  },
]

const PROJECTS = [
  {
    tag: 'Desktop App · Java',
    title: 'Hotel Management System',
    description:
      'A desktop system for managing room bookings, guest records, check-in / check-out, and billing end to end. JDBC handles secure database connectivity so every booking and payment stays consistent.',
    stack: ['Java Swing', 'JDBC', 'MySQL'],
    points: [
      'Full booking lifecycle: reservation, check-in, check-out, and billing',
      'CRUD operations wired through JDBC for reliable data persistence',
    ],
  },
  {
    tag: 'Computer Vision · Python',
    title: 'Vehicle Number Plate Recognition',
    description:
      'An image-processing pipeline that locates and reads vehicle number plates from photos — the same detect-then-read approach that inspired this page\'s scanning hero.',
    stack: ['Python', 'OpenCV', 'Tesseract OCR', 'Haar Cascades'],
    points: [
      'Grayscale conversion, noise reduction, and edge detection to isolate plates',
      'Haar Cascade classifiers for plate localization ahead of OCR extraction',
    ],
  },
]

const EDUCATION = [
  { year: '2027', label: 'Expected', degree: 'Master of Computer Applications (MCA)', place: 'SRM Institute of Science and Technology, Delhi NCR' },
  { year: '2025', label: 'Completed', degree: 'Bachelor of Computer Applications (BCA)', place: 'Patliputra University' },
  { year: '2022', label: 'Completed', degree: 'Senior Secondary (XII)', place: 'BSEB' },
  { year: '2020', label: 'Completed', degree: 'Secondary (X)', place: 'BSEB' },
]

const SOFT_SKILLS = ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability']

const SCAN_LINES = ['INITIALIZING SCAN...', 'ANALYZING PROFILE...', 'MATCH: SOFTWARE_DEVELOPER', 'CONFIDENCE: 99.8%']

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z" />
    </svg>
  )
}
function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.28 5.68.42.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12c0-6.37-5.15-11.53-11.5-11.53Z" />
    </svg>
  )
}
function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-4V9Z" />
    </svg>
  )
}
function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  )
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

function App() {
  const [scanIndex, setScanIndex] = useState(0)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setScanIndex((i) => (i + 1) % SCAN_LINES.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <header className="nav">
        <a href="#top" className="brand">
          DK<span className="brand-dot">.</span>ARYA
        </a>
        <nav className={`nav-links ${navOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setNavOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Get in touch
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">Software Developer — Patna, India</p>

          <div className="scan-frame">
            <span className="corner tl" />
            <span className="corner tr" />
            <span className="corner bl" />
            <span className="corner br" />
            <span className="scan-line" aria-hidden="true" />
            <h1>Divyanshu Kumar Arya</h1>
          </div>

          <p className="hero-sub">
            MCA graduate who turns coursework into working systems — from database-backed booking
            platforms to computer-vision pipelines that read the world in front of a camera.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href="#projects">
              View projects <IconArrow />
            </a>
            <a className="btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="readout" role="status">
            <span className="dot" />
            <span className="readout-text">{SCAN_LINES[scanIndex]}</span>
          </div>
        </section>

        <div className="ticks" />

        <section id="about" className="section about">
          <div className="section-head">
            <p className="eyebrow">01 — About</p>
            <h2>Detail-oriented, still learning by building</h2>
          </div>
          <div className="about-grid">
            <p className="about-copy">
              I'm an MCA student with a strong footing in programming, database management, and
              the software development lifecycle. I like taking an idea apart until I understand
              every moving piece — then rebuilding it as something that actually runs. Right now
              I'm looking for an entry-level Software Developer or Trainee role where I can put
              that habit to work on real problems, and keep growing alongside people who know more
              than I do.
            </p>
            <div className="about-side">
              <div className="badge-card">
                <span className="badge-label">Certification</span>
                <span className="badge-title">Data Analytics Job Simulation</span>
                <span className="badge-sub">Deloitte · 2026</span>
              </div>
              <ul className="soft-skills">
                {SOFT_SKILLS.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="ticks" />

        <section id="skills" className="section skills">
          <div className="section-head">
            <p className="eyebrow">02 — Skills</p>
            <h2>What I build with</h2>
          </div>
          <div className="skills-grid">
            {SKILL_GROUPS.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="ticks" />

        <section id="projects" className="section projects">
          <div className="section-head">
            <p className="eyebrow">03 — Projects</p>
            <h2>Academic projects</h2>
          </div>
          <div className="project-list">
            {PROJECTS.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-tag">{project.tag}</span>
                  <a
                    className="project-link"
                    href="https://github.com/Divyanshuarya"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub <IconArrow />
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="skill-tags">
                  {project.stack.map((tech) => (
                    <span className="skill-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="ticks" />

        <section id="education" className="section education">
          <div className="section-head">
            <p className="eyebrow">04 — Education</p>
            <h2>Academic timeline</h2>
          </div>
          <ol className="timeline">
            {EDUCATION.map((entry) => (
              <li className="timeline-item" key={entry.degree}>
                <div className="timeline-year">{entry.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-body">
                  <span className={`timeline-status ${entry.label === 'Expected' ? 'expected' : ''}`}>
                    {entry.label}
                  </span>
                  <h3>{entry.degree}</h3>
                  <p>{entry.place}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="ticks" />

        <section id="contact" className="section contact">
          <div className="section-head">
            <p className="eyebrow">05 — Contact</p>
            <h2>Let's build something</h2>
          </div>
          <p className="contact-copy">
            Open to entry-level Software Developer and Trainee roles. The fastest way to reach me
            is email — I'll get back to you quickly.
          </p>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:skydkarya@gmail.com">
              <IconMail />
              <span>skydkarya@email.com</span>
            </a>
            <a className="contact-card" href="tel:+918210761965">
              <IconPhone />
              <span>+91 82107 61965</span>
            </a>
            <a
              className="contact-card"
              href="https://linkedin.com/in/divyanshu-arya-113184272"
              target="_blank"
              rel="noreferrer"
            >
              <IconLinkedin />
              <span>linkedin.com/in/divyanshu-arya</span>
            </a>
            <a className="contact-card" href="https://github.com/Divyanshuarya" target="_blank" rel="noreferrer">
              <IconGithub />
              <span>github.com/Divyanshuarya</span>
            </a>
          </div>
          <p className="location">
            <IconMapPin /> Patna, Bihar, India
          </p>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Divyanshu Kumar Arya</span>
        <span className="footer-mono">Built with React + Vite</span>
      </footer>
    </>
  )
}

export default App
