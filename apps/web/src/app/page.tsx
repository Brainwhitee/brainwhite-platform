import { Preloader } from "@/components/experience/preloader";
import { Hero } from "@/components/experience/hero";
import { Menu } from "@/components/experience/Menu";
import { Showreel } from "@/components/experience/showreel";
import { Works } from "@/components/experience/works";
import { StudioVideo } from "@/components/experience/studio-video";
import { StudioInfo } from "@/components/experience/studio-info";
import { ExperienceFooter } from "@/components/experience/footer";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black">
      <Preloader />
      <Menu />
      
      {/* Noth.in style clone architecture */}
      <Hero />
      <Showreel />
      <Works />
      <StudioVideo />
      <StudioInfo />
      <ExperienceFooter />
      
    </main>
  );
}
