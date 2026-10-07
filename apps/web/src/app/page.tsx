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

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="relative z-20 w-full mb-[100vh] md:mb-[80vh]">
        {/* Deep Tech Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_100%)]" />

        {/* HERO */}
        <PrismaHero />

        <div className="relative z-10 flex flex-col bg-black">
          <div className="py-16 md:py-24 border-y border-white/10 overflow-hidden flex flex-col gap-6 bg-black relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <VelocityScroll text="STOP RE-EXPLAINING ARCHITECTURE" defaultVelocity={2} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] font-mono tracking-widest relative z-10" />
            <VelocityScroll text="AUTOMATE YOUR ONBOARDING" defaultVelocity={-2} className="text-blue-500/50 italic font-mono tracking-widest relative z-10" />
          </div>

          <div className="relative z-10 bg-black rounded-b-3xl">
            <TheProblem />
            <HowItWorks />
            <ThreeViews />
            <WhyBrainwhite />
            <FaqSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

github -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