"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig, navLinks, resumeUrl } from "@/data/portfolio";
import StarBorder from "@/components/StarBorder";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeCurve }}
      className={`fixed top-0 left-0 w-full z-[150] transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto flex items-center justify-between pl-6 pr-20 md:px-12 lg:px-16 py-4 md:py-5">
        <a href="#about" className="font-sans font-black text-lg md:text-xl tracking-tighter text-white">
          {siteConfig.name.toUpperCase()}
          <span className="text-[10px] align-top ml-0.5">®</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative pb-1 text-xs font-bold uppercase tracking-widest text-white/65 hover:text-white transition-colors duration-300"
            >
              {item.label}
              <span
                className="pointer-events-none absolute left-0 bottom-0 h-[2px] w-0 rounded-full transition-all duration-300 ease-out group-hover:w-full"
                style={{ background: "linear-gradient(90deg, #00f2fe, #4facfe, #7000ff)" }}
              />
            </a>
          ))}
        </div>

        <StarBorder as="a" href={resumeUrl} download color="#f6d365, #fda085" speed="3s" className="star-pill">
          Resume ↓
        </StarBorder>
      </nav>
    </motion.header>
  );
};

export default Navbar;