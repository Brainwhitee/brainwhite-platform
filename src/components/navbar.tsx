"use client";

import * as React from "react";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";

const navLinks = [
  { name: "Product", url: "/product" },
  { name: "Solutions", url: "/solutions" },
  { name: "Pricing", url: "/pricing" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export function Navbar() {
  return (
    <div className="relative w-full">
      <TubelightNavbar items={navLinks} />
    </div>
  );
}