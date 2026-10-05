"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

const SkillsPhilosophy = () => {
  return (
    <section className="min-h-screen bg-black text-white font-sans flex flex-col justify-center">
      <div className="w-full px-6 md:px-12 lg:px-16 pt-24 pb-16 md:pt-12 md:pb-20 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-y-8 mb-16"
        >
          <div className="md:col-span-1">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/60">Skills &amp; Philosophy</h2>
          </div>
          <div className="md:col-span-4">
            <blockquote className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-tight">
              &ldquo;The function of good software is to make the complex appear to be simple.&rdquo;
            </blockquote>
            <p className="mt-6 text-white/60">— Grady Booch</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-white/15 pt-6"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">{cat.text}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white/85 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#4facfe]/60 hover:bg-white/10 hover:shadow-[0_0_18px_rgba(79,172,254,0.25)]"
                  >
                    <img
                      src={skill.url}
                      alt={skill.name}
                      className="w-4 h-4 transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPhilosophy;