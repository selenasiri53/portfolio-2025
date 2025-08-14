"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // slightly larger center offset
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const hoverables = document.querySelectorAll<HTMLElement>(
      "button, a, [data-cursor]"
    );
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-emerald-900 mix-blend-difference pointer-events-none z-[9999]"
      style={{ translateX: x, translateY: y }}
      animate={{ scale: hovered ? 1.4 : 1 }} // subtle enlargement
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
