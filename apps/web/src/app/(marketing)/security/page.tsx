"use client";

import React from "react";
import Link from "next/link";
import { Shield, Lock, Cpu, Server, Key, FileCheck, ArrowRight } from "lucide-react";
import { Footer } from "@/components/footer";

const securityPillars = [
  {
    icon: <Lock className="w-6 h-6 text-[#ff4400]" />,
    title: "Zero-Retention AI Inference",
    description: "Customer source code is strictly used for real-time prompt context and ephemeral AST parsing. We enforce zero-retention enterprise API agreements — your proprietary IP is never used to train foundation models.",
  },
  {
    icon: <Server className="w-6 h-6 text-[#ff4400]" />,
    title: "Multi-Tenant Data Partitioning",
    description: "Every codebase AST, vector index, learning progress record, and PR evaluation is hard-scoped with organization_id at the database engine level with strict row-level security.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#ff4400]" />,
    title: "Ephemeral Sandbox Execution",
    description: "Verification tests and automated code evaluations run inside disposable, network-isolated micro-VM runtimes. Environments are completely wiped immediately upon assessment grading.",
  },
  {
    icon: <Key className="w-6 h-6 text-[#ff4400]" />,
    title: "Role-Based Cryptographic Access",
    description: "Senior team leads provision developer credentials with least-privilege scoping. Customer GitHub tokens are encrypted with AES-256-GCM and never exposed to client browsers or logs.",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-[#ff4400]" />,
    title: "Immutable Evidence Ledger",
    description: "Every lesson completion, prerequisite override, and PR rubric score produces a tamper-proof evidence log timestamped with actor identities for SOC 2 Type II audit readiness.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#ff4400]" />,
    title: "Enterprise SSO & SAML 2.0",
    description: "Seamlessly integrate with Okta, Azure Active Directory, Google Workspace, or your corporate identity provider with automated SCIM provisioning and immediate token revocation.",
  },
];

export default function SecurityPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-20">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4400]" />
            Enterprise Security Architecture
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6 text-balance">
            Your proprietary codebase stays strictly yours.
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-mono leading-relaxed">
            BrainWhite is engineered from the ground up for high-compliance engineering teams, government defense contractors, and enterprise software firms.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {securityPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-[#ff4400]/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-medium tracking-tight text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-white/60 text-sm font-mono leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Security Compliance Audit Banner */}
        <div className="border border-white/10 rounded-3xl bg-gradient-to-br from-[#0c0c0c] to-[#141414] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff4400] mb-3">
              // COMPLIANCE & REVIEWS
            </div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
              Need a formal Security Whitepaper or SOC 2 report?
            </h2>
            <p className="text-white/60 text-sm font-mono leading-relaxed">
              Our security engineering team conducts live architecture reviews and provides vendor security questionnaires, penetration testing summaries, and DPA agreements.
            </p>
          </div>
          <Link href="/book-demo">
            <button className="whitespace-nowrap px-6 py-3.5 rounded-full bg-[#ff4400] hover:bg-[#ff5511] text-white text-xs font-mono uppercase tracking-widest font-semibold transition-all shadow-[0_0_20px_rgba(255,68,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2">
              <span>Request Security Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
