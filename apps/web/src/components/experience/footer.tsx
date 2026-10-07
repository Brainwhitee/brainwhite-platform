"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ExperienceFooter() {
  return (
    <footer className="relative w-full bg-[#050505] text-white pt-32 pb-12 px-6 md:px-10 z-20 overflow-hidden border-t border-white/10">
      
      {/* Massive Call to Action */}
      <div className="flex flex-col items-center justify-center mb-32 text-center">
        <h2 className="text-5xl md:text-[8vw] font-medium tracking-tighter uppercase leading-[0.85] mb-12 hover:scale-105 transition-transform duration-700 cursor-pointer">
          Let's Build <br/> The Future
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#" className="group relative inline-flex items-center gap-4 bg-transparent border border-white hover:border-white transition-colors duration-500 rounded-full px-8 py-4 overflow-hidden">
            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full z-0" />
            <span className="relative z-10 text-sm uppercase tracking-widest font-mono group-hover:text-black transition-colors duration-500">
              Request Access
            </span>
            <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-colors duration-500">
              <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </a>
          
          <a href="#" className="group relative inline-flex items-center gap-4 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-colors duration-500 rounded-full px-8 py-4 overflow-hidden">
            <span className="relative z-10 text-sm uppercase tracking-widest font-mono">
              hello@brainwhite.com
            </span>
          </a>
        </div>
      </div>

      {/* Footer Bottom Meta */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full pt-12 border-t border-white/10 text-xs font-mono uppercase tracking-widest opacity-60">
        <div className="flex gap-12 mb-8 md:mb-0">
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:opacity-100 transition-opacity">LKDN</a>
            <a href="#" className="hover:opacity-100 transition-opacity">X.COM</a>
            <a href="#" className="hover:opacity-100 transition-opacity">GITHUB</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookies</a>
          </div>
        </div>
        <div className="text-right">
          <p>© {new Date().getFullYear()} BrainWhite Inc.</p>
          <p className="mt-2">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
