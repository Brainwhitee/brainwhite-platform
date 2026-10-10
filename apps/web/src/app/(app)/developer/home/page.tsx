"use client";
import { GlowingButton } from "@/components/ui/button-glowing";
import { GlassCard } from "@/components/ui/glass-card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-start p-10 md:p-24 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0" />
      
      <div className="relative z-10 max-w-5xl w-full">
        <h1 className="text-5xl font-bold tracking-tighter mb-2">Welcome Back, Developer</h1>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          Your onboarding path is 40% complete. You have 2 new architecture tasks and 1 pending assessment for the Commerce backend.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <GlassCard>
            <h3 className="text-xl font-bold mb-2">Readiness Score</h3>
            <div className="text-5xl font-light text-emerald-400 mb-4">68%</div>
            <p className="text-sm text-white/50 mb-6">Ready for low-risk backend changes. Needs prep for Payments.</p>
            <GlowingButton>View Details</GlowingButton>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-bold mb-2">Next Module</h3>
            <div className="text-2xl font-medium mb-2">Kafka Event Consumption</div>
            <p className="text-sm text-white/50 mb-6">Learn how the Commerce backend processes asynchronous events.</p>
            <GlowingButton>Resume Path</GlowingButton>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-bold mb-2">Ask BrainWhite</h3>
            <p className="text-sm text-white/50 mb-6">Ask grounded questions about the codebase architecture and relationships.</p>
            <GlowingButton>Open Q&A</GlowingButton>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
