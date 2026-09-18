"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { VelocityScroll } from "@/components/ui/velocity-scroll";
import { TheProblem } from "@/components/the-problem";
import { HowItWorks } from "@/components/how-it-works";
import { ThreeViews } from "@/components/three-views";
import { WhyBrainwhite } from "@/components/why-brainwhite";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-20 bg-white w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-[100vh] md:mb-[80vh]">
        
        <PrismaHero />
        
        <div className="bg-[#0a0a0a] text-white py-16 md:py-24 border-y border-white/10 overflow-hidden flex flex-col gap-6">
          <VelocityScroll text="STOP RE-EXPLAINING ARCHITECTURE" defaultVelocity={2} className="text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          <VelocityScroll text="AUTOMATE YOUR ONBOARDING" defaultVelocity={-2} className="text-white/20 italic" />
        </div>

        <div className="relative z-50 bg-white rounded-b-3xl">
          <TheProblem />
          <HowItWorks />
          <ThreeViews />
          <WhyBrainwhite />
          <FaqSection />
        </div>
      </main>
      <Footer />
    </>
  );
}