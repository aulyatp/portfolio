import type { ReactNode } from "react";
import "./Title.css";

export default function Title({ children }: { children: ReactNode }) {
  return <h1 className="title">{children}</h1>;
}
