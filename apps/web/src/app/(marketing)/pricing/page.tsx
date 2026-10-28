"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/footer";

const tiers = [
  {
    name: "Pod Pilot",
    price: "$49",
    period: "/developer /mo",
    description: "For engineering teams launching their first automated onboarding track.",
    features: [
      "Up to 10 active developers",
      "Single repository AST codebase index",
      "Automated DAG prerequisite engine",
      "Interactive lesson & slide walkthroughs",
      "Developer & Team Lead dashboards",
      "Immutable evidence audit ledger",
    ],
    cta: "Start Pod Pilot",
    href: "/book-demo",
    popular: false,
  },
  {
    name: "Engineering Scale",
    price: "$89",
    period: "/developer /mo",
    description: "For fast-scaling engineering organizations and placement consultancies.",
    features: [
      "Up to 50 active developers",
      "Unlimited repositories & monorepo support",
      "Automated PR assessment & rubric grading",
      "Senior engineer credential provisioning",
      "Real-time team lead blocker alerts",
      "Custom DAG dependency configuration",
      "Slack & GitHub webhook notifications",
    ],
    cta: "Book Architecture Demo",
    href: "/book-demo",
    popular: true,
  },
  {
    name: "Enterprise Custom",
    price: "Custom",
    period: "annual commitment",
    description: "For high-compliance enterprise engineering orgs and defense tech.",
    features: [
      "Unlimited developers & cross-org pods",
      "VPC / On-premises private LLM deployment",
      "Tenant-scoped row-level security & SAML SSO",
      "Custom code evaluation rubric design",
      "SOC 2 Type II compliance audit export",
      "Dedicated Solutions Architect & 99.95% SLA",
    ],
    cta: "Contact Enterprise Sales",
    href: "/contact",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-20">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4400]" />
            Predictable B2B Economics
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6 text-balance">
            Cut developer ramp-up from 45 days to 9.
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-mono leading-relaxed">
            Eliminate senior developer burnout. Every dollar invested in BrainWhite recovers hundreds of hours of billable engineering velocity.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
                tier.popular
                  ? "bg-[#0f0f0f] border-2 border-[#ff4400] shadow-[0_0_40px_rgba(255,68,0,0.15)]"
                  : "bg-[#0a0a0a] border border-white/10 hover:border-white/20"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ff4400] text-white text-[11px] font-mono uppercase font-bold tracking-widest px-4 py-1 rounded-full shadow-md">
                  Most Popular for Pods
                </div>
              )}

              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xl font-medium tracking-tight text-white">{tier.name}</h3>
                </div>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-mono font-bold text-white">{tier.price}</span>
                  <span className="text-white/40 font-mono text-xs ml-2">{tier.period}</span>
                </div>
                <p className="text-white/60 text-sm font-mono mb-8 min-h-[40px] leading-relaxed">
                  {tier.description}
                </p>

                <div className="space-y-3 border-t border-white/10 pt-6 mb-8">
                  <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                    Included capabilities:
                  </div>
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-white/80 font-mono">
                      <Check className="w-4 h-4 text-[#ff4400] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href={tier.href}>
                <button
                  className={`w-full py-3.5 px-6 rounded-full font-mono text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-[#ff4400] hover:bg-[#ff5511] text-white shadow-[0_0_20px_rgba(255,68,0,0.3)] hover:scale-[1.02]"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Security & Reliability Trust Bar */}
        <div className="border border-white/10 rounded-2xl bg-white/[0.02] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff4400]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-medium text-white">Enterprise Security & Compliance Guarantee</h4>
              <p className="text-white/50 text-sm font-mono mt-0.5">
                Zero code retention for AI model training. Tenant-isolated schemas with automated audit trail logging.
              </p>
            </div>
          </div>
          <Link href="/security">
            <button className="whitespace-nowrap px-5 py-2.5 rounded-full border border-white/20 hover:border-white/50 text-xs font-mono uppercase tracking-wider text-white transition-colors cursor-pointer">
              Review Security Architecture →
            </button>
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
