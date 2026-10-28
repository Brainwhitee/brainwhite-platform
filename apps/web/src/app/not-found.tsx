"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 selection:bg-[#ff4400]/30 font-sans">
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Monospace Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff4400]" />
          404 / Route Not Located
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-mono font-bold tracking-tight text-white">
          Page Does Not Exist
        </h1>

        <p className="text-sm font-mono text-white/60 leading-relaxed">
          The requested path is not mapped to any public route, developer module, or administrative console.
        </p>

        {/* Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <button className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all cursor-pointer flex items-center justify-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Landing Page</span>
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider border border-white/15 transition-all cursor-pointer flex items-center justify-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#ff4400]" />
              <span>Go to Workspace</span>
            </button>
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10 text-[10px] font-mono text-white/30 uppercase tracking-widest">
          BrainWhite Developer Readiness Platform
        </div>
      </div>
    </div>
  );
}
