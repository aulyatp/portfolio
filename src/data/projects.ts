// import ErpChart from "../pages/details/ErpChart";
import Pengupedia from "../pages/details/Pengupedia";
import type { Project } from "../types/project";

export const projects: Project[] = [
  // {
  //   id: "erp-chart",
  //   title: "Visualize Your Facts",
  //   desc: "Enterprise Resource Planning — Incorporate charts to your dashboard.",
  //   cover: `${import.meta.env.BASE_URL}pengupedia_cover.png`,
  //   color1: "#85b7eb",
  //   color2: "#0a1640",
  //   DetailComponent: ErpChart,
  // },
  {
    id: "pengupedia",
    title: "Happy Feet, Sharp Minds",
    desc: "Making educational content adorable — one penguin at a time.",
    cover: `${import.meta.env.BASE_URL}pengupedia_cover.png`,
    color1: "#e9adff",
    color2: "#9A42B9",
    DetailComponent: Pengupedia,
  },
];
