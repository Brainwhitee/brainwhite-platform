"use client";

import * as React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/constants";

const metrics = [
  {
    label: "Time to first meaningful PR",
    value: "30–45",
    suffix: "days",
    detail: "Without a structured process",
  },
  {
    label: "Senior engineering time lost",
    value: "15–20",
    suffix: "hrs/mo",
    detail: "Per fresher mentored",
  },
  {
    label: "Faster time to independence",
    value: "~40",
    suffix: "%",
    detail: "With structured onboarding",
  },
];

export function Metrics() {
  const { scrollYProgress } = useScroll({
    target: undefined,
    offset: ["start end", "end start"],
  });

  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="problem"
      className="relative py-24 md:py-32 lg:py-40 border-y border-[var(--border)] overflow-hidden bg-white"
      aria-labelledby="metrics-heading"
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
            THE REAL COST OF RAMP-UP
          </p>
          <h2 id="metrics-heading" className="font-display font-medium text-[48px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tight text-[var(--foreground)] text-balance">
            Unstructured onboarding is an invisible tax.
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-[var(--muted)] max-w-xl">
            Your freshers are eager to build. Your senior engineers are too busy to mentor. The result? Weeks of lost productivity and fragmented learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const cardParallax = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  const [count, setCount] = React.useState(0);
  const targetValue = parseFloat(metric.value.replace(/[~,%]/g, ""));

  React.useEffect(() => {
    if (isInView) {
      const duration = 1200;
      const startTime = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = startValue + (targetValue - startValue) * eased;
        setCount(Math.floor(current));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(targetValue);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, targetValue]);

  const displayValue = metric.value.includes("~") 
    ? `~${count}` 
    : metric.value.includes("%")
    ? `${count}%`
    : metric.value.includes("–")
    ? `${count}–${Math.floor(count * 1.33)}`
    : String(count);

  return (
    <motion.div
      ref={ref}
      className="relative p-8 md:p-10 border border-gray-200 bg-gray-50/30 hover:border-[#ff6600]/40 transition-colors duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease, delay: index * 0.1 }}
      style={{ y: cardParallax, rotate: cardRotate }}
    >
      <div className="absolute top-6 right-6 font-mono text-[11px] font-semibold text-[#ff6600]/80 tracking-widest">
        METRIC {String(index + 1).padStart(2, "0")}
      </div>
      
      <div className="mb-6">
        <p className="text-sm font-medium text-[var(--muted)] leading-relaxed uppercase tracking-wide">{metric.label}</p>
      </div>
      
      <div className="mb-4">
        <span className="font-display font-medium text-[56px] md:text-[72px] lg:text-[84px] leading-[1.02] tracking-tight text-[var(--foreground)] tabular-nums">
          {displayValue}
        </span>
        <span className="font-mono text-lg font-semibold text-[#ff6600] ml-1 align-bottom">
          {metric.suffix}
        </span>
      </div>
      
      <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-mono">
        {metric.detail}
      </p>
    </motion.div>
  );
}