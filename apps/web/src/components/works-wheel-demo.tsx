"use client";

import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";

// Using DiceBear Shapes API to generate dynamic, abstract SVGs
const SVG_ART = (seed: string) => `https://api.dicebear.com/9.x/shapes/svg?seed=${seed}&backgroundColor=050505&shape1Color=ffffff&shape2Color=b6e3f4&shape3Color=c0aede`;

const WORKS: WorksWheelItem[] = [
  {
    title: "AI Readiness",
    image: SVG_ART("readiness"),
    href: "#ai-readiness",
  },
  {
    title: "Onboarding Flows",
    image: SVG_ART("onboarding"),
    href: "#onboarding-flows",
  },
  {
    title: "Code Context",
    image: SVG_ART("context"),
    href: "#code-context",
  },
  {
    title: "Team Metrics",
    image: SVG_ART("metrics"),
    href: "#team-metrics",
  },
  {
    title: "Developer Health",
    image: SVG_ART("health"),
    href: "#developer-health",
  },
  { 
    title: "Security Audits", 
    image: SVG_ART("security"), 
    href: "#security-audits" 
  },
  {
    title: "PR Analysis",
    image: SVG_ART("analysis"),
    href: "#pr-analysis",
  },
  {
    title: "Golden Evals",
    image: SVG_ART("evals"),
    href: "#golden-evals",
  },
  {
    title: "Documentation",
    image: SVG_ART("docs"),
    href: "#documentation",
  },
];

export default function WorksWheelDemo() {
  return (
    <div className="bg-[#050505] text-white w-full h-[80vh] md:h-screen relative flex items-center justify-center border-y border-white/10">
      <div className="absolute top-10 left-10 z-10 hidden md:block">
        <p className="text-sm font-mono tracking-widest uppercase opacity-60">
          Interactive Capabilities Wheel
        </p>
      </div>
      {/* WorksWheel automatically calculates its dimensions based on this parent wrapper */}
      <WorksWheel items={WORKS} label="BrainWhite" action="Explore" />
    </div>
  );
}
