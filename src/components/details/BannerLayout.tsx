import { motion } from "framer-motion";
import React from "react";
import "./BannerLayout.css";

interface BannerLayoutProps {
  imgSrc: string;
  imgAlt?: string;
  children: React.ReactNode;
}

export default function BannerLayout({ imgSrc, imgAlt = "Project Image", children }: BannerLayoutProps) {
  return (
    <div className="banner-layout">
      <motion.div className="banner-layout__image" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <img src={imgSrc} alt={imgAlt} />
      </motion.div>
      <motion.div className="banner-layout__content" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
        {children}
      </motion.div>
    </div>
  );
}
