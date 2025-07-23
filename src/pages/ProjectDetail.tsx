import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Pengupedia from "./details/Pengupedia";
import type { JSX } from "react";

export function ProjectDetail() {
  const { id } = useParams();

  const projectMap: Record<string, JSX.Element> = {
    pengupedia: <Pengupedia />,
  };

  const DetailComponent = projectMap[id ?? ""];

  if (!DetailComponent) return <div>Project not found.</div>;

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      {DetailComponent}
    </motion.div>
  );
}
