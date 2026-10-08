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

  // Animate text opacity so it fades in as the video shrinks
  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.4, 0.8], [50, 50, 0]);

  // Sync video time to scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = latest * videoRef.current.duration;
    }
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full bg-white text-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        
        {/* Background Content (revealed as video shrinks) */}
        <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-16 lg:p-24 z-0">
          <motion.div style={{ opacity: textOpacity, y: textY }}>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 max-w-5xl">
              Power <br /> In Motion.
            </h2>
            <p className="text-lg md:text-2xl max-w-2xl font-medium tracking-tight">
              Scrubbing time with your scroll. 
              The platform adapts perfectly as the narrative unfolds.
            </p>
          </motion.div>
        </div>

        {/* Video Wrapper */}
        <div className="absolute inset-0 z-10 p-4 md:p-8 pointer-events-none">
          <motion.div 
            className="w-full h-full origin-bottom-right overflow-hidden shadow-2xl bg-black"
            style={{ 
              scale,
              borderRadius
            }}
          >
            {/* Note to Developer: Google Drive streams do not support the fast byte-range requests required for smooth scrubbing.
                I'm using a high-quality placeholder that supports HTTP Range requests.
                To use your video, download it from Google Drive and place it in the `public/` folder, then change src to "/your-video.mp4" */}
            <video
              ref={videoRef}
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" 
              className="w-full h-full object-cover pointer-events-auto"
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
