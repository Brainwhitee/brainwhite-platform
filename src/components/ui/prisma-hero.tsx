"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { EightBitText } from "./eight-bit-text";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({ segments, className = "", style }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Hero ---------------- */
const navItems = ["Our story", "Collective", "Workshops", "Programs", "Inquiries"];

const PrismaHero = () => {
  return (
    <section className="h-screen w-full">
      <div className="relative h-full w-full overflow-hidden md:rounded-[2rem]">
        
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise overlay */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" 
          style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
        />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />



        {/* Subtitle and Button (Left-aligned, Shifted Up) */}
        <div className="absolute inset-0 flex flex-col items-start justify-start px-4 sm:px-6 md:px-10 z-10 pointer-events-none pt-[25vh] sm:pt-[30vh]">
          <div className="pointer-events-auto flex flex-col items-start max-w-3xl">
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight text-left drop-shadow-md mb-10"
              style={{ lineHeight: 1.2 }}
            >
              <EightBitText 
                text="New developers shouldn't need six weeks and three mentors just to understand your codebase." 
                delay={0.5}
              />
            </motion.h2>
          </div>
        </div>

        {/* Call to Action Button (Bottom Right) */}
        <div className="absolute bottom-16 sm:bottom-24 md:bottom-32 right-4 sm:right-6 md:right-10 z-20 pointer-events-auto flex justify-end">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="#how-it-works">
              <button className="relative inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#0a0a0a] px-8 text-sm font-medium text-white sm:text-base font-sans cursor-pointer shadow-xl overflow-hidden group border border-white/20">
                <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1.5s]" />
                <span className="relative z-10 flex items-center gap-2">
                  See How It Works
                  <ArrowRight className="h-4 w-4 text-white/70 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Hero title (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-2 sm:px-6 md:px-10 z-10 pointer-events-none">
          <h1
            className="font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
            style={{ color: "#E1E0CC" }}
          >
            <WordsPullUp text="Brainwhite" showAsterisk />
          </h1>
        </div>
      </div>
    </section>
  );
};

export {PrismaHero}
