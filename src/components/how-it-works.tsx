"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Network, Map, MessageSquareCode } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Connect your project",
    description: "Point brainwhite at your repositories and approved documentation. Nothing else about how your team works has to change.",
    icon: <Database className="w-6 h-6 text-orange-500" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "brainwhite learns the codebase",
    description: "It maps your architecture, dependencies, tools, and workflows — the parts most documentation leaves out.",
    icon: <Network className="w-6 h-6 text-blue-500" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Get a personalized learning path",
    description: "Built around the developer's role and existing knowledge, not a generic checklist every new hire gets.",
    icon: <Map className="w-6 h-6 text-emerald-500" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Ask, and actually get answered",
    description: "A project-aware AI assistant answers real questions about your code, grounded in your actual project — not a generic explanation.",
    icon: <MessageSquareCode className="w-6 h-6 text-purple-500" />,
    className: "md:col-span-1 md:row-span-1",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: typeof features[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-neutral-50 border border-neutral-200 p-8 hover:bg-neutral-100 transition-colors cursor-pointer",
        feature.className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.04), transparent 40%)`,
        }}
      />
      
      <div className="z-10 flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform duration-300">
          {feature.icon}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-xs font-semibold text-neutral-600">
              {index + 1}
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
              {feature.title}
            </h3>
          </div>
          <p className="text-neutral-600 font-sans leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full py-24 md:py-32 bg-white relative z-20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        <div className="max-w-3xl mb-16 md:mb-24" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-6"
          >
            How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black"
            style={{ lineHeight: 1.15 }}
          >
            From new repo to first real commit, guided the whole way.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
