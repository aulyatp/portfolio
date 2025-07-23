import { projects } from "../data/projects";
import { BookCard } from "./BookCard";
import "./BookList.css";

export function BookList() {
  return (
    <div className="book-list">
      {projects.map((project) => (
        <BookCard key={project.id} project={project} />
      ))}
    </div>
  );
}
