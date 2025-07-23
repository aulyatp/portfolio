import type { ComponentType } from "react";

export type Project = {
  id: string;
  title: string;
  desc: string;
  cover: string;
  color1?: string;
  color2?: string;
  DetailComponent?: ComponentType;
};
