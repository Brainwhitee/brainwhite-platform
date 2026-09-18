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
    <section className="bg-neutral-50 py-24 md:py-32 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Early Access CTA Block */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200 mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500"></div>
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              We're building this with a small group of design partners
            </h2>
            <p className="text-neutral-600 font-sans mb-8 leading-relaxed">
              brainwhite is in active development, and we're working closely with a handful of engineering teams to get it right before opening up more broadly. Join as an early partner and help shape a product built around how your team actually onboards.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
              Request Early Access
            </button>
          </div>
        </div>

        {/* FAQ Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Frequently Asked Questions</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={cn(
                "border rounded-2xl overflow-hidden transition-colors duration-300",
                openIndex === index ? "bg-white border-neutral-300 shadow-sm" : "bg-transparent border-neutral-200 hover:border-neutral-300"
              )}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
              >
                <span className="font-medium text-lg text-neutral-900 pr-8">{faq.question}</span>
                <ChevronDown className={cn("w-5 h-5 text-neutral-400 transition-transform duration-300 flex-shrink-0", openIndex === index ? "rotate-180" : "rotate-0")} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-neutral-600 font-sans leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
