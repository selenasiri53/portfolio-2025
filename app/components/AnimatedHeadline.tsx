"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = ["Software Engineer", "UX Designer", "Studio Artist"];
// list here

export function AnimatedHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-4xl md:text-5xl font-semibold text-gray-600 font-sans leading-tight">
      <div>Hi, I'm Selena, a</div>
      <div className="h-[1.2em] overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.span
            key={titles[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute text-rose-300"
          >
            {titles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
      <div>based in NYC.</div>
    </div>
  );
}
