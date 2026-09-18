"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { PrismaHero } from "@/components/ui/prisma-hero";
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