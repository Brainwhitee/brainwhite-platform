"use client";

import { motion } from "framer-motion";

export function Hero() {
  const statement = "ONBOARDING IS AN ENGINEERING PROBLEM.";
  
  return (
    <section className="relative h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 z-10 noise-bg">
      {/* Top Meta */}
      <div className="flex justify-between w-full overflow-hidden">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-meta"
        >
          <span className="text-accent mr-2">V1</span> 2026 EDITION
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-meta text-right"
        >
          SCROLL TO EXPLORE
        </motion.div>
      </div>

      {/* Main Typography */}
      <div className="flex flex-col items-center justify-center flex-1 w-full relative">
        <h1 className="text-giant text-center uppercase flex flex-wrap justify-center gap-x-[3vw] leading-[0.85]">
          {statement.split(" ").map((word, i) => (
            <span key={i} className="overflow-hidden inline-block pt-2">
              <motion.span
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ 
                  delay: 1.2 + i * 0.1, 
                  duration: 1, 
                  ease: [0.76, 0, 0.24, 1] 
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1.2, ease: "easeOut" }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-accent/5 blur-[100px] pointer-events-none"
        />
      </div>

      {/* Bottom Meta */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center w-full gap-8">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-body max-w-sm text-muted font-light"
        >
          Company codebase + engineering knowledge. We understand the project, you understand the code.
        </motion.p>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.2, type: "spring", stiffness: 200, damping: 20 }}
          className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center"
          data-cursor="hover"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
