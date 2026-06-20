import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project?.DetailComponent) return <div>Project not found.</div>;

  const Detail = project?.DetailComponent;

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
      <Detail />
    </motion.div>
  );
}
