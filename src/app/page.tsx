"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { Metrics } from "@/components/metrics";
import { OldWay } from "@/components/old-way";
import { FresherOnboarding } from "@/components/fresher-onboarding";
import { ProductOverview } from "@/components/product-overview";
import { ManagerProgress } from "@/components/manager-progress";
import { Differentiation } from "@/components/differentiation";
import { CompoundingValue } from "@/components/compounding-value";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white w-full">
        
        <PrismaHero />
        
        <div className="relative z-50 bg-white">
          <Metrics />
          <OldWay />
          <FresherOnboarding />
          <ProductOverview />
          <ManagerProgress />
          <Differentiation />
          <CompoundingValue />
        </div>
      </main>
      <Footer />
    </>
  );
}