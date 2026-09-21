"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import About from "@/sections/About";
import SplashCursor from "@/components/SplashCursor";
import SelectedWorks from "@/sections/SelectedWorks";
import VectorBridge from "@/sections/VectorBridge";
import Footer from "@/sections/Footer";
import Contact from "@/sections/Contact";
import Testimonial from "@/sections/Testimonial";
import Navigation from "@/components/Navigation";
import { siteConfig, socials } from "@/data/portfolio";

const CursorFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { damping: 20, stiffness: 100, mass: 0.8 });
  const y = useSpring(mouseY, { damping: 20, stiffness: 100, mass: 0.8 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-gray-400/50 rounded-full pointer-events-none z-[9999] hidden lg:block backdrop-blur-[1px]"
      style={{ x, y }}
    />
  );
};

const BrandLogo = () => (
  <div className="fixed top-6 left-6 md:top-8 md:left-10 z-50 mix-blend-difference">
    <h1 className="font-sans font-black text-2xl md:text-4xl tracking-tighter text-white flex items-start">
      {siteConfig.name.toUpperCase()}
      <span className="text-xs md:text-lg font-medium ml-1 -mt-1 md:-mt-2">®</span>
    </h1>
  </div>
);

const iconMap = { GitHub: Github, LinkedIn: Linkedin, Email: Mail };

export default function HomePage() {
  const footerContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: footerContainerRef, offset: ["start end", "end end"] });
  const footerY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <div className="min-h-screen relative bg-black selection:bg-white selection:text-black">
      <BrandLogo />
      <CursorFollower />
      <Navigation />

      <div className="fixed inset-0 z-0 bg-white text-black">
        <About />
      </div>

      <section className="relative h-screen bg-black flex flex-col px-6 py-12 md:px-16 md:py-16 z-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-10 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2"
          style={{ top: "2.25rem" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          <span className="font-sans font-black text-[9px] tracking-[0.25em] uppercase text-white">
            {siteConfig.availability}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute z-20 hidden md:flex flex-col items-center"
          style={{ right: "64px", top: "112px", bottom: "194px", justifyContent: "center", gap: "1rem" }}
        >
          <span className="w-[1px] h-8 bg-white/30" />
          {socials.map(({ label, href }) => (
            <a key={label} href={href} target={href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer"
              className="group" style={{ writingMode: "vertical-rl" }}>
              <span className="font-sans font-black text-[10px] tracking-[0.22em] uppercase text-white">{label}</span>
            </a>
          ))}
          <span className="w-[1px] h-8 bg-white/30" />
        </motion.div>

        <div className="hidden lg:block"><SplashCursor /></div>
        <div className="h-[32px] w-full md:hidden" />

        <div className="flex-1 flex flex-col items-end justify-center md:hidden pr-0 z-10 pointer-events-none">
          <div className="pointer-events-auto flex flex-col items-center gap-6">
            {socials.map(({ label, href }) => {
              const Icon = iconMap[label as keyof typeof iconMap];
              return (
                <a key={label} href={href} target={href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer"
                  className="text-white hover:opacity-75">
                  <Icon size={18} strokeWidth={2.5} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="z-10 mt-auto mb-6 md:mb-8">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} className="w-fit">
            <h1 className="font-sans font-bold text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] leading-[0.85] tracking-tighter text-white uppercase">
              {siteConfig.tagline[0]}<br />{siteConfig.tagline[1]}
            </h1>
          </motion.div>
        </div>

        <div className="z-10 grid grid-cols-1 md:grid-cols-12 w-full gap-4 mb-8 md:mb-0">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-5 lg:col-span-4">
            <div className="w-12 h-[2px] bg-white mb-6 md:hidden" />
            <p className="font-sans text-xs md:text-sm font-medium text-white leading-relaxed tracking-wide uppercase">
              {siteConfig.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative z-20 w-full bg-transparent">
        <div id="about" className="h-screen w-full pointer-events-none" />
        <div id="work" className="bg-black text-white relative z-20"><SelectedWorks /></div>
        <div className="bg-white text-black relative z-20"><VectorBridge /></div>
        <div className="bg-black text-white relative z-20"><Testimonial /></div>
        <div id="contact" className="relative z-20 bg-white text-black"><Contact /></div>
      </div>

      <div ref={footerContainerRef} className="relative z-0 h-screen w-full overflow-hidden bg-black text-white">
        <motion.div style={{ y: footerY }} className="h-full w-full"><Footer /></motion.div>
      </div>
    </div>
  );
}
