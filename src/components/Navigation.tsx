"use client";

import { useState, useEffect } from "react";
import { siteConfig, socials } from "@/data/portfolio";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  number: string;
}

interface SocialItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about", number: "01" },
  { label: "Work", href: "#work", number: "02" },
  { label: "Timeline", href: "#timeline", number: "03" },
  { label: "Philosophy", href: "#philosophy", number: "04" },
  { label: "Contact", href: "#contact", number: "05" },
];

const socialItems: SocialItem[] = socials;

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];
const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];

const overlayVariants: Variants = {
  closed: { clipPath: "inset(0% 0% 100% 0%)", transition: { duration: 1.0, ease } },
  open: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.0, ease } },
};

const itemVariants: Variants = {
  closed: { y: 40, opacity: 0, transition: { duration: 0.8, ease } },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1.0, delay: 0.4 + i * 0.1, ease: easeOut },
  }),
};

const socialVariants: Variants = {
  closed: { opacity: 0, y: 10, transition: { duration: 0.6, ease } },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.6 + i * 0.08, ease: "easeOut" },
  }),
};

const Navigation = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      <div className="fixed top-4 right-4 md:hidden z-[200]" style={{ transform: "translateZ(0)", willChange: "transform" }}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col items-center justify-center gap-[5px] w-14 h-14 rounded-full bg-black transition-colors duration-300 relative"
          style={{ boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.6)", WebkitFontSmoothing: "antialiased" }}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6.5, scaleX: 0.8 } : { rotate: 0, y: 0, scaleX: 1 }}
            transition={{ duration: 0.6, ease }}
            className="absolute block h-[1.5px] w-[22px] bg-white origin-center"
            style={{ top: "35%" }}
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, ease }}
            className="absolute block h-[1.5px] w-[22px] bg-white origin-center"
            style={{ top: "50%", marginTop: "-0.75px" }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6.5, scaleX: 0.8 } : { rotate: 0, y: 0, scaleX: 1 }}
            transition={{ duration: 0.6, ease }}
            className="absolute block h-[1.5px] w-[22px] bg-white origin-center"
            style={{ bottom: "35%" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[100] bg-black flex flex-col justify-between px-8 md:px-16 pt-16 pb-10 md:pt-20 md:pb-14"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 pt-10 md:pt-0">
              <p className="text-sm text-white/70 uppercase tracking-widest font-mono mr-2">Socials</p>
              {socialItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={socialVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="text-base md:text-lg font-medium text-white hover:opacity-40"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <nav className="flex flex-col gap-0">
              {navItems.map((item, i) => (
                <div key={item.label} className="overflow-hidden border-b border-white/25 py-3 md:py-4">
                  <motion.a
                    href={item.href}
                    onClick={handleNavClick}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="flex items-baseline justify-between group cursor-pointer"
                  >
                    <span className="relative text-5xl md:text-7xl lg:text-8xl font-semibold text-white uppercase tracking-tight leading-none group-hover:translate-x-3 transition-transform duration-300 ease-out">
                      {item.label}
                      <span
                        className="pointer-events-none absolute left-0 -bottom-1 h-[3px] w-0 rounded-full transition-all duration-300 ease-out group-hover:w-full"
                        style={{ background: "linear-gradient(90deg, #00f2fe, #4facfe, #7000ff)" }}
                      />
                    </span>
                    <span className="text-xs text-white/55 font-mono tracking-widest self-start mt-2">
                      {item.number}
                    </span>
                  </motion.a>
                </div>
              ))}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.8 } }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
              className="text-xs text-white/20 font-mono tracking-widest mt-8 md:mt-0 md:self-end"
            >
              © 2026 {siteConfig.name.toUpperCase()}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;