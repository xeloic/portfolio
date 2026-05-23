import "./style.css";

import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  return <>
    {/* NAVBAR */}
    <nav>
      <a className="nav-logo" href="#home">
        Prakhar <span>Kumar</span>
      </a>

      <ul className="nav-links">
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Technologies</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li>
          <a className="btn-resume" href="/resume.pdf" download>
            Resume
          </a>
        </li>
      </ul>

      <div className="nav-right">
        <button
          className="theme-btn"
          onClick={() => setDark(!dark)}
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>

    {/* HERO */}
    <section id="home">
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>

      <div className="container">
        <div className="hero-inner">
          <div>
            <div className="hero-tag">Available for opportunities</div>

            <h1>
              Full Stack <br />
              <em> Developer.</em>
            </h1>

            <p className="hero-sub">
              Computer Science undergraduate specialising in
              Spring Boot & React. I build secure REST APIs,
              scalable web applications and clean code.
            </p>

            <div className="hero-ctas">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>

              <a
                href="mailto:prakhark17@gmail.com"
                className="btn-outline"
              >
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-num">3+</span>
                <div className="stat-label">Projects</div>
              </div>

              <div className="stat-card">
                <span className="stat-num">Spring </span>
                <div className="stat-label"> + React</div>
              </div>

              <div className="stat-card">
                <span className="stat-num">2026</span>
                <div className="stat-label">Graduate</div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="hero-card">
            < div  className="profile-avatar">P</div>
            <h3>Prakhar Kumar</h3>
            <p>Full Stack Java Developer · Kolkata</p>

            <hr className="card-divider" />

            <div className="info-row">
              <span className="info-label">Status</span>
              <span className="chip">Final year student</span>
            </div>

            <div className="info-row">
              <span className="info-label">University</span>
              <span className="info-val">
                Techno Main Saltlake
              </span>
            </div>

            <div className="info-row">
              <span className="info-label">Email</span>
              <span className="info-val">
                prakhark17@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* EDUCATION */}
      <section id="education" className="section-wrap">
    <div className="container">

      <div className="section-header">
        <div className="section-label">ACADEMIC JOURNEY</div>

        <h2>
          My <em>Education</em>
        </h2>

        <p>
          The foundation of my technical growth.
        </p>
      </div>

      <div className="edu-modern-grid">

        <div className="edu-modern-card">
          <div className="edu-glow"></div>

          <div className="edu-top">
            <span className="edu-icon">🎓</span>
            <span className="edu-year">2022 - 2026</span>
          </div>

          <h3>B.Tech Computer Science</h3>
          <h4>Techno Main Saltlake</h4>

          <div className="edu-score">CGPA 7.01</div>
        </div>

        <div className="edu-modern-card">
          <div className="edu-glow"></div>

          <div className="edu-top">
            <span className="edu-icon">📘</span>
            <span className="edu-year">2019 - 2021</span>
          </div>

          <h3>Class XII</h3>
          <h4>DPS Ruby Park</h4>

          <div className="edu-score">85%</div>
        </div>

        <div className="edu-modern-card">
          <div className="edu-glow"></div>

          <div className="edu-top">
            <span className="edu-icon">🏫</span>
            <span className="edu-year">2018 - 2019</span>
          </div>

          <h3>Class X</h3>
          <h4>Birla Bharati</h4>

          <div className="edu-score">93%</div>
        </div>

      </div>
    </div>
  </section>

    {/* TECHNOLOGY */}
        <section id="skills" className="section-wrap">
    <div className="container">
        <div className="section-header">
        <div className="section-label">Tools & Languages i use</div>

        <h2>
            My <em>Technologies</em>
        </h2>

        <p>
            Languages, frameworks, and tools I work with every day.
        </p>
        </div>

        <div className="skills-grid">

        <TechCard title="Languages" icon="🟣"
            tags={["Java", "C++", "SQL", "JavaScript", "Python"]} />

        <TechCard title="Backend" icon="⚙️"
            tags={[
            "Spring Boot",
            "Spring MVC",
            "Hibernate / JPA",
            "REST APIs",
            "JWT Auth"
            ]} />

        <TechCard title="Frontend" icon="🎨"
            tags={[
            "React.js",
            "HTML",
            "CSS",
            "Bootstrap"
            ]} />

        <TechCard title="Databases" icon="🗄️"
            tags={["MySQL", "MongoDB"]} />

        

        <TechCard title="Tools" icon="🛠️"
            tags={[
            "Git",
            "Maven",
            "Postman",
            "IntelliJ",
            "VS Code"
            ]} />

        </div>
    </div>
    </section>


    {/* PROJECTS */}
        <section id="projects" className="section-wrap">
    <div className="container">

        <div className="section-header">
        <div className="section-label">PORTFOLIO</div>

        <h2>
            Featured <em>Projects</em>
        </h2>

        <p>
            A selection of things I've designed and built.
        </p>
        </div>

        <div className="project-grid">

        <ProjectCard
            num="01"
            title="RailEase — Train Ticket Booking System"
            desc="A secure full-stack booking platform with real-time search and seat management. Developed REST microservices using Spring Boot with JWT authentication for enterprise-grade security."
            tags={["Spring Boot","JWT","MySQL","React"]}
        />

        <ProjectCard
            num="02"
            title="Codon Usage Optimization Tool"
            desc="ML model improving biological sequence prediction accuracy by 2%. Implemented robust optimization algorithms under noisy data conditions using XGBoost and NLP techniques."
            tags={["Python","XGBoost","NLP","NLTK"]}
        />

        <ProjectCard
            num="03"
            title="StuBit — Online Learning Platform"
            desc="A responsive React-based online learning platform with integrated backend services. Enabled dynamic content management and improved learner engagement."
            tags={["React.js","Spring Boot","MongoDB"]}
        />

        </div>
    </div>
    </section>

    {/* ACHIEVEMENT */}

<section id="achievements" className="section-wrap">
  <div className="container">
    <div className="section-header">
      <div className="section-label">MILESTONES</div>

      <h2>
        Key <em>Achievements</em>
      </h2>

      <p>
        Recognition and accomplishments along the journey.
      </p>
    </div>

    <div className="projects-grid">
      <div className="project-card">
        <h3>🚀 Buildspace Graduate</h3>

        <p>
          Selected from a competitive pool of
          60,000+ global applicants.
        </p>
      </div>

      <div className="project-card">
        <h3>🏆 Smart India Hackathon 2024</h3>

        <p>
          College Finalist — competed at
          national level in India's largest
          hackathon.
        </p>
      </div>

      <div className="project-card">
        <h3>🎓 IIT Madras NPTEL</h3>

        <p>
          Machine Learning — awarded
          Elite Distinction certification.
        </p>
      </div>
    </div>
  </div>
</section>

    {/* FOOTER */}
    <footer>
      Designed & Built by Prakhar Kumar
    </footer>
  </>;
}

function SkillBox({ title, tags }) {
  return (
    <div className="skill-cat">
      <div className="skill-cat-title">{title}</div>

      <div className="skill-tags">
        {tags.map((tag) => (
          <span className="skill-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}


function TechCard({ title, icon, tags }) {
  return (
    <div className="tech-card">
      <div className="tech-title">
        <span className="tech-icon">{icon}</span>
        {title}
      </div>

      <div className="tech-line"></div>

      <div className="tech-tags">
        {tags.map((tag) => (
          <span className="tech-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ num, title, desc, tags }) {
  return (
    <div className="project-box">

      <div className="project-number">{num}</div>

      <h3>{title}</h3>

      <p>{desc}</p>

      <div className="project-bottom">
        <div className="project-tags">
          {tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <button className="project-btn">↗</button>
      </div>

    </div>
  );
}