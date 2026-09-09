"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ease } from "@/lib/constants";

export function Footer() {
  const { scrollYProgress } = useScroll();
  const borderOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <footer
      className="relative border-t border-[var(--border)] py-16 md:py-24"
      role="contentinfo"
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--foreground)]"
        style={{ opacity: borderOpacity }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 md:gap-16">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="font-display font-medium text-[24px] md:text-[32px] tracking-tight text-[var(--foreground)] mb-6 max-w-sm">
              brainwhite
            </p>
            <p className="text-[var(--muted)] leading-relaxed max-w-xs text-base md:text-lg">
              Technical onboarding for staffing & consulting firms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] mb-4" style={{ letterSpacing: "0.2em" }}>
              CONTACT
            </p>
            <a
              href="mailto:founders@brainwhite.com"
              className="block text-[var(--foreground)] hover:text-[var(--muted)] transition-colors duration-200 mb-2"
            >
              founders@brainwhite.com
            </a>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              Built for delivery teams who place engineers across client projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)] mb-4" style={{ letterSpacing: "0.2em" }}>
              LEGAL
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <a
                href="/privacy"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
              >
                Terms
              </a>
            </nav>
            <p className="mt-8 text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} Brainwhite
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]" style={{ letterSpacing: "0.15em" }}>
            Early-stage B2B SaaS. Not a generic platform.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#waitlist"
              className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              Join Waitlist
            </a>
            <a
              href="#product"
              className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              Product
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}