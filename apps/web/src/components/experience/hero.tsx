"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScanlineBloom from "@/components/ui/scanline-bloom";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const badgeRef = useRef<HTMLDivElement>(null);

  // Subtle magnetic effect for the bottom right badge
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!badgeRef.current) return;
    const rect = badgeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Max magnetic pull distance
    if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
      setMousePos({ x: distanceX * 0.3, y: distanceY * 0.3 });
    } else {
      setMousePos({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      className="relative h-[100dvh] w-full bg-white text-black overflow-hidden flex flex-col justify-between"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ==================== WEBGL BACKGROUND ==================== */}
      <div className="absolute inset-0 z-0 bg-black">
        <ScanlineBloom ink="#ffffff" background="#000000" />
      </div>

      {/* ==================== CONTENT LAYER (STENCIL MASK) ==================== */}
      {/* We use bg-white text-black with mix-blend-screen over the black-backed WebGL canvas.
          White areas stay white. Black text becomes a transparent window revealing the WebGL colors beneath! */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-8 bg-white mix-blend-screen text-black pointer-events-none">
        
        {/* ==================== TOP BAR ==================== */}
        <div className="flex justify-between items-start w-full relative z-20">
          
          {/* Top Left: Meta String & CTA */}
          <div className="flex flex-col items-start gap-8">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-base font-medium tracking-tight leading-tight"
            >
              Not just a tool, a readiness platform.<br/>
              Because BrainWhite is Everything.
            </motion.div>

            <motion.a 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              href="#" 
              className="group relative inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 ease-out pointer-events-auto"
            >
              <span className="relative z-10 text-xs md:text-sm font-bold uppercase tracking-widest">
                Book a demo
              </span>
            </motion.a>
          </div>

        {/* Top Right: Menu component handles the trigger globally */}
        </div>


        {/* ==================== HERO CENTERPIECE ==================== */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <h1 
            className="font-black uppercase tracking-tighter text-black overflow-hidden leading-[0.8] text-center w-full"
            style={{ fontSize: "clamp(4rem, 15vw, 18rem)" }}
          >
            {"BRAINWHITE".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.05,
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>


        {/* ==================== BOTTOM NAVIGATION ==================== */}
        <div className="flex flex-col md:flex-row justify-between items-end w-full relative z-20 pb-2">
          
          {/* Bottom Left: Tracking Text */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs md:text-sm font-medium tracking-tight uppercase max-w-[200px] leading-snug mb-8 md:mb-0"
          >
            Onboarding for<br/>
            Client-Facing<br/>
            Engineering Teams
          </motion.div>

          {/* Bottom Right: Links & Badge */}
          <div className="flex items-end gap-12">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest pointer-events-auto"
            >
              <a href="#" className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">LKDN</a>
              <span className="opacity-30">/</span>
              <a href="#" className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">X.COM</a>
              <span className="opacity-30">/</span>
              <a href="#" className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">EN</a>
            </motion.div>

            <motion.div 
              ref={badgeRef}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 1, type: "spring", bounce: 0.4 }}
              className="relative hidden md:flex items-center justify-center w-24 h-24 bg-black text-white rounded-full cursor-pointer hover:bg-neutral-900 transition-colors pointer-events-auto"
              style={{ 
                x: mousePos.x, 
                y: mousePos.y 
              }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                Explore
              </span>
              {/* Spinning decorative border */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-2 border border-dashed border-white/30 rounded-full pointer-events-none"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
