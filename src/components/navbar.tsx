"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ease } from "@/lib/constants";

const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#why-brainwhite", label: "Why Brainwhite" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] z-50 bg-[var(--border)]"
        style={{ transformOrigin: "0% 50%", scaleX: borderOpacity }}
      />
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300 ease-out"
        )}
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: `1px solid rgba(0, 0, 0, ${borderOpacity.get() * 0.08})`,
        }}
      >
        <nav
          className="mx-auto max-w-7xl px-6 md:px-8"
          aria-label="Main navigation"
        >
          <div className="flex h-18 items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="font-display font-medium text-xl tracking-tight text-[var(--foreground)] hover:opacity-80 transition-opacity"
                aria-label="Brainwhite home"
              >
                brainwhite
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-[var(--foreground)] after:transition-width hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/early-access"
                className="hidden sm:block btn-primary"
              >
                <Button size="sm" variant="primary">
                  Join Waitlist
                </Button>
              </Link>
              <button
                className="md:hidden p-2 text-[var(--foreground)] hover:bg-[var(--border)] rounded transition-colors"
                aria-label="Open menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  );
}