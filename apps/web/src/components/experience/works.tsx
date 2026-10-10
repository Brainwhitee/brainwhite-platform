"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const WORKS = [
  {
    title: "Onboarding Paths",
    subtitle: "Where context meets execution.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
  },
  {
    title: "Readiness Score",
    subtitle: "A living instrument for reading capability.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "AI Code RAG",
    subtitle: "Seize the unexpected: the invisible, made visible.",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop"
  },
  {
    title: "SOC2 Security",
    subtitle: "Swiss clarity for engineering safety.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
  }
];

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const letterY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] text-white py-32 px-6 md:px-10 z-10">
      
      {/* Background massive "WORKS" text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none flex justify-between px-6 pt-10">
        {"FEATURES".split("").map((letter, i) => (
          <motion.span 
            key={i} 
            style={{ y: letterY }}
            className="text-[25vw] leading-[0.8] font-bold uppercase"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 pt-24 mb-16">
        <h2 className="text-2xl md:text-4xl font-light leading-tight">
          Good platforms organize.<br />
          <span className="italic font-serif">Great platforms accelerate.</span>
        </h2>
      </div>

      {/* The List */}
      <div className="relative z-10 flex flex-col w-full border-t border-white/10 mt-12">
        {WORKS.map((work, i) => (
          <div 
            key={i}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 border-b border-white/10 cursor-pointer overflow-hidden"
            data-cursor="explore"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Hover Reveal Image */}
            <div 
              className={`absolute inset-0 z-0 transition-opacity duration-700 ease-out ${hoveredIndex === i ? 'opacity-40' : 'opacity-0'}`}
            >
              <img 
                src={work.img} 
                alt={work.title} 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-baseline md:gap-12">
              <h2 className="text-5xl md:text-8xl font-medium tracking-tighter uppercase transition-transform duration-500 group-hover:translate-x-4">
                {work.title}
              </h2>
              <p className="mt-4 md:mt-0 text-lg md:text-xl font-light opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {work.subtitle}
              </p>
            </div>

            {/* Animated Explore Cursor/Button (Fallback for mobile) */}
            <div className="relative z-10 mt-8 md:mt-0 md:hidden">
              <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full">
                <span className="text-sm font-mono uppercase tracking-widest">explore</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-24 pb-12 gap-8 md:gap-0">
        <a href="#" className="group flex items-center gap-4 bg-transparent border border-white/20 hover:border-white transition-colors duration-500 rounded-full px-8 py-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
          <span className="relative z-10 text-sm uppercase tracking-widest font-mono group-hover:text-black transition-colors duration-500">
            View all capabilities
          </span>
          <ArrowRight className="relative z-10 w-4 h-4 group-hover:text-black transition-colors duration-500" />
        </a>
        <div className="text-sm font-mono uppercase opacity-50 tracking-widest">
          © 26 . 27
        </div>
      </div>
    </section>
  );
}
