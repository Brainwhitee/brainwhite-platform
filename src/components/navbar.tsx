"use client";

import * as React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const navLinks = [
  { name: "Product", link: "#product" },
  { name: "Why Brainwhite", link: "#why-brainwhite" },
];

export function Navbar() {
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navLinks} />
    </div>
  );
}