"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { Metrics } from "@/components/metrics";
import { OldWay } from "@/components/old-way";
import { FresherOnboarding } from "@/components/fresher-onboarding";
import { ProductOverview } from "@/components/product-overview";
import { ProductMockup } from "@/components/product-mockup";
import { ManagerProgress } from "@/components/manager-progress";
import { Differentiation } from "@/components/differentiation";
import { CompoundingValue } from "@/components/compounding-value";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white w-full">
        
        {/* Sticky Scroll Sequence */}
        <div className="relative pb-[100vh]">
          {/* Layer 1: Hero */}
          <div className="sticky top-0 h-screen w-full bg-black z-10 overflow-y-auto">
            <PrismaHero />
          </div>
          
          {/* Pause Buffer */}
          <div className="h-[100vh] w-full pointer-events-none" />

          {/* Layer 2: Product Mockup */}
          <div className="sticky top-0 h-screen w-full bg-white z-20 overflow-y-auto flex flex-col pt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-[var(--border)]">
            <ProductMockup />
          </div>
          
          {/* Pause Buffer */}
          <div className="h-[100vh] w-full pointer-events-none" />

          {/* Layer 3: Giant Logo */}
          <div className="sticky top-0 h-screen w-full bg-white z-30 overflow-y-auto flex flex-col items-center justify-center pt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-[var(--border)]">
            <h1 className="text-black font-display text-[12vw] md:text-[10vw] lg:text-[150px] font-black tracking-tighter leading-none select-none">
              BRAINWHITE.
            </h1>
          </div>
          
          {/* Pause Buffer */}
          <div className="h-[50vh] w-full pointer-events-none" />

          {/* Layer 4: Coming Soon */}
          <div className="sticky top-0 h-screen w-full bg-[#fafafa] z-40 overflow-y-auto flex flex-col items-center justify-center pt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-[var(--border)]">
            <p className="text-[var(--muted)] font-mono text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-center">
              Classified Project
            </p>
            <h2 className="text-black font-display text-5xl md:text-7xl font-medium tracking-tight mb-8 text-center px-4">
              Coming Soon.
            </h2>
            <div className="h-px w-24 bg-black/20"></div>
          </div>
        </div>
        
        <div className="relative z-50 bg-white">
          <Metrics />
          <OldWay />
          <FresherOnboarding />
          <ProductOverview />
          <ManagerProgress />
          <Differentiation />
          <CompoundingValue />
        </div>
      </main>
      <Footer />
    </>
  );
}