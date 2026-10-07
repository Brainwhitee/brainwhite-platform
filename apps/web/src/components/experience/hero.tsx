"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// The inner content component so we can render it exactly the same on both layers
function HeroContent({ isVideoLayer }: { isVideoLayer: boolean }) {
  return (
    <div className={`relative flex flex-col justify-between h-full w-full px-6 py-8 md:px-10 md:py-12 pointer-events-none ${isVideoLayer ? 'text-white' : 'text-black'}`}>
      
      {/* Top Spacer for Navbar */}
      <div className="h-20" />

      {/* Top/Middle Text & Button */}
      <div className="flex flex-col items-start mt-[10vh] md:mt-[20vh] max-w-xl pointer-events-auto">
        <div className="text-[1.3rem] md:text-[2rem] leading-[1.1] font-light tracking-tight mb-8 overflow-hidden">
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Not just a tool, a readiness platform.
          </motion.div>
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Because BrainWhite is Everything.
          </motion.div>
        </div>
        
        <motion.a 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          href="#" 
          className="group inline-flex items-center gap-4 bg-transparent transition-colors duration-500 rounded-full overflow-hidden"
        >
          {/* Button Styling based on which layer it's on */}
          <div className={`flex items-center gap-6 backdrop-blur-sm transition-colors duration-500 rounded-full px-8 py-4 border ${
            isVideoLayer 
              ? 'bg-white/10 group-hover:bg-white border-white/20 group-hover:border-white text-white group-hover:text-black' 
              : 'bg-black/5 group-hover:bg-black border-black/10 group-hover:border-black text-black group-hover:text-white'
          }`}>
            <span className="text-xs md:text-sm uppercase tracking-widest font-mono transition-colors duration-500">
              book a demo
            </span>
            <div className="relative flex items-center justify-center w-8 overflow-hidden">
              <div className={`w-4 h-[1.5px] transition-all duration-500 ease-out absolute left-0 group-hover:w-6 ${isVideoLayer ? 'bg-white group-hover:bg-black' : 'bg-black group-hover:bg-white'}`} />
              <div className={`w-2 h-2 border-t-[1.5px] border-r-[1.5px] rotate-45 transition-all duration-500 ease-out absolute left-[14px] group-hover:left-[22px] ${isVideoLayer ? 'border-white group-hover:border-black' : 'border-black group-hover:border-white'}`} />
            </div>
          </div>
        </motion.a>
      </div>

      {/* Bottom Giant Title & Links */}
      <div className="flex flex-col md:flex-row md:items-end justify-between w-full pb-4 pointer-events-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] md:text-[7vw] leading-[0.85] font-medium tracking-tighter uppercase mb-6 md:mb-0"
        >
          B2B Onboarding <br /> Platform
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex items-center gap-6 text-xs md:text-sm font-mono uppercase tracking-widest"
        >
          <a href="#" className="hover:opacity-50 transition-opacity">LKDN</a>
          <span className="opacity-30">/</span>
          <a href="#" className="hover:opacity-50 transition-opacity">X.COM</a>
          <span className="opacity-30">/</span>
          <a href="#" className="hover:opacity-50 transition-opacity">EN</a>
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // We pass the coordinates to both layers to ensure masks line up perfectly if needed
      heroRef.current.style.setProperty("--x", `${x}px`);
      heroRef.current.style.setProperty("--y", `${y}px`);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-[100dvh] w-full overflow-hidden bg-black group cursor-none"
    >
      {/* ======================================================== */}
      {/* LAYER 1: BOTTOM (VIDEO LAYER) */}
      {/* This layer is always present in the background. */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-auto">
        <video 
          src="https://noth-in.b-cdn.net/nothin-sharp-high.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          crossOrigin="anonymous" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        {/* Dark overlay over video so white text is legible */}
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        
        {/* The White Text Content on top of the video */}
        <div className="absolute inset-0 z-10">
          <HeroContent isVideoLayer={true} />
        </div>
      </div>


      {/* ======================================================== */}
      {/* LAYER 2: TOP (WHITE LAYER) */}
      {/* This layer is solid white with black text. */}
      {/* It uses a mask-image to become TRANSPARENT around the cursor, revealing Layer 1 beneath it! */}
      {/* ======================================================== */}
      <div 
        className="absolute inset-0 z-10 bg-white pointer-events-none transition-opacity duration-100 ease-out"
        style={{
          // Transparent at cursor (reveals video), black (opaque) everywhere else (shows white background)
          WebkitMaskImage: "radial-gradient(circle 25vw at var(--x, 50%) var(--y, 50%), transparent 0%, black 100%)",
          maskImage: "radial-gradient(circle 25vw at var(--x, 50%) var(--y, 50%), transparent 0%, black 100%)"
        }}
      >
        {/* The Black Text Content on top of the white background */}
        <div className="absolute inset-0 z-10">
          <HeroContent isVideoLayer={false} />
        </div>
      </div>
      
    </section>
  );
}
