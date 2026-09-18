"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const TextReveal = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="transition-opacity duration-100">
      {children}
    </motion.span>
  );
};

export function WhyBrainwhite() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const text1 = "Most tools solve one piece of this problem — a wiki, a code-search bot, a visualization tool. brainwhite connects them. ".split(" ");
  const text2 = "It understands your codebase, turns that understanding into a learning path built for the person in front of it, and answers questions grounded in your actual project.".split(" ");

  return (
    <section className="bg-black text-white relative z-20 py-24 md:py-48" id="why-brainwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: sticky titles */}
          <div className="lg:col-span-4 flex flex-col gap-24 relative">
            <div className="sticky top-32">
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-400 mb-2">Why Brainwhite</h3>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Not another docs tool.<br/>Not another AI chatbot.</h2>
            </div>
          </div>

          {/* Right Column: massive scroll text */}
          <div className="lg:col-span-8 flex flex-col justify-center" ref={containerRef}>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.3] tracking-tight">
              {text1.map((word, i) => {
                const start = i / (text1.length + text2.length);
                const end = start + (1 / (text1.length + text2.length));
                return (
                  <TextReveal key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}{" "}
                  </TextReveal>
                );
              })}
              <br/><br/>
              <span className="text-orange-500">
                {text2.map((word, i) => {
                  const offset = text1.length;
                  const start = (i + offset) / (text1.length + text2.length);
                  const end = start + (1 / (text1.length + text2.length));
                  return (
                    <TextReveal key={i + offset} progress={scrollYProgress} range={[start, end]}>
                      {word}{" "}
                    </TextReveal>
                  );
                })}
              </span>
            </p>
          </div>
        </div>

        {/* Who it's for section */}
        <div className="mt-32 md:mt-48 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 border-t border-white/10 pt-24 md:pt-32">
          <div className="lg:col-span-4">
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-400 mb-2">Who It's For</h3>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Built for growing engineering teams</h2>
          </div>
          
          <div className="lg:col-span-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-[1.4] text-neutral-300">
              brainwhite is built for technology startups and mid-sized technology companies — typically 20 to 200 engineers — that regularly bring on interns, freshers, and junior developers, or move existing developers onto new projects. 
            </p>
            <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-medium leading-[1.4] text-white">
              If your senior engineers are your onboarding plan today, <span className="underline decoration-orange-500 underline-offset-8">this is for you.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
