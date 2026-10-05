"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "@/sections/About";
import SelectedWorks from "@/sections/SelectedWorks";
import Timeline from "@/sections/Timeline";
import VectorBridge from "@/sections/VectorBridge";
import Footer from "@/sections/Footer";
import Contact from "@/sections/Contact";
import Testimonial from "@/sections/Testimonial";
import Navigation from "@/components/Navigation";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const footerContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: footerContainerRef, offset: ["start end", "end end"] });
  const footerY = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <div className="min-h-screen relative bg-black selection:bg-white selection:text-black">
      <Navbar />
      <Navigation />

      <About />

      <div id="work" className="bg-black text-white relative z-20"><SelectedWorks /></div>
      <div id="timeline" className="bg-black text-white relative z-20"><Timeline /></div>
      <div className="bg-black text-white relative z-20"><VectorBridge /></div>
      <div className="bg-black text-white relative z-20"><Testimonial /></div>
      <div id="contact" className="relative z-20 bg-black text-white"><Contact /></div>

      <div ref={footerContainerRef} className="relative z-0 h-screen w-full overflow-hidden bg-black text-white">
        <motion.div style={{ y: footerY }} className="h-full w-full"><Footer /></motion.div>
      </div>
    </div>
  );
}