import Pengupedia from "../pages/details/Pengupedia";
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "pengupedia",
    title: "Happy Feet, Sharp Minds",
    desc: "Making educational content adorable — one penguin at a time.",
    cover: "pengupedia_cover.png",
    color1: "#e9adff",
    color2: "#9A42B9",
    DetailComponent: Pengupedia,
  },
];
