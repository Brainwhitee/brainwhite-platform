"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Clock, GitBranch, Sparkles, Mail } from "lucide-react";
import ScanlineBloom from "@/components/ui/scanline-bloom";
import CloudWatchForm from "@/components/ui/cloud-watch-form";

export default function BookDemoPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col justify-between selection:bg-red-500/30 selection:text-white">
      
      {/* ================= Aesthetic Background Layer (Hero Red Flower Scanline Bloom) ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-35">
        <ScanlineBloom 
          ink="#ff3333" 
          highlight="#ff8888" 
          background="#000000" 
          interactive={false}
          className="w-full h-full"
        />
        {/* Soft Dark Vignette Overlay so the form has pristine contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/70 to-[#050505]" />
      </div>

      {/* ================= Header Navigation ================= */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <Image
            src="/Brainwhitelogo-transparent.png"
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
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to Overview</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      {/* ================= Main Content Container ================= */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 md:py-16">
        
        {/* Intro Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Private Design Partner Intake</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-white">
            Transform How Your Engineers Onboard
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Connect directly with our founding engineers. We will analyze your architecture requirements and demonstrate personalized codebase learning paths in real time.
          </p>
        </div>

        {/* The Interactive Form Component */}
        <CloudWatchForm />

        {/* ================= Trust & Value Pillars ================= */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Tenant Isolation</h4>
              <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                Customer source code is never used for training and carries strict organization scoping.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">24-Hour Contact SLA</h4>
              <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                Every request reaches <span className="text-white">partnerbrainwhite@gmail.com</span> with rapid founder follow-up.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <GitBranch className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Sandbox Repo Walkthrough</h4>
              <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                Hands-on demonstration using your actual stack conventions and microservices.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* ================= Footer ================= */}
      <footer className="relative z-20 w-full border-t border-white/10 py-6 px-6 text-center text-xs font-mono uppercase tracking-widest text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} BrainWhite Inc. · All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-neutral-400" />
            <span>Direct Partner Inquiries: </span>
            <a href="mailto:partnerbrainwhite@gmail.com" className="text-neutral-300 hover:text-white underline">
              partnerbrainwhite@gmail.com
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
