"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiKubernetes,
  SiDocker,
  SiGraphql,
  SiPrisma,
  SiPostgresql,
  SiDbeaver,
  SiPython,
  SiDjango,
} from "react-icons/si";

const languages = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "DBeaver", icon: <SiDbeaver /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Django", icon: <SiDjango /> },
];

export const LanguageSlider = () => {
  return (
    <div className="overflow-hidden w-full py-8 bg-black">
      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...languages, ...languages].map((lang, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-gray-400 cursor-pointer transition-colors duration-300 hover:text-blue-300 hover:filter-none filter grayscale"
          >
            <div className="text-4xl mb-2">{lang.icon}</div>
            <span className="text-sm font-semibold">{lang.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
