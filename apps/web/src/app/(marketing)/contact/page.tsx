"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "20-50",
    stack: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-20">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4400]" />
            Direct Engineering Access
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6 text-balance">
            Talk with the team building BrainWhite.
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-mono leading-relaxed">
            Have a custom monorepo or specific security compliance requirements? Connect directly with our founding engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-medium tracking-tight text-white">Direct Communication</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:contact@brainwhite.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ff4400]/10 border border-[#ff4400]/20 flex items-center justify-center text-[#ff4400]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-white/40 uppercase">Email Us Directly</div>
                    <div className="text-sm font-mono text-white group-hover:text-[#ff4400] transition-colors">contact@brainwhite.com</div>
                  </div>
                </a>

                <Link
                  href="/book-demo"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-white/40 uppercase">Architecture Demo</div>
                    <div className="text-sm font-mono text-white group-hover:text-[#ff4400] transition-colors">Schedule a 30-min walkthrough →</div>
                  </div>
                </Link>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-2">Office Headquarters</div>
                <p className="text-sm font-mono text-white/70 leading-relaxed">
                  BrainWhite Platform Inc.<br />
                  Engineering Systems & Architecture Division<br />
                  San Francisco, CA & Remote Global
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#ff4400]/15 border border-[#ff4400]/30 text-[#ff4400] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-white">Inquiry Received</h3>
                  <p className="text-white/60 font-mono text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A senior systems architect from BrainWhite will review your stack requirements and reply within 12 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-mono text-white/40 hover:text-white uppercase tracking-wider underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#ff4400] mb-2">
                    // ARCHITECTURAL CONSULTATION INQUIRY
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full bg-white/5 border border-white/10 focus:border-[#ff4400] rounded-xl px-4 py-3 text-white placeholder-white/20 font-mono text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-white/5 border border-white/10 focus:border-[#ff4400] rounded-xl px-4 py-3 text-white placeholder-white/20 font-mono text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Engineering Corp"
                        className="w-full bg-white/5 border border-white/10 focus:border-[#ff4400] rounded-xl px-4 py-3 text-white placeholder-white/20 font-mono text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                        Engineering Pod Size
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full bg-[#141414] border border-white/10 focus:border-[#ff4400] rounded-xl px-4 py-3 text-white font-mono text-sm outline-none transition-colors"
                      >
                        <option value="5-20">5 – 20 engineers</option>
                        <option value="20-50">20 – 50 engineers</option>
                        <option value="50-200">50 – 200 engineers</option>
                        <option value="200+">200+ engineers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                      Primary Tech Stack / Repositories
                    </label>
                    <input
                      type="text"
                      value={formData.stack}
                      onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                      placeholder="e.g. Next.js, FastAPI, PostgreSQL, Turborepo"
                      className="w-full bg-white/5 border border-white/10 focus:border-[#ff4400] rounded-xl px-4 py-3 text-white placeholder-white/20 font-mono text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                      Current Onboarding Bottleneck / Note
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current developer ramp-up timeline or challenges..."
                      className="w-full bg-white/5 border border-white/10 focus:border-[#ff4400] rounded-xl px-4 py-3 text-white placeholder-white/20 font-mono text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#ff4400] hover:bg-[#ff5511] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-[0_0_20px_rgba(255,68,0,0.3)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Architecture Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </main>
  );
}
