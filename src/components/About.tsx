import "./About.css";

export function About() {
  return (
    <div className="about-section">
      <p className="about-desc">
        Building interfaces,{" "}
        <a href="https://a.itch.io/">
          <span>
            game<sup className="sup">↗</sup>
          </span>
        </a>{" "}
        systems, and ideas worth exploring.
      </p>

      <div className="about-links">
        <a href="mailto:a@gmail.com">
          <span>
            Get in Touch<sup className="sup">↗</sup>
          </span>
        </a>
      </div>
    </div>
  );
}
