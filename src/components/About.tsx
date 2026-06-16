import "./About.css";

export function About() {
  return (
    <div className="about-section">
      <h1 className="about-headline">Building delightful interfaces and interactive experiences.</h1>

      {/* <p className="about-desc">
        Frontend | Game | Design
        <br />
        Currently learning shader programming and exploring technical art.
      </p> */}

      <div className="about-cta">
        <a href="https://github.com/aulyatp" className="cta-link">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://ciderbuild.itch.io/" className="cta-link">
          <i className="fa-brands fa-itch-io"></i>
        </a>
        <a href="https://www.linkedin.com/in/aulya-thareeq-pravantawidya-538928123/" className="cta-link">
          <i className="fa-brands fa-square-linkedin"></i>
        </a>
      </div>

      <div className="about-cta">
        <a href="mailto:aulyathareeq2@gmail.com" className="about-links">
          <span>
            Let's work together<sup className="sup">↗</sup>
          </span>
        </a>
      </div>

      {/* <div className="about-stats">
        <div className="stat">
          <span className="stat-label">Tech Stack</span>
          <span className="stat-value">React, Three.js, TypeScript, Vite</span>
        </div>
      </div> */}
    </div>
  );
}
