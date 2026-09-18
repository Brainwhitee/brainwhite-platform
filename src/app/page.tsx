"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { TheProblem } from "@/components/the-problem";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white w-full">
        
        <PrismaHero />
        
        <div className="relative z-50 bg-white">
          <TheProblem />
        </div>
      </main>
      <Footer />
    </>
  );
}