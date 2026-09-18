"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is this just another documentation tool?",
    answer: "No. Documentation is static; brainwhite is an active layer that understands your project and adapts to whoever is asking."
  },
  {
    question: "Will it work with our stack?",
    answer: "brainwhite connects to your repositories and the tools your team already uses, starting with the ones that matter most to onboarding."
  },
  {
    question: "Is our code safe?",
    answer: "Your code and documentation stay yours. Access, permissions, and data handling are built around your organization's security requirements from day one."
  },
  {
    question: "What does joining as a design partner involve?",
    answer: "A short conversation about how your team onboards today, early access to the product as it's built, and a direct line to shape what we build next."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#050505] py-24 md:py-40 relative z-20 overflow-hidden border-t border-white/5">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,165,0,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Aceternity Style Glowing Early Access CTA */}
        <div className="relative group rounded-3xl mb-32">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500 via-pink-500 to-emerald-500 rounded-3xl blur-[10px] opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-[#0a0a0a] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 overflow-hidden">
            {/* Inner subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white">
                We're building this with a small group of design partners
              </h2>
              <p className="text-neutral-400 font-sans mb-10 leading-relaxed text-lg">
                brainwhite is in active development, and we're working closely with a handful of engineering teams to get it right before opening up more broadly. Join as an early partner and help shape a product built around how your team actually onboards.
              </p>
              
              <button className="relative inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black sm:text-base font-sans cursor-pointer overflow-hidden group/btn shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-shadow">
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(0,0,0,0.1),transparent)] bg-[length:200%_100%] bg-[position:-100%_0] bg-no-repeat group-hover/btn:bg-[position:200%_0] transition-[background-position] duration-1000 ease-in-out" />
                <span className="relative z-10">Request Early Access</span>
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">Frequently Asked Questions</h2>
        </div>

        {/* FAQ 3D Flip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000" style={{ perspective: "1000px" }}>
          {faqs.map((faq, index) => {
            const isFlipped = openIndex === index;
            return (
              <div 
                key={index}
                className="relative h-[250px] w-full cursor-pointer group"
                onClick={() => setOpenIndex(isFlipped ? null : index)}
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <motion.div
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="w-full h-full relative"
                >
                  {/* Front of Card (Question) */}
                  <div 
                    className="absolute inset-0 rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 flex flex-col justify-center items-center text-center shadow-xl backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                      <span className="text-xl font-serif italic text-white/50">?</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Back of Card (Answer) */}
                  <div 
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-500/30 p-8 flex flex-col justify-center text-center shadow-[0_0_30px_rgba(255,165,0,0.15)] backface-hidden backdrop-blur-xl"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <p className="text-base md:text-lg text-white font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
