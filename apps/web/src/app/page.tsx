import { Preloader } from "@/components/experience/preloader";
import { Hero } from "@/components/experience/hero";
import { Manifesto } from "@/components/experience/manifesto";
import { ProductReveal } from "@/components/experience/product-reveal";
import { FinalCTA } from "@/components/experience/final-cta";
import { ExperienceFooter } from "@/components/experience/footer";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen text-white selection:bg-accent/30">
      <Preloader />
      
      {/* Experience Architecture */}
      <Hero />
      <Manifesto />
      <ProductReveal />
      <FinalCTA />
      <ExperienceFooter />
      
    </main>
  );
}
