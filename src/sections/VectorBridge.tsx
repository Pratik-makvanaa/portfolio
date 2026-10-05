"use client";

import { motion } from "framer-motion";
import SkillsPhilosophy from "./SkillsPhilosophy";

const VectorBridge = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative bg-black text-white"
    >
      <div id="philosophy" />
      <SkillsPhilosophy />
    </motion.section>
  );
};

export default VectorBridge;