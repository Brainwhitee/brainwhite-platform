"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Waitlist } from "../waitlist";
import { Magnetic } from "../ui/magnetic";

export function FinalCTA() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden bg-accent text-black" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <motion.div style={{ y }} className="absolute inset-0 flex flex-col md:flex-row h-full">
        
        {/* Left Side: Typography */}
        <div className="flex-1 flex flex-col justify-center p-12 md:p-24 relative">
          <p className="text-meta mb-8 opacity-60">READY TO UPGRADE?</p>
          <h2 className="text-display-large uppercase leading-[0.85] tracking-tighter mb-12">
            LET'S<br/>BUILD.
          </h2>
          <Magnetic intensity={0.2}>
            <div className="w-32 h-32 rounded-full bg-black text-white flex items-center justify-center text-meta cursor-none">
              JOIN
            </div>
          </Magnetic>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 bg-black/10 flex items-center justify-center p-6 md:p-24 backdrop-blur-xl">
          <div className="w-full max-w-md bg-[#050505] p-8 md:p-12 rounded-2xl text-white">
            <Waitlist />
          </div>
        </div>

      </motion.div>
    </section>
  );
}
