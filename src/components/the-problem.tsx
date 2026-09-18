"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll";
import { FileText, MessagesSquare, Clock } from "lucide-react";

const problemContent = [
  {
    title: "Scattered documentation",
    description:
      "Spread across repos, wikis, tickets, and chat, with no single place to start. Most of it assumes the reader already knows what's going on.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 p-10 relative overflow-hidden">
        <div className="absolute top-10 left-10 p-4 bg-white shadow-xl rounded-xl border border-red-100 rotate-[-6deg] opacity-80">
          <FileText className="w-8 h-8 text-red-400 mb-2" />
          <div className="h-2 w-20 bg-neutral-200 rounded-full mb-1"></div>
          <div className="h-2 w-16 bg-neutral-200 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-10 p-4 bg-white shadow-xl rounded-xl border border-orange-100 rotate-[8deg] opacity-70">
          <FileText className="w-8 h-8 text-orange-400 mb-2" />
          <div className="h-2 w-14 bg-neutral-200 rounded-full mb-1"></div>
          <div className="h-2 w-24 bg-neutral-200 rounded-full"></div>
        </div>
        <div className="z-10 p-6 bg-white shadow-2xl rounded-2xl border border-red-200 w-full max-w-xs">
          <h4 className="font-semibold text-lg mb-2">Wiki / Architecture</h4>
          <p className="text-xs text-neutral-500 mb-4">(Last updated 2 years ago)</p>
          <div className="space-y-2">
            <div className="h-2 w-full bg-neutral-100 rounded-full"></div>
            <div className="h-2 w-full bg-neutral-100 rounded-full"></div>
            <div className="h-2 w-3/4 bg-neutral-100 rounded-full"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Repetitive mentor time",
    description:
      "Senior developers re-explain the same architecture to every new joiner. So new developers ask, and your senior engineers answer. Then the next hire joins, and it happens again.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-10">
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <div className="self-end bg-white p-4 rounded-2xl rounded-tr-sm shadow-md border border-blue-100 text-sm w-3/4">
            Where do I find the auth flow?
          </div>
          <div className="self-start bg-indigo-600 text-white p-4 rounded-2xl rounded-tl-sm shadow-md text-sm w-3/4">
            Ah, it's split between the auth-service repo and the legacy API. Let me hop on a call.
          </div>
          <div className="self-end bg-white p-4 rounded-2xl rounded-tr-sm shadow-md border border-blue-100 text-sm w-3/4 mt-4">
            How does the DB connection work?
          </div>
          <div className="self-start bg-indigo-600 text-white p-4 rounded-2xl rounded-tl-sm shadow-md text-sm w-3/4">
            I explained this to Sarah last week, let me forward you the thread...
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Slow time to first commit",
    description:
      "New hires need weeks to go from “I have access” to “I can actually contribute.” Onboarding shouldn't run on your best engineer's patience.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 p-10">
        <div className="flex items-end gap-2 h-48 w-full max-w-xs">
          <div className="w-1/4 bg-emerald-100 h-10 rounded-t-md relative group">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-emerald-700">Wk 1</span>
          </div>
          <div className="w-1/4 bg-emerald-200 h-16 rounded-t-md relative group">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-emerald-700">Wk 2</span>
          </div>
          <div className="w-1/4 bg-emerald-300 h-24 rounded-t-md relative group">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-emerald-700">Wk 3</span>
          </div>
          <div className="w-1/4 bg-emerald-500 h-48 rounded-t-md relative shadow-lg flex items-center justify-center">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-700 whitespace-nowrap">First Commit!</span>
            <Clock className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    ),
  },
];

export function TheProblem() {
  return (
    <section className="bg-white py-24 md:py-32 w-full relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-16 md:mb-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black mb-6" style={{ lineHeight: 1.15 }}>
            Onboarding shouldn't run on your best engineer's patience
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-sans leading-relaxed">
            Every developer who joins your team — or moves onto a new project — has to learn two things at once: how the company works, and how this specific codebase works.
          </p>
        </div>
      </div>
      
      <StickyScroll content={problemContent} />
    </section>
  );
}
