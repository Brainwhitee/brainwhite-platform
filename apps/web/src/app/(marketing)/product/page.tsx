"use client";

import { ProductOverview } from "@/components/product-overview";
import { Differentiation } from "@/components/differentiation";
import { WhyBrainwhite } from "@/components/why-brainwhite";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function ProductPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-20 md:pt-28">
      <ProductOverview />
      <Differentiation />
      <WhyBrainwhite />
      <FaqSection />
      <Footer />
    </main>
  );
}
