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
        {/* Abstract Dev21 Style Aurora Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="absolute -inset-[10%] opacity-40 blur-[60px]"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(255, 100, 0, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 0, 0, 0.4) 0%, transparent 50%)`,
              backgroundSize: "200% 200%",
            }}
          />
        </div>
        
        {/* Subtle glass overlay */}
        <div className="relative z-10 p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl w-3/4 shadow-2xl flex flex-col items-center justify-center">
           <FileText className="w-12 h-12 text-white/50 mb-4" />
           <p className="text-white/80 font-mono text-sm text-center">ERR_DOCS_NOT_FOUND</p>
        </div>
      </div>
    ),
  },
  {
    title: "Repetitive mentor time",
    description:
      "Senior developers re-explain the same architecture to every new joiner. So new developers ask, and your senior engineers answer. Then the next hire joins, and it happens again.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[#050505] p-10 relative overflow-hidden">
        {/* Abstract Dev21 Style Sparkles/Stars */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"
              style={{
                top: `${(i * 17) % 100}%`,
                left: `${(i * 23) % 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: (i % 5) * 0.4,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl w-3/4 shadow-2xl flex flex-col items-center justify-center">
           <MessagesSquare className="w-12 h-12 text-blue-400/50 mb-4" />
           <p className="text-white/80 font-mono text-sm text-center">"Let me hop on a call..."</p>
        </div>
      </div>
    ),
  },
  {
    title: "Slow time to first commit",
    description:
      "New hires need weeks to go from “I have access” to “I can actually contribute.” Onboarding shouldn't run on your best engineer's patience.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-[#050505] p-10 relative overflow-hidden">
        {/* Abstract Dev21 Style Retro Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        
        {/* Glowing orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full"
        />

        <div className="relative z-10 p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl w-3/4 shadow-2xl flex flex-col items-center justify-center">
           <Clock className="w-12 h-12 text-emerald-400/50 mb-4" />
           <p className="text-white/80 font-mono text-sm text-center">WAITING_FOR_ACCESS</p>
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
