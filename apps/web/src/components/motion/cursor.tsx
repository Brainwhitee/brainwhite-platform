"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Volume2 } from "lucide-react";

type CursorState = "default" | "hover" | "explore" | "sound" | "hidden";

export function Cursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const exploreTarget = target.closest('[data-cursor="explore"]');
      const soundTarget = target.closest('[data-cursor="sound"]');
      const hoverTarget = target.closest('a, button, [data-cursor="hover"]');

      if (exploreTarget) {
        setCursorState("explore");
      } else if (soundTarget) {
        setCursorState("sound");
      } else if (hoverTarget) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    const handleMouseLeave = () => {
      setCursorState("hidden");
    };

    const handleMouseEnter = () => {
      setCursorState("default");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  // Hide cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const variants = {
    default: {
      width: 12,
      height: 12,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference" as const,
      border: "0px solid transparent"
    },
    hover: {
      width: 48,
      height: 48,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      mixBlendMode: "normal" as const,
      border: "1px solid rgba(255, 255, 255, 0.5)"
    },
    explore: {
      width: 100,
      height: 40,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "normal" as const,
      border: "0px solid transparent"
    },
    sound: {
      width: 80,
      height: 80,
      x: "-50%",
      y: "-50%",
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "normal" as const,
      border: "0px solid transparent"
    },
    hidden: {
      width: 0,
      height: 0,
      opacity: 0,
      x: "-50%",
      y: "-50%"
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
      }}
      variants={variants}
      animate={cursorState}
      initial="hidden"
      transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.2 }}
    >
      <motion.div 
        className="text-black font-mono text-[10px] uppercase tracking-widest flex items-center gap-1 absolute whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorState === "explore" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        explore <ArrowRight className="w-3 h-3" />
      </motion.div>
      
      <motion.div 
        className="text-black font-mono text-[10px] uppercase tracking-widest flex items-center gap-1 absolute whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorState === "sound" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Volume2 className="w-4 h-4" /> sound
      </motion.div>
    </motion.div>
  );
}
