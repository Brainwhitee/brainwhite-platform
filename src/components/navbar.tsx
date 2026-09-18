"use client";

import * as React from "react";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";

const navLinks = [
  { name: "Product", url: "#product" },
  { name: "Collective", url: "#collective" },
  { name: "Why Brainwhite", url: "#why-brainwhite" },
];

export function Navbar() {
  return (
    <div className="relative w-full">
      <TubelightNavbar items={navLinks} />
    </div>
  );
}