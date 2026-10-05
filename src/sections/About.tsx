"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, type LucideIcon,} from "lucide-react";
import { siteConfig, education, focus, socials } from "@/data/portfolio";
import StarBorder from "@/components/StarBorder";

const iconMap: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-black text-white font-sans px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-16 flex flex-col justify-center relative"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1200px] mx-auto w-full flex flex-col gap-8"
      >
        <motion.div variants={item} className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white/70">
            {siteConfig.availability}
          </span>
        </motion.div>

        <motion.p variants={item} className="font-mono text-xs md:text-sm text-white/50 tracking-widest uppercase">
          {siteConfig.title}
        </motion.p>

        <motion.h1 variants={item} className="font-mono font-bold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white">
          Hello I&apos;m <span className="text-white">{siteConfig.name}</span>
        </motion.h1>

        <motion.p variants={item} className="max-w-2xl text-sm md:text-base font-mono text-white/60 leading-relaxed">
          {siteConfig.description}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
          {socials.map(({ label, href, icon }) => {
            const Icon = iconMap[label];
            return (
              <StarBorder
                key={label}
                as="a"
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                color="#00f2fe, #4facfe, #7000ff"
                speed="8s"
                className="star-pill"
              >
                {Icon ? <Icon size={16} strokeWidth={2.5} /> : <img src={icon} alt={label} className="w-4 h-4" />}
                {label}
              </StarBorder>
            );
          })}
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 mt-2 border-t border-white/15">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Education</h3>
            <p className="text-lg font-bold">{education.primary.school}</p>
            <p className="text-sm text-white/60">{education.primary.degree}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Focus</h3>
            <ul>
              {focus.map((f) => (
                <li key={f} className="text-sm font-semibold text-white/80">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;