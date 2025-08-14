"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiJavascript,
  SiTypescript,
//   SiVueDotJs,
  SiKubernetes,
  SiDocker,
  SiGraphql,
  SiPrisma,
  SiPostgresql,
  SiDbeaver,
//   SiAmazonaws,
} from "react-icons/si";

const languages = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
//   { name: "Vue", icon: <SiVueDotJs /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "DBeaver", icon: <SiDbeaver /> },
//   { name: "AWS", icon: <SiAmazonaws /> },
];

export const LanguageSlider = () => {
  return (
    <div className="overflow-hidden w-full py-8 bg-gray-100">
      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...languages, ...languages].map((lang, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-gray-400 cursor-pointer transition-colors duration-300 hover:text-inherit hover:filter-none filter grayscale"
          >
            <div className="text-4xl mb-2">{lang.icon}</div>
            <span className="text-sm font-semibold">{lang.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
