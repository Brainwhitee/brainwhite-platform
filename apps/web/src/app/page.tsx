import { SceneBackground } from "@/components/3d-scene";
import { Navbar } from "@/components/navbar";
import { BlurFade } from "@/components/ui/blur-fade";
import { TheProblem } from "@/components/the-problem";
import { ClientOnboarding } from "@/components/client-onboarding";
import { FresherOnboarding } from "@/components/fresher-onboarding";
import { ThreeViews } from "@/components/three-views";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden selection:bg-orange-500/30">
      <SceneBackground />
      <Navbar />
      
      <div className="relative z-10 w-full flex flex-col">
        {/* 1. HERO */}
        <section className="h-screen flex items-center justify-center px-4 md:px-8">
          <BlurFade delay={0.2} className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400 uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
              BrainWhite V1
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 mb-8 leading-[1.1]">
              Onboarding is an<br/>Engineering Problem.
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 mt-6 max-w-3xl mx-auto font-light leading-relaxed">
              Company codebase + engineering knowledge <br className="hidden md:block" />
              <span className="text-orange-400/80">→</span> BrainWhite understands the project <br className="hidden md:block" />
              <span className="text-orange-400/80">→</span> personalized learning & evidence-based readiness.
            </p>
          </BlurFade>
        </section>

        {/* 2. THE PROBLEM */}
        <div className="bg-black/40 backdrop-blur-[2px] border-t border-white/5">
          <TheProblem />
        </div>

        {/* 3. B2B STAFFING & CONSULTING */}
        <div className="bg-black/60 backdrop-blur-[4px] border-t border-white/5">
          <ClientOnboarding />
        </div>
        
        {/* 4. FRESHER ONBOARDING */}
        <div className="bg-black/70 backdrop-blur-[6px] border-t border-white/5">
          <FresherOnboarding />
        </div>

        {/* 5. THREE VIEWS */}
        <div className="bg-black/80 backdrop-blur-[8px] border-t border-white/5">
          <ThreeViews />
        </div>

        {/* 6. WAITLIST / CTA */}
        <div className="bg-black/90 backdrop-blur-[12px] border-t border-white/10">
          <Waitlist />
        </div>

        <Footer />
      </div>
    </main>
  );
}
