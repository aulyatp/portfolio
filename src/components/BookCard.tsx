import { Link } from "react-router-dom";
import type { Project } from "../types/project";
import "./BookCard.css";

type BookCardProps = {
  project: Project;
};

export function BookCard({ project }: BookCardProps) {
  return (
    <Link to={`/project/${project.id}`} className="book-card-link">
      <div
        className="book-card"
        style={{
          outline: `5px solid ${project.color1}`,
          outlineOffset: "-5px",
        }}
      >
        <div className="book-inner">
          <div className="book-page">
            <div className="book-corner" style={{ backgroundColor: project.color2 }} />
            <div className="book-content" style={{ backgroundColor: project.color1, outline: `5px solid ${project.color1}`, outlineOffset: "-5px" }}>
              <h2 className="book-title">{project.title}</h2>
              <p className="book-desc">{project.desc}</p>
              <img src={project.cover} alt={project.title + " cover"} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
