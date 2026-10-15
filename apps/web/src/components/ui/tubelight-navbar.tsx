"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function TubelightNavbar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-[5000] transition-all duration-300",
        scrolled ? "top-4" : "top-8",
        className,
      )}
    >
      <div className={cn(
        "flex items-center gap-3 backdrop-blur-xl py-1.5 px-1.5 rounded-full shadow-2xl transition-all duration-500",
        scrolled ? "bg-black/90 border border-white/10" : "bg-white/5 border border-white/10"
      )}>
        
        {/* Logo Area */}
        <div className="pl-4 pr-4 hidden md:flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/Brainwhitelogo-transparent.png"
              alt="BrainWhite"
              width={130}
              height={32}
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Links Area */}
        <div className="flex items-center gap-1">
          {items.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-medium px-5 py-2.5 rounded-full transition-colors",
                  "text-white/60 hover:text-white/90",
                  isActive && "bg-white/5 text-white",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  {item.icon ? item.icon : item.name}
                </span>
                
                {/* Tubelight effect for active tab */}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full h-full -z-10 rounded-full"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#3b82f6] rounded-t-full">
                      <div className="absolute w-12 h-6 bg-[#3b82f6]/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-[#3b82f6]/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-[#3b82f6]/40 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
        
        {/* CTA Area */}
        <div className="pl-2 pr-1.5 hidden md:block">
           <Link href="/early-access">
              <button className="bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white/90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] whitespace-nowrap">
                Request Early Access
              </button>
           </Link>
        </div>
      </div>
    </div>
  );
}
