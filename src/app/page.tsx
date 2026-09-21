"use client";

import { Navbar } from "@/components/navbar";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { VelocityScroll } from "@/components/ui/velocity-scroll";
import { TheProblem } from "@/components/the-problem";
import { HowItWorks } from "@/components/how-it-works";
import { ThreeViews } from "@/components/three-views";
import { WhyBrainwhite } from "@/components/why-brainwhite";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { CraftedPaintingBg } from "@/components/ui/crafted-painting-bg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-20 w-full mb-[100vh] md:mb-[80vh]">
        <CraftedPaintingBg className="absolute inset-0 -z-10" opacity={1} />

        {/* HERO stays exactly as it was */}
        <PrismaHero />

        <div className="relative z-10 flex flex-col">
          <div className="painted-section-dark text-white py-16 md:py-24 border-y border-white/10 overflow-hidden flex flex-col gap-6">
            <VelocityScroll text="STOP RE-EXPLAINING ARCHITECTURE" defaultVelocity={2} className="text-[#F3E9D6]/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            <VelocityScroll text="AUTOMATE YOUR ONBOARDING" defaultVelocity={-2} className="text-[#F3E9D6]/30 italic" />
          </div>

          <div className="relative z-10 painted-paper rounded-b-3xl">
            <TheProblem />
            <HowItWorks />
            <ThreeViews />
            <WhyBrainwhite />
            <FaqSection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}