"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScanlineBloom from "@/components/ui/scanline-bloom";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const badgeRef = useRef<HTMLDivElement>(null);

  // Subtle magnetic effect for the bottom right badge
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });

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
    setCursorPos({ x: -1000, y: -1000 });
  };

  return (
    <section 
      className="relative h-[100dvh] w-full bg-white text-black overflow-hidden flex flex-col justify-between"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ==================== WEBGL BACKGROUND ==================== */}
      <div className="absolute inset-0 z-0 bg-black">
        <ScanlineBloom ink="#ff3333" highlight="#ff8888" background="#000000" />
      </div>

      {/* GOOEY FILTER DEFINITION */}
      <svg className="hidden">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -11" result="goo" />
        </filter>
      </svg>

      {/* ==================== CONTENT LAYER (STENCIL MASK & SPOTLIGHT) ==================== */}
      {/* We use mix-blend-screen. The solid white bg hides the flowers.
          The gooey black blobs become transparent windows revealing the WebGL colors beneath. */}
      <div className="absolute inset-0 z-10 mix-blend-screen pointer-events-none">
        
        {/* Solid White Base */}
        <div className="absolute inset-0 bg-white z-0" />

        {/* Liquid Cursor Reveal Layer */}
        <div className="absolute inset-0 z-10" style={{ filter: "url(#goo)" }}>
          {/* Main Wobbling Blob */}
          <motion.div 
            className="absolute top-0 left-0"
            animate={{ x: cursorPos.x, y: cursorPos.y }}
            transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.1 }}
          >
            <motion.div 
              className="w-48 h-40 bg-black -ml-24 -mt-20"
              style={{ borderRadius: "40% 60% 70% 30%" }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
          </motion.div>
          {/* Trailing Blob 1 */}
          <motion.div 
            className="absolute top-0 left-0"
            animate={{ x: cursorPos.x, y: cursorPos.y }}
            transition={{ type: "spring", stiffness: 100, damping: 25, mass: 0.4 }}
          >
            <div className="w-28 h-28 bg-black rounded-full -ml-14 -mt-14" />
          </motion.div>
          {/* Trailing Blob 2 */}
          <motion.div 
            className="absolute top-0 left-0"
            animate={{ x: cursorPos.x, y: cursorPos.y }}
            transition={{ type: "spring", stiffness: 60, damping: 30, mass: 0.8 }}
          >
            <div className="w-16 h-16 bg-black rounded-full -ml-8 -mt-8" />
          </motion.div>
        </div>

        <div className="relative z-20 flex flex-col justify-between p-6 md:p-8 h-full w-full text-black">
        
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full relative z-20 pb-2 gap-8 md:gap-0">
          
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
      </div>
    </section>
  );
}
