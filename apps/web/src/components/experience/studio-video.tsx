"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function StudioVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax the museum background
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Scale the artwork as we scroll into it
  const scaleArtwork = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1.1]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-[#050505] overflow-hidden">
      
      {/* Museum Wall Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <img 
          src="https://noth-in.b-cdn.net/freepik__photography-frontal-shot-of-a-huge-large-169-white__495122.webp" 
          alt="Museum wall" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* The Artwork (Video in Frame) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center z-10 overflow-hidden perspective-[1000px]">
        <motion.div 
          style={{ scale: scaleArtwork }}
          className="relative w-[80vw] md:w-[60vw] max-w-5xl aspect-[16/9] flex items-center justify-center cursor-pointer"
          data-cursor="sound"
        >
          {/* Main Video */}
          <video 
            src="https://noth-in.b-cdn.net/NOTHIN_MANIFESTE_CLEAN.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          
          {/* Reflection Video (simulating glass reflection) */}
          <video 
            src="https://noth-in.b-cdn.net/NOTHIN_MANIFESTE_REFLECT_H265.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-60 z-10 pointer-events-none"
          />

          {/* The Frame Overlay */}
          <img 
            src="https://cdn.prod.website-files.com/6a0c501c42b9751b78a9d1a7/6a281a4f86f15756a04aa88e_test-cadre-transparent.webp" 
            alt="Frame" 
            className="absolute inset-[-4%] w-[108%] h-[108%] object-fill z-20 pointer-events-none drop-shadow-2xl"
          />
        </motion.div>
      </div>

    </section>
  );
}
