"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Particle Network Graph Background ---
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const particleCount = 60;
    
    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    let mouse = { x: -1000, y: -1000 };

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 165, 0, ${0.15 - dist / 1000})`; // Orange glow
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        
        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          p.x -= (dx / dist) * 2;
          p.y -= (dy / dist) * 2;
          
          // Draw mouse connection
          ctx.beginPath();
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.3 - dist / 500})`; // Emerald to mouse
          ctx.lineWidth = 1.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.3)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 pointer-events-auto" />;
};


// --- Scroll Reveal Text ---
const TextReveal = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [10, 0]);
  const filter = useTransform(progress, range, ["blur(8px)", "blur(0px)"]);
  
  return (
    <motion.span style={{ opacity, y, filter }} className="inline-block transition-all duration-75">
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
    <section className="bg-black text-white relative z-20 py-24 md:py-48 overflow-hidden" id="why-brainwhite">
      
      {/* Crazy 21st.dev style Particle Network */}
      <ParticleNetwork />
      
      {/* Bottom glowing gradient mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,100,0,0.08)_0%,transparent_60%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: sticky titles */}
          <div className="lg:col-span-4 flex flex-col gap-24 relative">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400 uppercase tracking-widest mb-6 backdrop-blur-md"
              >
                Why Brainwhite
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-500 mb-6">
                Not another docs tool.<br/>Not another AI chatbot.
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
            </div>
          </div>

          {/* Right Column: massive scroll text */}
          <div className="lg:col-span-8 flex flex-col justify-center" ref={containerRef}>
            <p className="text-2xl sm:text-3xl md:text-5xl font-medium leading-[1.4] tracking-tight text-white drop-shadow-lg">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold drop-shadow-[0_0_15px_rgba(255,165,0,0.5)]">
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
        <div className="mt-40 md:mt-64 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 border-t border-white/10 pt-24 md:pt-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          
          <div className="lg:col-span-4">
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-400 mb-4">Who It's For</h3>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Built for growing engineering teams</h2>
          </div>
          
          <div className="lg:col-span-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-[1.5] text-neutral-400">
              brainwhite is built for technology startups and mid-sized technology companies — typically <span className="text-white font-bold">20 to 200 engineers</span> — that regularly bring on interns, freshers, and junior developers, or move existing developers onto new projects. 
            </p>
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <p className="relative z-10 text-xl sm:text-2xl md:text-3xl font-medium leading-[1.4] text-white">
                If your senior engineers are your onboarding plan today, <span className="text-orange-400">this is for you.</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
