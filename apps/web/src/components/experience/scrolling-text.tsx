"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate transform values based on scroll progress
  // Row 1 moves left, Row 2 moves right
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white py-24 md:py-40 overflow-hidden flex flex-col gap-4 md:gap-8 z-10 border-t border-white/10"
    >
      {/* Row 1 - Moves Left */}
      <motion.div 
        style={{ x: x1 }}
        className="whitespace-nowrap flex"
      >
        <h2 className="text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-[0.85] pr-8">
          NOT JUST A TOOL — A READINESS PLATFORM — 
        </h2>
        <h2 className="text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-[0.85] pr-8">
          NOT JUST A TOOL — A READINESS PLATFORM — 
        </h2>
      </motion.div>

      {/* Row 2 - Moves Right */}
      <motion.div 
        style={{ x: x2 }}
        className="whitespace-nowrap flex"
      >
        <h2 className="text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-[0.85] pr-8 text-white/20 hover:text-white transition-colors duration-500">
          ENGINEERING ONBOARDING — DAY ONE IMPACT — 
        </h2>
        <h2 className="text-[12vw] md:text-[9vw] font-black uppercase tracking-tighter leading-[0.85] pr-8 text-white/20 hover:text-white transition-colors duration-500">
          ENGINEERING ONBOARDING — DAY ONE IMPACT — 
        </h2>
      </motion.div>
    </section>
  );
}
