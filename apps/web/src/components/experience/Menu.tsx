"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "WORKS", href: "#works" },
    { label: "STUDIO", href: "#studio" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <motion.button
        className="fixed top-6 right-6 md:top-8 md:right-8 z-[100] text-sm md:text-base font-bold uppercase tracking-widest mix-blend-difference text-white h-6 md:h-7 overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="relative flex flex-col items-end"
          whileHover={{ y: "-50%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block h-6 md:h-7 flex items-center leading-none">{isOpen ? "CLOSE ::" : "MENU ::"}</span>
          <span className="block h-6 md:h-7 flex items-center leading-none">{isOpen ? "CLOSE ::" : "MENU ::"}</span>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-[#050505] text-white flex flex-col justify-center items-center pointer-events-auto"
          >
            <nav className="flex flex-col items-center gap-6 md:gap-10">
              {links.map((link, i) => (
                <div key={link.label} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                      delay: 0.2 + i * 0.1,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="block text-5xl md:text-8xl font-black uppercase tracking-tighter hover:text-neutral-500 transition-colors duration-300"
                  >
                    {link.label}
                  </motion.a>
                </div>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-8 md:bottom-12 flex gap-8 text-xs font-bold tracking-widest uppercase opacity-50"
            >
              <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
              <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
              <a href="#" className="hover:opacity-100 transition-opacity">GitHub</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
