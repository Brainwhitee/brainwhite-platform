"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
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
import { LockedSection } from "@/components/locked-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        
        {/* Sticky Scroll Sequence */}
        <div className="relative">
          <div className="sticky top-0 h-screen w-full bg-white z-10 overflow-y-auto pt-16">
            <Hero />
          </div>
          
          <div className="sticky top-0 h-screen w-full bg-white z-20 overflow-y-auto flex flex-col pt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-[var(--border)]">
            <ProductMockup />
          </div>
          
          <div className="sticky top-0 h-screen w-full bg-white z-30 overflow-y-auto flex flex-col items-center justify-center pt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-[var(--border)]">
            <h1 className="text-black font-display text-[12vw] md:text-[10vw] lg:text-[150px] font-black tracking-tighter leading-none select-none">
              BRAINWHITE.
            </h1>
          </div>
          
          <div className="sticky top-0 h-screen w-full bg-[#fafafa] z-40 overflow-y-auto flex flex-col items-center justify-center pt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-[var(--border)]">
            <p className="text-[var(--muted)] font-mono text-sm md:text-base uppercase tracking-[0.3em] mb-6">
              Classified Project
            </p>
            <h2 className="text-black font-display text-5xl md:text-7xl font-medium tracking-tight mb-8">
              Coming Soon.
            </h2>
            <div className="h-px w-24 bg-black/20"></div>
          </div>
        </div>
        
        <div className="relative z-50 bg-white">
        <LockedSection>
          <Metrics />
          <OldWay />
          <FresherOnboarding />
          <ProductOverview />
          <ManagerProgress />
          <Differentiation />
          <CompoundingValue />
        </LockedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}