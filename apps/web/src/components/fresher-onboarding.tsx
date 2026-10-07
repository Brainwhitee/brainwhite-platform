"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ease } from "@/lib/constants";

const fresherNodes = [
  { name: "WEEK 1", domain: "Environment Setup", stack: "
    Codebase Tour", color: "#ff6600" },
  { name: "WEEK 2", domain: "First Bug Fix", stack: "Pair Programming", color: "#ff6600" },
  { name: "WEEK 3", domain: "Feature Dev", stack: "Code Reviews", color: "#ff6600" },
  { name: "MONTH 1", domain: "Core Contributor", stack: "Independence", color: "#ff6600" },
];

export function FresherOnboarding() {
  const { scrollYProgress } = useScroll({
    target: undefined,
    offset: ["start end", "end start"],
  });

  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      id="why-different"
      className="relative py-24 md:py-32 lg:py-40 border-y border-[var(--border)] overflow-hidden bg-transparent"
      aria-labelledby="fresher-onboarding-heading"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.02)_0%,_transparent_70%)]"
        style={{ y: bgParallax }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        <motion.div
          className="max-w-2xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ff6600] mb-4" style={{ letterSpacing: "0.2em" }}>
            WHY THIS IS DIFFERENT
          </p>
          <h2 id="fresher-onboarding-heading" className="font-display font-medium text-[48px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tight text-white text-balance">
            Onboarding freshers takes time, patience, and structure.
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/60 max-w-xl">
            They aren&apos;t just learning a tech stack. They are learning your company&apos;s unique architecture, patterns, and engineering culture.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
        >
          <FresherJourneyVisualization nodes={fresherNodes} />
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          {[
            { title: "Company Culture", detail: "Understanding the engineering standards and expectations." },
            { title: "Codebase Context", detail: "Navigating unfamiliar architecture, patterns, and internal libraries." },
            { title: "Tooling & Workflows", detail: "Mastering the CI/CD pipelines, code reviews, and deployment." },
          ].map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ item, index }: { item: { title: string; detail: string }; index: number }) {
  const { scrollYProgress } = useScroll({
    target: undefined,
    offset: ["start end", "end start"],
  });

  const cardParallax = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);

  return (
    <motion.div
      className="p-6 border border-white/10 bg-white/5 hover:border-[#ff6600]/30 transition-colors duration-300"
      style={{ y: cardParallax, scale: cardScale }}
      transition={{ duration: 0.3, ease }}
    >
      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#ff6600] mb-2">
        {item.title.toUpperCase()}
      </p>
      <p className="text-white leading-relaxed text-sm">{item.detail}</p>
    </motion.div>
  );
}

function FresherJourneyVisualization({ nodes }: { nodes: typeof fresherNodes }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveIndex((i) => (i + 1) % nodes.length);
          }, 2500);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [nodes.length]);

  return (
    <div ref={containerRef} className="relative h-[360px] md:h-[420px]">
      <svg className="absolute top-1/2 left-10 right-10 -translate-y-1/2" viewBox="0 0 800 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="arrow-fresher" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 Z" fill="#ff6600" opacity="0.3" />
          </marker>
        </defs>
        <path
          d="M0,50 C100,50 200,50 400,50 C600,50 700,50 800,50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.15"
          className="text-white"
        />
        <path
          d="M0,50 C100,50 200,50 400,50 C600,50 700,50 800,50"
          stroke="#ff6600"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
          strokeDasharray="6, 8"
          markerEnd="url(#arrow-fresher)"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-between px-10">
        {nodes.map((node, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center relative z-10"
            style={{ left: `${(index / (nodes.length - 1)) * 100}%` }}
          >
            <motion.div
              className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 flex items-center justify-center bg-transparent"
              style={{
                borderColor: activeIndex === index ? node.color : "var(--border)",
                boxShadow: activeIndex === index ? `0 0 0 4px ${node.color}20, 0 0 20px ${node.color}30` : "none",
              }}
              animate={{
                scale: activeIndex === index ? 1.15 : 1,
                borderColor: activeIndex === index ? node.color : "var(--border)",
              }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="font-mono text-[10px] md:text-[11px] font-semibold uppercase tracking-wider" style={{ color: activeIndex === index ? node.color : "var(--muted)" }}>
                FRESHER
              </span>
            </motion.div>

            <motion.div
              className="mt-4 text-center w-32"
              animate={{
                opacity: activeIndex === index ? 1 : 0.5,
                y: activeIndex === index ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-white mb-1">
                {node.name}
              </p>
              <p className="font-mono text-[9px] text-white/60 mb-1">{node.domain}</p>
              <p className="font-mono text-[8px] text-white/60">{node.stack}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 pt-8 px-10">
        <div className="flex items-center justify-between">
          {nodes.map((node, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center w-32"
              style={{ left: `${(index / (nodes.length - 1)) * 100}%` }}
            >
              <div className="relative w-full h-16 rounded-sm border p-3 text-center border-white/10 bg-white/5">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-wider mb-1 text-white">
                  PHASE {String(index + 1).padStart(2, "0")}
                </p>
                <p className="font-mono text-[10px] text-[#ff6600] mb-1">{node.domain}</p>
                <p className="font-mono text-[8px] text-white/60">{node.stack}</p>
              </div>
              {activeIndex >= index && (
                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-[#ff6600]"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-widest text-[#ff6600]">
        A structured path to productivity
      </p>
    </div>
  );
}
