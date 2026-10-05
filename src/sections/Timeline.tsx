"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import { timeline } from "@/data/portfolio";
import "./Timeline.css";

const iconMap = { graduation: GraduationCap, briefcase: Briefcase, code: Code2 };

const Timeline = () => {
  const railRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="min-h-screen w-full bg-black text-white font-sans px-6 md:px-12 lg:px-16 py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-widest text-white/50 mb-16"
        >
          03. Timeline
        </motion.h2>

        <div ref={railRef} className="timeline-rail">
          <span className="timeline-rail-base" />
          <motion.span className="timeline-rail-fill" style={{ scaleY: lineScale }} />

          {timeline.map((entry, i) => {
            const Icon = iconMap[entry.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={entry.period}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="timeline-entry"
              >
                <span className="timeline-dot" />
                <div className="timeline-date">{entry.period}</div>
                <div className="timeline-content">
                  <div className="timeline-icon"><Icon size={16} strokeWidth={2.5} /></div>
                  <div>
                    <h3 className="timeline-role">{entry.role} · {entry.org}</h3>
                    <p className="timeline-meta">{entry.meta}</p>
                    <ul className="timeline-bullets">
                      {entry.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    <div className="timeline-tags">
                      {entry.tags.map((t) => <span key={t} className="timeline-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;