"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Clock, GitBranch, Mail } from "lucide-react";
import CloudWatchForm from "@/components/ui/cloud-watch-form";

export default function BookDemoPage() {
  return (
    <div className="relative min-h-screen bg-[#fafaf9] text-neutral-900 overflow-hidden flex flex-col justify-between selection:bg-neutral-200 selection:text-neutral-900">
      
      {/* ================= Minimalist Architectural Light Background ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft studio ambient light glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[450px] bg-amber-50/40 rounded-full blur-3xl" />
        {/* Crisp subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fafaf9]/50 to-[#fafaf9]" />
      </div>

      {/* ================= Minimalist Light Header ================= */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <Image
            src="/Brainwhitelogo-dark.png"
            alt="BrainWhite"
            width={160}
            height={40}
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-600 hover:text-neutral-900 transition-colors bg-white hover:bg-neutral-100 px-4 py-2 rounded-full border border-neutral-200/90 shadow-xs"
          >
            <ArrowLeft className="w-3 h-3" />
            <span className="hidden sm:inline">Back to Overview</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      {/* ================= Main Content Container ================= */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6 md:py-12">
        
        {/* Intro Badge & Title with Chalk Accent */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2.5">
          
          {/* Handwritten chalk note at the very top */}
          <div className="font-chalk text-2xl sm:text-3xl text-neutral-600 font-normal tracking-wide">
            ~ engineering onboarding on your terms ✎ ~
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-[11px] font-mono uppercase tracking-[0.2em] shadow-xs">
            <span>// PRIVATE DESIGN PARTNER INTAKE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.95] text-neutral-900 pt-1">
            Book a Technical Demo
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed pt-1">
            Connect directly with our founding engineers. We'll examine your architecture requirements and demonstrate personalized codebase learning paths in real time.
          </p>
        </div>

        {/* The Interactive Light Chalk-Styled CloudWatchForm */}
        <CloudWatchForm />

        {/* ================= Minimalist Trust & Value Pillars (Light Theme) ================= */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
          <div className="p-4 rounded-xl border border-neutral-200/90 bg-white/80 backdrop-blur-sm shadow-xs flex flex-col justify-between">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shrink-0">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Tenant Isolation</h4>
                <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">
                  Customer source code is never used for training and carries tenant-scoped isolation.
                </p>
              </div>
            </div>
            <div className="font-chalk text-base text-neutral-600 pt-3 border-t border-neutral-100 mt-3">
              ⤷ strict NDA & enterprise security
            </div>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200/90 bg-white/80 backdrop-blur-sm shadow-xs flex flex-col justify-between">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600 shrink-0">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">24-Hour Contact SLA</h4>
                <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">
                  Every request reaches <span className="text-neutral-900 font-medium">partnerbrainwhite@gmail.com</span> with rapid founder follow-up.
                </p>
              </div>
            </div>
            <div className="font-chalk text-base text-neutral-600 pt-3 border-t border-neutral-100 mt-3">
              ⤷ direct line to founders, zero middle-men
            </div>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200/90 bg-white/80 backdrop-blur-sm shadow-xs flex flex-col justify-between">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shrink-0">
                <GitBranch className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Custom Sandbox</h4>
                <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">
                  Hands-on demonstration using your actual stack conventions, monorepo, and services.
                </p>
              </div>
            </div>
            <div className="font-chalk text-base text-neutral-600 pt-3 border-t border-neutral-100 mt-3">
              ⤷ tailored to your repo architecture ✎
            </div>
          </div>
        </div>

      </main>

      {/* ================= Minimalist Light Footer ================= */}
      <footer className="relative z-20 w-full border-t border-neutral-200/80 py-6 px-6 text-center text-xs font-mono uppercase tracking-widest text-neutral-500 bg-white/40 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} BrainWhite Inc. · All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-neutral-400" />
            <span>Direct Partner Inquiries: </span>
            <a href="mailto:partnerbrainwhite@gmail.com" className="text-neutral-700 hover:text-black underline font-mono">
              partnerbrainwhite@gmail.com
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
