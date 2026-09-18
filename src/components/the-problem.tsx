"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll";
import { FileText, MessagesSquare, Clock } from "lucide-react";

import { motion } from "framer-motion";

const problemContent = [
  {
    title: "Scattered documentation",
    description:
      "Spread across repos, wikis, tickets, and chat, with no single place to start. Most of it assumes the reader already knows what's going on.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[#0a0a0a] p-10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,0,0.15)_0,transparent_60%)] pointer-events-none" />
        
        {/* Floating Docs */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [-6, -4, -6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-8 p-4 bg-white/5 backdrop-blur-md shadow-2xl rounded-xl border border-white/10 opacity-80"
        >
          <FileText className="w-8 h-8 text-orange-400 mb-2" />
          <div className="h-1.5 w-20 bg-white/20 rounded-full mb-2"></div>
          <div className="h-1.5 w-16 bg-white/20 rounded-full"></div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [8, 10, 8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-16 right-8 p-4 bg-white/5 backdrop-blur-md shadow-2xl rounded-xl border border-white/10 opacity-70"
        >
          <FileText className="w-8 h-8 text-red-400 mb-2" />
          <div className="h-1.5 w-14 bg-white/20 rounded-full mb-2"></div>
          <div className="h-1.5 w-24 bg-white/20 rounded-full"></div>
        </motion.div>

        {/* Center Main Doc */}
        <motion.div 
          animate={{ scale: [0.98, 1, 0.98] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="z-10 p-6 bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 w-full max-w-xs relative"
        >
          <div className="absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[10px] text-white shadow-lg shadow-red-500/50">
            !
          </div>
          <h4 className="font-semibold text-lg mb-1 text-white">Legacy Architecture</h4>
          <p className="text-xs text-white/50 mb-6 font-mono">Last updated: 4 years ago</p>
          <div className="space-y-3">
            <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
              <motion.div className="h-full bg-white/40" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
            </div>
            <div className="h-2 w-full bg-white/20 rounded-full"></div>
            <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Repetitive mentor time",
    description:
      "Senior developers re-explain the same architecture to every new joiner. So new developers ask, and your senior engineers answer. Then the next hire joins, and it happens again.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[#0a0a0a] p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,100,255,0.15)_0,transparent_60%)] pointer-events-none" />
        
        <div className="flex flex-col gap-4 w-full max-w-sm relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="self-end bg-white/10 backdrop-blur-md p-4 rounded-2xl rounded-tr-sm shadow-xl border border-white/10 text-sm text-white w-3/4"
          >
            Where do I find the auth flow?
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="self-start bg-blue-600/90 backdrop-blur-md text-white p-4 rounded-2xl rounded-tl-sm shadow-xl shadow-blue-900/20 text-sm w-3/4"
          >
            Ah, it's split between the auth-service repo and the legacy API. Let me hop on a call.
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="self-end bg-white/10 backdrop-blur-md p-4 rounded-2xl rounded-tr-sm shadow-xl border border-white/10 text-sm text-white w-3/4 mt-4"
          >
            How does the DB connection work?
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="self-start bg-blue-600/90 backdrop-blur-md text-white p-4 rounded-2xl rounded-tl-sm shadow-xl shadow-blue-900/20 text-sm w-3/4"
          >
            I explained this to Sarah last week, let me forward you the thread...
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "Slow time to first commit",
    description:
      "New hires need weeks to go from “I have access” to “I can actually contribute.” Onboarding shouldn't run on your best engineer's patience.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[#0a0a0a] p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0,transparent_60%)] pointer-events-none" />
        
        <div className="flex items-end gap-3 h-64 w-full max-w-xs relative z-10">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "40px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-1/4 bg-emerald-500/20 border border-emerald-500/30 rounded-t-lg relative"
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-emerald-500/70">Wk 1</span>
          </motion.div>
          
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "80px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-1/4 bg-emerald-500/40 border border-emerald-500/50 rounded-t-lg relative"
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-emerald-500/80">Wk 2</span>
          </motion.div>
          
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "140px" }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-1/4 bg-emerald-500/60 border border-emerald-500/70 rounded-t-lg relative"
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-emerald-500/90">Wk 3</span>
          </motion.div>
          
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "240px" }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="w-1/4 bg-emerald-400 border border-emerald-300 rounded-t-lg relative shadow-[0_0_30px_rgba(52,211,153,0.5)] flex flex-col items-center justify-start pt-6"
          >
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm font-bold text-emerald-400 whitespace-nowrap drop-shadow-md">
              1st Commit
            </span>
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Clock className="w-6 h-6 text-black" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    ),
  },
];

export function TheProblem() {
  return (
    <section className="bg-white py-24 md:py-32 w-full relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-16 md:mb-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black mb-6" style={{ lineHeight: 1.15 }}>
            Onboarding shouldn't run on your best engineer's patience
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-sans leading-relaxed">
            Every developer who joins your team — or moves onto a new project — has to learn two things at once: how the company works, and how this specific codebase works.
          </p>
        </div>
      </div>
      
      <StickyScroll content={problemContent} />
    </section>
  );
}
