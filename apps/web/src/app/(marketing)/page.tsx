import React from "react";
import Link from "next/link";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { StickyScroll } from "@/components/ui/sticky-scroll";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { VelocityScroll } from "@/components/ui/velocity-scroll";
import { SparklesCore } from "@/components/ui/sparkles";
import { Terminal, Code2, BrainCircuit, Rocket, ShieldCheck } from "lucide-react";

export default function MarketingHome() {
  // Content for the "How it Works" section
  const howItWorksContent = [
    {
      title: "1. Codebase & Docs Ingestion",
      description: "BrainWhite connects to your repositories and documentation. It securely reads the source code, ADRs, and issues without exposing your raw IP to public models.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-neutral-900 to-black p-8 relative overflow-hidden">
          <Code2 className="w-32 h-32 text-blue-500/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="z-10 text-center font-mono text-sm text-green-400">
            <p>Scanning D:\BrainWhite\brainwhite-platform...</p>
            <p className="mt-2 text-neutral-400">Found 4,231 files.</p>
            <p className="mt-2 text-neutral-400">Extracting AST and context...</p>
            <p className="mt-2 text-blue-400">Indexed successfully.</p>
          </div>
        </div>
      ),
    },
    {
      title: "2. Knowledge Engine",
      description: "Our engine builds an intelligent graph of your project's architecture, patterns, and decisions. It understands WHY the code is written the way it is.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]">
          <BrainCircuit className="w-24 h-24 text-purple-500 animate-pulse" />
        </div>
      ),
    },
    {
      title: "3. Personalized Learning Path",
      description: "Based on the developer's profile and the project's knowledge graph, BrainWhite generates a custom, interactive curriculum to close specific skill gaps.",
      content: (
        <div className="h-full w-full flex items-center justify-center bg-black">
          <div className="w-full h-full relative">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 flex items-center justify-center text-xl font-medium tracking-tight">
              A Path Unique to You
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "4. Readiness Signal",
      description: "Empirical assessments validate understanding. Managers get a clear, confident signal when a developer is ready to ship production code.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-tr from-green-900/20 to-black relative">
          <ShieldCheck className="w-32 h-32 text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white w-full overflow-hidden selection:bg-blue-500/30 selection:text-white">
      
      {/* Hero Section */}
      <PrismaHero />

      {/* Infinite Scroll Marquee */}
      <div className="py-20 bg-black border-y border-white/5">
        <VelocityScroll 
          text="Correctness • Security • Testability • Maintainability • Velocity •" 
          defaultVelocity={2} 
          className="text-white/20"
        />
      </div>

      {/* How it Works Section */}
      <section id="how-it-works" className="relative pt-24 pb-12 bg-black">
        <div className="px-6 md:px-10 max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-white text-center">
            How BrainWhite Works
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto text-center">
            We turn your static codebase into a dynamic, personalized onboarding experience.
          </p>
        </div>
        
        <StickyScroll content={howItWorksContent} />
      </section>

      {/* Call to Action Section */}
      <section className="relative h-[80vh] w-full">
        <AuroraBackground className="h-full w-full">
          <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-6">
              Ready to accelerate <br className="hidden md:block" /> your engineering team?
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-10">
              Stop wasting weeks on onboarding. Get your new hires shipping production-grade code with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admin/organization">
                <button className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  Start Building Now
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-black/20 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                  Book a Pilot
                </button>
              </Link>
            </div>
          </div>
        </AuroraBackground>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-white/10 bg-black py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold tracking-tighter text-2xl text-white">brainwhite.</div>
          <div className="flex gap-6 text-sm text-neutral-400">
            <Link href="/security" className="hover:text-white transition">Security</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
