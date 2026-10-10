"use client";
import { GlowingButton } from "@/components/ui/button-glowing";
import { GlassCard } from "@/components/ui/glass-card";

export default function ManagerOverviewPage() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-start p-10 md:p-24 bg-[#050505] relative overflow-hidden">
      {/* Cool background effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tighter mb-8">Manager Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <GlassCard className="p-6">
            <h3 className="text-sm uppercase tracking-widest text-white/50 mb-2">Team Readiness</h3>
            <div className="text-4xl font-light text-emerald-400">82%</div>
            <div className="mt-2 text-xs text-emerald-400/80">+4% this week</div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-sm uppercase tracking-widest text-white/50 mb-2">Developers</h3>
            <div className="text-4xl font-light text-white">14</div>
            <div className="mt-2 text-xs text-white/50">Across 3 active projects</div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-sm uppercase tracking-widest text-white/50 mb-2">Modules Passed</h3>
            <div className="text-4xl font-light text-white">128</div>
            <div className="mt-2 text-xs text-white/50">All-time completions</div>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-sm uppercase tracking-widest text-white/50 mb-2">AI Resolution Rate</h3>
            <div className="text-4xl font-light text-blue-400">91%</div>
            <div className="mt-2 text-xs text-blue-400/80">Questions answered by BrainWhite</div>
          </GlassCard>
        </div>

        <div className="w-full h-[400px] rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/30 backdrop-blur-md">
          [ Analytics Chart Placeholder ]
        </div>
      </div>
    </div>
  );
}
