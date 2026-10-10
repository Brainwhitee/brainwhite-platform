"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export function VideoScrubSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale down from full size (1) to picture-in-picture size (0.3)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "24px"]);

  // Animate text opacity so it fades in earlier and stays visible
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.4], [50, 50, 0]);



  return (
    <section ref={containerRef} className="relative h-[150vh] md:h-[250vh] w-full bg-white text-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        
        {/* Background Content (revealed as video shrinks) */}
        <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-16 lg:p-24 z-0">
          <motion.div style={{ opacity: textOpacity, y: textY }}>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 max-w-5xl">
              Power <br /> In Motion.
            </h2>
            <p className="text-lg md:text-2xl max-w-2xl font-medium tracking-tight">
              The platform adapts perfectly as the narrative unfolds.
            </p>
          </motion.div>
        </div>

        {/* Video Wrapper */}
        <div className="absolute inset-0 z-10 p-4 md:p-8 pointer-events-none flex items-start md:items-end justify-center md:justify-end">
          <motion.div 
            className="w-full aspect-video md:aspect-auto md:h-full overflow-hidden shadow-2xl bg-black md:origin-bottom-right origin-top"
            style={{ 
              scale,
              borderRadius
            }}
          >
            <video
              ref={videoRef}
              src="/Brainwhitev1.mp4" 
              className="w-full h-full object-cover scale-[1.25] md:scale-[1.15] translate-y-6 md:translate-y-4 pointer-events-auto"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
