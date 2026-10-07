"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Background Video (Using placeholder as requested, though referencing the same for structure) */}
      <div className="absolute inset-0 z-0 bg-black/40">
        <video 
          src="https://noth-in.b-cdn.net/nothin-sharp-high.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          crossOrigin="anonymous" 
          className="w-full h-full object-cover mix-blend-lighten opacity-80"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 py-8 md:px-10 md:py-12 pointer-events-none">
        
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
            <div className="flex items-center gap-6 bg-white/10 group-hover:bg-white backdrop-blur-sm transition-colors duration-500 rounded-full px-8 py-4">
              <span className="text-xs md:text-sm uppercase tracking-widest font-mono text-white group-hover:text-black transition-colors duration-500">
                book a demo
              </span>
              <div className="relative flex items-center justify-center w-8 overflow-hidden">
                <div className="w-4 h-[1.5px] bg-white group-hover:bg-black transition-all duration-500 ease-out absolute left-0 group-hover:w-6" />
                <div className="w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-white group-hover:border-black rotate-45 transition-all duration-500 ease-out absolute left-[14px] group-hover:left-[22px]" />
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
    </section>
  );
}
